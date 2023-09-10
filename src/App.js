import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <BrowserRouter>
       <Analytics />
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
