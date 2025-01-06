import Image from "next/image"

export default function ContentArticle({ data }) {
  const { tarjeta, contenido } = data
  return (
    <div className="bg-gradient-to-b from-azulClaritoBooster to-white flex justify-center">
      <div className="w-[290px] xs:w-[370px] sm:w-[630px] md:w-[760px] lg:w-[1030px] xl:w-[1250px]">
        <h1 className="text-azulBooster text-4xl sm:text-5xl font-[ralewayBlack] text-center sm:text-start">
          {tarjeta.titulo}
        </h1>
        <div className="flex gap-3 py-10 items-center flex-col sm:flex-row">
          <div className="flex gap-3">
            {tarjeta.categorias.map((cat) => (
              <span
                key={cat.texto}
                style={{ backgroundColor: cat.color }}
                className={` text-white h-fit py-1 px-3 rounded-lg`}
              >
                {cat.texto}
              </span>
            ))}
          </div>
          <div className="flex">
            <p className="xs:text-lg sm:text-2xl text-azulBooster mr-10">
              {tarjeta.fecha}
            </p>
            <p className="xs:text-lg sm:text-2xl text-azulBooster">
              {tarjeta.autor}
            </p>
          </div>
        </div>
        <div className="w-full">
          {contenido.map((item, i) => (
            <>
              {item.titulo && (
                <h2
                  key={"titulo" + i}
                  className="text-azulBooster text-2xl sm:text-4xl py-10 sm:px-5 font-bold  text-center sm:text-start"
                >
                  {item.titulo}
                </h2>
              )}
              {item.subtitulo && (
                <h3
                  key={"subtitulo" + i}
                  className="text-azulBooster text-xl py-10 px-5 font-bold"
                >
                  {item.subtitulo}
                </h3>
              )}
              {item.texto &&
                item.texto.map((parr, i) => {
                  return parr.indexOf("<<") >= 0 ? (
                    <p key={"texto" + i} className="text-lg py-5 px-1 md:px-5">
                      {parr.slice(0, parr.indexOf("<<"))}

                      {
                        <a
                          className="text-azulBooster font-[ralewayBlack] transition-all duration-300"
                          href={parr.slice(
                            parr.indexOf("==") + 2,
                            parr.indexOf(">>")
                          )}
                        >
                          {parr.slice(
                            parr.indexOf("<<") + 2,
                            parr.indexOf("==")
                          )}
                        </a>
                      }

                      {parr.slice(parr.indexOf(">>") + 2, parr.lenght)}
                    </p>
                  ) : parr.indexOf("<br>") >= 0 ? (
                    <p key={"texto" + i} className=" text-lg py-5 px-1 md:px-5">
                      {parr.slice(0, parr.indexOf("<br>"))}
                      <br />
                      {parr.slice(parr.indexOf("<br>") + 4, parr.lenght)}
                    </p>
                  ) : parr.indexOf("<b>") >= 0 ? (
                    <p
                      key={"textonegrita" + i}
                      className="text-xl py-2 lg:pr-10 xl:pr-32 px-3 xs:px-8 sm:px-0 mb-3"
                    >
                      {parr.slice(0, parr.indexOf("<b>"))}
                      <b>
                        {parr.slice(
                          parr.indexOf("<b>") + 3,
                          parr.indexOf("</b>")
                        )}
                      </b>

                      {parr.slice(parr.indexOf("</b>") + 4, parr.lenght)}
                    </p>
                  ) : (
                    <p key={"texto" + i} className=" text-lg py-5 px-1 md:px-5">
                      {parr}
                    </p>
                  )
                })}
              {item.img && (
                <div className="w-full relative aspect-video">
                  <Image
                    key={"img" + i}
                    src={`${item.img}`}
                    objectFit="contain"
                    layout="fill"
                    alt={item.titulo}
                  />
                </div>
              )}
              {item.imgTexto && (
                <div className="w-full flex gap-7 items-center flex-col lg:flex-row">
                  <div className="w-full lg:w-6/12 aspect-video relative">
                    <Image
                      src={item.imgTexto.img}
                      objectFit="contain"
                      layout="fill"
                      alt="imagen blog"
                    />
                  </div>
                  <div className="lg:w-6/12 flex flex-col gap-4">
                    {item.imgTexto.texto.map((item) => (
                      <>
                        {item.titulo && (
                          <div
                            key={item.titulo}
                            className="text-2xl text-azulBooster py-3"
                          >
                            {item.titulo}
                          </div>
                        )}
                        {item.texto && (
                          <div key={item.texto} className="text-lg mb-4">
                            {item.texto}
                          </div>
                        )}
                      </>
                    ))}
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  )
}
