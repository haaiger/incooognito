import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import First from "./First";
import NotFound from "./NotFound";

function MainRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      ErrorBoundary: () => <div>Error</div>,
    },
    {
      path: "/first",
      element: <First />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default MainRouter;
