export default function Footer() {
  return (
    <footer className="bg-azulBooster text-white py-10 flex flex-col items-center">
      <div className="w-11/12 flex justify-between pb-7">
        <ul className="w-4/12 flex flex-col gap-4 text-xl">
          <li>BLOG</li>
          <li>INICIO</li>
          <li>NOSOTROS</li>
          <li>PREGUNTAS FRECUENTES</li>
          <li>CONTÁCTANOS</li>
        </ul>
        <div className="w-4/12 flex flex-col gap-4 text-xl">
          <p>CONTACTO</p>
          <p> +1 (716) 374-9046 </p>
          <p> CCCT, nivel c2, sector yarey, Mezzanina, local m03. </p>
          <p>+58 (412) 340-8754</p>
          <p>atencionalcliente@boostermath.com</p>
        </div>
        <div className="w-4/12 text-xl flex flex-col gap-4">
          <p>SÍGUENOS</p>
          <div></div>
        </div>
      </div>
      <div className="w-11/12 border-t border-white pt-7">
        <p className="text-2xl">Copyright ©Booster.</p>
      </div>
    </footer>
  )
}
