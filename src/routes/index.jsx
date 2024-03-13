import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Login from "../pages/Login";
import StyleSheets from "../pages/styleSheets";
import Mpin from "../pages/Mpin";

const router = createBrowserRouter([
  {
    path: "/",
    id: "HomeLayout",
    name: "HomeLayout",
    element: <RootLayout />,
    children: [
      {
        index: true,
        id: "",
        name: "",
        element: "",
        children: false,
      },
    ],
  },
  {
    path: "mpin",
    id: "mpin",
    name: "mpin",
    element: <Mpin />,
    children: false,
  },
  {
    path: "login",
    id: "login",
    name: "login",
    element: <Login />,
    children: false,
  },
  {
    path: "style-guide",
    id: "style-sheet",
    name: "style-sheet",
    element: <StyleSheets />,
    children: false,
  },
]);

export default router;
