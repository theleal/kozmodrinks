import Image from "next/image";

export default function Home() {

  return (

<section>
    <div className="w-full 
                    min-h-screen 
                    bg-[url('/homeAssets/backgroundhome.png')] 
                    bg-top 
                    bg-no-repeat  
                    relative 
                    overflow-hidden
                    z-1
                    block"
                    
                    >

      <div>
        <div className="pl-[320px] pt-[131px]">

          <div className="">
              <Image 
                src="/homeAssets/logo.png" 
                alt="Logo Kozmo" 
                width={270}
                height={42}
                className="" 
              />
          </div>

          <div className=""> 
            <h1 className="font-kogaine">
              Um brinde<br/>ao Infinito
            </h1>
          </div>

          <div className=""> 
            <p>
              Drinks artesanais com personalidade cósmica. 12 sabores únicos inspirados nos signos do zodíaco. 100% natural.
            </p>
          </div>

          <div className=""> 
            <button className="">
              EXPERIMENTAR AGORA
            </button>
            <button className="">
              SEJA UM PARCEIRO
            </button>
          </div>

        </div>
      </div>                  

    </div>



  


</section>


  );
}