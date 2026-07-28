"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { SectionHeading } from "./section-heading"

const steps = [
  {
    n: "1",
    title: "保護者の方がプランを選んでお申し込み",
    body: "ベーシックかサポート付きを選び、受け取り方法をLINEまたはメールから登録。お支払いはこの時に行います。",
  },
  {
    n: "2",
    title: "お子さまが無料アプリをスタート",
    body: "お子さまは無料のSAMPO STUDYで自習室を使うだけ。すでに利用中なら、そのままでOKです。",
  },
  {
    n: "3",
    title: "お子さまが連携を承認 → 翌週から配信",
    body: "お子さま本人がアプリでレポート連携を承認。隠しごとのない仕組みだから安心。翌週から毎週レポートが届きます。",
  },
]

export function FlowSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="flow" className="bg-[#FCF7F1] py-16 md:py-20 lg:py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-[1120px] px-6 transition-all duration-700 md:px-12 lg:px-[80px] ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <SectionHeading
          eyebrow="How It Works"
          title="はじめかたは、3ステップ"
          lead="むずかしい設定はありません。お子さまの同意を挟みながら、翌週には最初のレポートが届きます。"
          className="mb-[40px] md:mb-[60px] lg:mb-[80px]"
        />
        <ol className="grid gap-5 md:grid-cols-3 md:gap-6">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className="relative rounded-3xl bg-white p-7 shadow-[0px_4px_24px_rgba(0,0,0,0.06)] md:p-8"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.6s ease ${i * 100}ms, transform 0.6s ease ${i * 100}ms`,
              }}
            >
              <div className="mb-4 flex items-center gap-2">
                <span className="text-[11px] font-bold tracking-[0.16em] text-[#A5BCB7]">STEP</span>
                <span className="font-futura text-[34px] font-black leading-none text-primary md:text-[40px]">
                  {s.n}
                </span>
              </div>
              <h3 className="mb-2 text-[17px] font-bold leading-snug text-primary md:text-[18px]">
                {s.title}
              </h3>
              <p className="font-bold leading-[1.9] text-[#5a5a5a] text-[13px] md:text-[14px]">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
