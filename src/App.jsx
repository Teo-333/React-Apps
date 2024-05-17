import "./styles/App.css";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Login from "./pages/Login/Main/Main.jsx";
import Main from "./pages/Menu/Main/Main.jsx";
import Home from "./pages/Home/Main/Main.jsx";
import Error from "./pages/Error/Main/Main.jsx"
import Company from "./pages/Company/Main/Main.jsx";

import { CountProvider } from "./context/CountContext.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./context/ErrorBoundry.jsx";


function App() {
  return (
    <CountProvider>
      <ErrorBoundary>
      <div className="container">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/menu" element={<Main />} />
            <Route path="/home" element={<Home />} />
            <Route path="/company" element={<Company />}/>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </Router>
      </div>
      </ErrorBoundary>
    </CountProvider>
  );
}

export default App;
