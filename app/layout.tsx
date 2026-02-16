import type { Metadata, Viewport } from "next"
import { Noto_Sans_JP, Nunito } from "next/font/google"

import "./globals.css"

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  weight: ["400", "500", "600", "700", "800"],
})

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "600", "700", "800"],
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
        className={`${notoSansJP.variable} ${nunito.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
