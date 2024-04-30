import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.jsx";

import "./styles/index.css";

// ReactDOM.render(
//   <React.StrictMode>
//     <RouterProvider router={router}>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
function aa() {
  return <div>{router}</div>;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
