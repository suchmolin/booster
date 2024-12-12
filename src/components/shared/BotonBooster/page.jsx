export default function BotonBooster({ href, texto }) {
  return (
    <a
      href={href}
      className="w-fit text-2xl text-white bg-violetaBooster py-2 px-4 rounded-xl text-[ralewayBlack] z-10"
    >
      {texto}
    </a>
  )
}
