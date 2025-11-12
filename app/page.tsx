import Button from "@/src/components/Button";
import Footer from "@/src/components/Footer";
import SpinnerText from "@/src/components/Spinner";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {" "}
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
            <Button className=" h-16 bg-orange font-medium border border-white uppercase">
              Experimentar agora
            </Button>
            <Button className=" h-16 bg-purple font-medium border border-white uppercase">
              seja um parceiro
            </Button>
          </div>{" "}
        </div>
      </section>
      <SpinnerText className="bg-primary"/>
      <section className="w-full py-20 flex flex-col justify-center bg-orange items-center">
        <h3 className="text-purple font-secondary text-5xl font-bold">
          Quem já provou, aprovou!
        </h3>
        <div className="bg-white py-6 px-10 rounded-2xl font-secondary text-gray-500 text-lg">
          <div className="flex justify-between">
            <div className="flex gap-2">
              <span className="bg-primary h-12 w-12 rounded-full flex items-center justify-center">
                icon
              </span>
              <span>amandao_</span>
            </div>
            <div className="">estrelas</div>
          </div>
          <div>
            <span>
              &quot;Não é exagero: melhor drink que já tomei <br /> na praia. E
              olha que eu sou <br /> exigente!&quot;
            </span>
          </div>
          <div className="flex gap-3 items-center mt-4">
            <Image
              src="/assets/drink-taurus.webp"
              alt="drink taurus"
              width={40}
              height={50}
            />
            <div className="text-purple flex flex-col text-sm">
              <span className="font-bold">Recomendo este produto</span>
              <span className="font-normal">Taurus</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
