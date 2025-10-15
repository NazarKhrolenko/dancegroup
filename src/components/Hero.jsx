import React from "react";
import "../App.css";
import * as motion from "motion/react-client";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="./IMG_3668.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-black/20 to-black/100"></div>

      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
          duration: 0.8,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
        onClick={() => window.open("https://www.instagram.com")}
        className="
          relative z-10 
          text-white font-stretch-50%
          rounded-full 
          bg-white/10 backdrop-blur-md
          px-8 py-4 md:px-12 md:py-5
          text-2xl md:text-3xl
          border-2 border-blue-400 
          shadow-lg shadow-blue-400 
          hover:bg-blue-400 
          cursor-pointer
        "
      >
        Zapisac sie na probne
      </motion.button>
    </section>
  );
};

export default Hero;
