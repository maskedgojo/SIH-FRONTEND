import { cn } from "@/lib/utils";

interface TrafficMapProps {
  className?: string;
}

const trafficPoints = [
  { x: 20, y: 25, status: "normal" },
  { x: 45, y: 15, status: "moderate" },
  { x: 30, y: 45, status: "heavy" },
  { x: 65, y: 35, status: "normal" },
  { x: 80, y: 50, status: "control" },
  { x: 25, y: 70, status: "moderate" },
];

const legendItems = [
  { label: "Normal Flow", status: "normal" },
  { label: "Moderate Congestion", status: "moderate" },
  { label: "Heavy Congestion", status: "heavy" },
  { label: "Control Centre", status: "control" },
];

export function LiveTrafficMap({ className }: TrafficMapProps) {
  return (
    <div className={cn("bg-metric-card rounded-xl p-6", className)}>
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-metric-neutral mb-1">Live Traffic Map</h3>
        <p className="text-sm text-muted-foreground">Real Time Intersection Monitoring</p>
      </div>
      
      <div className="flex gap-6">
        {/* Map Area */}
        <div className="flex-1 bg-background rounded-lg p-4 h-64 relative">
          {trafficPoints.map((point, index) => (
            <div
              key={index}
              className={cn(
                "absolute w-3 h-3 rounded-full",
                point.status === "normal" && "bg-traffic-normal",
                point.status === "moderate" && "bg-traffic-moderate",
                point.status === "heavy" && "bg-traffic-heavy",
                point.status === "control" && "bg-traffic-control"
              )}
              style={{
                left: `${point.x}%`,
                top: `${point.y}%`,
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
        </div>

        {/* Legend */}
        <div className="w-48 bg-background rounded-lg p-4">
          <div className="space-y-3">
            {legendItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div
                  className={cn(
                    "w-3 h-3 rounded-full",
                    item.status === "normal" && "bg-traffic-normal",
                    item.status === "moderate" && "bg-traffic-moderate",
                    item.status === "heavy" && "bg-traffic-heavy",
                    item.status === "control" && "bg-traffic-control"
                  )}
                />
                <span className="text-sm text-metric-neutral">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}