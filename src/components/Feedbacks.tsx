"use client";


import Card from "./Card";

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
      imageUrl: "/assets/drink-taurus.webp",
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
      imageUrl: "/assets/drink-leo.webp",
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
      imageUrl: "/assets/drink-virgo.webp",
    },
  },
];

export default function Feedbacks() {
  return (
    <section className="w-full pt-20 pb-40 flex flex-col justify-center bg-orange items-center">
      <h3 className="text-purple font-secondary text-5xl font-bold mb-20 ">
        Quem já provou, aprovou!
      </h3>
      <div className="flex gap-10 justify-center max-w-7xl">
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
