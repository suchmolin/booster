import Image from "next/image"
import FormContact from "../FormContact/page"

export default function ComunicateConNosotros() {
  return (
    <div className="w-full flex flex-col items-center bg-gradient-to-b from-azulClaritoBooster to-white py-10">
      <div className="w-[290px] xs:w-[370px] sm:w-[630px] md:w-[760px] lg:w-[1030px] xl:w-[1250px] flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl text-white sm:py-1 sm:px-4 font-[ralewayBlack] sm:bg-azulBooster w-fit sm:rounded-lg mb-5 sm:mb-4 flex flex-col sm:flex-row gap-2 sm:gap-2 text-center">
          <span className="bg-azulBooster rounded-lg py-1 px-2 xs:px-4 sm:px-0">
            Comunicate
          </span>
          <span className="bg-azulBooster rounded-lg px-2 xs:px-4 sm:px-0 py-1">
            con nosotros
          </span>
        </h1>
        <h2 className="text-azulBooster text-2xl mb-4 text-center">
          Estamos aquí para lo que necesites
        </h2>
        <p className="text-xl text-center">
          Nuestros horarios de atención son: <br /> Lunes a viernes de 8am a 6pm{" "}
          <br />y los días sábados de 8am a 4pm.
        </p>
        <div className="w-full flex flex-col lg:flex-row py-10 lg:ml-14">
          <div className="w-full lg:w-3/12 flex justify-center">
            <a href="#">
              <div className="relative w-[280px] xs:w-[300px] sm:w-[350px] h-[300px] xs:h-[320px] sm:h-[360px] rounded-xl overflow-hidden border-2 border-violetaBooster">
                <Image
                  src="/img/googleMaps.png"
                  layout="fill"
                  objectFit="cover"
                  alt="mapa"
                  objectPosition="left top"
                />
              </div>
            </a>
          </div>
          <div className="lg:w-4/12 ml-3 xl:-ml-6 xl:mr-4">
            <div className="h-full flex flex-col lg:justify-between py-10 gap-4 lg:gap-0 ">
              <div className="flex gap-2 sm:gap-4">
                <div className="w-[50px] sm:w-[80px] aspect-square relative">
                  <Image
                    src="/img/ubiContact.png"
                    objectFit="contain"
                    layout="fill"
                    alt="icono"
                  />
                </div>
                <div className="w-10/12 flex flex-col text-base xl:text-lg">
                  <p className="font-[ralewayBlack] text-xl">Oficina</p>
                  <p>CCCT, Nivel C2, sector Yarey, Mezzanina, Local M03.</p>
                </div>
              </div>
              <div className="flex gap-2 sm:gap-4">
                <div className="w-[50px] sm:w-[80px] aspect-square relative">
                  <Image
                    src="/img/telefonoContact.png"
                    objectFit="contain"
                    layout="fill"
                    alt="icono"
                  />
                </div>
                <div className="w-10/12 flex flex-col text-base xl:text-lg">
                  <p className="font-[ralewayBlack] text-xl">Teléfono</p>
                  <p>+58 (412) 340-8754</p>
                </div>
              </div>
              <div className="flex gap-2 sm:gap-4">
                <div className="w-[50px] sm:w-[80px] aspect-square relative">
                  <Image
                    src="/img/emailContact.png"
                    objectFit="contain"
                    layout="fill"
                    alt="icono"
                  />
                </div>
                <div className="w-10/12 flex flex-col text-xs xs:text-sm xl:text-lg">
                  <p className="font-[ralewayBlack] text-xl">Email</p>
                  <p>atencionalcliente@boostermath.com </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-4/12 bg-azulClaritoBooster rounded-xl mx-4">
            <FormContact />
          </div>
        </div>
      </div>
    </div>
  )
}
