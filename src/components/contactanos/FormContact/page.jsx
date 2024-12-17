export default function FormContact() {
  return (
    <div className="w-full p-6 flex flex-col items-center">
      <input
        type="text"
        placeholder="Nombre y Apellido"
        className="w-full rounded-lg rong-0 border-2 border-azulBooster placeholder:text-xs placeholder:font-normal text-xs placeholder:text-gray-300 focus:border-violetaBooster p-4 focus:ring-0 mb-2 cShadow4"
      />
      <input
        type="email"
        placeholder="Correo Electrónico"
        className="w-full rounded-lg rong-0 border-2 border-azulBooster placeholder:text-xs placeholder:font-normal text-xs placeholder:text-gray-300 focus:border-violetaBooster p-4 focus:ring-0  mb-2 cShadow4"
      />
      <div className="w-full flex gap-3">
        <input
          type="text"
          placeholder="Teléfono"
          className="w-6/12 rounded-lg rong-0 border-2 border-azulBooster placeholder:text-xs placeholder:font-normal text-xs placeholder:text-gray-300 focus:border-violetaBooster p-4 focus:ring-0  mb-2 cShadow4"
        />
        <input
          type="text"
          placeholder="Ciudad"
          className="w-6/12 rounded-lg rong-0 border-2 border-azulBooster placeholder:text-xs placeholder:font-normal text-xs placeholder:text-gray-300 focus:border-violetaBooster p-4 focus:ring-0  mb-2 cShadow4"
        />
      </div>
      <textarea
        placeholder="Mensaje"
        rows={4}
        className="w-full rounded-lg rong-0 border-2 border-azulBooster placeholder:text-xs placeholder:font-normal text-xs placeholder:text-gray-300 focus:border-violetaBooster p-4 focus:ring-0  mb-4 cShadow4"
      />
      <input
        type="submit"
        value="ENVIAR MENSAJE"
        className="text-white w-fit px-3 py-1 bg-azulClaroBooster rounded-lg hover:shadow-lg cursor-pointer"
      />
    </div>
  )
}
