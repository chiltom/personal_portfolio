import { ReactElement } from "react";

const TechnologiesSection: React.FC = (): ReactElement => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Technologies Section</h2>
        <p className="mt-4 text-lg">
          Include technologies used to develop applications.
        </p>
      </div>
    </section>
  );
};

export default TechnologiesSection;
