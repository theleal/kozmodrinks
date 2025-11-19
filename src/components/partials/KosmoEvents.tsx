"use client";

import useMobile from "@/src/hooks/useMobile";
import Image from "next/image";

export default function KosmoEvents() {
  const isMobile = useMobile();
  return (
    <section className="relative">
      <div className="w-full flex flex-col justify-center items-center gap-10 lg:gap-20 pt-20 lg:pt-40 bg-primary px-4">
        <h2 className="font-primary text-4xl lg:text-7xl text-center text-orange">
          Kozmo vai onde a <br /> vibe acontece
        </h2>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 text-[#290B42] text-xl lg:text-2xl text-center font-bold font-secondary">
          <div className="flex flex-col items-center justify-center gap-4">
            <Image
              alt="drink-4"
              width={180}
              height={160}
              src="./assets/people-4.webp"
            />
            <span>
              Na praia pegando <br /> aquele sol?
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <Image
              alt="people-1"
              width={180}
              height={180}
              src="./assets/drink-3.webp"
            />
            <span>
              No rolê com a <br />
              galera?
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <Image
              alt="people-1"
              width={180}
              height={180}
              src="./assets/drink-2.webp"
            />
            <span>
              Na festa sem hora <br /> pra acabar?
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <Image
              alt="people-1"
              width={180}
              height={180}
              src="./assets/drink-1.webp"
            />
            <span>
              Explorando novos <br /> points?
            </span>
          </div>
        </div>
        <span className="text-lg lg:text-2xl text-white text-center font-secondary leading-relaxed lg:leading-12">
          A gente sabe que os melhores momentos não acontecem em
          {!isMobile ? <br /> : ""} qualquer lugar.
          {isMobile ? <br/> : " "}
          <b className="text-xl lg:text-3xl">
            Por isso, Kozmo está presente nos eventos {!isMobile ? <br/> : ""}
            mais vibrantes e nos points mais
            descolados do litoral.
          </b>
        </span>
      </div>

      <svg
        className="absolute left-0 right-0 w-full pointer-events-none z-20"
        height="135"
        viewBox="0 0 1920 134"
        shapeRendering="auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax slice"
        aria-hidden="true"
      >
        <path
          d="M2775.98 8.88093C2667.47 5.46519 2528.71 9.42744 2413.48 16.1223C2300.17 22.8171 2073.07 48.2303 1930.95 64.8991C1567.01 108.894 1289.02 125.699 1006.22 132.804C892.91 135.673 772.398 137.586 509.767 129.388C247.136 121.19 -0.131348 94.4111 -0.131348 94.4111V0H4801.65V41.3988C4801.65 41.3988 4455.95 85.94 4041.12 83.0708C3852.91 82.1144 3595.56 73.9166 3397.75 52.4658C3295.96 41.3988 3147.12 27.5992 3015.08 19.4014C2884.49 10.7937 2825.43 10.2472 2775.98 8.88093Z"
          fill="#E0004D"
        />
      </svg>
    </section>
  );
}
