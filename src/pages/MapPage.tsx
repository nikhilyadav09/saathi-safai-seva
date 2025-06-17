
import Navbar from "@/components/navigation/Navbar";
import InteractiveMap from "@/components/maps/InteractiveMap";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MapPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Live Waste Reports Map</h1>
          <p className="text-lg text-gray-600">
            Track real-time waste reports and cleanup activities across India
          </p>
        </div>
        
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Interactive Map</CardTitle>
          </CardHeader>
          <CardContent>
            <InteractiveMap />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MapPage;
