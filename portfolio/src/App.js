import logo from "./logo.svg";
import "./App.css";
import HeroSection from "../src/components/herosection";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <div className="App">
      <AnimatedCursor />
      <HeroSection />
    </div>
  );
}

export default App;
