import './globals.css'
import {
  Crimson_Text,
  Playfair_Display,
  Elsie_Swash_Caps,
} from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const crimson = Crimson_Text({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-title',
  display: 'swap',
})

const elsie = Elsie_Swash_Caps({
  subsets: ['latin'],
  weight: ['400', '900'],
  variable: '--font-elsie',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${crimson.variable} ${playfair.variable} ${elsie.variable}`}
    >
      <body className="bg-black text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
