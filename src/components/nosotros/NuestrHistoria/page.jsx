import { valores } from "@/data/valores"
export default function NuestrHistoria() {
  return (
    <div className="w-full bg-azulClaroBooster flex flex-col items-center">
      <div className="w-[290] xs:w-[370px] sm:w-[630px] md:w-[760px] lg:w-[1000px] -mt-24 flex flex-col items-center h-[1000px]">
        <h2 className="text-4xl text-white bg-[url('/img/manchaAzulLg.png')] bg-no-repeat bg-contain bg-center p-12 w-fit mb-4">
          NUESTRA HISTORIA
        </h2>{" "}
        <div className="text-2xl text-center px-36 mb-10">
          <p className="mb-4">
            <span className="font-[ralewayBlack]">
              Sabemos que las matemáticas pueden ser difíciles, pero tenemos la
              solución.
            </span>{" "}
            Con 26 años de experiencia, hemos desarrollado un método que
            transforma la forma en que los estudiantes aprenden y comprenden las
            matemáticas.
          </p>
          <p>
            Booster es más que un programa; es un compañero de aprendizaje que
            acompaña a cada estudiante en su recorrido hacia el dominio de las
            matemáticas, brindándoles las herramientas y el apoyo necesarios
            para tener éxito.
          </p>
        </div>
        <h3 className="text-4xl text-azulBooster font-[ralewayBlack] mb-10">
          CONOCE NUESTROS VALORES
        </h3>
        <div className="flex gap-7">
          {valores.map((val) => (
            <div
              key={val.title}
              className="relative group rounded-tl-[30px] rounded-br-[30px] rounded-tr-lg rounded-bl-lg w-[280px] h-[200px] flex flex-col transition-all duration-200 cShadow z-20 hover:border-4 border-violetaBooster hover:-mt-1 overflow-hidden"
            >
              <div className="absolute top-0 left-0 bg-azulClaritoBooster p-4 w-full h-full ">
                <div className="w-full flex justify-center">
                  <svg className="fill-azulClaroBooster group-hover:fill-violetaBooster object-center w-[150px] group-hover:scale-90 aspect-square transition-all duration-300 mt-3 group-hover:-mt-3">
                    {val.icon}
                  </svg>
                </div>
                <div className="w-full flex justify-center">
                  <p className="text-azulBooster font-[ralewayBlack] text-[0px] group-hover:text-3xl transition-all duration-300 -mt-2">
                    {val.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
