import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Intersections from "./pages/Intersections";
import Alerts from "./pages/Alerts";
import VehicleTracking from "./pages/VehicleTracking";
import TrafficReport from "./pages/TrafficReport";
import HistoricalData from "./pages/HistoricalData";
import ExportData from "./pages/ExportData";
import Settings from "./pages/Settings";
import Security from "./pages/Security";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Index />} />
          <Route path="/intersections" element={<Intersections />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/vehicle-tracking" element={<VehicleTracking />} />
          <Route path="/traffic-report" element={<TrafficReport />} />
          <Route path="/historical-data" element={<HistoricalData />} />
          <Route path="/export-data" element={<ExportData />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/security" element={<Security />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
