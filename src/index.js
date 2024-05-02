// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import { RouterProvider } from "react-router-dom";
// import { router } from "./router.jsx";
// import "./styles/index.css";
// import Header from "./components/Header/Header.jsx";
// import Footer from "./components/Footer/Footer.jsx";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Header count={count} />
//     <RouterProvider router={router} />
//     <Footer />
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
