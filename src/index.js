import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Buy from "../src/pages/Buy";
import MyTicket from "../src/pages/MyTicket";
import ActiveTicket from "../src/pages/ActiveTicket";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/buy",
    element: <Buy />
  },
  {
    path: "/my_ticket",
    element: <MyTicket />
  },
  {
    path: "/active_ticket",
    element: <ActiveTicket />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
