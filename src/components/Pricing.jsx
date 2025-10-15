import React from "react";
import PriceCard from "./PriceCard";

const Pricing = () => {
  const singleLessons = [
    {
      title: "   ZAJĘCIA PRÓBNE",
      features: ["", "zapisanie się - 100% płatne", "ważne 21 dni "],
      price: "40 ", // або інша ціна
    },
    {
      title: "zajęcia jednorazowe",
      features: ["opłacone zajęcja ważne 14 dni", "", ""],
      price: "65",
    },
  ];

  const plans = [
    {
      title: "karnet na 4 wejscia",
      features: [
        "ważne w ciągu 8 godzin tanecznych",
        "57 zł/godz",
        "aktywacja karnetu możliwa w ciągu 14 dni",
        ,
      ],
      price: "230",
    },
    {
      title: "karnet na 8 godzin",
      features: [
        "aktywacja karnetu możliwa w ciągu 14 dni",
        "47 zł/godz",
        "zwrót za niewykorzystane zajęcia nie mozliwe",
      ],
      price: "380",
    },
    {
      title: "16 godzin",
      features: [
        "ważne w ciągu 20 godzin tanecznych",
        "mozliwość odpracowania 4 zajęć",
        "43 zł/godz",
      ],
      price: "700",
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
