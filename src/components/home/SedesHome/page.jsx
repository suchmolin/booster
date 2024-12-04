import BotonBooster from "@/components/shared/BotonBooster/page"
import Image from "next/image"

export default function SedesHome() {
  return (
    <div className="w-full flex flex-col items-center overflow-hidden">
      <div className="w-[500px] md:w-[750px] lg:w-[1000px] xl:w-[1200px] xxl:w-[1300px] flex flex-col md:flex-row gap-5 lg:gap-10 xxl:gap-20 items-center">
        <div className="w-[300px] lg:w-[450px] xxl:w-[600px] aspect-square relative">
          <Image
            src="/img/sede.png"
            layout="fill"
            objectFit="contain"
            alt="sede de boostgermas en el ccct"
          />
        </div>
        <div className="w-[280px] xs:w-[350px] sm:w-[400px] lg:w-[400px] xl:w-[800px] xxl:w-[600px] flex flex-col gap-4 xl:gap-7 text-azulBooster text-3xl lg:text-4xl xl:text-5xl -mt-5 md:-mt-10 text-center md:text-start">
          <h3 className="font-bold">SEDE GRUPAL</h3>
          <p className="">
            CCCT, nivel 2, sector Yarey, nivel mezzanina, oficina M03.
          </p>
          <div className="w-full flex gap-2 xxl:gap-4 items-center">
            <div className="w-[40px] aspect-square relative">
              <Image
                src="/img/telicon.png"
                objectFit="contain"
                layout="fill"
                alt="telefono"
              />
            </div>
            <p className="text-sm xs:text-lg sm:text-xl xxl:text-3xl">
              +58 412 3408754
            </p>
          </div>
          <div className="w-full flex gap-2 xxl:gap-4 items-center">
            <div className="w-[40px] aspect-square relative">
              <Image
                src="/img/emailicon.png"
                objectFit="contain"
                layout="fill"
                alt="telefono"
              />
            </div>
            <p className="text-sm xs:text-lg sm:text-xl xxl:text-3xl">
              atencionalcliente@boostermath.com
            </p>
          </div>
        </div>
      </div>
      <div className="w-[280px] xs:w-[350px] sm:w-[580px] md:w-[740px] lg:w-[1000px] xl:w-[1200px] flex flex-col items-center py-20 text-center">
        <p className="font-bold text-lg xs:text-xl sm:text-3xl xl:text-4xl text-azulBooster mb-4 px-3 xs:px-0 sm:px-10 md:px-0">
          Es momento de dar un paso adelante en la Educación de tu hijo,
        </p>
        <h3 className="pt-1 pb-3 px-3 text-white bg-azulBooster text-3xl md:text-4xl xl:text-5xl rounded-xl w-fit mb-4">
          ven a Booster y que Empiece el Despegue
        </h3>
        <BotonBooster href="#" texto="CONTÁCTANOS" />
      </div>
    </div>
  )
}
