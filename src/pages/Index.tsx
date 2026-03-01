import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ResearchOverview from "@/components/ResearchOverview";
import MethodologySection from "@/components/MethodologySection";
import DataSourcesSection from "@/components/DataSourcesSection";
import DataVisualization from "@/components/DataVisualization";
import TeamSection from "@/components/TeamSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <div id="overview">
        <ResearchOverview />
      </div>
      <div id="methodology">
        <MethodologySection />
      </div>
      <div id="data">
        <DataSourcesSection />
      </div>
      <div id="visualizations">
        <DataVisualization />
      </div>
      <div id="team">
        <TeamSection />
      </div>
    </div>
  );
};

export default Index;
