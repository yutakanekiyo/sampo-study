"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ClosingSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="cta" className="px-3 py-[16px] md:px-4 md:py-[28px] lg:px-6 lg:py-[40px]">
      <div
        ref={ref}
        className={`relative overflow-hidden rounded-[40px] bg-[#2C6457] px-6 py-14 text-center transition-all duration-700 md:rounded-[56px] md:px-12 md:py-20 lg:rounded-[72px] lg:py-[100px] ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Decorative blob */}
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/5 md:h-96 md:w-96"
          aria-hidden
        />
        <div className="relative z-10">
          <p className="mb-4 text-[13px] font-bold tracking-[0.18em] text-white/70 md:text-[15px]">
            Start Watching Over
          </p>
          <h2 className="text-[28px] font-bold leading-[1.45] text-white md:text-[40px] lg:text-[48px]">
            心配の種を、
            <br />
            見守る芽に。
          </h2>
          <p className="mx-auto mt-6 max-w-[760px] font-bold leading-[1.95] text-white/85 text-[14px] md:mt-8 md:text-[16px] lg:text-[17px]">
            芽が育つのを、毎日掘り返して確かめる人はいません。水をやり、信じて待つ。
            週に一度そっと様子を知るくらいが、思春期にはちょうどいい距離なのかもしれません。
            来週の今ごろは「勉強してるの？」の代わりに、「がんばってるね」と言えているかもしれません。
          </p>
          <div className="mt-9 flex flex-col items-center gap-3 md:mt-10">
            <a
              href="#pricing"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-10 py-4 text-[15px] font-bold text-primary shadow-[0px_8px_24px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-95 md:text-[17px] lg:px-12 lg:py-5"
            >
              プランを選んではじめる
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <p className="text-[12px] font-medium text-white/70 md:text-[13px]">
              30日間返金保証つき・合わなければ全額返金します
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
