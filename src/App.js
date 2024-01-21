import logo from "./logo.svg";
import "./App.css";
import AnimatedText from "./components/AnimatedText/AnimatedText";
import SideNav from "./components/SideNav/SideNav";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="main-content-wrapper">
          <SideNav></SideNav>
          <AnimatedText></AnimatedText>
        </div>
      </header>
      <body>
     
      </body>
    </div>
  );
}

export default App;
