import React from "react";
import * as motion from "motion/react-client";

const PriceCard = ({ title, features, price }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      className="w-[250px] rounded-3xl overflow-hidden"
    >
      <div className=" bg-amber-300 flex flex-col items-center p-5 ">
        <div className="pb-3 ">
          <h3 className="pb-3 uppercase">{title}</h3>
          <ul>
            {features.map((feature, index) => {
              return <li key={index}>{feature}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="bg-blue-500 p-4">
        <div className="flex justify-center">
          <p>{price}</p>
          <p>zł</p>
        </div>
      </div>
    </motion.div>
  );
};

export default PriceCard;
