"use client"
import Image from "next/image"
import { Slide } from "react-awesome-reveal"

export default function AplicacionSec() {
  return (
    <div className="w-full flex items-center justify-center gap-52">
      <Slide
        triggerOnce
        direction="left"
        className="w-[700px] flex justify-end"
      >
        <div className="w-[380px] aspect-square relative">
          <Image
            src="/img/APLICACION.png"
            layout="fill"
            objectFit="contain"
            alt="niña feliz por estudiar en boostermath"
          />
        </div>
      </Slide>
      <Slide triggerOnce direction="right">
        <div className="w-[700px] text-left flex flex-col items-start justify-center pr-52">
          <h4
            className="w-fit text-3xl bg-[#DBF3F9] py-1 px-3 text-azulBooster
         rounded-lg font-bold"
          >
            Aplicación:
          </h4>
          <p className="text-xl text-azulBooster">
            El niño aplica las matemáticas en situaciones reales desarrollando
            su razonamiento lógico.
          </p>
        </div>
      </Slide>
    </div>
  )
}
