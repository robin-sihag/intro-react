import logo from "./logo.svg";
import "./App.css";
import AnimatedText from "./components/AnimatedText/AnimatedText";
import SideNav from "./components/SideNav/SideNav";
import { Route, Routes } from "react-router-dom";
import AboutMe from "./components/aboutme/aboutme";
import ContactMe from "./components/contactme/contactme";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="main-content-wrapper">
          <SideNav></SideNav>
          <Routes>
            <Route path="/" Component={AnimatedText}></Route>
            <Route path="/about" Component={AboutMe}></Route>
            <Route path="/contact" Component={ContactMe}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
