const BASE = import.meta.env.VITE_API_BASE ?? 'http://localhost:5000';

async function j<T>(res: Response): Promise<T> {
  if (!res.ok) throw new Error(`${res.status}`);
  const body = await res.json();
  return body.data as T;
}

export type TrafficRow = {
  timestamp: string;
  signal_id: string;
  cycle: number;
  approach: 'N'|'E'|'S'|'W';
  EVU_raw: number;
  EVU_smooth: number;
  queue_len: number;
  arrival_rate: number;
  emergency: number;
  W: number;
  W_norm: number;
  Dprime: number;
  G_allocated: number;
  order_1: string;
  order_2: string;
  order_3: string;
  order_4: string;
  t_start: number;
  t_end: number;
  T_alloc: number;
  G_min: number;
  G_max: number;
  T_base: number;
};

export const api = {
  getLatest: () => fetch(`${BASE}/traffic/data`).then(j<TrafficRow>),
  getHistory: (limit=50) => fetch(`${BASE}/traffic/history?limit=${limit}`).then(j<TrafficRow[]>),
  getSignalStatus: (signal_id: string) => fetch(`${BASE}/signal/status?signal_id=${signal_id}`).then(j<{signal_id:string;status:string;last_change:string;}>),
};
