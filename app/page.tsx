import Button from "@/src/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <section className="h-screen w-full bg-[url('/assets/home-bg.webp')] bg-cover bg-center flex flex-col justify-center">
      <div className="flex flex-col container mx-80 gap-4">
        <Image src="/assets/logo.webp" alt="logo" width={260} height={42} />
        <h1 className="text-primary font-primary text-8xl">
          Um brinde <br /> ao Infinito
        </h1>
        <p className="text-secondary font-secondary text-2xl mb-6">
          <b>
            Drinks artesanais com personalidade <br />
            cósmica.
          </b>{" "}
          12 sabores únicos inspirados nos <br /> signos do zodíaco. 100%
          natural.
        </p>
        <div className="flex gap-10">
          <Button className=" h-16 bg-orange font-medium uppercase">
            Experimentar agora
          </Button>
          <Button className=" h-16 bg-purple font-medium uppercase">
            seja um parceiro
          </Button>
        </div>{" "}
      </div>
    </section>
  );
}
