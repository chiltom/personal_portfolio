import { ReactElement } from "react";

const PorfolioItemHeaderSection: React.FC = (): ReactElement => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold">Portfolio</h1>
        <p className="mt-4 text-lg">
          A compelling header for the portfolio page, potentially with a brief
          statement of the work and skills showcased.
        </p>
      </div>
    </section>
  );
};

export default PorfolioItemHeaderSection;
