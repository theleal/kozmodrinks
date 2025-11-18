"use client";

import Card from "../Card";

const feedbacks = [
  {
    username: "amandao_",
    description: (
      <span>
        &quot;Não é exagero: melhor drink que já <br /> tomei na praia. E olha
        que eu sou <br /> exigente! &quot;
      </span>
    ),
    product: {
      name: "Taurus",
      imageUrl: "/assets/drink_taurus.png",
    },
  },
  {
    username: "giovana.nunes",
    description: (
      <span>
        &quot;A textura é perfeita, o sabor é <br /> intenso... dá pra sentir
        que é fruta <br /> de verdade.&quot;
      </span>
    ),
    product: {
      name: "Leo",
      imageUrl: "/assets/drink_leo.png",
    },
  },
  {
    username: "ju_prado",
    description: (
      <span>
        &quot;Comprei por causa do signo, mas <br /> virei cliente pelo sabor.
        Kozmo é <br /> viciante!&quot;
      </span>
    ),
    product: {
      name: "Virgo",
      imageUrl: "/assets/drink_virgo.png",
    },
  },
];

export default function Feedbacks() {
  return (
    <section className="w-full lg:pt-20 pt-10 lg:pb-40 flex px-6 flex-col justify-center bg-orange items-center pb-12">
      <h3 className="text-purple font-secondary lg:text-5xl text-3xl font-bold lg:mb-20 mb-10 text-center lg:text-start">
        Quem já provou, aprovou!
      </h3>
      <div className="flex flex-col lg:flex-row gap-10 justify-center">
        {feedbacks.map((feedback, index) => (
          <Card
            key={index}
            username={feedback.username}
            description={feedback.description}
            product={feedback.product}
          />
        ))}
      </div>
    </section>
  );
}
