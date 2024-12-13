import Image from "next/image"

export default function HeaderNosotros() {
  return (
    <div className="relative w-full h-[600px] bg-[url('/img/headerNosotrosSm.png')] sm:bg-[url('/img/headerNosotrosMd.png')] lg:bg-[url('/img/fondoHeaderConocenos.png')] bg-cover bg-bottom lg:bg-center bg-no-repeat">
      <div className="absolute -bottom-1 w-full">
        <div className="relateive w-full h-[200px]">
          <Image
            src="/img/curvaConocenos.png"
            objectFit="cover"
            layout="fill"
            alt="curva"
          />
        </div>
      </div>
    </div>
  )
}
