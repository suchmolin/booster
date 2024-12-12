export default function SubMenu() {
  const styleLI =
    "hover:text-violetaBooster transition-all duration-300 cursor-pointer lg:text-center w-fit"
  return (
    <ul className="flex flex-col lg:flex-row lg:items-center text-[ralewayBlack] text-xl text-white px-10 gap-10 py-10">
      <li className={styleLI}>INICIO</li>
      <li className={styleLI}>NOSOTROS</li>
      <li className={styleLI}>PROGRAMAS</li>
      <li className={styleLI}>BLOG</li>
      <li className={styleLI}>CONTÁCTANOS</li>
    </ul>
  )
}
