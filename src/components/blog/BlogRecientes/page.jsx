import CardBlog from "../CardBlog/page"

export default function BlogRecientes({ data }) {
  return (
    <div className="w-full flex flex-col items-center bg-gradient-to-b from-azulClaritoBooster to-white">
      <div className="w-[290px] xs:w-[370px] sm:w-[630px] md:w-[760px] lg:w-[1030px] xl:w-[1250px] flex flex-col items-center py-10 sm:py-20">
        <h1 className="text-4xl sm:text-5xl text-white sm:py-1 sm:px-4 font-[ralewayBlack] md:bg-azulBooster w-fit sm:rounded-lg mb-5 sm:mb-10 flex flex-col md:flex-row gap-2 sm:gap-2 text-center">
          <span className="bg-azulBooster rounded-lg py-1 px-2 xs:px-4 sm:px-0">
            Nuestros post
          </span>
          <span className="bg-azulBooster rounded-lg px-2 xs:px-4 md:px-0 py-1">
            más recientes
          </span>
        </h1>
        <div className="w-full flex gap-10 justify-center flex-wrap lg:flex-nowrap">
          {data.slice(0, 3).map((item) => (
            <CardBlog key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
