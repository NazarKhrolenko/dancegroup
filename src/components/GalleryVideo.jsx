import React from "react";
import { FaPlay } from "react-icons/fa";
import * as motion from "motion/react-client";

const GalleryVideo = ({ poster, onClick }) => {
  return (
    <motion.div whileHover={{ scale: 1.2 }}>
      <div onClick={onClick} className="w-[300px] h-[400px]">
        <div className="relative cursor-pointer ">
          <img src={poster} alt="preview" className="ras" />
          <div>
            <FaPlay size={30} className="absolute left-[50%] top-[50%]" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GalleryVideo;
