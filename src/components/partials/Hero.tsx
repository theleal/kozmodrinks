"use client";

import useMobile from "@/src/hooks/useMobile";
import Image from "next/image";
import Button from "../Button";
import Link from "next/link";

export default function Home() {
  const isMobile = useMobile();
  return (
    <section className="h-screen w-full bg-[url('/assets/home-bg.webp')] lg:px-0 px-5 text-center lg:text-start bg-cover bg-center flex flex-col justify-center">
      <div className="flex flex-col container lg:mx-80 gap-4">
        <Image
          className="md:ml-40 ml-0 lg:ml-0"
          src="./assets/logo.webp"
          alt="logo"
          width={260}
          height={42}
        />
        <h1 className="text-primary font-primary md:text-8xl text-7xl">
          Um brinde <br /> ao Infinito
        </h1>
        <p className="text-secondary font-secondary md:text-2xl text-lg mb-3">
          <b>
            Drinks artesanais com personalidade <br />
            cósmica.
          </b>
          &nbsp; 12 sabores únicos inspirados nos {!isMobile ? (
            <br />
          ) : (
            " "
          )}{" "}
          signos do zodíaco. 100% natural.
        </p>
        <div className="flex md:gap-10 gap-6 flex-col md:items-center md:justify-center lg:justify-normal md:flex-row">
          <Link
            href="https://wa.me/5513974153250"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className=" md:h-16 bg-orange font-medium border-[0.25px] border-white uppercase">
              Experimentar agora
            </Button>
          </Link>
          <Link
            href="https://wa.me/5513974153250"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className=" md:h-16 bg-purple font-medium border-[0.25px] border-white uppercase">
              seja um parceiro
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
