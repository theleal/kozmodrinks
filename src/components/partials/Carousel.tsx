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
      img: "/assets/praiapisces.webp",
      title: "PISCES",
      description:
        "Suco de limão siciliano, Skol beats senses, Skol beats GT, açúcar refinado, corante alimentício, leite e derivados, enzima lactase.",
    },
    {
      img: "/assets/praiacancer.webp",
      title: "CANCER",
      description:
        "Cachaça, coco fresco, leite e derivados, enzima lactase, açúcar.",
    },
    {
      img: "/assets/praiacapricornius.webp",
      title: "CAPRICORNIUS",
      description:
        "Paçoca, cachaça, açúcar leite e derivados, enzima lactase.",
    },
    {
      img: "/assets/praiagemini.webp",
      title: "GEMINI",
      description:
        "Rum cristal, suco de limão, hortelã, açucar, leite e derivados, enzima lactase",
    },
    {
      img: "/assets/praialeo.webp",
      title: "LEO",
      description:
        "Polpa de maracujá puro, açúcar refinado, cachaça, leite e derivados, enzima lactase.",
    },
    {
      img: "/assets/praialibra.webp",
      title: "LIBRA",
      description:
        "Vodka, Curaçau blue, mirtilo, leite e derivados, enzima lactase, açúcar..",
    },
    {
      img: "/assets/praiasagitarius.webp",
      title: "SAGITARIUS",
      description:
        "Cachaça, suco de limão taiti, suco de limão siciliano, suco de laranja lima, açúcar, corante, leite e derivados, enzima lactase.",
    },
    {
      img: "/assets/praiascorpio.webp",
      title: "SCORPIO",
      description:
        "Vodka, suco de laranja, suco de cramberry, licor de pêssego, açúcar, leite e derivados, enzima lactase.",
    },
    {
      img: "/assets/praiavirgo.webp",
      title: "VIRGO",
      description:
        "Morango, vinho tinto suave, açúca refinado, leite e derivados, enzima lactase.",
    },
    {
      img: "/assets/praiataurus.webp",
      title: "TAURUS",
      description:
        "Conhaque, Achocolatado, cacau em pó, açúcar refinado, leite e derivados, enzima lactase.",
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
        <h1 className="text-shadow-2xs font-secondary text-3xl lg:text-5xl pt-32 pb-12 font-bold text-orangetitle text-center px-4 lg:px-0">
          Qual energia cósmica <br /> combina com você?
        </h1>
        <p className="text-center font-secondary pb-12 lg:pb-24 text-white text-base lg:text-2xl font-light px-4 lg:px-0">
          Cada signo tem sua personalidade, sua vibe, seu jeito único de
          aproveitar <br className="hidden lg:block" /> a vida. E cada Kozmo foi criado para traduzir essa
          essência em sabor.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-24">
        <Button onClick={onPrevButtonClick} className="hidden lg:block">
          <Icon name="leftArrow" color="white" />
        </Button>

        <div
          className="relative w-full max-w-[90vw] lg:max-w-[1458px]"
        >
          <div 
            className="overflow-hidden" 
            ref={emblaRef}
          >
            <div className="flex">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="w-[200px] lg:w-[266px] shrink-0 text-center ml-6 lg:ml-12"
                >
                  <Image
                    className="shadow rounded-[60px] lg:rounded-[100px] w-[200px] lg:w-[266px] h-[313px] lg:h-[417px] object-fill [clip-path:inset(0_round_60px)] lg:[clip-path:inset(0_round_70px)]"
                    alt={item.title}
                    src={item.img || "/placeholder.svg"}
                    width={266}
                    height={417}
                  />
                  <div className="flex-col w-[200px] lg:w-60 pt-4 mx-auto">
                    <p className="text-shadow-2xs font-primary pt-4 lg:pt-8 text-primary text-2xl lg:text-3xl pb-2 lg:pb-4">
                      {item.title}
                    </p>
                    <p className="font-secondary font-light text-white text-sm lg:text-xl">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="pointer-events-none absolute left-0 top-0 h-full w-16 lg:w-80
                       bg-linear-to-r from-purplebg to-transparent z-10"
          />
          <div
            className="pointer-events-none absolute right-0 top-0 h-full w-16 lg:w-80
                       bg-linear-to-l from-purplebg to-transparent z-10"
          />
        </div>

        <Button onClick={onNextButtonClick} className="hidden lg:block">
          <Icon name="rightArrow" color="white" />
        </Button>
      </div>

      <div className="flex lg:hidden flex-row mt-6">
        <Button onClick={onPrevButtonClick}>
          <Icon name="leftArrow" color="white" />
        </Button>
        <Button onClick={onNextButtonClick}>
          <Icon name="rightArrow" color="white" />
        </Button>
      </div>
    </div>
  );
}
