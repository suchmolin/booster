import Image from "next/image"
import { data } from "@/data/beneficiosBoosterclub"
import CardBeneficios from "@/components/shared/CardBeneficios/page"

export default function Seccion20club() {
  return (
    <>
      <div className="relative w-full h-[200px] md:h-[300px]">
        <Image
          src="/img/curvaFondo5.png"
          objectFit="cover"
          layout="fill"
          alt="curva"
        />
      </div>
      <div className="w-full bg-gradient-to-b from-azulClaritoBooster to-white flex flex-col items-center pb-10 lg:pb-0">
        <div className="w-[290] xs:w-[370px] sm:w-[630px] md:w-[760px] lg:w-[1030px] xl:w-[1250px] flex flex-col sm:flex-row gap-7 items-center -mt-20 md:-mt-40 z-10">
          <div className="sm:w-6/12 text-azulBooster text-center sm:text-start">
            <h2 className="font-[ralewayBlack] text-4xl sm:text-5xl mb-4">
              Tarjeta del 20 Club
            </h2>
            <p className="text-xl sm:text-2xl">
              Inscríbe a tu hijo en el Boosterclub y obten acceso a nuestra
              atención exclusiva, con recursos innovadores para llevar su
              aprendizaje a otro nivel.
            </p>
          </div>
          <div className="w-full sm:w-6/12 relative aspect-[16/9]">
            <Image
              src="/img/tarjeta20club.png"
              objectFit="contain"
              layout="fill"
              alt="tarjeta 20 club"
            />
          </div>
        </div>
      </div>
      <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-azulBooster flex flex-col gap-3 text-center items-center mb-10 pt-10 sm:pt-0">
        <span className="bg-azulClaroBooster py-1 px-3 w-fit rounded-md">
          Beneficios de nuestro
        </span>
        <span className="bg-azulClaroBooster py-1 px-3 w-fit rounded-md">
          Curso Personalizado
        </span>
      </h2>
      <div className="w-full flex justify-center pb-20">
        <div className="w-[280px] xs:w-[370px] sm:w-[630px] md:w-[760px] lg:w-[1030px] xl:w-[1250px] flex gap-5 sm:gap-20 flex-wrap justify-center">
          {data.map((item, i) => (
            <div key={item.title} className="card w-[350px] h-[300px]   card">
              <CardBeneficios item={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
