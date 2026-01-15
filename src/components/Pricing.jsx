import React from "react";
import PriceCard from "./PriceCard";

const Pricing = () => {
  const singleLessons = [
    {
      title: "   ZAJĘCIA PRÓBNE",
      features: [
        "zapis na zajęcia jest ważny po dokonaniu pełnej opłaty",
        "opłata ważna przez 21 dni ",
      ],
      price: "40 ", // або інша ціна
    },
    {
      title: "zajęcia jednorazowe",
      features: ["opłata ważna przez 14 dni od daty zakupu", "", ""],
      price: "70",
    },
    {
      title: "karnet na 4 godziny",
      features: [
        "Karnet ważny przez 30 dni",
        "57 zł / godz.",
        "Aktywacja karnetu możliwa w ciągu 14 dni ",
      ],
      price: "250",
    },
  ];

  const plans = [
    {
      title: "karnet na 8 godzin",
      features: [
        "Aktywacja karnetu możliwa w ciągu 14 dni",
        "47 zł / godz.",
        "Zwrot pieniędzy za niewykorzystane zajęcia nie jest możliwy",
      ],
      price: "400",
    },
    {
      title: "16 godzin",
      features: [
        "Karnet ważny przez 65 dni",
        "43 zł / godz.",
        "Możliwość odpracowania zajęć",
      ],
      price: "750",
    },
    {
      title: "zajęcia indywidualne",
      features: [
        "Czas dopasujemy do Ciebie",

        "Miejsce możemy ustalić lub zmienić według Twojej wygody",
      ],
      price: "180",
    },
  ];
  return (
    <section id="cennik" className="pt-10  ">
      <h2 className="font-bold text-5xl text-center pb-15">Cennik</h2>
      <div className="md:flex-row flex-col flex gap-10 md:gap-30 items-center justify-center pb-10 md:pb-20 relative">
        {/*First row*/}

        {singleLessons.map((lesson, index) => {
          return (
            <PriceCard
              key={index}
              title={lesson.title}
              features={lesson.features}
              price={lesson.price}
            />
          );
        })}
      </div>
      <div className="md:flex-row flex-col flex justify-center gap-10 md:gap-30 items-center">
        {plans.map((plan, index) => {
          return (
            <PriceCard
              key={index}
              title={plan.title}
              features={plan.features}
              price={plan.price}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
