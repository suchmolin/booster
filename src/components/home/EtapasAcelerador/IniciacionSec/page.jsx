"use client"
import Image from "next/image"
import { Slide } from "react-awesome-reveal"

export default function IniciacionSec({ item, mirror }) {
  return (
    <div
      className={`w-[200px] xs:w-[260px] sm:w-[400px] md:w-full flex ${mirror ? "flex-col-reverse md:flex-row-reverse" : "flex-col-reverse md:flex-row"} sm:items-center justify-center gap-7 md:gap-36 lg:gap-52 mb-10 md:mb-0 ml-20 xs:ml-24 sm:ml-52 md:ml-0`}
    >
      <Slide
        triggerOnce
        direction={`${!mirror ? "left" : "right"}`}
        className="md:w-[300px] lg:w-[700px] h-full"
      >
        <div
          className={`${!mirror ? "md:text-right md:items-end lg:pl-20 xl:pl-52" : "md:text-left md:items-start lg:pr-20 xl:pr-52"} flex flex-col justify-center gap-7 md:gap-0`}
        >
          <h4
            style={{
              color: item.colorTitulo,
              backgroundColor: item.fondoTitulo,
            }}
            className={`w-fit text-3xl py-1 px-3  rounded-lg font-bold`}
          >
            {item.titulo}
          </h4>
          <p className="text-lg xs:text-xl text-azulBooster">
            {item.descripcion}
          </p>
        </div>
      </Slide>
      <Slide
        triggerOnce
        direction={`${!mirror ? "right" : "left"}`}
        className={`md:w-[300px] lg:w-[700px]  ${!mirror ? "" : "md:flex justify-end"}`}
      >
        <div className="w-[150px] sm:w-[360px] md:w-[280px] lg:w-[380px] aspect-square relative">
          <Image
            src={item.img}
            layout="fill"
            objectFit="contain"
            alt={item.titulo}
            className={`${!mirror ? "object-left" : "md:object-right"}`}
          />
        </div>
      </Slide>
    </div>
  )
}
