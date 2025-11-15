"use client";

import clsx from "clsx";
import Image from "next/image";
import { useCallback } from "react";
import Button from "../Button";
import useEmblaCarousel from "embla-carousel-react";
import Icon from "@/src/icons";

type Props = { className?: string };

export default function Carousel({ className }: Props) {
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

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const onPrevButtonClick = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const VIEWPORT_WIDTH = 1458;

  return (
    <div
      className={clsx(
        "flex flex-col justify-center pb-32 items-center min-h-screen",
        className
      )}
    >
      <div>
        <h1 className="font-secondary text-5xl pt-32 pb-8 font-bold text-orangetitle text-center">
          Qual energia cósmica <br /> combina com você?
        </h1>
        <p className="text-center font-secondary pb-24 text-white text-2xl font-light">
          Cada signo tem sua personalidade, sua vibe, seu jeito único de
          aproveitar <br /> a vida. E cada Kozmo foi criado para traduzir essa
          essência em sabor.
        </p>
      </div>

      <div className="flex items-center gap-24 ">
        {/* BOTÃO ESQUERDA */}
        <Button onClick={onPrevButtonClick}>
          <Icon name="leftArrow" color="white" />
        </Button>

        {/* --- INÍCIO DA CORREÇÃO --- */}
        {/* 1. Este 'div' pai agora agrupa o viewport E os fades */}
        <div
          className="relative"
          style={{ width: `${VIEWPORT_WIDTH}px` }}
        >
          {/* 2. Este 'div' é o viewport, com 'overflow-hidden' e o 'ref' */}
          <div className="overflow-hidden" ref={emblaRef}>
            {/* 3. Este 'div' é o container, O ÚNICO FILHO do viewport */}
            <div className="flex gap-8">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="w-[266px] shrink-0 text-center"
                >
                  <Image
                    className=""
                    alt={item.title}
                    src={item.img}
                    width={266}
                    height={417}
                  />
                  <div className="flex-col w-60 pt-4 mx-auto">
                    <p className="font-primary pt-8 text-primary text-3xl pb-4">
                      {item.title}
                    </p>
                    <p className="font-secondary font-light text-white text-xl">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Os fades agora são "irmãos" do viewport,
               posicionados por cima com 'absolute' */}
          <div
            className="pointer-events-none absolute left-0 top-0 h-full w-80
                       bg-linear-to-r from-purplebg to-transparent z-10"
          />
          <div
            className="pointer-events-none absolute right-0 top-0 h-full w-80
                       bg-linear-to-l from-purplebg to-transparent z-10"
          />
        </div>
        {/* --- FIM DA CORREÇÃO --- */}


        {/* BOTÃO DIREITA */}
        <Button onClick={onNextButtonClick}>
          <Icon name="rightArrow" color="white" />
        </Button>
      </div>
    </div>
  );
}