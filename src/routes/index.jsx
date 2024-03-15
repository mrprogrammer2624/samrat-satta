import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Login from "../pages/Login";
import StyleSheets from "../pages/styleSheets";
import Mpin from "../pages/Mpin";
import PageLayout from "../layout/PageLayout";
import BankDetails from "../pages/BankDetails";
import NotificationHistory from "../pages/NotificationHistory";

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
    id: "PageLayout",
    name: "PageLayout",
    element: <PageLayout />,
    children: [
      {
        path: "/bank-details",
        id: "bankDetails",
        name: "bank-details",
        element: <BankDetails />,
        children: false,
      },
      {
        path: "/notification-history",
        id: "notificationHistory",
        name: "notification-history",
        element: <NotificationHistory />,
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
  {
    path: "*",
    id: "NotFound",
    name: "Not-Found",
    element: "Not Valid Link",
    children: false,
  },
]);

export default router;
