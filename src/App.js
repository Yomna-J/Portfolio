import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App bg-darkGray font-Inconsolata text-secondary ">
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
    </div>
  );
}

export default App;
