import { ReactElement } from "react";

const FAQSection: React.FC = (): ReactElement => {
  return (
    <section className="bg-gray-200 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">FAQ Section</h2>
        <p className="mt-4 text-lg">
          Provide answers to common questions about the work, the process, or
          collaboration.
        </p>
      </div>
    </section>
  );
};

export default FAQSection;
