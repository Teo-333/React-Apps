import "./Login.css";
import Header from "../../components/Header/Header.jsx";
import Main from "../../pages/Login/Main/Main.jsx";
import Footer from "../../components/Footer/Footer.jsx";


function Login() {
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

export default Login;
