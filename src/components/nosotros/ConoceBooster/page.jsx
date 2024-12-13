import Image from "next/image"

export default function ConoceBooster() {
  return (
    <>
      <div className="w-full bg-gradient-to-b from-[#DBF3F8] to-white flex flex-col items-center -mt-1 py-5 z-10 pb-10">
        <h2 className="text-white bg-violetaBooster text-3xl xs:text-4xl sm:text-5xl py-1 px-3 rounded-xl w-fit mb-16">
          Conoce Booster
        </h2>
        <div className="w-[290] xs:w-[370px] sm:w-[630px] md:w-[760px] lg:w-[1000px] flex flex-col-reverse lg:flex-row lg:gap-16 items-center justify-center text-azulBooster mb-16">
          <div className="w-11/12 lg:w-6/12 flex flex-col text-center lg:text-start">
            <h3 className="text-2xl sm:text-3xl font-[ralewayBlack] mb-7">
              Somos el primer Acelerador Matemático de Venezuela.
            </h3>
            <div className="text-lg sm:text-xl">
              <p className="mb-4">
                Transformamos la manera en que las personas experimentan las
                matemáticas, facilitando su comprensión, a través de programas
                educativos diseñador para cada etapa de estudio.
              </p>
              <p>
                Somos el aliado que tu hijo necesita, ayudamos a descubrir el
                poder y la importancia de la matemática en la vida diaria.
              </p>
            </div>
          </div>
          <div className="w-11/12 lg:w-6/12 relative aspect-[14/9] mb-7 lg:mb-0">
            <Image
              src="/img/primerAcelerador.png"
              objectFit="contain"
              layout="fill"
              alt="Primer acelerador"
            />
          </div>
        </div>
        <div className="w-[290] xs:w-[370px] sm:w-[630px] md:w-[760px] lg:w-[1000px] flex flex-col-reverse lg:flex-row-reverse lg:gap-16 items-center justify-center text-azulBooster">
          <div className="w-11/12 lg:w-6/12 flex flex-col text-center lg:text-start">
            <h3 className="text-3xl sm:text-4xl font-[ralewayBlack] mb-7">
              El objetivo de Booster
            </h3>
            <div className="text-lg sm:text-xl">
              <p className="mb-4">
                Transformamos la manera en que las personas experimentan las
                matemáticas, facilitando su comprensión, a través de programas
                educativos diseñador para cada etapa de estudio.
              </p>
              <p>
                Somos el aliado que tu hijo necesita, ayudamos a descubrir el
                poder y la importancia de la matemática en la vida diaria.
              </p>
            </div>
          </div>
          <div className="w-11/12 lg:w-6/12 relative aspect-[14/9] mb-7 lg:mb-0">
            <Image
              src="/img/objetivoBooster.png"
              objectFit="contain"
              layout="fill"
              alt="Primer acelerador"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[200px] bg-[url('/img/curvaNosotros.png')] bg-no-repeat bg-cover"></div>
    </>
  )
}
