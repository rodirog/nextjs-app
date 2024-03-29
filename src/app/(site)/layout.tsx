import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Montserrat, Press_Start_2P } from 'next/font/google'
import '../globals.css'
import Navigation from './components/navigation'
import Footer from './components/footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-montserrat',
})

const montserratBold = Montserrat({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-montserrat-bold',
})

const pressStart2P = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-press-start-2p',
})

export const metadata: Metadata = {
  title: 'Jojos',
  description: 'Jojos company website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${montserratBold.variable} ${pressStart2P.variable}`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
