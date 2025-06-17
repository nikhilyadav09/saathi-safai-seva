
import Navbar from "@/components/navigation/Navbar";
import AdminDashboard from "@/components/admin/AdminDashboard";

const AdminPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <AdminDashboard />
    </div>
  );
};

export default AdminPage;
