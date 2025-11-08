import Button from "@/src/components/Button";
import Card from "@/src/components/Card";
import Footer from "@/src/components/Footer";
import Image from "next/image";

export default function Home() {
  const feedbacks = [
    {
      username: "amandao_",
      description: (
        <span>
          &quot;Não é exagero: melhor drink que já <br /> tomei na praia. E olha
          que eu sou <br /> exigente! &quot;
        </span>
      ),
      product: {
        name: "Taurus",
        imageUrl: "/assets/drink-taurus.webp",
      },
    },
    {
      username: "giovana.nunes",
      description: (
        <span>
          &quot;A textura é perfeita, o sabor é <br /> intenso... dá pra sentir
          que é fruta <br /> de verdade.&quot;
        </span>
      ),
      product: {
        name: "Leo",
        imageUrl: "/assets/drink-leo.webp",
      },
    },
    {
      username: "ju_prado",
      description: (
        <span>
          &quot;Comprei por causa do signo, mas <br /> virei cliente pelo sabor.
          Kozmo é <br /> viciante!&quot;
        </span>
      ),
      product: {
        name: "Virgo",
        imageUrl: "/assets/drink-virgo.webp",
      },
    },
  ];

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
            <Button className=" h-16 bg-orange font-medium uppercase">
              Experimentar agora
            </Button>
            <Button className=" h-16 bg-purple font-medium uppercase">
              seja um parceiro
            </Button>
          </div>{" "}
        </div>
      </section>
      <section className="h-screen w-full flex justify-center items-center gap-20 bg-[#EADDED]">
        <div className="flex items-center justify-center mr-20">
          <div className="relative">
            <Image
              src="/assets/symbol.webp"
              alt="symbol"
              width={700}
              height={650}
            />
            <Image
              className="absolute top-8 left-6/12"
              src="/assets/woman.webp"
              alt="woman"
              width={460}
              height={166}
            />
          </div>
        </div>
        <div className="font-secondary flex flex-col">
          <h3 className="text-primary text-5xl font-medium">
            Mais do que um drink. <br /> Uma experiência astral.
          </h3>
          <div className="font-normal flex flex-col gap-6 mt-6 mb-10 text-2xl">
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

          <p className="font-bold w-max bg-orange rounded-2xl pl-10 pr-16 py-4">
            Por isso criamos Kozmo: drinks cremosos e <br /> refrescantes feitos com
            frutas reais, sem <br />artificialidades, cada um com a personalidade <br />de
            um signo do zodíaco.
          </p>
        </div>
        <div></div>
      </section>
      <section className="w-full pt-20 pb-40 flex flex-col justify-center bg-orange items-center">
        <h3 className="text-purple font-secondary text-5xl font-bold mb-20 ">
          Quem já provou, aprovou!
        </h3>
        <div className="flex gap-10 justify-center max-w-7xl">
          {feedbacks.map((feedback, index) => (
            <Card
              key={index}
              username={feedback.username}
              description={feedback.description}
              product={feedback.product}
            />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
