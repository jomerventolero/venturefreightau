import { Roboto } from 'next/font/google'
import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-roboto',
})

export const metadata = {
  title: 'Venture Freight Australia',
  description: 'We take the complicated out of your Logistics needs. Australian Leading Freight Forwarder, Customs Broker, Freight forwarder Australia, Venture Freight Australia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SpeedInsights />
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
