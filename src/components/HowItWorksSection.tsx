
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Users, MapPin, Recycle } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Camera,
      title: "Report Waste",
      description: "Citizens capture photos of waste and share location details through our easy-to-use platform.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: MapPin,
      title: "Location Tracking",
      description: "Our AI-powered system categorizes and prioritizes waste reports based on location and severity.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Users,
      title: "Deploy Workers",
      description: "Trained rural youth workers are assigned to clean up the reported waste locations efficiently.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Recycle,
      title: "Process & Recycle",
      description: "Collected waste is sorted and sent to our partner recyclers for sustainable processing.",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            How SwachhSaathi Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our simple 4-step process connects citizens, workers, and recyclers to create a cleaner India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="relative hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className={`p-4 rounded-full ${step.color}`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                </div>
                <div className="absolute -top-3 -right-3 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <CardTitle className="text-xl font-semibold text-gray-800">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-6 py-3 rounded-full font-semibold">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            Continuous cycle for a cleaner tomorrow
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
