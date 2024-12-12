import CardPrograma from "@/components/shared/CardPrograma/page"
import { data } from "@/data/programas"

export default function ProgramasHome() {
  return (
    <div className="w-full flex flex-col items-center overflow-hidden pb-20 pt-10 md:pt-0">
      <h2 className="font-[ralewayBlack] text-2xl xs:text-4xl sm:text-5xl text-white bg-azulClaroBooster pb-2 pt-1 px-3 rounded-xl mb-20 w-fit text-center">
        Nuestros Programas
      </h2>
      <div className="w-full flex flex-col items-center md:items-start md:flex-row justify-center gap-20 md:gap-7 lg:gap-10 xl:gap-20">
        {data.map((item) => (
          <CardPrograma key={item.id} data={item} />
        ))}
      </div>
    </div>
  )
}
