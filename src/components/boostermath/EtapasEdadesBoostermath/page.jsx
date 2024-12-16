import { data } from "@/data/etapaEdadesBoostermath"
import Image from "next/image"
export default function EtapasEdadesBoostermath() {
  return (
    <div className="relative w-full flex justify-center pb-32">
      <div className="w-[290] xs:w-[370px] sm:w-[630px] md:w-[760px] lg:w-[1030px] xl:w-[1250px] flex gap-x-14 gap-y-10 p-1 flex-wrap justify-center">
        {data.map((item) => (
          <div
            key={item.id}
            className="w-[280px] xs:w-[300px] relative flex flex-col gap-2 text-azulBooster text-center"
          >
            <h3 className="font-[ralewayBlack] text-2xl">{item.title}</h3>
            <h4 className="text-xl bg-violetaBooster py-2 rounded-lg text-white">
              {item.etapa}
            </h4>
            <div className="relative w-full h-[170px] rounded-tl-[40px] rounded-br-[40px] rounded-tr-lg rounded-bl-lg border-2 border-violetaBooster overflow-hidden">
              <Image
                src={item.img}
                objectFit="cover"
                layout="fill"
                alt={item.title}
              />
            </div>
            <p>{item.descripcion}</p>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 z-10 w-full">
        <div className="relative w-full h-[250px]">
          <Image
            src="/img/curvaHeaderHome.png"
            layout="fill"
            objectFit="contain"
            alt="curva"
            objectPosition="bottom"
          />
        </div>
      </div>
    </div>
  )
}
