import { ReactElement } from "react";

const CTASection: React.FC = (): ReactElement => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">CTA Section</h2>
        <p className="mt-4 text-lg">
          A call-to-action for potential clients to get in touch regarding
          project inquiries or collaborations.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
