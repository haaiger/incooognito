import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import First from "./First";
import NotFound from "./NotFound";
import Login from "./Login";
import Registration from "./Registration";

function MainRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/first",
      element: <First />,
    },
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
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default MainRouter;
