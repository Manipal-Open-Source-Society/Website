import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Landing from "./Pages/Landing/Landing";
import Home from "./Pages/Home/Home";
import Team from "./Pages/Team/Team";
import Msoc from "./Pages/Msoc/Msoc";

const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <Landing/>
    },
    {
      path:"/home",
      element: <Home/>
    },
    {
      path:"/team",
      element: <Team/>
    },
    {
      path:"/msoc",
      element: <Msoc/>
    }
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
