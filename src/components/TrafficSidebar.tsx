import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface SidebarProps {
  className?: string;
}

const menuItems = [
  { name: "Dashboard", path: "/" },
  { name: "Intersections", path: "/intersections" },
  { name: "Alerts", path: "/alerts" },
  { name: "Vehicle Tracking", path: "/vehicle-tracking" },
];

const analyticsItems = [
  { name: "Traffic Report", path: "/traffic-report" },
  { name: "Historical Data", path: "/historical-data" },
  { name: "Export Data", path: "/export-data" },
];

const bottomItems = [
  { name: "Settings", path: "/settings" },
  { name: "Security", path: "/security" },
];

export function TrafficSidebar({ className }: SidebarProps) {
  const location = useLocation();

  return (
    <div className={cn("w-64 bg-sidebar-bg h-screen flex flex-col", className)}>
      {/* Header */}
      <div className="p-6 border-b border-sidebar-hover">
        <h1 className="text-xl font-bold text-sidebar-text">Smart Traffic</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {/* Main menu items */}
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={cn(
              "w-full block text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors",
              location.pathname === item.path
                ? "bg-sidebar-active text-sidebar-text"
                : "text-sidebar-text hover:bg-sidebar-hover"
            )}
          >
            {item.name}
          </Link>
        ))}

        {/* Analytics Section */}
        <div className="pt-6">
          <h3 className="px-4 py-2 text-sm font-bold text-sidebar-text">Analytics</h3>
          {analyticsItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "w-full block text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                location.pathname === item.path
                  ? "bg-sidebar-active text-sidebar-text"
                  : "text-sidebar-text hover:bg-sidebar-hover"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Bottom items */}
        <div className="pt-6">
          {bottomItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "w-full block text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                location.pathname === item.path
                  ? "bg-sidebar-active text-sidebar-text"
                  : "text-sidebar-text hover:bg-sidebar-hover"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}