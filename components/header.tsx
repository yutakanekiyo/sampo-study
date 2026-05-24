"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "サービス概要", href: "/#about" },
  { label: "機能紹介", href: "/#features" },
  { label: "代表メッセージ", href: "/#message" },
  { label: "よくある質問", href: "/#faq" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-[0_2px_20px_rgba(0,0,0,0.06)]" : ""
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-[1920px] items-center justify-between px-5 md:h-[88px] md:px-10 lg:px-[72px]">
          {/* Logo */}
          <a href="/" className="flex shrink-0 items-center">
            <Image
              src="/assets/logo-sampostudy.svg"
              alt="SAMPO STUDY"
              width={376}
              height={34}
              className="h-5 w-auto md:h-5 lg:h-6"
              priority
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[14px] font-bold text-[#393939] transition-opacity hover:opacity-70 lg:text-[16px]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#cta"
              className="ml-2 inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-[14px] font-bold text-white shadow-[0px_5px_20px_4px_rgba(0,0,0,0.08)] transition-all hover:brightness-110 lg:px-9 lg:py-4 lg:text-[16px]"
            >
              無料でアプリをはじめる
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="relative z-[60] flex items-center justify-center rounded-lg p-2 md:hidden"
            style={{ color: mobileOpen ? "#fff" : "hsl(150 53% 24%)" }}
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
            href="/#cta"
            className="mt-4 rounded-full bg-white px-10 py-4 text-center text-[18px] font-bold text-primary transition-all duration-300 hover:opacity-90"
            style={{
              transitionDelay: mobileOpen ? `${navLinks.length * 60 + 80}ms` : "0ms",
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(16px)",
            }}
            onClick={() => setMobileOpen(false)}
          >
            無料でアプリをはじめる
          </a>
        </nav>
      </div>
    </>
  )
}
