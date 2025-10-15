import React from "react";
import { AnimatePresence, motion } from "motion/react";

const QuestionTab = ({ question, answer }) => {
  const [openTab, setOpenTab] = React.useState(false);
  return (
    <div className="w-full  font-medium text-2xl ">
      <motion.button
        onClick={() => setOpenTab((prev) => !prev)}
        className="flex justify-between items-center w-full cursor-pointer bg-white/80 text-black p-2 rounded-2xl hover:bg-white/95"
      >
        <span>{question}</span>
        <span>{openTab ? "-" : "+"}</span>
      </motion.button>
      <AnimatePresence>
        {openTab && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-3 p-2 rounded-2xl"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QuestionTab;
