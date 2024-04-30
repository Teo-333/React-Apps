import { createBrowserRouter } from "react-router-dom";

// import Home from "./routes/Home/";
import Menu from "./routes/Menu/Menu";
import Main from "../src/pages/Error/Main/Main";

  
export const router = createBrowserRouter([
    // {
    //   path: "/",
    //   component: <Home/>,
    // },
    {
      path: "/",
      element: <Menu />,
      errorElement: <Main />, // Optional
    },
  ]);