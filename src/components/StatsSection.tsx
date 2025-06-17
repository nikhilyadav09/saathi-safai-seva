
import { Card, CardContent } from "@/components/ui/card";
import { Users, MapPin, Recycle, Award } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Active Workers",
      description: "Rural youth employed"
    },
    {
      icon: MapPin,
      number: "2,500+",
      label: "Reports Filed",
      description: "Waste locations identified"
    },
    {
      icon: Recycle,
      number: "15+",
      label: "Tons Recycled",
      description: "Waste processed monthly"
    },
    {
      icon: Award,
      number: "25+",
      label: "Cities Covered",
      description: "Across India"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Impact So Far
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real numbers, real change. See how SwachhSaathi is making a difference across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border-green-100">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <stat.icon className="w-8 h-8 text-green-600" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-green-600 mb-2">{stat.number}</h3>
                <p className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</p>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
