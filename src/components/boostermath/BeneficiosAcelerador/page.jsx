import Image from "next/image"
import { data } from "@/data/beneficiosBoostermath"
import CardBeneficios from "@/components/shared/CardBeneficios/page"

export default function BeneficiosAcelerador() {
  return (
    <div className="relative w-full flex flex-col items-center bg-gradient-to-b from-azulClaritoBooster to-white pb-20 md:overflow-hidden">
      <div className="absolute top-0 w-full h-full">
        <div className="w-full h-[600px] relative">
          <Image
            className="top-0"
            src="/img/fondoEcuaciones.png"
            objectFit="cover"
            layout="fill"
            alt="fondo ecuaciones"
            objectPosition="top"
          />
        </div>
      </div>
      <h2 className="text-2xl sm:text-4xl lg:text-5xl text-azulBooster flex flex-col gap-3 text-center items-center mb-10 pt-10 sm:pt-0">
        <span className="bg-azulClaroBooster py-1 px-3 w-fit rounded-md">
          Beneficios del Acelerador
        </span>
        <span className="bg-azulClaroBooster py-1 px-3 w-fit rounded-md">
          Matemático
        </span>
      </h2>
      <div className="w-[280px] xs:w-[370px] sm:w-[630px] md:w-[760px] lg:w-[1030px] xl:w-[1250px] flex gap-5 sm:gap-20 flex-wrap justify-center">
        {data.map((item, i) => (
          <div key={item.title} className="card w-[350px] h-[300px]   card">
            <CardBeneficios item={item} color={i % 2 === 0} />
          </div>
        ))}
      </div>
    </div>
  )
}
