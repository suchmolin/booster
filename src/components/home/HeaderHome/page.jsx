import BotonBooster from "@/components/shared/BotonBooster/page"
import { Carousel } from "flowbite-react"
import Image from "next/image"

export default function HeaderHome() {
  const customTheme = {
    scrollContainer: {
      base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-none",
    },
    control: {
      base: " hidden inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
      icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6",
    },
  }

  return (
    <div className="w-full h-[750px] relative sm:h-[790px] lg:h-[600px] xl:h-[800px] xxl:h-[800px] flex items-center justify-center ">
      <Carousel
        theme={customTheme}
        indicators={false}
        leftControl={false}
        slideInterval={5000}
      >
        <div className="w-full relative flex flex-col h-full justify-center text-azulBooster bg-[url('/img/header.png')] bg-no-repeat bg-cover bg-left-top">
          <div className="w-[700px] flex flex-col ml-32 ">
            <h2 className="text-5xl font-bold mb-2">
              Es Hora de Dejar Atrás el Miedo a las Matemáticas
            </h2>
            <p className="text-3xl mb-2">Clases de matemáticas para niños</p>
            <BotonBooster href="#" texto="VER MÁS" />
          </div>
        </div>
      </Carousel>
      <div className="absolute bottom-0 z-10 w-full">
        <div className="relative w-full h-[250px]">
          <Image
            src="/img/curvaHeaderHome.png"
            layout="fill"
            objectFit="contain"
            alt="curva"
            objectPosition="bottom"
          />
        </div>
      </div>
    </div>
  )
}
