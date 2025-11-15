"use client";

import Card from "../components/Card";

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
    <section className="relative">
      <div className="w-full pt-20 pb-40 flex flex-col justify-center bg-orange items-center">
        <h3 className="text-purple font-secondary text-5xl font-bold mb-20">
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
      </div>

      <svg
        className="absolute left-0 right-0 w-full pointer-events-none z-20 block"
        // bottom ajustado para cobrir o gap de anti-aliasing
        height="124"               // opcional: +2px para folga (original 122)
        viewBox="0 0 1920 122"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax slice"
        aria-hidden="true"
      >
        <path
          d="M152.112 7.06C43.6022 3.96 -95.1554 7.556 -210.387 13.632C-323.697 19.708 -550.799 42.772 -692.917 57.9C-1056.86 97.828 -1334.85 113.08 -1617.65 119.528C-1730.96 122.132 -1851.47 123.868 -2114.1 116.428C-2376.73 108.988 -2624 84.684 -2624 84.684V-1H2177.78V36.572C2177.78 36.572 1832.09 76.996 1417.25 74.392C1229.04 73.524 971.693 66.084 773.88 46.616C672.092 36.572 523.252 24.048 391.216 16.608C260.621 8.796 201.565 8.3 152.112 7.06Z"
          fill="#FF8C1C"
        />
      </svg>
    </section>
  );
}