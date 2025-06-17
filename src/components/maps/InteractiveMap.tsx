
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Zap } from "lucide-react";

interface WasteReport {
  id: number;
  lat: number;
  lng: number;
  location: string;
  type: string;
  status: string;
  priority: string;
  reportedTime: string;
}

const InteractiveMap = () => {
  const [selectedReport, setSelectedReport] = useState<WasteReport | null>(null);
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);
  
  // Dummy reports with coordinates for major Indian cities
  const reports: WasteReport[] = [
    {
      id: 1,
      lat: 28.6139,
      lng: 77.2090,
      location: "Connaught Place, New Delhi",
      type: "Plastic Waste",
      status: "In Progress",
      priority: "High",
      reportedTime: "2 hours ago"
    },
    {
      id: 2,
      lat: 19.0760,
      lng: 72.8777,
      location: "Marine Drive, Mumbai",
      type: "Mixed Waste",
      status: "Completed",
      priority: "Medium",
      reportedTime: "4 hours ago"
    },
    {
      id: 3,
      lat: 12.9716,
      lng: 77.5946,
      location: "Brigade Road, Bangalore",
      type: "Organic Waste",
      status: "Assigned",
      priority: "High",
      reportedTime: "1 hour ago"
    },
    {
      id: 4,
      lat: 22.5726,
      lng: 88.3639,
      location: "Park Street, Kolkata",
      type: "Paper Waste",
      status: "Reported",
      priority: "Low",
      reportedTime: "30 minutes ago"
    },
    {
      id: 5,
      lat: 13.0827,
      lng: 80.2707,
      location: "Anna Salai, Chennai",
      type: "Electronic Waste",
      status: "In Progress",
      priority: "High",
      reportedTime: "3 hours ago"
    }
  ];

  useEffect(() => {
    // Simulate getting user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        () => {
          // Default to Delhi if location access denied
          setUserLocation({ lat: 28.6139, lng: 77.2090 });
        }
      );
    }
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-500";
      case "In Progress": return "bg-blue-500";
      case "Assigned": return "bg-yellow-500";
      case "Reported": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "border-red-500";
      case "Medium": return "border-yellow-500";
      case "Low": return "border-green-500";
      default: return "border-gray-500";
    }
  };

  return (
    <div className="w-full h-[600px] relative bg-gradient-to-br from-green-50 to-blue-50 rounded-lg overflow-hidden">
      {/* Map Container */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100">
        {/* Simulated map background */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" viewBox="0 0 400 300">
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ccc" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* User location indicator */}
        {userLocation && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
              You are here
            </div>
          </div>
        )}

        {/* Report markers */}
        {reports.map((report, index) => (
          <div
            key={report.id}
            className={`absolute cursor-pointer z-10 transform -translate-x-1/2 -translate-y-1/2 ${getPriorityColor(report.priority)} border-2 rounded-full`}
            style={{
              top: `${20 + index * 15}%`,
              left: `${25 + index * 12}%`
            }}
            onClick={() => setSelectedReport(report)}
          >
            <div className={`w-6 h-6 ${getStatusColor(report.status)} rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform`}>
              <MapPin className="w-3 h-3 text-white" />
            </div>
          </div>
        ))}
      </div>

      {/* Map Controls */}
      <div className="absolute top-4 right-4 z-30 space-y-2">
        <Button
          size="sm"
          className="bg-white text-gray-700 hover:bg-gray-50 shadow-lg"
          onClick={() => {
            // Simulate zoom in
            console.log("Zoom in");
          }}
        >
          +
        </Button>
        <Button
          size="sm"
          className="bg-white text-gray-700 hover:bg-gray-50 shadow-lg"
          onClick={() => {
            // Simulate zoom out
            console.log("Zoom out");
          }}
        >
          -
        </Button>
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 z-30">
        <Card className="bg-white/90 backdrop-blur-sm">
          <CardContent className="p-3">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span>High Priority</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span>In Progress</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Completed</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Report Details Modal */}
      {selectedReport && (
        <div className="absolute top-4 left-4 z-40 max-w-sm">
          <Card className="bg-white shadow-xl">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center justify-between">
                Report Details
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setSelectedReport(null)}
                >
                  ×
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="font-medium">{selectedReport.location}</p>
                <p className="text-sm text-gray-600">{selectedReport.type}</p>
              </div>
              <div className="flex items-center gap-2">
                <Badge className={
                  selectedReport.status === "Completed" ? "bg-green-100 text-green-800" :
                  selectedReport.status === "In Progress" ? "bg-blue-100 text-blue-800" :
                  selectedReport.status === "Assigned" ? "bg-yellow-100 text-yellow-800" :
                  "bg-red-100 text-red-800"
                }>
                  {selectedReport.status}
                </Badge>
                <Badge className={
                  selectedReport.priority === "High" ? "bg-red-100 text-red-800" :
                  selectedReport.priority === "Medium" ? "bg-yellow-100 text-yellow-800" :
                  "bg-green-100 text-green-800"
                }>
                  {selectedReport.priority}
                </Badge>
              </div>
              <p className="text-xs text-gray-500">{selectedReport.reportedTime}</p>
              <Button size="sm" className="w-full">
                <Navigation className="w-4 h-4 mr-2" />
                Get Directions
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default InteractiveMap;
