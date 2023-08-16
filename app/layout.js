import "./globals.css"
import "tailwindcss/tailwind.css"
import { Poppins } from "next/font/google"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] })

export const metadata = {
  title: "Demo App ",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}  `}>
        <Header />
        <div className="text-center  p-2 md:p-32 min-h-min  containerBox  md:my-0 md:mx-0  my-28 mx-6 text-sky-800 ">
          {children}
        </div>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  )
}
