import { ReactElement } from "react";

const CTASection: React.FC = (): ReactElement => {
  return (
    <section className="bg-gray-200 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">CTA Section</h2>
        <p className="mt-4 text-lg">
          A call-to-action prompting visitors to get in touch for potential
          projects.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
