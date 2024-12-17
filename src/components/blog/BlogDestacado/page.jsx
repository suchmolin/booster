import Image from "next/image"
import { MdArrowOutward } from "react-icons/md"

export default function BlogDestacado({ data }) {
  const { tarjeta } = data

  return (
    <>
      <div className="relative w-full h-[200px] md:h-[300px]">
        <Image
          src="/img/curvaFondo5.png"
          objectFit="cover"
          layout="fill"
          alt="curva"
        />
      </div>
      <div className="w-full bg-gradient-to-b from-azulClaritoBooster to-white flex flex-col items-center">
        <h2 className="text-2xl xs:text-3xl sm:text-5xl text-white bg-[url('/img/manchaVioletaLg.png')] bg-no-repeat bg-contain bg-center p-10 sm:p-12 w-fit text-center -mt-32 z-10 mb-5">
          Post Destacado
        </h2>

        {/** tarjeta destacado */}
        <div className="w-[290px] xs:w-[370px] sm:w-[630px] md:w-[760px] lg:w-[1030px] xl:w-[1250px] flex text-azulBooster pb-20 justify-center">
          <a
            href={`/blog/${data.id}`}
            className="w-[350px] sm:w-[440px] lg:w-11/12 rounded-2xl overflow-hidden flex flex-col lg:flex-row bg-[#D1DBFA] relative hover:scale-[103%] transition-all duration-300 cShadow"
          >
            <div className="w-full lg:w-4/12 h-[250px] lg:h-full relative">
              <Image
                src={tarjeta.img}
                objectFit="cover"
                layout="fill"
                alt={tarjeta.titulo}
              />
            </div>
            <div className="lg:w-8/12 flex flex-col gap-4 p-7 lg:pl-10">
              <p className="text-2xl">{tarjeta.titulo}</p>
              <p className="text-lg">{tarjeta.descripcion}</p>
              <p className="text-xl">{tarjeta.autor}</p>

              <div className="flex gap-3">
                {tarjeta.categorias.map((cat) => (
                  <span
                    key={cat.texto}
                    style={{ backgroundColor: cat.color }}
                    className={` text-white h-fit py-1 px-3 rounded-lg text-2xl`}
                  >
                    {cat.texto}
                  </span>
                ))}
              </div>
            </div>
            <div className="absolute bottom-4 right-4 bg-azulBooster text-white rounded-full p-2 flex items-center justify-center text-3xl">
              <MdArrowOutward className="" />
            </div>
          </a>
        </div>
      </div>
    </>
  )
}
