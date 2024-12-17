import Image from "next/image"
import { MdArrowOutward } from "react-icons/md"

export default function CardBlog({ item }) {
  const { tarjeta } = item
  return (
    <a
      href={`/blog/${item.id}`}
      className="w-[280px] xs:w-[350px] sm:w-[400px] relative rounded-xl overflow-hidden cShadow text-azulBooster bg-[#D1DBFA] hover:scale-[103%] transition-all duration-300"
    >
      <div className="w-full h-[200px] relative mb-4">
        <Image
          src={tarjeta.img}
          objectFit="cover"
          objectPosition="top"
          layout="fill"
          alt={tarjeta.titulo}
        />
      </div>
      <div className="w-full px-5 pb-20">
        <h4 className="text-xl xl:text-2xl font-[ralewayBlack] mb-3">
          {tarjeta.titulo}
        </h4>
        <p className="text-base xl:text-lg mb-3">{tarjeta.descripcion}</p>
        <p className="text-lg xl:text-xl font-[ralewayBlack]">
          {tarjeta.autor}
        </p>
      </div>
      <div className="absolute w-full px-4 bottom-4 flex justify-between items-center">
        <div className="flex gap-3">
          {tarjeta.categorias.map((cat) => (
            <span
              key={cat.texto}
              style={{ backgroundColor: cat.color }}
              className={` text-white h-fit py-1 px-3 rounded-lg`}
            >
              {cat.texto}
            </span>
          ))}
        </div>
        <div className="bg-azulBooster text-white rounded-full p-2 flex items-center justify-center text-2xl">
          <MdArrowOutward className="" />
        </div>
      </div>
    </a>
  )
}
