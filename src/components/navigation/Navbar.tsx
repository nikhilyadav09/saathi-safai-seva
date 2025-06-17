
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { User, Settings, LogOut, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import AuthModal from "@/components/auth/AuthModal";

const Navbar = () => {
  const [user, setUser] = useState<any>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.reload();
  };

  return (
    <>
      <nav className="bg-white shadow-lg border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold text-green-600">SwachhSaathi</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors">
                Home
              </Link>
              <Link to="/map" className="text-gray-700 hover:text-green-600 transition-colors">
                Live Map
              </Link>
              <Link to="/reports" className="text-gray-700 hover:text-green-600 transition-colors">
                Reports
              </Link>
              <Link to="/workers" className="text-gray-700 hover:text-green-600 transition-colors">
                Join as Worker
              </Link>
            </div>

            {/* User Section */}
            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-3">
                  <Badge variant="outline" className="text-green-600">
                    150 Points
                  </Badge>
                  <div className="relative group">
                    <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-green-100 text-green-600 text-sm">
                          {user.name.split(' ').map((n: string) => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">{user.name}</span>
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="p-2 space-y-1">
                        <Link 
                          to="/profile" 
                          className="flex items-center space-x-2 p-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                        >
                          <User className="w-4 h-4" />
                          <span>Profile</span>
                        </Link>
                        <Link 
                          to="/admin" 
                          className="flex items-center space-x-2 p-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                        >
                          <Settings className="w-4 h-4" />
                          <span>Admin Panel</span>
                        </Link>
                        <button 
                          onClick={handleLogout}
                          className="flex items-center space-x-2 p-2 text-sm text-red-600 hover:bg-red-50 rounded w-full text-left"
                        >
                          <LogOut className="w-4 h-4" />
                          <span>Logout</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center space-x-3">
                  <Button 
                    variant="outline"
                    onClick={() => {
                      setAuthMode("login");
                      setShowAuthModal(true);
                    }}
                  >
                    Login
                  </Button>
                  <Button 
                    onClick={() => {
                      setAuthMode("signup");
                      setShowAuthModal(true);
                    }}
                  >
                    Sign Up
                  </Button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t py-4 space-y-3">
              <Link to="/" className="block text-gray-700 hover:text-green-600 transition-colors">
                Home
              </Link>
              <Link to="/map" className="block text-gray-700 hover:text-green-600 transition-colors">
                Live Map
              </Link>
              <Link to="/reports" className="block text-gray-700 hover:text-green-600 transition-colors">
                Reports
              </Link>
              <Link to="/workers" className="block text-gray-700 hover:text-green-600 transition-colors">
                Join as Worker
              </Link>
              
              {user ? (
                <div className="pt-3 border-t space-y-2">
                  <div className="flex items-center space-x-2">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="bg-green-100 text-green-600 text-sm">
                        {user.name.split(' ').map((n: string) => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{user.name}</span>
                  </div>
                  <Link to="/profile" className="block text-gray-700 hover:text-green-600">
                    Profile
                  </Link>
                  <Link to="/admin" className="block text-gray-700 hover:text-green-600">
                    Admin Panel
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="block text-red-600 hover:text-red-700"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="pt-3 border-t space-y-2">
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      setAuthMode("login");
                      setShowAuthModal(true);
                      setMobileMenuOpen(false);
                    }}
                  >
                    Login
                  </Button>
                  <Button 
                    className="w-full"
                    onClick={() => {
                      setAuthMode("signup");
                      setShowAuthModal(true);
                      setMobileMenuOpen(false);
                    }}
                  >
                    Sign Up
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        mode={authMode}
        onToggleMode={() => setAuthMode(authMode === "login" ? "signup" : "login")}
      />
    </>
  );
};

export default Navbar;
