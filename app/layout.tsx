import type { Metadata, Viewport } from "next"
import { Inter, Roboto } from "next/font/google"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
})

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
})

export const metadata: Metadata = {
  title: "SAMPO STUDY | Discordで繋がるオンライン自習室",
  description:
    "SAMPO STUDYはDiscord上で運営されるオンライン自習室。無料で、いつでも、仲間と一緒に勉強できる学習プラットフォームです。",
}

export const viewport: Viewport = {
  themeColor: "#1B5E3B",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body
        className={`${inter.variable} ${roboto.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
