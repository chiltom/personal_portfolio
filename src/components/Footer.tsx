import { ReactElement } from "react";

const Footer: React.FC = (): ReactElement => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Thomas Childress. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
