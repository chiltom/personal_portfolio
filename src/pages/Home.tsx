import { ReactElement } from "react";
import HeroHeader from "../components/home/HeroHeader";
import FeatureSection from "../components/home/FeatureSection";
import BenefitsSection from "../components/home/BenefitsSection";
import HowItWorksSection from "../components/home/HowItWorksSection";
import ServicesSection from "../components/home/ServicesSection";
import AboutSection from "../components/home/AboutSection";
import StatsSection from "../components/home/StatsSection";
import CTASection from "../components/home/CTASection";
import { TabTitle } from "@src/utilities/documentUtilities";

const Home: React.FC = (): ReactElement => {
  TabTitle('Tom Childress - Site');

  return (
    <div>
      <HeroHeader />
      <FeatureSection />
      <BenefitsSection />
      <HowItWorksSection />
      <ServicesSection />
      <AboutSection />
      <StatsSection />
      <CTASection />
    </div>
  )
};

export default Home;
