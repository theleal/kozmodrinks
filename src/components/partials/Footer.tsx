import Image from "next/image";
import Icon from "../../icons";

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

        <span className="text-sm font-tertiary">
          <b>© Boom Coffee 2025. Todos os direitos reservados.</b>
        </span>
        <div className="flex ml-128 items-center justify-start gap-4">
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
            <a href="https://wa.me/5513974153250" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition ml-1 flex items-center gap-2">
              <Icon className="inline-block" name="whatsapp" size={18} color="white" />
              <p className="font-secondary">Fale conosco</p>
            </a>
          </div>
        </div>
        <div className="flex ml-64 items-center justify-start gap-4">
          
        </div>
        
      </div>
      <div className="bg-black h-16 w-full flex justify-center items-center text-lg text-gray-200">
        <span className="font-quaternary text-lg">
          Design e desenvolvimento por <b>Almo Studio & CO.</b>
        </span>
      </div>
    </footer>
  );
}
