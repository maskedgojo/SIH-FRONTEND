import React from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { PageLayout } from "@/components/PageLayout";

export default function ExportData() {
  const { toast } = useToast();

  const handleExport = () => {
    // Simulate export process
    toast({
      title: "Success!",
      description: "Traffic data has been exported successfully.",
      duration: 3000, // Toast will show for 3 seconds
    });
  };

  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center min-h-[80vh] bg-background p-8">
        <div className="max-w-md w-full space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Export Traffic Data</h2>
            <p className="text-gray-600 mb-6">Download traffic analytics and reports</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
            <div className="flex items-center justify-between py-3 border-b">
              <div>
                <div className="font-medium">Traffic Analysis Report</div>
                <div className="text-sm text-gray-500">Complete traffic data and analytics</div>
              </div>
              <Button onClick={handleExport} variant="default">
                Export
              </Button>
            </div>
            
            <div className="flex items-center justify-between py-3 border-b">
              <div>
                <div className="font-medium">Violation Records</div>
                <div className="text-sm text-gray-500">Traffic violation data</div>
              </div>
              <Button onClick={handleExport} variant="default">
                Export
              </Button>
            </div>
            
            <div className="flex items-center justify-between py-3">
              <div>
                <div className="font-medium">Signal Performance Data</div>
                <div className="text-sm text-gray-500">Traffic signal statistics</div>
              </div>
              <Button onClick={handleExport} variant="default">
                Export
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}