import BotonBooster from "@/components/shared/BotonBooster/page"
import Image from "next/image"

export default function SedesHome() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[1300px] flex gap-20 items-center">
        <div className="w-[700px] aspect-square relative">
          <Image
            src="/img/sede.png"
            layout="fill"
            objectFit="contain"
            alt="sede de boostgermas en el ccct"
          />
        </div>
        <div className="flex flex-col gap-2 text-azulBooster text-3xl -mt-10">
          <h3 className="font-bold">SEDE GRUPAL</h3>
          <p className="">
            CCCT, nivel 2, sector Yarey, nivel mezzanina, oficina M03.
          </p>
          <h4 className="text-white font-bold rounded-lg bg-azulClaroBooster w-fit px-3 py-1">
            CLASES GRUPALES
          </h4>
          {/**************************/}
          <h3 className="font-bold w-[300px]">Sede Clases Personalizadas</h3>
          <p className="">CCCT, Torre A, piso 6, oficina 608.</p>
          <h4 className="text-white font-bold rounded-lg bg-azulClaroBooster w-fit px-3 py-1">
            CLASES PERSONALIZADAS
          </h4>
        </div>
      </div>
      <div className="w-[1200px] flex flex-col items-center py-20">
        <p className="font-bold text-4xl text-azulBooster mb-4">
          Es momento de dar un paso adelante en la Educación de tu hijo,
        </p>
        <h3 className="pt-1 pb-3 px-3 text-white bg-azulBooster text-5xl rounded-xl w-fit mb-4">
          ven a Booster y que Empiece el Despegue
        </h3>
        <BotonBooster href="#" texto="CONTÁCTANOS" />
      </div>
    </div>
  )
}
