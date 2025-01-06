import Image from "next/image"

export default function HeaderArticle({ img }) {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className={`relative w-full h-[600px] bg-cover bg-center bg-no-repeat`}
    >
      <div className="absolute -bottom-1 w-full">
        <div className="relative w-full h-[200px]">
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
