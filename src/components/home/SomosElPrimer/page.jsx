import BotonBooster from "@/components/shared/BotonBooster/page"
import Image from "next/image"

export default function SomosElPrimer() {
  return (
    <div className="w-full relative bg-gradient-to-b from-[#DBF3F9] to-white z-20 flex flex-col items-center pb-52 -mt-1">
      <Image
        src="/img/fondoPrimerAcelerador.png"
        layout="fill"
        objectFit="cover"
        alt="fondo"
        objectPosition="top"
      />
      <h2 className="text-5xl text-white pt-20 flex flex-col text-center gap-2 font-bold items-center mb-5">
        <span className="bg-violetaBooster rounded-xl w-fit py-2 px-4">
          Somos el Primer Acelerador
        </span>
        <span className="bg-violetaBooster rounded-xl w-fit py-2 px-4">
          Matemático del País
        </span>
      </h2>
      <p className="w-[800px] text-2xl text-azulBooster text-center">
        Booster te ofrece la oportunidad de fortalecer y potenciar las
        habilidades numéricas de tu hijo, permitiendole superar desafíos y
        avanzar hacia niveles mas altos.
      </p>
      <div className="w-10/12 flex items-center">
        <div className="w-[600px] aspect-square relative">
          <Image
            src="/img/somosElPrimer.png"
            layout="fill"
            objectFit="contain"
            alt="niña feliz por estudiar en boostermath"
          />
        </div>
        <div className="w-7/12 flex flex-col text-2xl text-azulBooster ml-20 pr-20">
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
