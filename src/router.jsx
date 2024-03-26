import { createBrowserRouter } from "react-router-dom";

import Home from "./routes/Home/Home";
import Menu from "./routes/Menu/Menu";
import Main from "../src/pages/Error/Main/Main";

  
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
    }
  ]);

// TODO: Fix Rerender of Footer and Header