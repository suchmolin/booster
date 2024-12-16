import Image from "next/image"
import { data } from "@/data/etapasAcelerador"
import IcoBooster from "@/components/home/EtapasAcelerador/IcoBooster/page"
import IniciacionSec from "@/components/home/EtapasAcelerador/IniciacionSec/page"

export default function EtapasAceleradorBoostermath() {
  return (
    <div className="relative w-full flex flex-col items-center bg-gradient-to-b from-azulClaritoBooster to-white pb-20 md:overflow-hidden">
      <div className="absolute top-0 w-full h-full">
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
      <h2 className="text-2xl xs:text-3xl sm:text-5xl text-white bg-[url('/img/manchaAzulLg.png')] bg-no-repeat bg-contain bg-center p-10 sm:p-12 w-fit text-center">
        Boostermath
      </h2>{" "}
      <p className="font-[ralewayBlack] text-2xl lg:text-3xl w-[290px] xs:w-[360px] sm:w-[630px] lg:w-[900px] text-azulBooster text-center">
        Programa educativo diseñado para llevar a los estudiantes un paso
        adelante en su etapa de estudio.
      </p>
      <div className="w-[630px] md:w-[760px] lg:w-[1030px] xl:w-[1250px] hidden md:flex flex-col">
        <div className="flex w-full gap-10 justify-center py-10">
          {data.map((item) => (
            <div
              key={item.id}
              className="w-[160px] md:w-[250px] xl:w-[350px] flex flex-col items-center"
            >
              <div className="w-8/12 aspect-square relative">
                <Image
                  src={item.img}
                  objectFit="contain"
                  layout="fill"
                  alt={item.titulo}
                />
              </div>
              <h3
                style={{
                  backgroundColor: item.fondoTitulo,
                  color: item.colorTitulo,
                }}
                className=" text-2xl font-[ralewayBlack] mt-3 px-3 rounded-md"
              >
                {item.titulo}
              </h3>
              <p className="text-center text-azulBooster text-base lg:text-lg mt-2">
                {item.descripcion}
              </p>
            </div>
          ))}
        </div>
        <div className="w-[630px] md:w-[760px] lg:w-[1030px] xl:w-[1250px] relative flex gap-10">
          <div className="absolute top-[8px] w-full h-[12px] bgGradient"></div>
          {[...Array(4)].map((i, index) => (
            <div
              key={index}
              className="w-[160px] md:w-[250px] xl:w-[350px] flex items-center justify-center z-10"
            >
              <Image
                src="/img/icoBooster.png"
                width={30}
                height={30}
                alt="icono booster"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="md:hidden w-full relative">
        <IcoBooster />
        {data.map((item, i) => (
          <IniciacionSec key={item.id} item={item} mirror={i % 2 !== 0} />
        ))}
      </div>
      <p className="font-[ralewayBlack] text-2xl lg:text-3xl w-[290px] xs:w-[360px] sm:w-[630px] lg:w-[1030px] xl:w-[1200px] text-azulBooster text-center pt-10">
        Desde preescolar hasta la etapa preuniversitaria, preparandolos para
        enfrentar desafíos académicos avanzados y brindales una ventaja en su
        desarrollo.
      </p>
    </div>
  )
}
