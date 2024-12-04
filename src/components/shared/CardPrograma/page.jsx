import { FaRegCheckCircle } from "react-icons/fa"
import BotonBooster from "../BotonBooster/page"

export default function CardPrograma({ data }) {
  const { tarjeta } = data
  return (
    <div
      style={{ backgroundColor: tarjeta?.fondo }}
      className="w-[280px] xs:w-[350px] lg:w-[400px] xl:w-[500px] relative flex justify-center p-7 rounded-2xl pb-10"
    >
      <div className="absolute w-full -top-7 flex justify-center">
        <h3
          style={{ backgroundColor: data.fondoTiutlo }}
          className="text-white w-fit pt-1 pb-2 px-4 rounded-xl text-4xl xs:text-5xl xl:text-6xl font-bold"
        >
          {data.titulo}
        </h3>
      </div>
      <div className="relative py-16">
        {tarjeta?.items.map((item) => (
          <div key={item} className="flex gap-4 mb-4 xs:mb-7">
            <FaRegCheckCircle
              style={{ color: data.fondoTiutlo }}
              className="text-4xl xl:text-5xl"
            />
            <p className="w-[200px] xs:w-[250px] lg:w-[280px] xl:w-[340px] xs:text-lg lg:text-xl xl:text-2xl">
              {item}
            </p>
          </div>
        ))}
        <div className="absolute bottom-0 w-full flex justify-center">
          <a
            href={tarjeta.boton.href}
            style={{ backgroundColor: tarjeta.boton.color }}
            className="w-fit text-base xs:text-xl xl:text-2xl text-white py-2 px-4 rounded-xl font-bold z-10"
          >
            {tarjeta.boton.texto}
          </a>
        </div>
      </div>
    </div>
  )
}
