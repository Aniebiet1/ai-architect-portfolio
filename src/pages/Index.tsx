import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CoreExpertise from "@/components/CoreExpertise";
import FeaturedProjects from "@/components/FeaturedProjects";
import AgenticAI from "@/components/AgenticAI";
import CaseStudies from "@/components/CaseStudies";
import TechStack from "@/components/TechStack";
import Research from "@/components/Research";
import Archievements from "@/components/Archievements";
import OpenSource from "@/components/OpenSource";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <CoreExpertise />
      <FeaturedProjects />
      <AgenticAI />
      <CaseStudies />
      <TechStack />
      <Research />
      <Archievements />
      <OpenSource />
      <Contact />
    </div>
  );
};

export default Index;
