import EtapasAcelerador from "@/components/home/EtapasAcelerador/page"
import HeaderHome from "@/components/home/HeaderHome/page"
import LaMatematica from "@/components/home/LaMatematica/page"
import ProgramasHome from "@/components/home/ProgramasHome/page"
import SedesHome from "@/components/home/SedesHome/page"
import SomosElPrimer from "@/components/home/SomosElPrimer/page"

export default function Home() {
  return (
    <main className="font-[raleway]">
      <HeaderHome />
      <SomosElPrimer />
      <EtapasAcelerador />
      <LaMatematica />
      <ProgramasHome />
      <SedesHome />
    </main>
  )
}
