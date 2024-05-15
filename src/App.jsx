// import "./styles/App.css";
// import Header from "./components/Header/Header.jsx";
// import Footer from "./components/Footer/Footer.jsx";
// import { RouterProvider } from "react-router-dom";
// import { router } from "./router.jsx";
// import { CountProvider } from "./context/CountContext.jsx";


// function App() {
//   return (
//     <CountProvider>
//       <div className="container">
//           <Header />
//           <RouterProvider router={router} />
//           <Footer />
//       </div>
//     </CountProvider>
//   );
// }

// export default App;

import "./styles/App.css";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Login from "./pages/Login/Main/Main.jsx";
import Main from "./pages/Menu/Main/Main.jsx";
import Home from "./pages/Home/Main/Main.jsx";
import Error from "./pages/Error/Main/Main.jsx"

import { CountProvider } from "./context/CountContext.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <CountProvider>
      <div className="container">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Login />} errorElement={<Error />} />
            <Route path="/menu" element={<Main />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </CountProvider>
  );
}

export default App;
