import { data } from "@/data/clasesPersonalizadas"
import Image from "next/image"
import Link from "next/link"

export default function ClasesPersonalizadas() {
  return (
    <div className="relative w-full flex flex-col items-center bg-gradient-to-b from-[#D1DBFA] to-white md:overflow-hidden">
      <h2 className="text-2xl xs:text-3xl sm:text-5xl text-white bg-[url('/img/manchaAzulLg.png')] bg-no-repeat bg-contain bg-center p-10 sm:p-12 w-fit text-center">
        Boosterclub
      </h2>{" "}
      <p className="font-[ralewayBlack] text-2xl lg:text-3xl w-[290px] xs:w-[360px] sm:w-[630px] lg:w-[900px] text-azulBooster text-center">
        Experimenta el aprendizaje personalizado con un profesor exclusivo.
        Elige tu horario y avanza a tu propio ritmo
      </p>
      <div className="w-[290px] xs:w-[370px] sm:w-[630px] md:w-[760px] lg:w-[1030px] xl:w-[1250px] flex gap-x-20 gap-y-7 flex-wrap justify-center py-20">
        {data.map((item) => (
          <div
            key={item.id}
            className="relative xs:w-[280px] w-[350px] min-h-[440px] flex flex-col gap-2 items-center text-center"
          >
            <div
              style={{ border: `3px solid ${item.tarjeta.borde}` }}
              className="relative rounded-full  w-8/12 aspect-square overflow-hidden"
            >
              <Image
                src={item.tarjeta.img}
                objectFit="cover"
                layout="fill"
                alt={item.tarjeta.titulo}
              />
            </div>
            <h3 className="text-4xl text-azulBooster font-[ralewayBlack]">
              {item.tarjeta.titulo}
            </h3>
            <p className="text-xl mb-4">{item.tarjeta.descripcion}</p>
            <div className="w-full absolute bottom-4">
              <Link
                className="w-fit px-4 py-1 text-xl rounded-lg bg-violetaBooster text-white"
                href={`/boosterclub/${item.id}`}
              >
                VER MÁS
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
