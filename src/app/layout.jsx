import { Manrope } from "next/font/google"
import { Libre_Baskerville } from "next/font/google"
import "./styles/globals.scss"
import { MenuProvider } from "@/context/MenuContext"
import { BackgroundProvider } from "@/context/BackgroundContext"

const manropeSans = Manrope({
  variable: "--font-manrope",
  weight: ["400", "700"],
  subsets: ["latin"],
})

const baskervilleSans = Libre_Baskerville({
  variable: "--font-baskerville",
  weight: ["400", "700"],
  subsets: ["latin"],
})

export const metadata = {
  title: "PROJECTION",
  description: "Test task for PROJECTION",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className={`${manropeSans.variable} ${baskervilleSans.variable}`}>
        <BackgroundProvider>
          <MenuProvider>{children}</MenuProvider>
        </BackgroundProvider>
      </body>
    </html>
  )
}
