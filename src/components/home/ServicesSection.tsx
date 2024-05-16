import { ReactElement } from "react";

const ServicesSection: React.FC = (): ReactElement => {
  return (
    <section className="bg-gray-200 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Services Section</h2>
        <p className="mt-4 text-lg">
          Detail the services offered such as UI/UX design, web app development,
          and mobile responsiveness.
        </p>
      </div>
    </section>
  );
};

export default ServicesSection;
