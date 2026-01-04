import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import NewApplication from "./pages/NewApplication";
import ApplicationStatus from "./pages/ApplicationStatus";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "vloga/nova", Component: NewApplication },
      { path: "vloga/status", Component: ApplicationStatus },
      { path: "admin", Component: AdminDashboard },
      { path: "*", Component: NotFound },
    ],
  },
]);
