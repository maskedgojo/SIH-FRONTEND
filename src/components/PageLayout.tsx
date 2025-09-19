import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();

  // Don't show the nav bar on the dashboard/home page
  if (location.pathname === "/" || location.pathname === "/dashboard") {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="border-b bg-white px-4 py-3 flex items-center">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Dashboard
        </Button>
      </nav>

      {/* Page Content */}
      <main className="container mx-auto p-6">
        {children}
      </main>
    </div>
  );
}