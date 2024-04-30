import { Roboto } from 'next/font/google'
import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-roboto',
})



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SpeedInsights />
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
