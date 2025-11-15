"use client";
import useMobile from "@/src/hooks/useMobile";
import Image from "next/image";
import Icon from "../../icons";

export default function DrinkDetails() {
  const isMobile = useMobile();
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center lg:gap-20 lg:py-32 py-20 bg-[#EADDED] ">
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
              width={isMobile ? 250: 460}
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
            Por isso criamos Kozmo: drinks cremosos e {!isMobile ? <br /> : " "} refrescantes feitos
            com frutas reais, sem {!isMobile ? <br /> : " "}
            artificialidades, cada um com a personalidade {!isMobile ? <br /> : " "}
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
            <br /> para levar pra praia, festa <br /> ou qualquer momento <br />
            especial.
          </p>
        </div>
      </div>
    </section>
  );
}
