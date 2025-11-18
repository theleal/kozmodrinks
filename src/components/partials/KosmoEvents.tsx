import Image from "next/image";

export default function KosmoEvents() {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-10 lg:gap-20 py-20 lg:py-40 bg-primary px-4">
      <h2 className="font-primary text-4xl lg:text-7xl text-center text-orange">
        Kozmo vai onde a <br /> vibe acontece
      </h2>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 text-[#290B42] text-xl lg:text-2xl text-center font-bold font-secondary">
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
      <span className="text-lg lg:text-2xl text-white text-center font-secondary leading-relaxed lg:leading-12">
        A gente sabe que os melhores momentos não acontecem em <br className="hidden lg:block" /> qualquer
        lugar.
        <b className="text-xl lg:text-3xl">
           Por isso, Kozmo está presente nos eventos <br className="hidden lg:block" /> mais vibrantes e nos
          points mais descolados do litoral.
        </b>
      </span>
    </section>
  );
}
