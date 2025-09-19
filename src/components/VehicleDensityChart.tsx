import { cn } from "@/lib/utils";

interface VehicleDensityProps {
  className?: string;
}

const chartData = [
  { time: "1200", density: 35 },
  { time: "1400", density: 55 },
  { time: "1600", density: 25 },
  { time: "1800", density: 65 },
  { time: "2000", density: 75 },
  { time: "2200", density: 30 },
];

export function VehicleDensityChart({ className }: VehicleDensityProps) {
  const maxDensity = Math.max(...chartData.map(d => d.density));

  return (
    <div className={cn("bg-metric-card rounded-xl p-6", className)}>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-metric-neutral mb-1">Vehicle Density</h3>
      </div>
      
      <div className="h-64 flex items-end justify-between space-x-2">
        {chartData.map((item, index) => (
          <div key={index} className="flex flex-col items-center flex-1">
            <div className="w-full flex justify-center mb-2">
              <div
                className="bg-chart-primary rounded-t-sm w-8"
                style={{
                  height: `${(item.density / maxDensity) * 180}px`,
                }}
              />
            </div>
            <span className="text-xs text-muted-foreground font-medium">{item.time}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-sm text-muted-foreground">Vehicle Density in Various Hours</p>
      </div>
    </div>
  );
}