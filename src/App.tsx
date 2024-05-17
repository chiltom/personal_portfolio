import "./App.css";
import { Outlet } from "react-router-dom";
import { ReactElement } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App: React.FC = (): ReactElement => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
