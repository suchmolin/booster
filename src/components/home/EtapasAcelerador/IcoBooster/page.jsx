import Image from "next/image"

export default function IcoBooster() {
  return (
    <div className="sticky top-[50%] flex justify-center">
      <div className="relative w-[50px] aspect-square">
        <Image
          src="/img/icoBooster.png"
          layout="fill"
          objectFit="contain"
          alt="icono booster"
        />
      </div>
    </div>
  )
}
