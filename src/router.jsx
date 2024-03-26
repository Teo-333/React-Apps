import { createBrowserRouter } from "react-router-dom";

import Home from "./routes/Home/Home";
import Menu from "./routes/Menu/Menu";
import Main from "../src/pages/Error/Main/Main";
import Login from "./routes/Login/Login";

  
export const router = createBrowserRouter([
    {
      path: "/home",
      element: <Home/>,
    },
    {
      path: "/",
      element: <Menu />,
      errorElement: <Main />, 
    },
    {
      path: "/menu",
      element: <Menu />,
    },
    {
      path:"/login",
      element:<Login />
    }
  ]);

// TODO: Fix Rerender of Footer and Header