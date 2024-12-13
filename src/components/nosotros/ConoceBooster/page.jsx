import Image from "next/image"

export default function ConoceBooster() {
  return (
    <>
      <div className="w-full bg-gradient-to-b from-[#DBF3F8] to-white flex flex-col items-center -mt-1 py-5 z-10 pb-10">
        <h2 className="text-white bg-violetaBooster text-3xl xs:text-4xl sm:text-5xl py-1 px-3 rounded-xl w-fit mb-16">
          Conoce Booster
        </h2>
        <div className="w-[290] xs:w-[370px] sm:w-[630px] md:w-[760px] lg:w-[1000px] xl:w-[1200px] flex flex-col-reverse lg:flex-row lg:gap-16 items-center justify-center text-azulBooster mb-16">
          <div className="w-11/12 lg:w-7/12 flex flex-col text-center lg:text-start">
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
          <div className="w-11/12 lg:w-5/12 relative aspect-[14/9] mb-7 lg:mb-0">
            <Image
              src="/img/primerAcelerador.png"
              objectFit="contain"
              layout="fill"
              alt="Primer acelerador"
            />
          </div>
        </div>
        <div className="w-[290] xs:w-[370px] sm:w-[630px] md:w-[760px] lg:w-[1000px] xl:w-[1270px] flex flex-col-reverse lg:flex-row-reverse lg:gap-16 items-center justify-center text-azulBooster">
          <div className="w-11/12 lg:w-7/12 flex flex-col text-center lg:text-start">
            <h3 className="text-3xl sm:text-4xl font-[ralewayBlack] mb-7">
              El objetivo de Booster
            </h3>
            <div className="text-lg sm:text-xl">
              <div className="rounded-l-2xl py-2 px-4 sm:bg-gradient-to-r from-[#D1DBFA] to white mb-4 flex flex-col sm:flex-row items-center gap-5">
                <div className="w-[130px] sm:w-[70px] aspect-square relative bg-[url('/img/trofeo2.png')] sm:bg-[url('/img/trofeo.png')] bg-contain bg-center bg-no-repeat"></div>
                <p className="w-10/12">
                  Cambiamos la forma en la que se enseña la matemática para
                  convertirla en una herramienta útil y al álcance de todos los
                  estudiantes del mundo.
                </p>
              </div>
              <div className="rounded-l-2xl py-2 px-4 sm:bg-gradient-to-r from-[#D1DBFA] to white mb-4 flex flex-col sm:flex-row items-center gap-5">
                <div className="w-[130px] sm:w-[70px] aspect-square relative bg-[url('/img/bombillo2.png')] sm:bg-[url('/img/bombillo.png')] bg-contain bg-center bg-no-repeat"></div>
                <p className="w-10/12">
                  Nuestros educadores expertos utilizan métodos de enseñanza
                  vanguardistas para desarrollar en nuestros estudiantes un
                  pensamiento crítico y una sólida base en matemáticas.
                </p>
              </div>
            </div>
          </div>
          <div className="w-11/12 lg:w-5/12 relative aspect-[14/9] mb-7 lg:mb-0">
            <Image
              src="/img/objetivoBooster.png"
              objectFit="contain"
              layout="fill"
              alt="Primer acelerador"
            />
          </div>
        </div>
      </div>
    </>
  )
}
