import Image from "next/image"

export default function LaMatematica() {
  const data = [
    {
      titulo: "CLASES GRUPALES",
      img: "/img/clasesGrupales.png",
    },
    {
      titulo: "ADAPTADAS A SU NIVEL",
      img: "/img/adaptadasASuNivel.png",
    },
    {
      titulo: "48 HORAS POR LAPSO",
      img: "/img/48HorasPorLapso.png",
    },
  ]
  return (
    <div className="bg-gradient-to-b from-[#D1DBFA] to-white flex flex-col justify-center items-center md:pb-20 -mt-1">
      <h2 className="w-[290px] xs:w-[360px] sm:w-[600px] md:w-[750px] lg:w-[1000px] text-lg sm:text-xl md:text-2xl lg:text-3xl text-azulBooster text-center py-10 sm:py-20">
        <span className="text-[ralewayBlack]">
          La Matemática está en todo,{" "}
        </span>
        con el método boostermath impulsa a tu hijo a desarrollar esta habilidad
        esencial para su vida
      </h2>
      <div className="sm:w-[600px] md:w-[750px] xl:w-[1100px] flex flex-col sm:flex-row justify-between items-center">
        {data.map((item) => (
          <div
            key={item.titulo}
            className="flex flex-col items-center mb-10 sm:mb-0"
          >
            <div className=" w-[150px] lg:w-[200px] aspect-square relative mb-5">
              <Image
                src={item.img}
                layout="fill"
                objectFit="contain"
                alt="diferenciador"
              />
            </div>
            <p className="w-[150px] md:w-[200px] text-azulBooster text-[ralewayBlack] text-xl md:text-2xl lg:text-3xl text-center">
              {item.titulo}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
