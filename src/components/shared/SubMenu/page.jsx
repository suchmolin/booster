import { Dropdown } from "flowbite-react"
import Link from "next/link"
import { useState } from "react"
import { RiArrowDropDownLine } from "react-icons/ri"

export default function SubMenu({ selected, setSelected }) {
  const [progOpened, setProgOpened] = useState(false)
  const customTheme = {
    arrowIcon: "ml-1 h-4 w-4",
    content: "py-1 focus:outline-none ",
    floating: {
      item: {
        base: "flex w-full cursor-pointer items-center justify-start px-4 py-2 text-white hover:text-azulBooster hover:bg-white focus:bg-gray-100 focus:outline-none",
      },
      style: {
        auto: "bg-azulClaroBooster text-white mt-3 -ml-2 w-[167px] shadow-none",
      },
      target: "w-fit",
    },
    inlineWrapper: "flex items-center",
  }
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
        onClick={() => setProgOpened(!progOpened)}
        className={`lg:hidden ${styleLI} `}
      >
        <button
          className={`flex gap-2 items-center text-white ${progOpened ? "text-azulBooster" : ""}`}
        >
          PROGRAMAS <RiArrowDropDownLine className="text-3xl" />
        </button>
        <div className="text-xl">
          {progOpened && (
            <ul className="flex flex-col gap-4 mt-4 ml-4">
              <li className="hover:text-azulBooster text-white transition-all duration-300 cursor-pointer">
                <Link
                  href="/boostermath"
                  onClick={(e) => setSelected("programas")}
                >
                  Boostermath
                </Link>
              </li>
              <li className="hover:text-azulBooster text-white transition-all duration-300 cursor-pointer">
                <Link
                  href="/boosterclub"
                  onClick={(e) => setSelected("programas")}
                >
                  Boosterclub
                </Link>
              </li>
            </ul>
          )}
        </div>
      </li>
      <li className={`hidden lg:block ${styleLI} `}>
        <Dropdown theme={customTheme} label="PROGRAMAS" inline>
          <Dropdown.Item>
            <Link onClick={(e) => setSelected("programas")} href="/boostermath">
              Boostermath
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link onClick={(e) => setSelected("programas")} href="/boosterclub">
              Boosterclub
            </Link>
          </Dropdown.Item>
        </Dropdown>
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
