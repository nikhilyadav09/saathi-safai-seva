
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Camera, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ReportWasteSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    location: "",
    wasteType: "",
    description: "",
    photo: null as File | null,
    phone: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Waste report submitted:", formData);
    
    toast({
      title: "Report Submitted Successfully!",
      description: "Thank you for helping make your city cleaner. Our team will respond within 24 hours.",
    });

    // Reset form
    setFormData({
      location: "",
      wasteType: "",
      description: "",
      photo: null,
      phone: ""
    });
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, photo: file }));
    }
  };

  return (
    <section id="report-waste" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Report Waste in Your Area
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Spotted garbage or waste? Help us clean it up! Every report makes a difference in building a cleaner India.
            </p>
          </div>

          <Card className="shadow-xl border-0 bg-gradient-to-br from-green-50 to-blue-50">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-semibold text-gray-800 flex items-center justify-center gap-2">
                <Camera className="w-6 h-6 text-green-600" />
                Submit Your Report
              </CardTitle>
              <CardDescription className="text-base">
                Fill out the form below to report waste in your area
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="location" className="text-sm font-semibold text-gray-700">
                      Location Details *
                    </Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <Input
                        id="location"
                        placeholder="Enter detailed address or landmark"
                        value={formData.location}
                        onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                        className="pl-10 border-green-200 focus:border-green-400"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      placeholder="Your contact number"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="border-green-200 focus:border-green-400"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="wasteType" className="text-sm font-semibold text-gray-700">
                    Type of Waste *
                  </Label>
                  <Select onValueChange={(value) => setFormData(prev => ({ ...prev, wasteType: value }))}>
                    <SelectTrigger className="border-green-200 focus:border-green-400">
                      <SelectValue placeholder="Select waste category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="plastic">Plastic Waste</SelectItem>
                      <SelectItem value="organic">Organic Waste</SelectItem>
                      <SelectItem value="paper">Paper Waste</SelectItem>
                      <SelectItem value="metal">Metal Waste</SelectItem>
                      <SelectItem value="electronic">Electronic Waste</SelectItem>
                      <SelectItem value="mixed">Mixed Waste</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="photo" className="text-sm font-semibold text-gray-700">
                    Upload Photo *
                  </Label>
                  <div className="border-2 border-dashed border-green-300 rounded-lg p-6 text-center hover:border-green-400 transition-colors">
                    <input
                      type="file"
                      id="photo"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="hidden"
                      required
                    />
                    <label htmlFor="photo" className="cursor-pointer">
                      <Camera className="w-12 h-12 text-green-500 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">
                        {formData.photo ? formData.photo.name : "Click to upload waste photo"}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 10MB</p>
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-sm font-semibold text-gray-700">
                    Additional Description
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Describe the waste situation, severity, or any additional details..."
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    className="border-green-200 focus:border-green-400 min-h-[100px]"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Submit Waste Report
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ReportWasteSection;
