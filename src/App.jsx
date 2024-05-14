import "./styles/App.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.jsx";
import { CountContext } from "./context/CountContext.jsx";


function App() {
  return (
    <CountContext.Provider>
      <div className="container">
          <Header />
          <RouterProvider router={router} />
          <Footer />
      </div>
    </CountContext.Provider>
  );
}

export default App;