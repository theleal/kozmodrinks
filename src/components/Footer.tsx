import Image from "next/image";

export default function Footer() {
  return (
    <footer className="h-52 flex flex-col  text-white font-secondary text-lg items-center">
      <div className="flex items-center w-full gap-20 bg-primary">
        <Image
          src="/assets/logo-secondary.webp"
          alt="logo"
          width={280}
          height={160}
        />

        <span className="text-sm font-tertiary"><b>© Boom Coffee 2025. Todos os direitos reservados.</b></span>
      </div>
      <div className="bg-black h-16 w-full flex justify-center items-center text-lg text-gray-200"> 
        <span className="font-quaternary text-lg">
          Design e desenvolvimento por <b>Almo Studio & CO.</b>
        </span>
      </div>
    </footer>
  );
}
