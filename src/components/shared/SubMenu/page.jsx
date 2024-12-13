import Link from "next/link"

export default function SubMenu() {
  const styleLI =
    "hover:text-azulBooster transition-all duration-300 cursor-pointer lg:text-center w-fit"
  return (
    <ul className="flex flex-col lg:flex-row lg:items-center  text-xl text-white px-10 gap-10 py-10">
      <li className={styleLI}>
        <Link href="/nosotros">NOSOTROS</Link>
      </li>
      <li className={styleLI}>PROGRAMAS</li>
      <li className={styleLI}>BLOG</li>
      <li className={styleLI}>CONTÁCTANOS</li>
    </ul>
  )
}
