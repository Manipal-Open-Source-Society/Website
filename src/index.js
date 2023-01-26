import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import About from "./Pages/About/About";
import Landing from "./Pages/Landing/Landing";
import Home from "./Pages/Home/Home";

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
    path:"/about",
    element: <About/>
  }
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
