import { ReactElement } from "react";

const HowItWorksSection: React.FC = (): ReactElement => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">How It Works Section.</h2>
        <p className="mt-4 text-lg">
          Explain the development process and tools used in projects.
        </p>
      </div>
    </section>
  );
};

export default HowItWorksSection;
