
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Handshake, Building, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PartnersSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    partnershipType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Partnership inquiry submitted:", formData);
    
    toast({
      title: "Partnership Inquiry Submitted!",
      description: "Thank you for your interest. Our partnerships team will contact you within 48 hours.",
    });

    // Reset form
    setFormData({
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      partnershipType: "",
      message: ""
    });
  };

  // Mock partner logos data
  const partners = [
    { name: "Green Recyclers Pvt Ltd", type: "Recycling Partner" },
    { name: "EcoTech Solutions", type: "Technology Partner" },
    { name: "Clean India Foundation", type: "NGO Partner" },
    { name: "Urban Development Corp", type: "Government Partner" },
    { name: "Waste Warriors", type: "Implementation Partner" },
    { name: "Digital Pay Systems", type: "Payment Partner" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Partners & Sponsors
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join hands with SwachhSaathi to create a cleaner, more sustainable India. Together, we can make a greater impact.
          </p>
        </div>

        {/* Current Partners */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-8">Our Trusted Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow group">
                <CardContent className="p-4 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Building className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-sm font-semibold text-gray-800 mb-1">{partner.name}</h4>
                  <p className="text-xs text-gray-600">{partner.type}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Corporate Partnership</h3>
              <p className="text-gray-600 text-sm">
                Partner with us for CSR initiatives, employee engagement programs, and sustainable business practices.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Government Collaboration</h3>
              <p className="text-gray-600 text-sm">
                Work with municipal corporations, smart city initiatives, and public-private partnerships.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">NGO Alliance</h3>
              <p className="text-gray-600 text-sm">
                Collaborate with environmental NGOs, community organizations, and social impact groups.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Partnership Inquiry Form */}
        <Card className="max-w-4xl mx-auto shadow-xl border-0 bg-gradient-to-br from-gray-50 to-white">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-semibold text-gray-800 flex items-center justify-center gap-2">
              <Handshake className="w-6 h-6 text-green-600" />
              Partnership Inquiry
            </CardTitle>
            <CardDescription className="text-base">
              Interested in partnering with SwachhSaathi? Let's discuss how we can work together.
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="companyName" className="text-sm font-semibold text-gray-700">
                    Company/Organization Name *
                  </Label>
                  <Input
                    id="companyName"
                    placeholder="Enter company name"
                    value={formData.companyName}
                    onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                    className="border-green-200 focus:border-green-400"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactPerson" className="text-sm font-semibold text-gray-700">
                    Contact Person *
                  </Label>
                  <Input
                    id="contactPerson"
                    placeholder="Your full name"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData(prev => ({ ...prev, contactPerson: e.target.value }))}
                    className="border-green-200 focus:border-green-400"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="contact@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="border-green-200 focus:border-green-400"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    placeholder="Contact number"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="border-green-200 focus:border-green-400"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="partnershipType" className="text-sm font-semibold text-gray-700">
                  Partnership Type *
                </Label>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, partnershipType: value }))}>
                  <SelectTrigger className="border-green-200 focus:border-green-400">
                    <SelectValue placeholder="Select partnership type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="csr">Corporate CSR Partnership</SelectItem>
                    <SelectItem value="technology">Technology Partnership</SelectItem>
                    <SelectItem value="recycling">Recycling Partnership</SelectItem>
                    <SelectItem value="government">Government Collaboration</SelectItem>
                    <SelectItem value="ngo">NGO Alliance</SelectItem>
                    <SelectItem value="funding">Funding/Investment</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-semibold text-gray-700">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your organization and how you'd like to partner with SwachhSaathi..."
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className="border-green-200 focus:border-green-400 min-h-[100px]"
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Submit Partnership Inquiry
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PartnersSection;
