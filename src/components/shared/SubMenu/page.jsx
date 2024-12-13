import Link from "next/link"

export default function SubMenu({ selected, setSelected }) {
  const styleLI =
    "hover:text-azulBooster transition-all duration-300 cursor-pointer lg:text-center w-fit"
  return (
    <ul className="flex flex-col lg:flex-row lg:items-center  text-xl text-white px-10 gap-10 py-10">
      <li
        className={`${styleLI} ${selected === "inicio" ? "text-azulBooster" : ""}`}
      >
        <Link href="/" onClick={(e) => setSelected("inicio")}>
          INICIO
        </Link>
      </li>
      <li
        className={`${styleLI} ${selected === "nosotros" ? "text-azulBooster" : ""}`}
      >
        <Link href="/nosotros" onClick={(e) => setSelected("nosotros")}>
          NOSOTROS
        </Link>
      </li>
      <li
        className={`${styleLI} ${selected === "programas" ? "text-azulBooster" : ""}`}
      >
        <Link href="/programas" onClick={(e) => setSelected("programas")}>
          PROGRAMAS
        </Link>
      </li>
      <li
        className={`${styleLI} ${selected === "blog" ? "text-azulBooster" : ""}`}
      >
        <Link href="/blog" onClick={(e) => setSelected("blog")}>
          BLOG
        </Link>
      </li>
      <li
        className={`${styleLI} ${selected === "contactanos" ? "text-azulBooster" : ""}`}
      >
        <Link href="/contactanos" onClick={(e) => setSelected("contactanos")}>
          CONTÁCTANOS
        </Link>
      </li>
    </ul>
  )
}
