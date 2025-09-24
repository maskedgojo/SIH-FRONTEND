import { useEffect, useMemo, useState } from 'react';
import { api, TrafficRow } from '../lib/api';

export default function VehicleTracking() {
  const [rows, setRows] = useState<TrafficRow[]>([]);
  const [err, setErr] = useState<string | null>(null);
  const [approach, setApproach] = useState<'N'|'E'|'S'|'W'>('N');

  useEffect(() => {
    api.getHistory(150).then(setRows).catch(e => setErr(String(e)));
  }, []);

  const series = useMemo(() => {
    return rows.filter(r => r.approach === approach).map(r => ({
      x: r.cycle, evu: r.EVU_smooth, q: r.queue_len
    }));
  }, [rows, approach]);

  return (
    <div className="p-6">
      <h2 className="text-xl mb-4">Vehicle Tracking</h2>
      {err && <p className="text-red-500">Error: {err}</p>}
      <div className="flex items-center gap-3 mb-4">
        <label className="text-sm">Approach</label>
        <select className="border rounded px-2 py-1" value={approach} onChange={e=>setApproach(e.target.value as any)}>
          <option value="N">N</option><option value="E">E</option>
          <option value="S">S</option><option value="W">W</option>
        </select>
      </div>

      <div className="border rounded p-3">
        <pre className="text-xs overflow-auto">
          {JSON.stringify(series.slice(-20), null, 2)}
        </pre>
        <p className="text-gray-500 text-xs mt-2">Hook these arrays to a chart library later.</p>
      </div>
    </div>
  );
}
