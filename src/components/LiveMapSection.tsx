
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, CheckCircle } from "lucide-react";

const LiveMapSection = () => {
  // Mock data for live reports
  const liveReports = [
    {
      id: 1,
      location: "Connaught Place, New Delhi",
      type: "Plastic Waste",
      status: "In Progress",
      reportedTime: "2 hours ago",
      priority: "High"
    },
    {
      id: 2,
      location: "Marine Drive, Mumbai",
      type: "Mixed Waste",
      status: "Completed",
      reportedTime: "4 hours ago",
      priority: "Medium"
    },
    {
      id: 3,
      location: "Brigade Road, Bangalore",
      type: "Organic Waste",
      status: "Assigned",
      reportedTime: "1 hour ago",
      priority: "High"
    },
    {
      id: 4,
      location: "Park Street, Kolkata",
      type: "Paper Waste",
      status: "Reported",
      reportedTime: "30 minutes ago",
      priority: "Low"
    },
    {
      id: 5,
      location: "Anna Salai, Chennai",
      type: "Electronic Waste",
      status: "In Progress",
      reportedTime: "3 hours ago",
      priority: "High"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-800";
      case "In Progress": return "bg-blue-100 text-blue-800";
      case "Assigned": return "bg-yellow-100 text-yellow-800";
      case "Reported": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "bg-red-100 text-red-800";
      case "Medium": return "bg-orange-100 text-orange-800";
      case "Low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Live Waste Reports
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Track real-time waste reports from across India. See how our community is working together to keep cities clean.
          </p>
        </div>

        {/* Map Placeholder */}
        <div className="mb-8">
          <Card className="shadow-lg border-0">
            <CardContent className="p-0">
              <div className="h-64 md:h-96 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23e5e7eb%22%20fill-opacity%3D%220.3%22%3E%3Cpath%20d%3D%22m0%2040l40-40h-40v40zm40%200v-40h-40l40%2040z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
                <div className="text-center z-10">
                  <MapPin className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <p className="text-xl font-semibold text-gray-700 mb-2">Interactive Map Coming Soon</p>
                  <p className="text-gray-600">Real-time tracking of waste reports across India</p>
                  <div className="flex justify-center mt-4 space-x-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-600">High Priority</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-600">In Progress</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-600">Completed</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Live Reports List */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                Recent Reports
              </CardTitle>
              <CardDescription>
                Latest waste reports from citizens across India
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {liveReports.map((report) => (
                  <div key={report.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <span className="font-medium text-gray-800 text-sm">{report.location}</span>
                      </div>
                      <Badge className={`text-xs ${getPriorityColor(report.priority)}`}>
                        {report.priority}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-600">{report.type}</span>
                        <Badge className={`text-xs ${getStatusColor(report.status)}`}>
                          {report.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        {report.reportedTime}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Today's Impact
              </CardTitle>
              <CardDescription>
                Real-time statistics for today's cleanup activities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">147</div>
                    <div className="text-sm text-gray-600">Reports Today</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">89</div>
                    <div className="text-sm text-gray-600">Completed</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-yellow-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-yellow-600">34</div>
                    <div className="text-sm text-gray-600">In Progress</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600">24</div>
                    <div className="text-sm text-gray-600">Pending</div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-lg font-semibold text-gray-800 mb-2">Active Workers</div>
                  <div className="text-3xl font-bold text-green-600">156</div>
                  <div className="text-sm text-gray-600">Currently working across 12 cities</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LiveMapSection;
