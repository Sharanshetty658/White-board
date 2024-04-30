import React from "react";
import { useRoutes } from "react-router-dom";
//import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Home1 from "pages/Home1";
import Login from "pages/Login";
import SignIn from "pages/SignIn"

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home1 /> },
    { path: "*", element: <NotFound /> },
    {
      path: "home1",
      element: <Home1 />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "SignIn",
      element: <SignIn />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
