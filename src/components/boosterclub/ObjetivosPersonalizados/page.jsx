import Image from "next/image"

export default function ObjetivosPersonalizados({ page }) {
  return (
    <div
      className={`relative w-full flex flex-col items-center justify-center bg-gradient-to-b from-[${page.gradiente}] to-white pb-10`}
    >
      <div className="absolute top-0 w-full h-full">
        <div className="w-full h-[600px] relative">
          <Image
            className="top-0"
            src={page.ecuaciones}
            objectFit="contain"
            layout="fill"
            alt="fondo ecuaciones"
            objectPosition="top"
          />
        </div>
      </div>
      <div className="w-[290] xs:w-[370px] sm:w-[630px] md:w-[760px] lg:w-[1030px] xl:w-[1250px] flex flex-col text-azulBooster items-center">
        <h2 className="w-11/12 sm:w-9/12 font-[ralewayBlack] text-2xl sm:text-3xl text-center mb-4">
          {page.h2}
        </h2>
        <p className="w-11/12 sm:w-8/12 text-lg sm:text-xl text-center">
          {page.p}
        </p>
      </div>

      <h3
        style={{ backgroundImage: `url(${page.h3fondo})` }}
        className="p-10 sm:p-20 bg-center bg-contain bg-no-repeat text-white  text-4xl sm:text-5xl"
      >
        Objetivos:
      </h3>
      <div className="w-11/12 lg:w-7/12 flex flex-col text-center lg:text-start items-center">
        <div className="text-lg sm:text-xl">
          {page.lists.map((item) => (
            <div
              key={item.img}
              className={`rounded-l-2xl py-2 px-4 sm:bg-gradient-to-r from-[${page.gradiente}] to white mb-4 flex flex-col sm:flex-row items-center justify-center gap-5`}
            >
              <div
                style={{ backgroundImage: `url(${item.img})` }}
                className="w-[130px] sm:w-[100px] aspect-square relative bg-contain bg-center bg-no-repeat"
              ></div>
              <ul className="list-disc pl-5 w-10/12">
                {item.cont.map((parrafo, i) => (
                  <li key={`parrafo${i}`} className="">
                    {parrafo}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
