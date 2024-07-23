import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Browse from "./Pages/Browse.jsx";
import Search from "./Pages/Search.jsx";
import Profile from "./Pages/Profile.jsx";
import Help from "./Pages/Help.jsx";
import Browse_Categories from "./Pages/Browse_Categories.jsx";
import Hatchbacks from "./Pages/Hatchbacks.jsx";
import Sedan from "./Pages/Sedan.jsx";
import Trucks from "./Pages/Trucks.jsx";
import Van from "./Pages/Van.jsx";
import Wagon from "./Pages/Wagon.jsx";
import Suv from "./Pages/Suv.jsx";
import Coupe from "./Pages/Coupe.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/browse",
        element: <Browse />,
      },
      {
        path: "/browse/categories",
        element: <Browse_Categories />,
        children: [
          { path: "/browse/categories/hatchbacks", element: <Hatchbacks /> },
          { path: "/browse/categories/sedans", element: <Sedan /> },
          { path: "/browse/categories/coupes", element: <Coupe /> },
          { path: "/browse/categories/suvs", element: <Suv /> },
          { path: "/browse/categories/wagons", element: <Wagon /> },
          { path: "/browse/categories/vans", element: <Van /> },
          { path: "/browse/categories/trucks", element: <Trucks /> },
        ],
      },
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
