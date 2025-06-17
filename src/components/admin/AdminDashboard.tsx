
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, MapPin, CheckCircle, Clock, Search, Filter } from "lucide-react";

const AdminDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Dummy admin data
  const stats = {
    totalReports: 1247,
    activeWorkers: 156,
    completedToday: 89,
    pendingReports: 58
  };

  const recentReports = [
    {
      id: 1,
      location: "Connaught Place, Delhi",
      type: "Plastic Waste",
      status: "In Progress",
      assignedWorker: "Rajesh Kumar",
      reportedBy: "user@example.com",
      priority: "High",
      reportedTime: "2 hours ago"
    },
    {
      id: 2,
      location: "Marine Drive, Mumbai",
      type: "Mixed Waste",
      status: "Completed",
      assignedWorker: "Priya Sharma",
      reportedBy: "citizen@email.com",
      priority: "Medium",
      reportedTime: "4 hours ago"
    },
    {
      id: 3,
      location: "Brigade Road, Bangalore",
      type: "Organic Waste",
      status: "Assigned",
      assignedWorker: "Amit Singh",
      reportedBy: "reporter@gmail.com",
      priority: "High",
      reportedTime: "1 hour ago"
    },
    {
      id: 4,
      location: "Park Street, Kolkata",
      type: "Paper Waste",
      status: "Reported",
      assignedWorker: null,
      reportedBy: "user2@example.com",
      priority: "Low",
      reportedTime: "30 minutes ago"
    }
  ];

  const workers = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Delhi",
      status: "Active",
      tasksCompleted: 45,
      rating: 4.8,
      joinedDate: "2023-12-01"
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Mumbai",
      status: "Active",
      tasksCompleted: 52,
      rating: 4.9,
      joinedDate: "2023-11-15"
    },
    {
      id: 3,
      name: "Amit Singh",
      location: "Bangalore",
      status: "Busy",
      tasksCompleted: 38,
      rating: 4.7,
      joinedDate: "2024-01-10"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-800";
      case "In Progress": return "bg-blue-100 text-blue-800";
      case "Assigned": return "bg-yellow-100 text-yellow-800";
      case "Reported": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const filteredReports = recentReports.filter(report => {
    const matchesSearch = report.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || report.status.toLowerCase() === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search reports..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="reported">Reported</SelectItem>
              <SelectItem value="assigned">Assigned</SelectItem>
              <SelectItem value="in progress">In Progress</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Reports</p>
                <p className="text-2xl font-bold">{stats.totalReports}</p>
              </div>
              <MapPin className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Workers</p>
                <p className="text-2xl font-bold">{stats.activeWorkers}</p>
              </div>
              <Users className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Completed Today</p>
                <p className="text-2xl font-bold">{stats.completedToday}</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Reports</p>
                <p className="text-2xl font-bold">{stats.pendingReports}</p>
              </div>
              <Clock className="w-8 h-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Reports Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredReports.map((report) => (
              <div key={report.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gray-500 mt-1" />
                    <div>
                      <h4 className="font-medium">{report.location}</h4>
                      <p className="text-sm text-gray-600">{report.type}</p>
                      <p className="text-xs text-gray-500">Reported by: {report.reportedBy}</p>
                      {report.assignedWorker && (
                        <p className="text-xs text-green-600">Assigned to: {report.assignedWorker}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={getStatusColor(report.status)}>
                      {report.status}
                    </Badge>
                    <Badge variant="outline">
                      {report.priority}
                    </Badge>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">{report.reportedTime}</span>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                    {report.status === "Reported" && (
                      <Button size="sm">
                        Assign Worker
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Workers Management */}
      <Card>
        <CardHeader>
          <CardTitle>Active Workers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {workers.map((worker) => (
              <div key={worker.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium">{worker.name}</h4>
                    <p className="text-sm text-gray-600">{worker.location}</p>
                  </div>
                  <Badge className={
                    worker.status === "Active" ? "bg-green-100 text-green-800" :
                    worker.status === "Busy" ? "bg-yellow-100 text-yellow-800" :
                    "bg-gray-100 text-gray-800"
                  }>
                    {worker.status}
                  </Badge>
                </div>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>Tasks Completed: {worker.tasksCompleted}</p>
                  <p>Rating: ⭐ {worker.rating}</p>
                  <p>Joined: {worker.joinedDate}</p>
                </div>
                <Button size="sm" variant="outline" className="w-full mt-3">
                  View Profile
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
