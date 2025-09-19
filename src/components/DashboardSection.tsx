import { cn } from "@/lib/utils";

interface DashboardSectionProps {
  title: string;
  children?: React.ReactNode;
  className?: string;
}

export function DashboardSection({ title, children, className }: DashboardSectionProps) {
  return (
    <div className={cn("bg-metric-card rounded-xl p-6", className)}>
      <h3 className="text-lg font-semibold text-metric-neutral mb-4">{title}</h3>
      {children || (
        <div className="h-32 flex items-center justify-center text-muted-foreground">
          <p className="text-sm">No data available</p>
        </div>
      )}
    </div>
  );
}