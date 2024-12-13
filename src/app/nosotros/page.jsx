import ConoceBooster from "@/components/nosotros/ConoceBooster/page"
import HeaderNosotros from "@/components/nosotros/HeaderNosotros/page"
import NuestrHistoria from "@/components/nosotros/NuestrHistoria/page"
import Image from "next/image"

export default function NosotrosPage() {
  return (
    <>
      <HeaderNosotros />
      <ConoceBooster />
      <NuestrHistoria />
    </>
  )
}
