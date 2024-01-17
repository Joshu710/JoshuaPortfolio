import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Alert, Navbar, Button } from "flowbite-react";
import MyNavbar from "./components/MyNavBar";
import Projects from "./components/Projects";
import MyFooter from "./components/MyFooter";
import About from "./components/About";
import Skills from "./components/Skills";
import Exp from "./components/Exp";
import Education from "./components/Education";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <About></About>
      </div>

      <Education></Education>
      <Skills></Skills>
      <Projects></Projects>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
