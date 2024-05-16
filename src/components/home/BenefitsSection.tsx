import { ReactElement } from "react";

const BenefitsSection: React.FC = (): ReactElement => {
  return (
    <section className="bg-gray-200 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Benefits Section</h2>
        <p className="mt-4 text-lg">
          Outline the benefits of hiring a front-end developer with React.js
          experience.
        </p>
      </div>
    </section>
  );
};

export default BenefitsSection;
