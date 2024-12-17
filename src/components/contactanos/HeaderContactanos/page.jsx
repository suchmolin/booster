import Image from "next/image"

export default function HeaderContactanos() {
  return (
    <div className="relative w-full h-[600px] xxl:h-[700px] bg-[url('/img/fondoHeaderContactanos.png')] bg-cover bg-bottom lg:bg-bottom bg-no-repeat">
      <div className="absolute -bottom-1 w-full">
        <div className="relative w-full h-[200px]">
          <Image
            src="/img/curvaHeaderHome.png"
            objectFit="cover"
            layout="fill"
            alt="curva"
          />
        </div>
      </div>
    </div>
  )
}
