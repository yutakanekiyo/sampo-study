"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { SectionHeading } from "./section-heading"

const pains = [
  {
    n: "01",
    title: "「勉強してるの？」が、地雷になる",
    body: "心配だから聞いただけなのに、返ってくるのはため息と「今やろうとしてたのに」。声をかけるたびに空気が重くなり、いつしか勉強の話題そのものが怖くなっていく。",
  },
  {
    n: "02",
    title: "部屋のドアの向こうが、見えない",
    body: "静かな子ども部屋。スマホを触っているのか、机に向かっているのか。確かめるすべがないまま想像だけがふくらんで、夜になると不安がじわじわ大きくなる。",
  },
  {
    n: "03",
    title: "聞かないと不安、聞くと喧嘩",
    body: "我慢して見守るほど不安は募り、つい口に出せば衝突に。どちらを選んでも苦しくて、「私の関わり方が悪いのかな」と自分を責めてしまう夜もある。",
  },
  {
    n: "04",
    title: "「ちょうどいい知り方」が、見つからない",
    body: "監視アプリは親子の信頼を壊しそうで論外。塾の面談は数ヶ月に一度で、家庭学習の実態は誰にも聞けない。干渉せずに様子を知る方法が、どこにも見当たらない。",
  },
]

export function PainsSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="pains" className="bg-[#FCF7F1] py-16 md:py-20 lg:py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-[1120px] px-6 transition-all duration-700 md:px-12 lg:px-[80px] ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <SectionHeading
          eyebrow="Parents' Worries"
          title={
            <>
              こんな毎日に、
              <br />
              心当たりはありませんか？
            </>
          }
          className="mb-[40px] md:mb-[60px] lg:mb-[80px]"
        />
        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {pains.map((p, i) => (
            <div
              key={p.n}
              className="relative overflow-hidden rounded-3xl bg-white p-7 shadow-[0px_4px_24px_rgba(0,0,0,0.06)] md:p-9"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.6s ease ${i * 90}ms, transform 0.6s ease ${i * 90}ms`,
              }}
            >
              <span className="pointer-events-none absolute -top-2 right-3 select-none font-futura text-[64px] font-black leading-none text-[#A5BCB7]/30 md:text-[84px]">
                {p.n}
              </span>
              <h3 className="relative z-10 mb-3 text-[18px] font-bold leading-snug text-primary md:text-[21px]">
                {p.title}
              </h3>
              <p className="relative z-10 font-bold leading-[1.9] text-[#5a5a5a] text-[13px] md:text-[15px]">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
