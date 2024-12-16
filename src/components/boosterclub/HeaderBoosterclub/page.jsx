import Image from "next/image"

export default function HeaderBoosterclub() {
  return (
    <div className="relative w-full h-[600px] bg-[url('/img/fondoBoosterclub.png')] bg-cover bg-bottom lg:bg-bottom bg-no-repeat">
      <div className="absolute -bottom-1 w-full">
        <div className="relative w-full h-[200px]">
          <Image
            src="/img/curvaFondo4.png"
            objectFit="cover"
            layout="fill"
            alt="curva"
          />
        </div>
      </div>
    </div>
  )
}
