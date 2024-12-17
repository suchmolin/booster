"use client"
import { data } from "@/data/preguntasFrecuentes"
import { useEffect, useState } from "react"
import { FaPlus } from "react-icons/fa"

export default function FAQbox() {
  const [selected, setSelected] = useState(data[0].id)
  const [preguntas, setPreguntas] = useState(data[0].preguntas)
  const [singlePreg, setSinglePreg] = useState("")

  useEffect(() => {
    setPreguntas(data.find((item) => item.id === selected).preguntas)
  }, [selected])
  return (
    <div className="w-full flex flex-col mt-20">
      <div className="mb-10 flex justify-center sm:justify-between gap-7 md:gap-10 text-white flex-wrap sm:flex-nowrap">
        {data.map((item) => (
          <button
            onClick={() => setSelected(item.id)}
            key={item.id}
            className={`rounded-lg ${selected === item.id ? "bg-violetaBooster" : "bg-azulClaroBooster"} p-2 w-5/12 sm:w-fit hover:shadow-xl transition-all duration-300`}
          >
            {item.boton}
          </button>
        ))}
      </div>
      <div className="py-5 sm:py-10 text-azulBooster px-4 sm:px-0">
        {preguntas.map((preg) => (
          <div key={preg.pregunta}>
            <p
              onClick={() => {
                singlePreg === preg.pregunta
                  ? setSinglePreg("")
                  : setSinglePreg(preg.pregunta)
              }}
              className=" cursor-pointer text-xl sm:text-2xl mb-7 flex gap-3"
            >
              <FaPlus className="text-violetaBooster text-xl mt-2" />
              <span className="w-11/12">{preg.pregunta}</span>
            </p>
            {preg.pregunta === singlePreg &&
              preg.respuesta.map((res, index) => (
                <div key={`parrafo${index}`} className="mb-5 ml-10">
                  {res.p && (
                    <div>
                      {res.p.map((parr, indice) => (
                        <p key={`subparr${indice}`} className="mb-4">
                          {parr}
                        </p>
                      ))}
                    </div>
                  )}
                  {res.ul && (
                    <ul key={index} className="list-disc ml-4 mb-4">
                      {res.ul.map((li, i) => (
                        <li key={`liresp${i}`}>
                          <b>{li.titulo}</b>
                          {li.texto}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  )
}