import { RouteObject } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./App";
import { AboutPage, HomePage, NoMatchPage } from "./pages";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        id: "home",
        index: true,
        element: <HomePage />,
      },
      {
        id: "about",
        path: "about",
        element: <AboutPage />,
      },
      {
        id: "nomatch",
        path: "*",
        element: <NoMatchPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
