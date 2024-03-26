import Footer from "../../components/Footer/Footer.jsx";
import Header from "../../components/Header/Header.jsx";
import Main from "../../pages/Home/Main/Main.jsx";
import "./Home.css";


export default function Home() {

  return(
    <div className="container-home">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
 