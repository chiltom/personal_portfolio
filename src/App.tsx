import { Outlet } from "react-router-dom";
import "./App.css";
import { ReactElement } from "react";

const App: React.FC = (): ReactElement => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default App;
