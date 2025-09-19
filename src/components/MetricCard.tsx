import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative";
  icon: LucideIcon;
  subtitle?: string;
  className?: string;
}

export function MetricCard({
  title,
  value,
  change,
  changeType,
  icon: Icon,
  subtitle,
  className,
}: MetricCardProps) {
  return (
    <div className={cn("bg-metric-card rounded-xl p-6 flex items-center justify-between", className)}>
      <div className="flex-1">
        <p className="text-sm font-medium text-muted-foreground mb-2">{title}</p>
        <p className="text-3xl font-bold text-metric-neutral mb-1">{value}</p>
        <div className="flex items-center space-x-1">
          <span
            className={cn(
              "text-sm font-medium",
              changeType === "positive" ? "text-metric-positive" : "text-metric-negative"
            )}
          >
            {change}
          </span>
          {subtitle && <span className="text-sm text-muted-foreground">{subtitle}</span>}
        </div>
      </div>
      <div className="ml-4">
        <div className="w-12 h-12 bg-background rounded-lg flex items-center justify-center">
          <Icon className="w-6 h-6 text-metric-neutral" />
        </div>
      </div>
    </div>
  );
}