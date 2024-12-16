import Image from "next/image"

export default function HeaderBoostermath() {
  return (
    <div className="relative w-full h-[600px] bg-[url('/img/fondoBoostermath.png')] bg-cover bg-left lg:bg-bottom bg-no-repeat">
      <div className="absolute -bottom-1 w-full">
        <div className="relative w-full h-[200px]">
          <Image
            src="/img/curvaFondo3.png"
            objectFit="cover"
            layout="fill"
            alt="curva"
          />
        </div>
      </div>
    </div>
  )
}
