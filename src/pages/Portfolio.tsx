import CTASection from "@src/components/portfolio/CTASection";
import FAQSection from "@src/components/portfolio/FAQSection";
import GallerySection from "@src/components/portfolio/GallerySection";
import PorfolioItemHeaderSection from "@src/components/portfolio/PortfolioItemHeaderSection";
import PortfolioListSection from "@src/components/portfolio/PortfolioListSection";
import TechnologiesSection from "@src/components/portfolio/TechnologiesSection";
import { ReactElement } from "react";

const Porfolio: React.FC = (): ReactElement => {
  return (
    <div>
      <PorfolioItemHeaderSection />
      <PortfolioListSection />
      <GallerySection />
      <TechnologiesSection />
      <FAQSection />
      <CTASection />
    </div>
  )
};

export default Porfolio;
