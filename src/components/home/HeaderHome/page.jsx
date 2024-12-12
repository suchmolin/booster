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
    <div className="w-full h-[750px] relative xl:h-[800px] xxl:h-[800px] flex items-center justify-center ">
      <Carousel
        theme={customTheme}
        indicators={false}
        leftControl={false}
        slideInterval={5000}
      >
        <div className="w-full relative flex flex-col h-full justify-center items-center sm:items-start text-azulBooster bg-[url('/img/headerSm.png')] sm:bg-[url('/img/headerMd.png')] lg:bg-[url('/img/header.png')] bg-no-repeat bg-cover bg-bottom xs:bg-left lg:bg-bottom xl:bg-right-bottom">
          <div className="w-[290px] xs:w-[375px] sm:w-[350px] lg:w-[600px] xl:w-[460px] xxl:w-[680px] flex flex-col ml-0 sm:ml-7 xl:ml-24 xxl:ml-32 -mt-72 sm:mt-0 text-center sm:text-start px-3 sm:px-0">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl xxxl:text-6xl text-[ralewayBlack] mb-2">
              Es Hora de Dejar Atrás el Miedo a las Matemáticas
            </h2>
            <p className="text-2xl xs:text-3xl xxxl:text-4xl mb-2 text-[ralewayBlack]">
              Clases de matemáticas para niños
            </p>
            <div className="flex justify-center sm:justify-start">
              <BotonBooster href="#" texto="VER MÁS" />
            </div>
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
