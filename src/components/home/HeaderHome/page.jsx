import { Carousel } from "flowbite-react"

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
    <div className="w-full h-[750px] sm:h-[790px] lg:h-[600px] xl:h-[800px] xxl:h-[800px] flex items-center justify-center overflow-hidden">
      <Carousel
        theme={customTheme}
        indicators={false}
        leftControl={false}
        slideInterval={5000}
      >
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 1
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 2
        </div>
      </Carousel>
    </div>
  )
}
