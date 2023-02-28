import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BackgroundColorChanger } from "../Pages/BackgroundColorChanger";
import Index from "../Pages/Index";
import Calculator from "../Pages/Calculator";

import "../styles/App.css";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/bgcolor/:colorname",
      element: <BackgroundColorChanger />,
    },
    {
      path: "/calculator/",
      element: <Calculator />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
