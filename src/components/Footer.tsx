
import { Button } from "@/components/ui/button";
import { MapPin, Camera, Users, Heart } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Report Waste", href: "#report-waste" },
    { name: "Join as Worker", href: "#join-worker" },
    { name: "Live Reports", href: "#live-map" },
    { name: "Partners", href: "#partners" },
  ];

  const company = [
    { name: "About Us", href: "#" },
    { name: "Our Mission", href: "#" },
    { name: "Impact Report", href: "#" },
    { name: "Careers", href: "#" },
  ];

  const support = [
    { name: "Help Center", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4" />
              </div>
              <h3 className="text-xl font-bold">SwachhSaathi</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Connecting urban waste challenges with rural employment opportunities. 
              Together, we're building a cleaner, more responsible society.
            </p>
            <div className="flex items-center gap-2 text-green-400 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>"Saaf bhi, samajhdaar bhi"</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="space-y-2">
              {company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Support</h4>
            <ul className="space-y-2">
              {support.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Camera className="w-4 h-4" />
                <span>2,500+ Reports</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>500+ Workers</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>25+ Cities</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <p className="text-sm text-gray-400">
                © 2024 SwachhSaathi. Made with ❤️ for a cleaner India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
