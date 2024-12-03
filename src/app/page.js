import EtapasAcelerador from "@/components/home/EtapasAcelerador/page"
import HeaderHome from "@/components/home/HeaderHome/page"
import SomosElPrimer from "@/components/home/SomosElPrimer/page"

export default function Home() {
  return (
    <>
      <HeaderHome />
      <SomosElPrimer />
      <EtapasAcelerador />
      <div className="h-[2000px]"></div>
    </>
  )
}
