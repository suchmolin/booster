export default function ObjetivosPersonalizados({ page }) {
  return (
    <div
      className={`w-full flex flex-col items-center justify-center bg-gradient-to-b from-[${page.gradiente}] to-white`}
    >
      <div className="w-[290] xs:w-[370px] sm:w-[630px] md:w-[760px] lg:w-[1030px] xl:w-[1250px] flex flex-col text-azulBooster items-center">
        <h2 className="w-9/12 font-[ralewayBlack] text-3xl text-center mb-4">
          {page.h2}
        </h2>
        <p className="w-8/12 text-xl text-center">{page.p}</p>
      </div>

      <h3
        style={{ backgroundImage: `url(${page.h3fondo})` }}
        className="p-10 bg-center bg-contain bg-no-repeat text-white text-5xl"
      >
        Objetivos:
      </h3>
    </div>
  )
}
