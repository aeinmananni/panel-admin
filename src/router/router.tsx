import { RouteObject, createBrowserRouter } from "react-router";
import { Home } from "../home";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    children: [],
  },
  {
    path: "*",
    element: <h1>Not Found</h1>,
  },
];

const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_startTransition: true,
  },
});

export default router;
