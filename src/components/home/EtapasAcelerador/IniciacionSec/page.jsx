import Image from "next/image"

export default function IniciacionSec() {
  return (
    <div className="w-full flex justify-center gap-32">
      <div className="w-[700px] text-right flex flex-col items-end justify-center pl-52">
        <h4 className="w-fit text-3xl bg-azulClaroBooster py-1 px-3 text-white rounded-lg font-bold">
          Iniciación:
        </h4>
        <p className="text-xl text-azulBooster">
          Tu hijo desarrolla una solida comprensión de los conceptos matemáticos
          e incrementa su confianza para resolver problemas númericos.{" "}
        </p>
      </div>
      <div className="w-[700px]">
        <div className="w-[400px] aspect-square relative">
          <Image
            src="/img/INICIACION.png"
            layout="fill"
            objectFit="contain"
            alt="niña feliz por estudiar en boostermath"
          />
        </div>
      </div>
    </div>
  )
}
