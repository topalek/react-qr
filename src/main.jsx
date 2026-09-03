import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import Generator from "./Generator";
import Scanner from "./Scanner";

let router = createBrowserRouter([
  {
    path: "/",
    Component: () => <div>test</div>,
  },
  {
    path: "/generate",
    Component: Generator,
  },
  {
    path: "/scan",
    Component: Scanner,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
