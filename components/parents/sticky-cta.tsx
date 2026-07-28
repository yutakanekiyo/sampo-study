"use client"

import { useEffect, useState } from "react"

/** モバイルのみ。少しスクロールしたら画面下部に固定表示される申込CTA。 */
export function StickyCta() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white/95 px-4 py-3 backdrop-blur transition-all duration-300 md:hidden ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
    >
      <a
        href="#pricing"
        className="group flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3.5 text-[15px] font-bold text-white shadow-[0px_5px_20px_rgba(0,0,0,0.12)]"
      >
        プランを見る
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </a>
    </div>
  )
}
