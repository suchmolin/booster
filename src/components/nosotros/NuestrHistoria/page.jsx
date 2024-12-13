import { valores } from "@/data/valores"
export default function NuestrHistoria() {
  return (
    <>
      <div className="w-full h-[150px] sm:h-[250px] bg-[url('/img/curvaNosotros.png')] bg-no-repeat bg-cover bg-center"></div>
      <div className="w-full bg-gradient-to-b from-[#D1DBFA] to-white flex flex-col items-center -mt-1 pb-20">
        <div className="w-[290] xs:w-[370px] sm:w-[630px] md:w-[760px] lg:w-[1000px] xl:w-[1200px] xxl:w-[1500px] -mt-24 flex flex-col items-center">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl text-white bg-[url('/img/manchaAzulLg.png')] bg-no-repeat bg-contain bg-center p-10 sm:p-12 w-fit text-center">
            Nuestra Historia
          </h2>{" "}
          <h3 className="text-2xl md:text-3xl font-[ralewayBlack] -mt-3 rounded-xl px-5 py-1 mb-4 text-center">
            Cambiemos juntos la visión de las matemáticas.
          </h3>
          <div className="text-lg sm:text-2xl text-center px-4  sm:px-0 lg:px-36 mb-10">
            <p className="mb-4">
              Con 26 años de experiencia, hemos desarrollado un método que
              transforma la forma en que los estudiantes aprenden y comprenden
              las matemáticas.
            </p>
            <p>
              Booster es más que un programa; es un compañero de aprendizaje que
              acompaña a cada estudiante en su recorrido hacia el dominio de las
              matemáticas, brindándoles las herramientas y el apoyo necesarios
              para tener éxito.
            </p>
          </div>
          <h3 className="text-3xl sm:text-4xl text-azulBooster font-[ralewayBlack] mb-10 text-center">
            CONOCE NUESTROS VALORES
          </h3>
          <div className="w-full md:w-[760px] lg:w-[1040px] xl:w-[1270px] flex gap-7 justify-center flex-wrap">
            {valores.map((val) => (
              <div
                key={val.title}
                className="relative group rounded-tl-[30px] rounded-br-[30px] rounded-tr-lg rounded-bl-lg w-[280px] h-[200px] flex flex-col transition-all duration-200 z-20 hover:border-2 border-violetaBooster hover:-mt-1 overflow-hidden cShadow2 border-2 sm:border-0"
              >
                <div className="absolute top-0 left-0 bg-azulClaritoBooster p-4 w-full h-full ">
                  <div className="w-full flex justify-center">
                    <svg className="fill-violetaBooster sm:fill-azulClaroBooster group-hover:fill-violetaBooster object-center w-[150px] scale-90 sm:scale100 group-hover:scale-90 aspect-square transition-all duration-300 -mt-3 sm:mt-3 group-hover:-mt-3">
                      {val.icon}
                    </svg>
                  </div>
                  <div className="w-full flex justify-center">
                    <p className="text-azulBooster font-[ralewayBlack] text-3xl sm:text-[0px]  group-hover:text-3xl transition-all duration-300 -mt-2">
                      {val.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
