import "./Menu.css";
import Header from "../../components/Header/Header.jsx";
import Main from "../../pages/Menu/Main/Main.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { useState } from "react";

function Menu() {
  const [count, setCount] = useState(0);

  const handleAddition = (value) => {
    setCount((prevCount) => prevCount + value);
  };

  return (
    <div className="container">
      <div className="App">
        <Header count={count} />
        <Main handleAddition={handleAddition} />
        <Footer />
      </div>
    </div>
  );
}

export default Menu;

// import React, { useState } from "react";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Header from "./components/Header/Header.jsx";
// import MenuMain from "./pages/Menu/Main/Main.jsx";
// import HomeMain from "./pages/Home/Main/Main.jsx";
// import Footer from "./components/Footer/Footer.jsx";
// import "./styles/App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   const handleAddition = (value) => {
//     setCount((prevCount) => prevCount + value);
//   };

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       component: HomeMain,
//     },
//     {
//       path: "/menu",
//       component: MenuMain,
//       handleAddition: handleAddition,
//     },
//   ]);

//   return (
//     <div className="container">
//       <div className="App">
//         <Header count={count} />
//         {/* <Routes>
//           <Route
//             path="/"
//             render={(props) => (
//               <MenuMain {...props} handleAddition={handleAddition} />
//             )}
//           />
//           <Route path="/home" element={HomeMain} />

//         </Routes> */}

//         <RouterProvider router={router} />

//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default App;
