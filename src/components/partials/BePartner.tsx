import Image from "next/image";
import Button from "../Button";

export default function BePartner() {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-16 py-40 text-xl bg-[#EADDED]">
      <div className="flex justify-center gap-20">
        <div className="font-secondary flex flex-col justify-start text-[#502B70]">
          <Image
            src="/assets/womandrink.webp"
            width={450}
            height={450}
            alt="woman"
          />

          <div className="flex flex-col pt-20 gap-1">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/check.webp"
                width={16}
                height={6}
                alt="check"
              />
              <span>Produto exclusivo e diferenciado</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/assets/check.webp"
                width={16}
                height={6}
                alt="check"
              />
              <span>Alta margem de lucro</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/assets/check.webp"
                width={16}
                height={6}
                alt="check"
              />
              <span>Material de divulgação incluso</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col font-secondary font-medium gap-8 text-[#502B70]">
          <h2 className="font-secondary text-primary text-6xl font-bold">
            Quer levar Kozmo <br /> pro seu negócio?
          </h2>
          <p>
            Se você tem um bar, pub, adega, casa <br /> noturna ou organiza
            eventos, a gente quer <br /> conversar com você.
          </p>
          <p>
            Kozmo não é só uma bebida. É uma <br /> experiência que seus
            clientes vão lembrar <br /> (e compartilhar nas redes).
          </p>
          <Button className="bg-linear-to-r w-full mt-9 from-[#502B70] via-[#E0004D] to-[#FF8C1C] text-sm font-bold py-4 hover:cursor-pointer hover:opacity-80  transition-all duration-300">
            QUERO SER PARCEIRO KOZMO
          </Button>
          <div className="flex flex-col pt-14 gap-1">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/check.webp"
                width={16}
                height={6}
                alt="check"
              />
              <span>Marca forte e em crescimento</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/assets/check.webp"
                width={16}
                height={6}
                alt="check"
              />
              <span>Suporte completo da nossa equipe</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/assets/check.webp"
                width={16}
                height={6}
                alt="check"
              />
              <span>Alto giro e recompra garantida</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
