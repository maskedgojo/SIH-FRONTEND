import { TrafficSidebar } from "@/components/TrafficSidebar";
import { MetricCard } from "@/components/MetricCard";
import { LiveTrafficMap } from "@/components/LiveTrafficMap";
import { VehicleDensityChart } from "@/components/VehicleDensityChart";
import { DashboardSection } from "@/components/DashboardSection";
import { Car, AlertTriangle, CircleDot, Gauge } from "lucide-react";

export default function TrafficDashboard() {
  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <TrafficSidebar />
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-background border-b border-border px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-foreground">Traffic Management Dashboard</h1>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <div className="w-3 h-3 bg-muted rounded-full"></div>
              <span>Last Updated: 2:30 PM</span>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-8 space-y-8">
          {/* Metrics Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              title="Total Vehicles"
              value="124847"
              change="+8.2% vs yesterday"
              changeType="positive"
              icon={Car}
            />
            <MetricCard
              title="Active Violations"
              value="247"
              change="-12.1% vs yesterday"
              changeType="negative"
              icon={AlertTriangle}
            />
            <MetricCard
              title="Signal Status"
              value="98.7%"
              change="+0.3% operational"
              changeType="positive"
              icon={CircleDot}
            />
            <MetricCard
              title="Average Speed"
              value="42.3"
              change="+2.8% km/h"
              changeType="positive"
              icon={Gauge}
            />
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <LiveTrafficMap />
            <VehicleDensityChart />
          </div>

          {/* Bottom Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <DashboardSection title="Recent Violations">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 text-sm font-medium text-muted-foreground">Time</th>
                      <th className="text-left py-2 text-sm font-medium text-muted-foreground">Location</th>
                      <th className="text-left py-2 text-sm font-medium text-muted-foreground">Type</th>
                      <th className="text-left py-2 text-sm font-medium text-muted-foreground">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-2 text-sm">12:23 PM</td>
                      <td className="py-2 text-sm">5th Street</td>
                      <td className="py-2 text-sm">Red Light</td>
                      <td className="py-2 text-sm">
                        <span className="px-2 py-0.5 rounded-full text-xs bg-red-100 text-red-800">
                          Active
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </DashboardSection>
            <DashboardSection title="Historical Analysis">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 text-sm font-medium text-muted-foreground">Date</th>
                      <th className="text-left py-2 text-sm font-medium text-muted-foreground">Peak Hour</th>
                      <th className="text-left py-2 text-sm font-medium text-muted-foreground">Avg Volume</th>
                      <th className="text-left py-2 text-sm font-medium text-muted-foreground">Incidents</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-2 text-sm">July 20</td>
                      <td className="py-2 text-sm">8:30 AM</td>
                      <td className="py-2 text-sm">12847</td>
                      <td className="py-2 text-sm">23</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </DashboardSection>
          </div>

          {/* Full Width Section */}
          <DashboardSection title="Active Alerts" className="col-span-full">
            <div className="space-y-4">
              <div className="bg-card/50 p-4 rounded-lg border-l-4 border-red-500">
                <div className="flex items-start gap-3">
                  <div className="p-2">
                    <AlertTriangle className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Critical Signal Malfunction</h4>
                    <p className="text-muted-foreground mt-1">Traffic signal at 5th Street is not responding.</p>
                    <p className="text-sm text-muted-foreground mt-2">Reported 12:58 PM, 29 July</p>
                  </div>
                </div>
              </div>
            </div>
          </DashboardSection>
        </main>
      </div>
    </div>
  );
}