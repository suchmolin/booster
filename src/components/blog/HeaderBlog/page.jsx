import Image from "next/image"

export default function HeaderBlog() {
  return (
    <div className="relative w-full h-[600px] bg-[url('/img/fondoHeaderBlogSm.png')] sm:bg-[url('/img/fondoHeaderBlog.png')] bg-cover bg-left lg:bg-bottom bg-no-repeat">
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
