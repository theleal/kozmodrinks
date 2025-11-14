import Button from "@/src/components/Button";
import Card from "@/src/components/Card";
import Footer from "@/src/components/Footer";
import SpinnerText from "@/src/components/Spinner";
import Icon from "@/src/icons";
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
            <Button className=" h-16 bg-orange font-medium border border-white uppercase">
              Experimentar agora
            </Button>
            <Button className=" h-16 bg-purple font-medium border border-white uppercase">
              seja um parceiro
            </Button>
          </div>{" "}
        </div>
      </section>
      <section className="min-h-screen w-full flex flex-col justify-center items-center gap-20 py-32 bg-[#EADDED]">
        <div className="flex justify-center items-center gap-20">
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
              Por isso criamos Kozmo: drinks cremosos e <br /> refrescantes
              feitos com frutas reais, sem <br />
              artificialidades, cada um com a personalidade <br />
              de um signo do zodíaco.
            </p>
          </div>
        </div>
        <div className="flex w-full justify-center gap-40 items-center text-xl font-secondary">
          <div className="flex flex-col items-center text-center gap-4 max-w-sm">
            <div className="bg-[url('/assets/bg-icons.webp')] bg-cover bg-center h-40 aspect-square flex items-center justify-center">
              <Icon name="drink" size={58} color="white" />
            </div>
            <span className="text-3xl text-[#502B70]">12 Sabores Únicos</span>
            <p className="text-center">
              <b>
                Cada drink é uma <br /> assinatura astral.
              </b>{" "}
              De Áries <br />
              explosivo a Peixes sonhador, <br /> tem um Kozmo que vibra <br />
              com você.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-4 max-w-sm">
            <div className="bg-[url('/assets/bg-icons.webp')] bg-cover bg-center h-40 aspect-square flex items-center justify-center">
              <Icon name="plant" size={58} color="white" />
            </div>
            <span className="text-3xl text-[#502B70]">100% Natural</span>
            <p className="text-center">
              <b>
                Feito com frutas de verdade. <br />
              </b>{" "}
              Sem xaropes artificiais, sem <br /> fórmulas químicas. Só o sabor{" "}
              <br /> puro que você sente na <br /> primeira mexida.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-4 max-w-sm">
            <div className="bg-[url('/assets/bg-icons.webp')] bg-cover bg-center h-40 aspect-square flex items-center justify-center">
              <Icon name="drink" size={58} color="white" />
            </div>
            <span className="text-3xl text-[#502B70]">Prático & Pronto</span>
            <p className="text-center">
              <b>Copo selado de 550ml.</b> <br /> Higiênico, portátil, pronto{" "}
              <br /> para levar pra praia, festa <br /> ou qualquer momento{" "}
              <br />
              especial.
            </p>
          </div>
        </div>
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
      <section className="w-full flex flex-col justify-center items-center gap-20 py-40  bg-primary">
        <h2 className="font-primary text-7xl text-center text-orange">
          Kozmo vai onde a <br /> vibe acontece
        </h2>
        <div className="flex gap-16 text-[#290B42] text-2xl text-center font-bold font-secondary">
          <div className="flex flex-col items-center justify-center gap-4">
            <Image
              alt="drink-4"
              width={180}
              height={160}
              src="/assets/people-4.webp"
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
              src="/assets/drink-3.webp"
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
              src="/assets/drink-2.webp"
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
              src="/assets/drink-1.webp"
            />
            <span>
              Explorando novos <br /> points?
            </span>
          </div>
        </div>
        <span className="text-3xl text-white font-secondary">
          A gente sabe que os melhores momentos não acontecem em <br /> qualquer
          lugar. Por isso,{" "}
          <b>
             Kozmo está presente nos eventos <br /> mais vibrantes e nos points
            mais descolados do litoral.
          </b>
        </span>
      </section>
      <section className="w-full flex flex-col justify-center items-center gap-20 py-40 text-xl bg-[#EADDED]">
        <div className="flex items-center justify-center gap-40">
          <div className="">
            <Image
              src="/assets/woman.webp"
              width={360}
              height={360}
              alt="woman"
            />
          </div>

          <div className="flex flex-col gap-6 text-[#502B70]">
            <h2 className="font-secondary text-primary text-5xl font-bold">
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
            <Button className="bg-linear-to-r w-full mt-9 from-[#502B70] via-[#E0004D] to-[#FF8C1C] text-sm font-bold py-4 hover:cursor-pointer hover:opacity-90 transition-all duration-300">
              QUERO SER PARCEIRO KOZMO
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center gap-68 text-xl text-[#502B70]">
          <div className="flex flex-col gap-1">
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
          <div className="flex flex-col gap-1">
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
      </section>
      <Footer />
    </>
  );
}
