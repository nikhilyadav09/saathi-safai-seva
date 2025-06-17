
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { User, MapPin, Award, CheckCircle } from "lucide-react";

const UserProfile = () => {
  const [user, setUser] = useState<any>(null);
  const [reports, setReports] = useState([
    {
      id: 1,
      location: "Connaught Place, Delhi",
      type: "Plastic Waste",
      status: "Completed",
      date: "2024-01-15",
      points: 50
    },
    {
      id: 2,
      location: "Marine Drive, Mumbai",
      type: "Mixed Waste",
      status: "In Progress",
      date: "2024-01-14",
      points: 0
    },
    {
      id: 3,
      location: "Brigade Road, Bangalore",
      type: "Organic Waste",
      status: "Completed",
      date: "2024-01-13",
      points: 30
    }
  ]);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  if (!user) return null;

  const totalPoints = reports.reduce((sum, report) => sum + report.points, 0);
  const completedReports = reports.filter(r => r.status === "Completed").length;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <Avatar className="w-12 h-12">
              <AvatarFallback className="bg-green-100 text-green-600">
                {user.name.split(' ').map((n: string) => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-bold">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-green-600">{totalPoints}</div>
              <div className="text-sm text-gray-600">Total Points</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-600">{completedReports}</div>
              <div className="text-sm text-gray-600">Reports Completed</div>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-yellow-600">{reports.length}</div>
              <div className="text-sm text-gray-600">Total Reports</div>
            </div>
          </div>
          
          <Button onClick={handleLogout} variant="outline" className="w-full md:w-auto">
            Logout
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>My Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reports.map((report) => (
              <div key={report.id} className="border rounded-lg p-4 flex justify-between items-center">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-500 mt-1" />
                  <div>
                    <h4 className="font-medium">{report.location}</h4>
                    <p className="text-sm text-gray-600">{report.type}</p>
                    <p className="text-xs text-gray-500">{report.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className={
                    report.status === "Completed" ? "bg-green-100 text-green-800" :
                    report.status === "In Progress" ? "bg-blue-100 text-blue-800" :
                    "bg-gray-100 text-gray-800"
                  }>
                    {report.status}
                  </Badge>
                  {report.points > 0 && (
                    <div className="flex items-center gap-1 text-sm font-medium text-green-600">
                      <Award className="w-4 h-4" />
                      {report.points}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserProfile;
