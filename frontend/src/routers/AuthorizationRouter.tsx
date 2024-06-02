import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import { Login, Registration } from "../pages";

function MainRouter() {
  const pages: RouteObject[] = [
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/registration",
      element: <Registration />,
    },
    {
      path: "*",
      element: <Navigate to="/login" />,
    },
  ];

  const routes = useRoutes(pages);

  return routes;
}

export default MainRouter;
