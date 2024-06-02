import { Navigate, RouteObject, useRoutes } from "react-router-dom";

import { Main, First, NotFound } from "../pages";

function MainRouter() {
  const pages: RouteObject[] = [
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/first",
      element: <First />,
    },
    {
      path: "/404",
      element: <NotFound />,
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ];

  const routes = useRoutes(pages);

  return routes;
}

export default MainRouter;
