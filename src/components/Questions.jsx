import React from "react";
import QuestionTab from "./QuestionTab";

const Questions = () => {
  const questionAndAnswers = [
    {
      question: "Jak mogę zapisać się na zajęcia próbne?",
      answer:
        "Możesz zapisać się przez formularz lub prywatne wiadomości na Instagramie.",
    },
    {
      question: "Ile czasu trwają zajęcia?",
      answer: "Zajęcia trwają 1 godzinę",
    },
    {
      question: "Czy mogę przyjść kiedy chcę?",
      answer:
        "Tak, jest taka możliwość, jednak prosimy o wcześniejszą informację i wypełnienie formularza",
    },
  ];
  return (
    <section
      id="pytania"
      className="pt-15 w-[80%] mx-auto flex flex-col justify-center items-center "
    >
      <h2 className="font-bold text-5xl pb-10 text-center">
        Pytania & odpowiedż
      </h2>
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
    </section>
  );
};

export default Questions;
