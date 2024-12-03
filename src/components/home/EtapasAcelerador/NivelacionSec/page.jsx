"use client"
import Image from "next/image"
import { Slide } from "react-awesome-reveal"

export default function NivelacionSec() {
  return (
    <div className="w-full flex items-center justify-center gap-52">
      <Slide triggerOnce direction="left">
        <div className="w-[700px] flex justify-end">
          <div className="w-[380px] aspect-square relative">
            <Image
              src="/img/NIVELACION.png"
              layout="fill"
              objectFit="contain"
              alt="niña feliz por estudiar en boostermath"
            />
          </div>
        </div>
      </Slide>
      <Slide triggerOnce direction="right">
        <div className="w-[700px] text-left flex flex-col items-start justify-center pr-52">
          <h4
            className="w-fit text-3xl bg-[#FFE8FE] py-1 px-3 text-violetaBooster
          rounded-lg font-bold"
          >
            Nivelación:
          </h4>
          <p className="text-xl text-azulBooster">
            El niño fortalece los conceptos previamente aprendidos y explora
            nuevos temas acorde a tu nivel de estudio.
          </p>
        </div>
      </Slide>
    </div>
  )
}
