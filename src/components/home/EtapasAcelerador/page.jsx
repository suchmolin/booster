import Image from "next/image"
import IcoBooster from "./IcoBooster/page"
import IniciacionSec from "./IniciacionSec/page"
import { data } from "@/data/etapasAcelerador"

export default function EtapasAcelerador() {
  return (
    <div className="w-full relative pb-32 mt-10 xl:mt-0">
      <IcoBooster />
      {data.map((item, i) => (
        <IniciacionSec key={item.id} item={item} mirror={i % 2 !== 0} />
      ))}

      <div className="absolute bottom-0 z-10 w-full">
        <div className="relative w-full h-[250px]">
          <Image
            src="/img/curvaFondo2.png"
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
