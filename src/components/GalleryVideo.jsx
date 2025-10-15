import React from "react";
import { FaPlay } from "react-icons/fa";
import * as motion from "motion/react-client";

const GalleryVideo = ({ poster, onClick }) => {
  return (
    <div onClick={onClick} className="w-[350px] h-[450px] overflow-hidden">
      <div className="relative cursor-pointer w-full h-full  ">
        <img src={poster} alt="preview" className="rounded-3xl w-full h-full" />
        {/* Напівпрозора затемнююча підкладка при hover */}
        <motion.div
          className="absolute inset-0 bg-black/30"
          whileHover={{ backgroundColor: "rgba(0,0,0,0.6)" }}
          transition={{ duration: 0.3 }}
        ></motion.div>

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          whileHover={{
            scale: [1, 1.5, 1],
            transition: { duration: 0.4, ease: "easeOut" },
          }}
        >
          <FaPlay size={40} className="text-white drop-shadow-lg" />{" "}
        </motion.div>
      </div>
    </div>
  );
};

export default GalleryVideo;
