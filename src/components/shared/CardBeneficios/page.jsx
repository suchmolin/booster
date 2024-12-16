export default function CardBeneficios({ item, color }) {
  return (
    <>
      {/*FRONT CARD*/}
      <div
        className={`cardFace front w-full h-full  p-4 flex flex-col ${color ? "bg-azulClaroBooster" : "bg-violetaBooster"} text-white justify-center items-center rounded-tl-[40px] rounded-br-[40px] rounded-tr-lg rounded-bl-lg`}
      >
        <div className="w-9/12 flex justify-center mb-4">{item.icon}</div>
        <p className="text-center text-xl">{item.title}</p>
      </div>
      {/*BACK CARD*/}
      <div className="cardFace back w-full h-full  p-4 flex flex-col bg-azulBooster text-white justify-center items-center cShadow3 rounded-tl-[40px] rounded-br-[40px] rounded-tr-lg rounded-bl-lg">
        <p className="xs:text-xl text-center">{item.description}</p>
      </div>
    </>
  )
}
