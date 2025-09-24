import { useEffect, useState, useMemo } from 'react';
import { api, TrafficRow } from '../lib/api';

export default function Dashboard() {
  const [latest, setLatest] = useState<TrafficRow | null>(null);
  const [history, setHistory] = useState<TrafficRow[] | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    api.getLatest().then(setLatest).catch(e => setErr(String(e)));
    api.getHistory(40).then(setHistory).catch(e => setErr(String(e)));
  }, []);

  const kpis = useMemo(() => {
    const totalEVU = history?.reduce((s,r)=> s + r.EVU_smooth, 0) ?? 0;
    const activeEmerg = history?.filter(r => r.emergency === 1).length ?? 0;
    const lastCycle = history ? Math.max(...history.map(r => r.cycle)) : 0;
    const lastCycleRows = history?.filter(r => r.cycle === lastCycle) ?? [];
    const density = lastCycleRows.reduce((s,r)=> s + r.queue_len, 0);
    return { totalEVU, activeEmerg, density };
  }, [history]);

  return (
    <div className="p-6">
      <h2 className="text-xl mb-4">Traffic Management Dashboard</h2>
      {err && <p className="text-red-500">Error: {err}</p>}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card title="Total Vehicles" value={kpis.totalEVU.toFixed(1)} />
        <Card title="Active Violations" value={kpis.activeEmerg.toString()} />
        <Card title="Signal Status" value="Operational" />
        <Card title="Avg EVU (latest)" value={latest ? latest.EVU_smooth.toFixed(2) : '...'} />
      </div>

      <div className="mt-6">
        <h3 className="text-lg mb-2">Latest Row</h3>
        <pre className="bg-gray-100 p-3 rounded overflow-auto">
          {latest ? JSON.stringify(latest, null, 2) : 'Loading…'}
        </pre>
      </div>
    </div>
  );
}

function Card({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white rounded shadow p-4">
      <div className="text-gray-500 text-sm">{title}</div>
      <div className="text-2xl font-semibold mt-1">{value}</div>
    </div>
  );
}
