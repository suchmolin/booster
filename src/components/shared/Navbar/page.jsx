"use client"
import Image from "next/image"
import SubMenu from "../SubMenu/page"
import { IoIosMenu } from "react-icons/io"
import { useState } from "react"
import { IoCloseOutline } from "react-icons/io5"
import Link from "next/link"

export default function Navbar() {
  const [openSubMenu, setOpenSubMenu] = useState(false)
  const [selected, setSelected] = useState("")
  return (
    <div className="fixed w-full p-3 flex justify-center items-center z-50">
      <div
        className={`cShadow w-full ${openSubMenu ? "h-[500px] lg:h-[75px]" : "h-[65px] lg:h-[75px]"} transition-all duration-300 rounded-r-3xl rounded-tl-3xl bg-azulClaroBooster overflow-hidden flex flex-col lg:flex-row lg:items-center lg:justify-between`}
      >
        <div className="flex justify-between items-center min-h-[65px] lg:h-[90px] w-full">
          <div className="w-[330px] cShadow relative bg-white rounded-r-full h-full flex p-3 pr-7 justify-center">
            <Link
              onClick={(e) => setSelected("inicio")}
              href="/"
              className="w-full xs:w-9/12 sm:w-7/12 h-full relative hover:scale-95 transition-all duration-300"
            >
              <Image
                priority
                src="/img/logoBooster.png"
                objectFit="contain"
                layout="fill"
                alt="logo booster mas"
              />
            </Link>
          </div>
          <div className="block lg:hidden px-10 text-4xl sm:text-5xl hover:scale-105 transition-all duration-300 text-azulBooster">
            <button onClick={() => setOpenSubMenu(!openSubMenu)}>
              {openSubMenu ? <IoCloseOutline /> : <IoIosMenu />}
            </button>
          </div>
        </div>

        <div className="hidden lg:block">
          <SubMenu selected={selected} setSelected={setSelected} />
        </div>
        {openSubMenu && (
          <div className="block lg:hidden">
            <SubMenu selected={selected} setSelected={setSelected} />
          </div>
        )}
      </div>
    </div>
  )
}
