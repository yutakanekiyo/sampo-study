"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "サービス概要", href: "#about" },
  { label: "機能紹介", href: "#features" },
  { label: "代表メッセージ", href: "#message" },
  { label: "よくある質問", href: "#faq" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.8)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // メニュー開放中はbodyスクロールを止める
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  return (
    <>
      <header className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 shadow-[0_2px_20px_rgba(0,0,0,0.08)] backdrop-blur-sm" : ""}`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className={`flex shrink-0 items-center px-8 py-4 md:px-10 md:py-5 ${scrolled ? "" : "rounded-br-[50px] md:rounded-br-[70px]"} bg-white transition-all duration-300`}>
            <Image
              src="/images/sampo-logo.svg"
              alt="SAMPO STUDY ロゴ"
              width={240}
              height={99}
              className="h-12 w-auto md:h-16"
              priority
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 pr-10 md:flex lg:gap-8 lg:pr-14">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[15px] font-bold transition-all duration-300 hover:opacity-75 lg:text-[18px] ${scrolled ? "text-primary" : "text-white"}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://discord.gg/VHBwskUBKZ"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full px-8 py-3 text-[15px] font-bold shadow-[0px_5px_30px_4px_rgba(0,0,0,0.2)] transition-all duration-300 hover:brightness-95 lg:px-10 lg:text-[18px] ${scrolled ? "bg-primary text-white" : "bg-white text-primary"}`}
            >
              無料で参加する
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="relative z-[60] mr-4 flex items-center justify-center rounded-lg p-2 transition-colors duration-300 md:hidden"
            style={{ color: mobileOpen ? "#fff" : scrolled ? "hsl(150 53% 24%)" : "#fff" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "メニューを閉じる" : "メニューを開く"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Full-screen mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-primary transition-all duration-300 md:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-10">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[22px] font-bold text-white transition-all duration-300 hover:opacity-70"
              style={{
                transitionDelay: mobileOpen ? `${i * 60 + 80}ms` : "0ms",
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateY(0)" : "translateY(16px)",
              }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://discord.gg/VHBwskUBKZ"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 rounded-full bg-white px-10 py-4 text-center text-[18px] font-bold text-primary transition-all duration-300 hover:opacity-90"
            style={{
              transitionDelay: mobileOpen ? `${navLinks.length * 60 + 80}ms` : "0ms",
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(16px)",
            }}
            onClick={() => setMobileOpen(false)}
          >
            無料で参加する
          </a>
        </nav>
      </div>
    </>
  )
}
