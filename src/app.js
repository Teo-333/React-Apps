// import "./styles/App.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.jsx";
import { CountProvider } from "./contexts/CountContext.js";

function App() {
  return (
    <CountProvider>
      <div className="container">
        <div className="App">
          <Header />
          <RouterProvider router={router} />
          <Footer />
        </div>
      </div>
    </CountProvider>
  );
}

export default App;
