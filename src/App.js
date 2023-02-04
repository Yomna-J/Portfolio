import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App bg-darkGray font-Inconsolata text-secondary ">
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
