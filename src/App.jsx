import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Questions from "./components/Questions";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";

const App = () => {
  return (
    <div className="w-full h-full font-sans text-white bg-gray-700">
      <Navbar />
      <Hero />
      <Pricing />
      <Questions />
      <Contact />
      <Gallery />
    </div>
  );
};

export default App;
