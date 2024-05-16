import { ReactElement } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = (): ReactElement => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <Link to="/">Brand</Link>
        </div>
        <div className="space-x-4">
          <Link to="/portfolio" className="text-gray-300 hover:text-white">
            Portfolio
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-white">
            About
          </Link>
          <Link to="/contact" className="text-gray-300 hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
