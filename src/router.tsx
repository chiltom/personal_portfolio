import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "@pages/Home";
import About from "@pages/About";
import Contact from "@pages/Contact";
import Portfolio from "@pages/Portfolio";
import Blog from "@pages/Blog";
import BlogPost from "@pages/BlogPost";
import ErrorPage from "@pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about/",
        element: <About />,
      },
      {
        path: "contact/",
        element: <Contact />,
      },
      {
        path: "portfolio/",
        element: <Portfolio />,
      },
      {
        path: "blog/",
        element: <Blog />,
      },
      {
        path: "blog/:id/",
        element: <BlogPost />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
