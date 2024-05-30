import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import First from "./First";

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
  ]);

  return <RouterProvider router={router} />;
}

export default MainRouter;
