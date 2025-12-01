"use client";

import Image from "next/image";
import Button from "../Button";
import Link from "next/link";
import useMobile from "@/src/hooks/useMobile";

export default function BePartner() {
  const isMobile = useMobile();

  return (
    <section
      className="
      w-full flex flex-col justify-center items-center gap-16 py-20 lg:py-40 text-xl bg-[#EADDED]
      px-5 lg:px-0
      text-center lg:text-left
    "
    >
      <div
        className="
          flex lg:flex-row flex-col
          justify-center items-center
          gap-20
        "
      >
        <div className="font-secondary flex pt-12 lg:pt-0 flex-col justify-start text-[#502B70]">
          <Image
            src="./assets/womandrink.webp"
            width={450}
            height={450}
            alt="woman"
            className="mx-auto lg:mx-0"
          />
        </div>

        <div className="flex flex-col text-left font-secondary font-medium gap-8 text-[#502B70]">
          <h2 className="font-secondary lg:text-left text-center text-primary text-6xl font-bold">
            Quer levar Kozmo <br /> pro seu negócio?
          </h2>

          <p>
            Se você tem um bar, pub, adega, casa
            {!isMobile ? <br /> : " "}
            noturna ou organiza eventos, a gente quer
            {!isMobile ? <br /> : " "}
            conversar com você.
          </p>

          <p>
            Kozmo não é só uma bebida. É uma
            {!isMobile ? <br /> : " "}
            experiência que seus clientes vão lembrar
            {!isMobile ? <br /> : " "}
            (e compartilhar nas redes).
          </p>
          <Link
            href="https://wa.me/5513974153250"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="
            bg-linear-to-r w-full lg:mt-9 mt-4
            from-[#502B70] via-[#E0004D] to-[#FF8C1C]
            text-sm font-bold py-4
            hover:cursor-pointer hover:opacity-80
            transition-all duration-300
          "
            >
              QUERO SER PARCEIRO KOZMO
            </Button>
          </Link>
        </div>
      </div>

      <div
        className="
    flex
    lg:flex-row flex-col
    lg:justify-center
    lg:pt-12 lg:gap-60 gap-12
    text-xl text-[#502B70]
    text-center lg:text-left
  "
      >
        <div className="flex flex-col gap-1 lg:items-start">
          <div className="flex items-center gap-2 lg:justify-start">
            <Image
              src="./assets/check.webp"
              width={16}
              height={6}
              alt="check"
            />
            <span>Produto exclusivo e diferenciado</span>
          </div>

          <div className="flex items-center gap-2 lg:justify-start">
            <Image
              src="./assets/check.webp"
              width={16}
              height={6}
              alt="check"
            />
            <span>Alta margem de lucro</span>
          </div>

          <div className="flex items-center gap-2 lg:justify-start">
            <Image
              src="./assets/check.webp"
              width={16}
              height={6}
              alt="check"
            />
            <span>Material de divulgação incluso</span>
          </div>
        </div>

        <div className="flex flex-col gap-1  lg:items-start">
          <div className="flex items-center gap-2 lg:justify-start">
            <Image
              src="./assets/check.webp"
              width={16}
              height={6}
              alt="check"
            />
            <span>Marca forte e em crescimento</span>
          </div>

          <div className="flex items-center gap-2 lg:justify-start">
            <Image
              src="./assets/check.webp"
              width={16}
              height={6}
              alt="check"
            />
            <span>Suporte completo da nossa equipe</span>
          </div>

          <div className="flex items-center gap-2 lg:justify-start">
            <Image
              src="./assets/check.webp"
              width={16}
              height={6}
              alt="check"
            />
            <span>Alto giro e recompra garantida</span>
          </div>
        </div>
      </div>
    </section>
  );
}
