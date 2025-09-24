import { useEffect, useMemo, useState } from 'react';
import { api, TrafficRow } from '../lib/api';

export default function Intersections() {
  const [rows, setRows] = useState<TrafficRow[]>([]);
  const [signalId, setSignalId] = useState<string>('SIGNAL_001');
  const [status, setStatus] = useState<{signal_id:string;status:string;last_change:string} | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    api.getHistory(120).then(setRows).catch(e => setErr(String(e)));
  }, []);

  useEffect(() => {
    if (!signalId) return;
    api.getSignalStatus(signalId).then(setStatus).catch(e => setErr(String(e)));
    const t = setInterval(() => {
      api.getSignalStatus(signalId).then(setStatus).catch(() => {});
    }, 5000);
    return () => clearInterval(t);
  }, [signalId]);

  const signals = useMemo(() => Array.from(new Set(rows.map(r => r.signal_id))), [rows]);
  const filtered = useMemo(() => rows.filter(r => r.signal_id === signalId), [rows, signalId]);

  return (
    <div className="p-6">
      <h2 className="text-xl mb-4">Intersections</h2>
      {err && <p className="text-red-500">Error: {err}</p>}
      <div className="flex items-center gap-3 mb-4">
        <label className="text-sm">Signal</label>
        <select className="border rounded px-2 py-1" value={signalId} onChange={e=>setSignalId(e.target.value)}>
          {signals.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        {status && (
          <span className="text-sm px-2 py-1 rounded bg-green-100">
            {status.status} • Last change: {status.last_change}
          </span>
        )}
      </div>

      <div className="overflow-auto border rounded">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <Th>cycle</Th><Th>approach</Th><Th>EVU_smooth</Th><Th>queue_len</Th>
              <Th>W_norm</Th><Th>G_allocated</Th><Th>order</Th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((r, i) => (
              <tr key={i} className="border-t">
                <Td>{r.cycle}</Td><Td>{r.approach}</Td>
                <Td>{r.EVU_smooth.toFixed(2)}</Td><Td>{r.queue_len.toFixed(2)}</Td>
                <Td>{r.W_norm.toFixed(2)}</Td><Td>{r.G_allocated.toFixed(2)}</Td>
                <Td>{`${r.order_1}→${r.order_2}→${r.order_3}→${r.order_4}`}</Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return <th className="text-left px-3 py-2 font-medium">{children}</th>;
}
function Td({ children }: { children: React.ReactNode }) {
  return <td className="px-3 py-2">{children}</td>;
}
