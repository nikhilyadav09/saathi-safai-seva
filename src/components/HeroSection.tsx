
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToReportSection = () => {
    document.getElementById('report-waste')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-600 via-green-500 to-emerald-600 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="7" cy="7" r="7"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="block">SwachhSaathi</span>
              <span className="block text-3xl md:text-4xl font-medium text-green-100 mt-2">
                साझेदार स्वच्छता का
              </span>
            </h1>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20">
              <p className="text-2xl md:text-3xl font-semibold text-green-100 mb-2">
                "Saaf bhi, samajhdaar bhi"
              </p>
              <p className="text-lg md:text-xl text-green-50 leading-relaxed">
                सफाई भी, समझदारी भी
              </p>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-green-50 leading-relaxed max-w-3xl mx-auto">
            Connecting urban waste challenges with rural employment opportunities. 
            Together, we're building a cleaner, more responsible society.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-green-600 hover:bg-green-50 hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-full shadow-lg"
              onClick={scrollToReportSection}
            >
              Report Waste Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-green-600 hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-full"
            >
              Join as Worker
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 pt-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <div className="w-3 h-3 bg-green-300 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Live Tracking</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <div className="w-3 h-3 bg-yellow-300 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Digital Payments</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <div className="w-3 h-3 bg-blue-300 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Rural Employment</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-8 h-8 text-white/70" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
