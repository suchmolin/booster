import Image from "next/image"
import IcoBooster from "./IcoBooster/page"
import IniciacionSec from "./IniciacionSec/page"
import NivelacionSec from "./NivelacionSec/page"
import AceleracionSec from "./AceleracionSec/page"
import AplicacionSec from "./AplicacionSec/page"

export default function EtapasAcelerador() {
  return (
    <div className="w-full relative pb-32">
      <div className="absolute w-full h-full top-0 left-0 flex justify-center">
        <div className="w-[10px] h-[95%] bgGradient"></div>
      </div>
      <IcoBooster />
      <IniciacionSec />
      <NivelacionSec />
      <AceleracionSec />
      <AplicacionSec />
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
