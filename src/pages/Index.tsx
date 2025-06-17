
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Camera, Recycle, Heart, Leaf, Shield, Award } from "lucide-react";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import ReportWasteSection from "@/components/ReportWasteSection";
import JoinWorkerSection from "@/components/JoinWorkerSection";
import LiveMapSection from "@/components/LiveMapSection";
import PartnersSection from "@/components/PartnersSection";
import BlogSection from "@/components/BlogSection";
import StatsSection from "@/components/StatsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <HeroSection />
      <StatsSection />
      <HowItWorksSection />
      <ReportWasteSection />
      <JoinWorkerSection />
      <LiveMapSection />
      <TestimonialsSection />
      <PartnersSection />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Index;
