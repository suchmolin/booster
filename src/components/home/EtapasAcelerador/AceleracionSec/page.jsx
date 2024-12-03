"use client"
import Image from "next/image"
import { Slide } from "react-awesome-reveal"

export default function AceleracionSec() {
  return (
    <div className="w-full flex items-center justify-center gap-52">
      <Slide triggerOnce direction="left">
        <div className="w-[700px] text-right flex flex-col items-end justify-center pl-52">
          <h4 className="w-fit text-3xl bg-[#9747FF] py-1 px-3 text-white rounded-lg font-bold">
            Aceleración:
          </h4>
          <p className="text-xl text-azulBooster">
            Tu hijo resuelve problemas matemáticos más complejos, mientras
            avanza a niveles educativos superiores.
          </p>
        </div>
      </Slide>
      <Slide triggerOnce direction="right" className="w-[700px]">
        <div className="w-[380px] aspect-square relative">
          <Image
            src="/img/ACELERACION.png"
            layout="fill"
            objectFit="contain"
            alt="niña feliz por estudiar en boostermath"
          />
        </div>
      </Slide>
    </div>
  )
}
