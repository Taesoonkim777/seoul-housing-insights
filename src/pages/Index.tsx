import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import QuickNav from "@/components/QuickNav";
import ResearchOverview from "@/components/ResearchOverview";
import StorySection from "@/components/StorySection";
import MethodologySection from "@/components/MethodologySection";
import AnalysisSection from "@/components/AnalysisSection";
import TeamSection from "@/components/TeamSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <QuickNav />
      <div id="overview">
        <ResearchOverview />
      </div>
      <div id="story">
        <StorySection />
      </div>
      <div id="methodology">
        <MethodologySection />
      </div>
      <div id="analysis">
        <AnalysisSection />
      </div>
      <div id="team">
        <TeamSection />
      </div>
    </div>
  );
};

export default Index;
