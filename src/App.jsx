import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Questions from "./components/Questions";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="w-full h-full font-sans text-white">
      <Navbar />
      <Hero />
      <Pricing />
      <Questions />
      <Contact />
    </div>
  );
};

export default App;
