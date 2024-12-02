import Image from "next/image"
import IcoBooster from "./IcoBooster/page"
import IniciacionSec from "./IniciacionSec/page"

export default function EtapasAcelerador() {
  return (
    <div className="w-full relative">
      <div className="absolute w-full h-full top-0 left-0 flex justify-center">
        <div className="w-[10px] h-full bgGradient"></div>
      </div>
      <IcoBooster />
      <IniciacionSec />
    </div>
  )
}