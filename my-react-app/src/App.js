import "./App.css";
import MainContent from "./MainContent";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Hello, React!</h1>
        {MainContent()}
      </div>
    </div>
  );
}

export default App;
