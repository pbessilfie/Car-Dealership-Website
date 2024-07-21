import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Browse from "./Pages/Browse.jsx";
import Search from "./Pages/Search.jsx";
import Profile from "./Pages/Profile.jsx";
import Help from "./Pages/Help.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/browse", element: <Browse /> },
      { path: "/search", element: <Search /> },
      { path: "/profile", element: <Profile /> },
      { path: "/help", element: <Help /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />{" "}
  </React.StrictMode>
);
