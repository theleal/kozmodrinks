"use client";
import useMobile from "@/src/hooks/useMobile";
import Image from "next/image";
import Icon from "../../icons";

export default function DrinkDetails() {
  const isMobile = useMobile();
  return (
    <section className="relative">
      <div className="min-h-screen w-full flex flex-col justify-center items-center lg:gap-20 lg:py-32 py-20 bg-[#EADDED] ">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-20">
          <div className="flex items-center justify-center lg:mr-20">
            <div className="relative">
              <Image
                src="/assets/symbol.webp"
                alt="symbol"
                width={700}
                height={650}
              />
              <Image
                className="absolute lg:top-8 lg:left-1/2 left-3/9 top-0"
                src="/assets/woman.webp"
                alt="woman"
                width={isMobile ? 250 : 460}
                height={isMobile ? 90 : 166}
              />
            </div>
          </div>
          <div className="font-secondary flex flex-col mx-10">
            <h3 className="text-primary text-5xl font-medium">
              Mais do que um drink. <br /> Uma experiência astral.
            </h3>
            <div className="font-normal flex flex-col gap-6 mt-6 mb-10 text-lg lg:text-2xl">
              <p>
                O mercado de bebidas é genérico. <br /> Repetitivo. Sem alma. A
                gente entendeu <br />
                que você não quer só matar a sede.
              </p>
              <p>
                {" "}
                Você quer viver momentos únicos. <br />
                Quer sabor de verdade. Quer algo que combine <br /> com sua
                energia.{" "}
              </p>
            </div>

            <p className="font-bold lg:w-max bg-orange shadow rounded-2xl lg:pl-10 px-4 lg:pr-16 py-4">
              Por isso criamosKozmo: drinks cremosos e{" "}
              {!isMobile ? <br /> : " "} refrescantes feitos com frutas reais,
              sem {!isMobile ? <br /> : " "}
              artificialidades, cada um com a personalidade{" "}
              {!isMobile ? <br /> : " "}
              de um signo do zodíaco.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full pt-24 justify-center lg:gap-40 gap-20 items-center text-xl font-secondary">
          <div className="flex flex-col items-center text-center gap-4">
            <div className="bg-[url('/assets/bg-icons.webp')] bg-cover bg-center h-40 aspect-square flex items-center justify-center">
              <Icon name="drink" size={58} color="white" />
            </div>
            <span className="text-3xl text-[#502B70]">12 Sabores Únicos</span>
            <p className="text-center">
              <b>
                Cada drink é uma <br /> assinatura astral.
              </b>{" "}
              De Áries <br />
              explosivo a Peixes sonhador, <br /> tem um Kozmo que vibra <br />
              com você.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <div className="bg-[url('/assets/bg-icons.webp')] bg-cover bg-center h-40 aspect-square flex items-center justify-center">
              <Icon name="plant" size={58} color="white" />
            </div>
            <span className="text-3xl text-[#502B70]">100% Natural</span>
            <p className="text-center">
              <b>
                Feito com frutas de verdade. <br />
              </b>{" "}
              Sem xaropes artificiais, sem <br /> fórmulas químicas. Só o sabor{" "}
              <br /> puro que você sente na <br /> primeira mexida.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <div className="bg-[url('/assets/bg-icons.webp')] bg-cover bg-center h-40 aspect-square flex items-center justify-center">
              <Icon name="drink" size={58} color="white" />
            </div>
            <span className="text-3xl text-[#502B70]">Prático & Pronto</span>
            <p className="text-center">
              <b>Copo selado de 550ml.</b> <br /> Higiênico, portátil, pronto{" "}
              <br /> para levar pra praia, festa <br /> ou qualquer momento{" "}
              <br />
              especial.
            </p>
          </div>
        </div>
      </div>
      <svg
        className="absolute left-0 right-0 w-full pointer-events-none z-20"
        height="175"
        viewBox="0 0 1920 174"
        fill="none"
        shapeRendering="optimizeSpeed"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax slice"
        aria-hidden="true"
      >
        <path 
          stroke="none"
          d="M957.137 11.4621C838.386 7.05357 686.532 12.1674 560.424 20.808C436.419 29.4487 187.882 62.2478 32.3494 83.7612C-365.94 140.542 -670.174 162.232 -979.662 171.402C-1103.67 175.105 -1235.56 177.574 -1522.98 166.993C-1810.4 156.413 -2081 121.85 -2081 121.85V0H3174V53.4308C3174 53.4308 2795.68 110.917 2341.69 107.214C2135.72 105.98 1854.08 95.3996 1637.59 67.7143C1526.2 53.4308 1363.31 35.6205 1218.81 25.0402C1075.89 13.9308 1011.26 13.2254 957.137 11.4621Z"
          fill="#EADDED"
        />
      </svg>
    </section>
  );
}
