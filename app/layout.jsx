import './globals.css'
import { Space_Mono, Playfair_Display, JetBrains_Mono } from 'next/font/google'

const spaceMono = Space_Mono({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-display' })
const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata = {
  title: 'Mohyuddin Rao | Developer & Systems Architect',
  description: 'Mohyuddin Rao builds autonomous systems, native Android apps, and intelligent automation workflows.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceMono.variable} ${playfair.variable} ${jetBrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
