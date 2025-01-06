import BotonBooster from "@/components/shared/BotonBooster/page"
import Image from "next/image"

export default function PromoBlog() {
  return (
    <>
      <div className="relative w-full h-[200px] md:h-[300px] z-10">
        <Image
          src="/img/curvaFondo5.png"
          objectFit="cover"
          layout="fill"
          alt="curva"
        />
      </div>
      <div className="relative w-full bg-gradient-to-b from-azulClaritoBooster to-white flex flex-col items-center -mt-24 z-20">
        <div className="w-[290px] xs:w-[370px] sm:w-[630px] md:w-[760px] lg:w-[1030px] xl:w-[1250px]">
          <div className="w-full flex items-center pb-20 flex-col-reverse lg:flex-row">
            <div className="lg:w-6/12 flex flex-col text-center md:text-start">
              <h2 className="text-azulBooster text-2xl sm:text-4xl mb-5">
                En Boostermath, nos apasiona promover la importancia y los
                beneficios del aprendizaje de las matemáticas.
              </h2>
              <p className="text-lg sm:text-xl mb-5">
                A medida que explores y desarrolles tus habilidades con nuestro
                programa, te sororenderás gratamente de cómo este conocimiento
                puede transformar tu vida en múltiples aspectos. ¡Mantente
                atento a nuestro blog para más artículos emocionantes sobre las
                matemáticas y cómo puedes aprovechar al máximo tu potencial
                matemático con Boostermath!
              </p>
              <div className="w-full flex justify-center lg:justify-start">
                <BotonBooster href="/contactanos" texto="CONTÁCTANOS" />
              </div>
            </div>
            <div className="w-full lg:w-6/12 relative aspect-video mb-10 lg:mb-0">
              <Image
                src="/img/promoblog.png"
                objectFit="contain"
                layout="fill"
                alt="promo blog"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
