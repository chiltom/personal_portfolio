import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import ProjectPage from "./pages/ProjectPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about/",
        element: <About />,
      },
      {
        path: "projects/",
        element: <ProjectPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
