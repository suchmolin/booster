import FAQbox from "@/components/shared/FAQbox/page"
import Image from "next/image"

export default function PreguntasFrecuentesPage() {
  return (
    <div className="w-full relative pt-20 lg:pt-40 bg-gradient-to-b from-azulClaritoBooster to-white flex flex-col items-center">
      <div className="absolute top-20 w-full h-full ">
        <div className="w-full h-[600px] relative">
          <Image
            className="top-0"
            src="/img/fondoEcuaciones.png"
            objectFit="contain"
            layout="fill"
            alt="fondo ecuaciones"
            objectPosition="top"
          />
        </div>
      </div>
      <div className="lg:hidden w-[280px] xs:w-[330px] sm:w-[500px] h-[300px] sm:h-[400px] lg:h-[700px] relative mb-5 ">
        <Image
          src="/img/preguntasFrecuentes.png"
          objectFit="contain"
          layout="fill"
          alt="preguntas frecuentes"
        />
      </div>
      <h1 className="text-5xl text-white sm:py-1 sm:px-4 font-[ralewayBlack] sm:bg-azulBooster w-fit sm:rounded-lg mb-5 sm:mb-0 flex flex-col sm:flex-row gap-2 sm:gap-2 text-center">
        <span className="bg-azulBooster rounded-lg py-1 px-2 xs:px-4 sm:px-0">
          Preguntas
        </span>
        <span className="bg-azulBooster rounded-lg px-2 xs:px-4 sm:px-0 py-1">
          Frecuentes
        </span>
      </h1>
      <div className="w-[290] xs:w-[370px] sm:w-[630px] md:w-[760px] lg:w-[1030px] xl:w-[1250px] flex gap-10 z-10">
        <div className="hidden lg:block w-[500px] h-[700px] relative">
          <Image
            src="/img/preguntasFrecuentes.png"
            objectFit="contain"
            layout="fill"
            alt="preguntas frecuentes"
          />
        </div>
        <div className="lg:w-9/12">
          <FAQbox />
        </div>
      </div>
    </div>
  )
}
