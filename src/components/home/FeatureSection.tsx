import { ReactElement } from "react";

const FeatureSection: React.FC = (): ReactElement => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Feature Section</h2>
        <p className="mt-4 text-lg">
          Highlight React.js expertise with a dedicated feature section.
        </p>
      </div>
    </section>
  );
};

export default FeatureSection;
