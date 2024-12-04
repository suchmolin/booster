import BotonBooster from "@/components/shared/BotonBooster/page"
import Image from "next/image"

export default function SomosElPrimer() {
  return (
    <div className="w-full relative bg-gradient-to-b from-[#DBF3F9] to-white z-20 flex flex-col items-center -mt-1 overflow-hidden">
      <h2 className="text-xl xs:text-2xl sm:text-4xl lg:text-5xl text-white pt-10 lg:pt-20 flex flex-col text-center gap-2 font-bold items-center mb-5">
        <span className="bg-violetaBooster rounded-xl w-fit py-2 px-4">
          Somos el Primer Acelerador
        </span>
        <span className="bg-violetaBooster rounded-xl w-fit py-2 px-4">
          Matemático del País
        </span>
      </h2>
      <p className="w-[290px] xs:w-[370px] sm:w-[620px] md:w-[740px] lg:w-[800px] xs:text-lg sm:text-2xl text-azulBooster text-center">
        Booster te ofrece la oportunidad de fortalecer y potenciar las
        habilidades numéricas de tu hijo, permitiendole superar desafíos y
        avanzar hacia niveles mas altos.
      </p>
      <div className="w-11/12 md:w-10/12 flex flex-col lg:flex-row items-center">
        <div className="w-[360px] sm:w-[600px] aspect-square relative">
          <Image
            src="/img/somosElPrimer.png"
            layout="fill"
            objectFit="contain"
            alt="niña feliz por estudiar en boostermath"
          />
        </div>
        <div className="w-11/12 sm:w-10/12 lg:w-7/12 flex flex-col xs:text-lg sm:text-2xl lg:text-xl xl:text-2xl text-azulBooster lg:ml-20 xl:pr-20 text-center lg:text-start items-center lg:items-start">
          <p className="mb-5">
            Creamos un programa educativo comprometido con el desarrollo
            integral de nuestros estudiantes en todas las etapas de estudio.
          </p>
          <p className="mb-5">
            A través del método Boostermath y sus 4 etapas (Iniciación,
            Nivelación, Aceleración y Aplicación), tu hijo estará un paso
            adelante en su formación académica.
          </p>
          <BotonBooster href="#" texto="Contáctanos" />
        </div>
      </div>
    </div>
  )
}
