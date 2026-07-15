import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-[#0B0B0F] dark:text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </div>
  );
}

export default App;