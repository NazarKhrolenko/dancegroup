import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Questions from "./components/Questions";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Particles from "./font/Particles";
import GradualBlur from "./font/GradualBlur";
import Silk from "./font/Silk";
import Beams from "./font/Beams";

const App = () => {
  return (
    <div className="relative w-full min-h-screen font-sans text-white bg-black/100 overflow-x-hidden">
      <div className="relative z-10 flex flex-col">
        <Navbar />
        <Hero />
        <Pricing />
        <Questions />
        <Contact />
        <Gallery />
      </div>
    </div>
  );
};

export default App;
