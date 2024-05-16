import "./App.css";
import { Outlet } from "react-router-dom";
import { ReactElement } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App: React.FC = (): ReactElement => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
