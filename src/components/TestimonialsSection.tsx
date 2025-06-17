
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Citizen Reporter",
      location: "Mumbai",
      content: "SwachhSaathi made it so easy to report the waste problem in my area. Within 24 hours, a team came and cleaned it up completely. Amazing service!",
      avatar: "PS"
    },
    {
      name: "Rajesh Kumar",
      role: "SwachhSaathi Worker",
      location: "Delhi",
      content: "This platform changed my life. I earn ₹12,000 monthly while contributing to a cleaner India. The digital payment system is very reliable.",
      avatar: "RK"
    },
    {
      name: "Dr. Anjali Mehta",
      role: "Environmental Activist",
      location: "Pune",
      content: "SwachhSaathi's approach of connecting urban problems with rural employment is brilliant. They're not just cleaning cities but creating livelihoods.",
      avatar: "AM"
    },
    {
      name: "Suresh Patel",
      role: "Local Business Owner",
      location: "Ahmedabad",
      content: "The area around my shop used to be very dirty. After partnering with SwachhSaathi, it's always clean. My customers appreciate the cleaner environment.",
      avatar: "SP"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Community Says
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from citizens, workers, and partners who are part of the SwachhSaathi movement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="w-12 h-12 bg-green-100">
                    <AvatarFallback className="text-green-600 font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="mb-3">
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-green-600 font-medium">{testimonial.role}</p>
                      <p className="text-xs text-gray-500">{testimonial.location}</p>
                    </div>
                    <p className="text-gray-600 leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-md">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-xs font-semibold text-green-600">P</div>
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-xs font-semibold text-blue-600">R</div>
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-xs font-semibold text-purple-600">A</div>
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-xs font-semibold text-orange-600">+</div>
            </div>
            <span className="text-gray-700 font-medium ml-2">Join 10,000+ satisfied community members</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
