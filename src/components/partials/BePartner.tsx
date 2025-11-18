import Image from "next/image";
import Button from "../Button";
import Link from "next/link";

export default function BePartner() {
  return (
    <section
      className="
      w-full flex flex-col justify-center gap-16 py-40 text-xl bg-[#EADDED]
      px-5 lg:px-0
      text-center lg:text-left
    "
    >
      {/* BLOCO PRINCIPAL */}
      <div
        className="
          flex lg:flex-row flex-col
          justify-center items-center
          gap-20
        "
      >
        {/* IMAGEM */}
        <div className="font-secondary flex flex-col justify-start text-[#502B70]">
          <Image
            src="/assets/womandrink.webp"
            width={450}
            height={450}
            alt="woman"
            className="mx-auto lg:mx-0"
          />
        </div>

        {/* TEXTO */}
        <div className="flex flex-col font-secondary font-medium gap-8 text-[#502B70]">
          <h2 className="font-secondary text-primary text-6xl font-bold">
            Quer levar Kozmo <br /> pro seu negócio?
          </h2>

          <p>
            Se você tem um bar, pub, adega, casa
            <br className="hidden lg:block" />
            noturna ou organiza eventos, a gente quer
            <br className="hidden lg:block" />
            conversar com você.
          </p>

          <p>
            Kozmo não é só uma bebida. É uma
            <br className="hidden lg:block" />
            experiência que seus clientes vão lembrar
            <br className="hidden lg:block" />
            (e compartilhar nas redes).
          </p>
          <Link
            href="https://wa.me/5513974153250"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="
            bg-linear-to-r w-full mt-9
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

      {/* LISTA DE BENEFÍCIOS */}
      <div
        className="
    flex
    lg:flex-row flex-col
    items-center justify-center
    pt-12 lg:gap-60 gap-12
    text-xl text-[#502B70]
    text-center lg:text-left
  "
      >
        {/* COLUNA 1 */}
        <div className="flex flex-col gap-1 items-center lg:items-start">
          <div className="flex items-center gap-2 justify-center lg:justify-start">
            <Image src="/assets/check.webp" width={16} height={6} alt="check" />
            <span>Produto exclusivo e diferenciado</span>
          </div>

          <div className="flex items-center gap-2 justify-center lg:justify-start">
            <Image src="/assets/check.webp" width={16} height={6} alt="check" />
            <span>Alta margem de lucro</span>
          </div>

          <div className="flex items-center gap-2 justify-center lg:justify-start">
            <Image src="/assets/check.webp" width={16} height={6} alt="check" />
            <span>Material de divulgação incluso</span>
          </div>
        </div>

        {/* COLUNA 2 */}
        <div className="flex flex-col gap-1 items-center lg:items-start">
          <div className="flex items-center gap-2 justify-center lg:justify-start">
            <Image src="/assets/check.webp" width={16} height={6} alt="check" />
            <span>Marca forte e em crescimento</span>
          </div>

          <div className="flex items-center gap-2 justify-center lg:justify-start">
            <Image src="/assets/check.webp" width={16} height={6} alt="check" />
            <span>Suporte completo da nossa equipe</span>
          </div>

          <div className="flex items-center gap-2 justify-center lg:justify-start">
            <Image src="/assets/check.webp" width={16} height={6} alt="check" />
            <span>Alto giro e recompra garantida</span>
          </div>
        </div>
      </div>
    </section>
  );
}
