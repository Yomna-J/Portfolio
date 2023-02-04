import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="App bg-darkGray font-Inconsolata text-secondary ">
      <Navbar />
      <Hero />
      <Experience />
    </div>
  );
}

export default App;
