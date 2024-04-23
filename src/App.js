import "./styles/App.css";
import Header from "./pages/Common/Header/Header.jsx";
import { Main } from "./pages/Home/components/Main/Main.jsx";
import Footer from "./pages/Common/Footer/Footer.jsx";

function App() {
  return (
    <div className="container">
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
