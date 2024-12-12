import BotonBooster from "@/components/shared/BotonBooster/page"
import Image from "next/image"

export default function SedesHome() {
  return (
    <div className="w-full flex flex-col items-center overflow-hidden bg-[url('/img/fondoqueempiece.png')] bg-cover bg-no-repeat bg-top">
      <h2 className="text-[ralewayBlack] text-2xl xs:text-4xl sm:text-5xl text-white bg-azulBooster pb-2 pt-1 px-3 rounded-xl w-fit text-center lg:mb-12 xl:mb-0 xxl:mb-10">
        Conoce nuestra sede
      </h2>
      <div className="w-[500px] md:w-[750px] lg:w-[1000px] xl:w-[1200px] xxl:w-[1300px] flex flex-col md:flex-row gap-5 lg:gap-10 xxl:gap-20 items-center">
        <div className="w-[300px] lg:w-[450px] xxl:w-[600px] h-[300px] md:h-[400px] lg:h-[300px] xl:h-[500px] relative">
          <Image
            src="/img/sede.png"
            layout="fill"
            objectFit="contain"
            alt="sede de boostgermas en el ccct"
          />
        </div>
        <div className="w-[280px] xs:w-[350px] sm:w-[400px] lg:w-[400px] xl:w-[800px] xxl:w-[600px] flex flex-col gap-2 text-azulBooster text-2xl lg:text-3xl xl:text-4xl -mt-5 md:-mt-10 text-center md:text-start">
          <h3 className="text-[ralewayBlack]">SEDE GRUPAL</h3>
          <p className="text-2xl xs:text-[28px] text-[ralewayBlack] mb-7">
            CCCT, nivel 2, sector Yarey, nivel mezzanina, oficina M03.
          </p>
          <div className="w-full flex gap-2 xxl:gap-4 items-center justify-center md:justify-start mb-4">
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
        <p className="w-[290px] xs:w-[370px] sm:w-[700px] text-[ralewayBlack] text-xl xs:text-2xl sm:text-3xl xl:text-4xl text-azulBooster mb-2 sm:mb-4 px-3 xs:px-0 sm:px-10 md:px-0">
          Es momento de dar un paso adelante en la Educación de tu hijo, ven a
          Booster y
        </p>
        <div className="relative w-[290px] xs:w-[360px] sm:w-[500px] md:w-[600px] h-[130px] sm:h-[200px] md:h-[230px]">
          <Image
            src="/img/queempieceeldespegue.png"
            objectFit="contain"
            layout="fill"
            alt=" que empiece el despegue"
          />
        </div>
        <BotonBooster href="#" texto="CONTÁCTANOS" />
      </div>
    </div>
  )
}
