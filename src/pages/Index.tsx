import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MLWorkbenchSection from "@/components/MLWorkbenchSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MLWorkbenchSection />
    </div>
  );
};

export default Index;
