import Image from "next/image"

export default function LaMatematica() {
  return (
    <div className="bg-gradient-to-b from-[#D1DBFA] to-white flex flex-col justify-center items-center pb-20 -mt-1">
      <h2 className="w-[1000px] text-5xl text-azulBooster text-center py-20">
        <span className="font-bold">La Matemática está en todo, </span>con el
        método boostermath impulsa a tu hijo a desarrollar esta habilidad
        esencial para su vida
      </h2>
      <div className="w-[1100px] flex justify-between items-center">
        <div className="flex flex-col items-center">
          <div className="w-[200px] aspect-square relative mb-3">
            <Image
              src="/img/clasesGrupales.png"
              layout="fill"
              objectFit="contain"
              alt="diferenciador"
            />
          </div>
          <p className="w-[200px] text-violetaBooster font-bold text-4xl text-center">
            CLASES GRUPALES
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-[200px] aspect-square relative mb-3">
            <Image
              src="/img/AdaptadasASuNivel.png"
              layout="fill"
              objectFit="contain"
              alt="diferenciador"
            />
          </div>
          <p className="w-[200px] text-violetaBooster font-bold text-4xl text-center">
            ADAPTADAS A SU NIVEL
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-[200px] aspect-square relative mb-3">
            <Image
              src="/img/48HorasPorLapso.png"
              layout="fill"
              objectFit="contain"
              alt="diferenciador"
            />
          </div>
          <p className="w-[200px] text-violetaBooster font-bold text-4xl text-center">
            48 HORAS POR LAPSO
          </p>
        </div>
      </div>
    </div>
  )
}
