import React from "react";
import "../App.css";
import * as motion from "motion/react-client";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="./hero-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
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
        className="text-white text-5xl my-auto bg-pink-700 py-4 px-12 rounded-full font-medium hover:bg-red-800 z-10 "
      >
        Zapisac sie na probne
      </motion.button>
    </section>
  );
};

export default Hero;
