import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  const style = "hover:text-azulClaroBooster transition-all duration-300"
  return (
    <footer className="bg-azulBooster text-white py-10 flex flex-col items-center">
      <div className="w-11/12 flex flex-col-reverse sm:flex-row justify-between items-center sm:items-start pb-7">
        <ul className="w-11/12 sm:w-7/12 lg:w-4/12 flex flex-col gap-4 text-xl text-center sm:text-start mt-10 sm:mt-0">
          <li className={style}>
            <Link href="/blog">BLOG</Link>
          </li>
          <li className={style}>
            <Link href="/nosotros">NOSOTROS</Link>
          </li>
          <li className={style}>
            <Link href="/preguntas-frecuentes">PREGUNTAS FRECUENTES</Link>
          </li>
          <li className={style}>
            <Link href="/contactanos">CONTÁCTANOS</Link>
          </li>
        </ul>
        <div className="hidden lg:flex w-5/12 flex-col gap-4 text-xl pr-5">
          <p>CONTACTO</p>
          <p> +1 (716) 374-9046 </p>
          <p> CCCT, nivel c2, sector yarey, Mezzanina, local m03. </p>
          <p>+58 (412) 340-8754</p>
          <p>atencionalcliente@boostermath.com</p>
        </div>
        <div className="w-5/12 lg:w-3/12 text-xl flex flex-col gap-4 items-center sm:items-start">
          <p>SÍGUENOS</p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-[30px] aspect-square relative hover:scale-105 transition-all duration-300"
            >
              <Image
                src="/img/instagram.png"
                layout="fill"
                objectFit="contain"
                alt="red social"
              />
            </a>
            <a
              href="#"
              className="w-[30px] aspect-square relative hover:scale-105 transition-all duration-300"
            >
              <Image
                src="/img/facebook.png"
                layout="fill"
                objectFit="contain"
                alt="red social"
              />
            </a>
            <a
              href="#"
              className="w-[30px] aspect-square relative hover:scale-105 transition-all duration-300"
            >
              <Image
                src="/img/whatsapp.png"
                layout="fill"
                objectFit="contain"
                alt="red social"
              />
            </a>
            <a
              href="#"
              className="w-[30px] aspect-square relative hover:scale-105 transition-all duration-300"
            >
              <Image
                src="/img/tiktok.png"
                layout="fill"
                objectFit="contain"
                alt="red social"
              />
            </a>
          </div>
          <div className="w-[200px] h-[100px] relative">
            <Image
              src="/img/logoBlanco.png"
              layout="fill"
              objectFit="contain"
              alt="logo"
            />
          </div>
        </div>
      </div>
      <div className="w-11/12 border-t border-white pt-7 text-center sm:text-start">
        <p className="text-lg">Copyright ©Booster.</p>
      </div>
    </footer>
  )
}
