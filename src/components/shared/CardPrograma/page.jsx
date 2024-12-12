import { FaRegCheckCircle } from "react-icons/fa"
import BotonBooster from "../BotonBooster/page"
import Image from "next/image"

export default function CardPrograma({ data }) {
  const { tarjeta } = data
  return (
    <div
      style={{ backgroundColor: tarjeta?.fondo }}
      className="w-[280px] xs:w-[350px] lg:w-[400px] xl:w-[500px] min-h-[860px] relative flex flex-col rounded-2xl pb-10 cShadow"
    >
      <div className="absolute w-full -top-10 flex justify-center z-10">
        <h3
          style={{ backgroundImage: `url(${data.fondoTitulo})` }}
          className={`text-white w-fit p-7 rounded-xl text-3xl xs:text-3xl xl:text-4xl font-[ralewayBlack]  bg-contain bg-no-repeat bg-center`}
        >
          {data.titulo}
        </h3>
      </div>
      <div className="relative w-full aspect-video rounded-t-2xl overflow-hidden">
        <Image src={data.img} alt="programa" layout="fill" objectFit="cover" />
      </div>
      <div className="relative px-7 pt-7 pb-16">
        {tarjeta?.items.map((item) => (
          <div key={item} className="flex gap-4 mb-4 xs:mb-4">
            <FaRegCheckCircle
              style={{ color: data.colorVineta }}
              className="text-2xl xl:text-3xl"
            />
            <p className="w-[200px] xs:w-[250px] lg:w-[280px] xl:w-[340px] xs:text-lg lg:text-LG xl:text-xl text-azulBooster font-[ralewayBlack]">
              {item}
            </p>
          </div>
        ))}
      </div>
      <div className="absolute bottom-7 w-full flex justify-center">
        <a
          href={tarjeta.boton.href}
          style={{ backgroundColor: tarjeta.boton.color }}
          className="w-fit text-base xs:text-LG xl:text-xl text-white py-2 px-4 rounded-xl font-[ralewayBlack] z-10"
        >
          {tarjeta.boton.texto}
        </a>
      </div>
    </div>
  )
}
