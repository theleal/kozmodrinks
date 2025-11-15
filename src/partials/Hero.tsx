import Image from "next/image";
import Button from "../components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="h-screen w-full bg-[url('/assets/home-bg.webp')] bg-cover bg-center flex flex-col justify-center">
      <div className="flex flex-col container mx-80 gap-4">
        <Image src="/assets/logo.webp" alt="logo" width={260} height={42} />
        <h1 className="text-primary font-primary text-8xl">
          Um brinde <br /> ao Infinito
        </h1>
        <p className="text-secondary font-secondary text-2xl mb-3">
          <b>
            Drinks artesanais com personalidade <br />
            cósmica.
          </b>
          &nbsp; 12 sabores únicos inspirados nos <br /> signos do zodíaco. 100%
          natural.
        </p>
        <div className="flex gap-10">
          <Link
            href="https://wa.me/5513974153250"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className=" h-16 bg-orange font-medium border-[0.25px] border-white uppercase">
              Experimentar agora
            </Button>
          </Link>

          <Link
            href="https://wa.me/5513974153250"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className=" h-16 bg-purple font-medium border-[0.25px] border-white uppercase">
              seja um parceiro
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
