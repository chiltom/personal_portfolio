import { ReactElement } from "react";

const HeroHeader: React.FC = (): ReactElement => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold">Hero Header Section</h1>
        <p className="mt-4 text-lg">
          Showcase dynamic hero section highlighting
        </p>
      </div>
    </section>
  );
};

export default HeroHeader;
