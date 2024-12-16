import Image from "next/image"

export default function HeaderPersonalizado({ page }) {
  return (
    <div
      style={{ backgroundImage: `url(${page.header})` }}
      className={`relative w-full h-[600px] bg-cover bg-bottom lg:bg-bottom bg-no-repeat flex justify-center items-center`}
    >
      <h1 className="text-5xl text-white">{page.titulo}</h1>
      <div className="absolute -bottom-1 w-full">
        <div className="relative w-full h-[200px]">
          <Image src={page.curva} objectFit="cover" layout="fill" alt="curva" />
        </div>
      </div>
    </div>
  )
}
