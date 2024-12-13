import Navbar from "@/components/shared/Navbar/page"
import "./globals.css"
import Footer from "@/components/shared/Footer/page"

export const metadata = {
  title: "Boostermas",
  description: "Boostermas",
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="font-[ralewayBold]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
