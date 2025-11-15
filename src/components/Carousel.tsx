"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import Icon from "../icons";

type Props = { className?: string };

export default function Carousel({ className }: Props) {
  const ITEM_WIDTH = 266;
  const GAP = 32; // ml-8 no seu layout
  const TOTAL_WIDTH = ITEM_WIDTH + GAP;

  const items = [
    {
      img: "/assets/Leo.webp",
      title: "LEO",
      description:
        "Conhaque, Achocolatado, cacau em pó, açúcar refinado, leite e derivados, enzima lactase.",
    },
    {
      img: "/assets/Taurus.webp",
      title: "TAURUS",
      description:
        "Maçã verde, gin, energético, açúcar refinado, leite e derivados, enzima lactase.",
    },
    {
      img: "/assets/Aquarius.webp",
      title: "AQUARIUS",
      description:
        "Suco de limão siciliano, Skol beats senses, Skol beats GT, açúcar refinado, corante alimentício, leite e derivados, enzima lactase.",
    },
    {
      img: "/assets/Aries.webp",
      title: "ARIES",
      description:
        "Polpa de maracujá puro, açúcar refinado, cachaça, leite e derivados, enzima lactase.",
    },
    {
      img: "/assets/Aries.webp",
      title: "ARIES",
      description:
        "Polpa de maracujá puro, açúcar refinado, cachaça, leite e derivados, enzima lactase.",
    },
    {
      img: "/assets/Aries.webp",
      title: "ARIES",
      description:
        "Polpa de maracujá puro, açúcar refinado, cachaça, leite e derivados, enzima lactase.",
    },
    {
      img: "/assets/Aries.webp",
      title: "ARIES",
      description:
        "Polpa de maracujá puro, açúcar refinado, cachaça, leite e derivados, enzima lactase.",
    },
    {
      img: "/assets/Aries.webp",
      title: "ARIES",
      description:
        "Polpa de maracujá puro, açúcar refinado, cachaça, leite e derivados, enzima lactase.",
    },
    {
      img: "/assets/Aries.webp",
      title: "ARIES",
      description:
        "Polpa de maracujá puro, açúcar refinado, cachaça, leite e derivados, enzima lactase.",
    },
  ];

  // Criamos um mega-array (triplo)
  const infinite = [...items, ...items, ...items];

  // Começamos no bloco do meio
  const base = items.length;
  const startIndex = base;

  const [index, setIndex] = useState(startIndex);
  const trackRef = useRef<HTMLDivElement>(null);

  const next = () => setIndex((i) => i + 1);
  const prev = () => setIndex((i) => i - 1);

  // Controle de loop infinito sem “pulo”
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // quando passa pro terceiro bloco → volta pro bloco do meio
    if (index >= base * 2) {
      track.style.transition = "none";
      setIndex(index - base);

      requestAnimationFrame(() => {
        track.style.transition = "transform 0.5s ease-out";
      });
    }

    // quando passa para o bloco da esquerda → volta pro bloco do meio
    if (index < base) {
      track.style.transition = "none";
      setIndex(index + base);

      requestAnimationFrame(() => {
        track.style.transition = "transform 0.5s ease-out";
      });
    }
  }, [index, base]);

  return (
    <div
      className={clsx(
        "flex flex-col justify-center pb-32 items-center min-h-screen",
        className
      )}
    >
       <div>
        <h1 className="font-secondary text-5xl pt-32 pb-8 font-bold text-orangetitle text-center">Qual energia cósmica <br/> combina com você?</h1>
        <p className="text-center font-secondary pb-24 text-white text-2xl font-light">Cada signo tem sua personalidade, sua vibe, seu jeito único de aproveitar <br/> a vida. E cada Kozmo foi criado para traduzir essa essência em sabor.</p>
      </div>

      <div className="flex items-center gap-24 ">
        {/* BOTÃO ESQUERDA */}
        <button onClick={prev}>
          <Icon name="leftArrow" color="white" />
        </button>

        {/* VIEWPORT */}
        <div
          className="relative overflow-hidden"
          style={{ width: TOTAL_WIDTH * 5 }}
        >
          {/* LEFT FADE */}
          <div
            className="pointer-events-none absolute left-0 top-0 h-full w-80
                       bg-gradient-to-r from-purplebg to-transparent z-10"
          />

          {/* RIGHT FADE */}
          <div
            className="pointer-events-none absolute right-0 top-0 h-full w-80
                       bg-gradient-to-l from-purplebg to-transparent z-10"
          />

          {/* TRACK */}
          <div
            ref={trackRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * TOTAL_WIDTH}px)`,
            }}
          >
            {infinite.map((item, i) => (
              <div key={i} className="w-[266px] ml-8 flex-shrink-0 text-center">
                <Image
                  alt={item.title}
                  src={item.img}
                  width={266}
                  height={417}
                />

                <div className="flex-col w-60 pt-4 mx-auto">
                  <p className="font-primary pt-8 text-primary text-3xl pb-4">
                    {item.title}
                  </p>
                  <p className="font-secondary font-light text-white text-8x1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTÃO DIREITA */}
        <button onClick={next}>
          <Icon name="rightArrow" color="white" />
        </button>
      </div>
    </div>
  );
}
