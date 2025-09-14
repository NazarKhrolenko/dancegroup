import React from "react";
import QuestionTab from "./QuestionTab";

const Questions = () => {
  const questionAndAnswers = [
    {
      question: "Jak mogę się zapisać?",
      answer:
        "Możesz zapisać się online przez formularz na stronie albo w recepcji studia.",
    },
    {
      question: "Jakie są godziny otwarcia?",
      answer: "Od poniedziałku do piątku 10:00 - 22:00, sobota 10:00 - 18:00.",
    },
    {
      question: "Czy mogę przyjść kiedy chcę?",
      answer: "Tak, ale najlepiej sprawdzić grafik zajęć wcześniej.",
    },
  ];
  return (
    <div className="pt-20 bg-gray-700 flex flex-col justify-center items-center ">
      <h2 className="font-bold text-5xl pb-5">Często zadawane pytania</h2>
      <div className="w-full flex flex-col gap-3">
        {questionAndAnswers.map((qestionTab, index) => {
          return (
            <QuestionTab
              key={index}
              question={qestionTab.question}
              answer={qestionTab.answer}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Questions;
