"use client";

import Image from "next/image";
import Icon from "../../icons";
import useMobile from "@/src/hooks/useMobile";

export default function Footer() {
    const isMobile = useMobile();
  return (
    <footer className="flex w-full flex-col text-white font-secondary items-center">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-3 lg:gap-20 bg-primary px-5 lg:px-20 py-8 lg:py-0 lg:h-52">
        <Image
          src="/assets/logo-secondary.webp"
          alt="logo"
          width={isMobile ? 240 : 300}
          height={isMobile ? 100 : 120}
        />

        <span className="text-xs md:text-sm font-tertiary text-center lg:text-left">
          <b>© Boom Coffee 2025. Todos os direitos reservados.</b>
        </span>

        <div className="flex pt-8 md:flex-row items-center justify-center gap-4 md:gap-6">
          <div>
            <a href="https://tiktok.com/@kozmodrinks" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
              <Icon className="inline-block" name="tikTok" size={18} color="white" />
            </a>
          </div>
          <div>
            <a href="https://tiktok.com/@kozmodrinks" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
              <Icon className="inline-block" name="instagram" size={18} color="white" />
            </a>
          </div>
          <div>
            <a href="https://wa.me/5513974153250" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition flex items-center gap-2 text-nowrap">
              <Icon className="inline-block" name="whatsapp" size={18} color="white" />
              <p className="font-secondary text-sm md:text-base">Fale conosco</p>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-black h-auto md:h-16 w-full flex justify-center items-center text-sm md:text-lg text-gray-200 px-5 py-4 md:py-0">
        <span className="font-quaternary text-center">
          Design e desenvolvimento por <b>Almo Studio & CO.</b>
        </span>
      </div>
    </footer>
  );
}
