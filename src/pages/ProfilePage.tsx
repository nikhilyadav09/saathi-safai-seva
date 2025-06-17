
import Navbar from "@/components/navigation/Navbar";
import UserProfile from "@/components/auth/UserProfile";

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <UserProfile />
      </div>
    </div>
  );
};

export default ProfilePage;
