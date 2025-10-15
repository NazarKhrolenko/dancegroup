import React from "react";
import * as motion from "motion/react-client";
import ElectricBorder from "../font/ElectricBorder";

const PriceCard = ({ title, features, price }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      className="w-[250px] rounded-3xl bg-white/10 backdrop-blur-md"
    >
      <div className="flex flex-col items-center p-8 h-full ">
        <h3 className="uppercase text-xl font-bold mb-4 text-cyan-300 tracking-wider">
          {title}
        </h3>
        <ul className="text-center text-md text-gray-200 space-y-2 mb-6">
          {features.map((feature, index) => {
            return (
              <li
                className="hover:text-yellow-400 transition-colors duration-200"
                key={index}
              >
                {feature}
              </li>
            );
          })}
        </ul>
        <div className="bg-cyan-500/20 px-6 flex justify-center items-baseline rounded-xl gap-1 ">
          <p className="text-3xl font-extrabold text-cyan-300">{price}</p>
          <p className="text-lg text-gray-300">zł</p>
        </div>
      </div>
    </motion.div>
  );
};

export default PriceCard;
