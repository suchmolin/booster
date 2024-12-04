import Image from "next/image"

export default function IcoBooster() {
  return (
    <>
      {/************Linea gradiente**********/}
      <div className="absolute md:w-full h-full top-0 left-0 flex md:justify-center overflow-hidden ml-8 xs:ml-12 sm:ml-32 md:ml-0">
        <div className="w-[10px] h-[95%] bgGradient"></div>
      </div>

      {/************icono********************/}
      <div className="sticky top-[50%] flex md:justify-center ml-[13px] xs:ml-[28px] sm:ml-[108px] md:ml-0">
        <div className="relative w-[50px] aspect-square">
          <Image
            src="/img/icoBooster.png"
            layout="fill"
            objectFit="contain"
            alt="icono booster"
          />
        </div>
      </div>
    </>
  )
}
