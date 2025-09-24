import { useEffect, useState } from 'react';
import { api, TrafficRow } from '../lib/api';

export default function TrafficReport() {
  const [rows, setRows] = useState<TrafficRow[]>([]);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    api.getHistory(100).then(setRows).catch(e => setErr(String(e)));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl mb-4">Traffic Report</h2>
      {err && <p className="text-red-500">Error: {err}</p>}
      <div className="overflow-auto border rounded">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <Th>timestamp</Th><Th>signal_id</Th><Th>cycle</Th><Th>approach</Th>
              <Th>EVU_smooth</Th><Th>queue_len</Th><Th>W_norm</Th><Th>G_allocated</Th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-t">
                <Td>{r.timestamp}</Td><Td>{r.signal_id}</Td><Td>{r.cycle}</Td><Td>{r.approach}</Td>
                <Td>{r.EVU_smooth.toFixed(2)}</Td><Td>{r.queue_len.toFixed(2)}</Td>
                <Td>{r.W_norm.toFixed(2)}</Td><Td>{r.G_allocated.toFixed(2)}</Td>
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
