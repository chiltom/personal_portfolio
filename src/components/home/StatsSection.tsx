import { ReactElement } from "react";

const StatsSection: React.FC = (): ReactElement => {
  return (
    <section className="bg-gray-200 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Stats Section</h2>
        <p className="mt-4 text-lg">
          Display coding statistics, lines of code, number of projects
          completed, etc.
        </p>
      </div>
    </section>
  );
};

export default StatsSection;
