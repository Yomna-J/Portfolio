import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-darkGray font-Inconsolata text-secondary ">
        <Navbar />
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
