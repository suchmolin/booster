import HeaderPersonalizado from "@/components/boosterclub/headerPersonalizado/page"
import ObjetivosPersonalizados from "@/components/boosterclub/ObjetivosPersonalizados/page"
import Seccion20club from "@/components/boosterclub/Seccion20club/page"
import { data } from "@/data/clasesPersonalizadas"

export default async function PersonalizadoPage({ params }) {
  const { personalizado } = await params
  const pers = data.find((item) => item.id === personalizado)
  const { page } = pers
  return (
    <>
      <HeaderPersonalizado page={page} />
      <ObjetivosPersonalizados page={page} />
      <Seccion20club />
    </>
  )
}
