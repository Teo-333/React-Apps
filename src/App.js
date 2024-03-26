import "./styles/App.css";
import Header from "./components/Header/Header.jsx";
import Main from "./pages/Menu/Main/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { useState } from "react";

function App() {
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

export default App;
