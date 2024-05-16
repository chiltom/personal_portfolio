import { ReactElement } from "react";

const GallerySection: React.FC = (): ReactElement => {
  return (
    <section className="bg-gray-200 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Gallery Section</h2>
        <p className="mt-4 text-lg">
          A visual gallery of work, showcasing different projects with the
          option to click through for more details.
        </p>
      </div>
    </section>
  );
};

export default GallerySection;
