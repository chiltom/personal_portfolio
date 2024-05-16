import { ReactElement } from "react";

const AboutSection: React.FC = (): ReactElement => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">About Section</h2>
        <p className="mt-4 text-lg">
          A brief personal introduction and professional background.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
