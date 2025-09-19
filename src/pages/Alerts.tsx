import React from "react";
import { PageLayout } from "@/components/PageLayout";

export default function Alerts() {
  const recentViolations = [
    {
      time: "12:23 PM",
      location: "5th Street",
      type: "Red Light",
      status: "Active"
    },
    {
      time: "11:45 AM",
      location: "Main Avenue",
      type: "Speeding",
      status: "Active"
    },
    {
      time: "10:30 AM",
      location: "Park Road",
      type: "No Parking",
      status: "Resolved"
    }
  ];

  const historicalAnalysis = [
    {
      date: "July 20",
      peakHour: "8:30 AM",
      avgVolume: "12847",
      incidents: "23"
    },
    {
      date: "July 19",
      peakHour: "9:00 AM",
      avgVolume: "11523",
      incidents: "18"
    }
  ];

  const activeAlerts = [
    {
      title: "Critical Signal Malfunction",
      description: "Traffic signal at 5th Street is not responding.",
      time: "12:58 PM, 29 July"
    },
    {
      title: "High Traffic Volume",
      description: "Unusual congestion detected on Main Avenue.",
      time: "12:30 PM, 29 July"
    }
  ];

  return (
    <PageLayout>
      <div className="p-6 space-y-6">
        {/* Recent Violations */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Recent Violations</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Time</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Location</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Type</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentViolations.map((violation, index) => (
                  <tr key={index} className="border-b">
                    <td className="px-6 py-4 text-sm">{violation.time}</td>
                    <td className="px-6 py-4 text-sm">{violation.location}</td>
                    <td className="px-6 py-4 text-sm">{violation.type}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        violation.status === 'Active' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {violation.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Historical Analysis */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Historical Analysis</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Date</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Peak Hour</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Avg Volume</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Incidents</th>
                </tr>
              </thead>
              <tbody>
                {historicalAnalysis.map((analysis, index) => (
                  <tr key={index} className="border-b">
                    <td className="px-6 py-4 text-sm">{analysis.date}</td>
                    <td className="px-6 py-4 text-sm">{analysis.peakHour}</td>
                    <td className="px-6 py-4 text-sm">{analysis.avgVolume}</td>
                    <td className="px-6 py-4 text-sm">{analysis.incidents}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Active Alerts */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Active Alerts</h2>
          <div className="space-y-4">
            {activeAlerts.map((alert, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                <div className="flex items-start gap-3">
                  <div className="p-2">
                    <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold">{alert.title}</h3>
                    <p className="text-gray-600 mt-1">{alert.description}</p>
                    <p className="text-sm text-gray-500 mt-2">Reported {alert.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}