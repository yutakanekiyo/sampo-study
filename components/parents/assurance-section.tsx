"use client"

import type { ReactNode } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { SectionHeading } from "./section-heading"

type Item = { icon: ReactNode; title: string; body: string }

const items: Item[] = [
  {
    icon: (
      <>
        <path d="M12 21s-7-4.5-7-10a7 7 0 0114 0c0 5.5-7 10-7 10z" stroke="currentColor" strokeWidth="1.6" fill="none" />
        <path d="M9.5 11l2 2 3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </>
    ),
    title: "お子さまの同意が、スタートライン",
    body: "レポート連携は、お子さまがアプリ上で承認してはじめて始まります。こっそり見るのではなく、「見守ってもらえている」とお互いが知っている。そんな風通しのよい関係を前提に設計しています。",
  },
  {
    icon: (
      <>
        <path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </>
    ),
    title: "届くのは、記録の「要約」だけ",
    body: "カメラの映像や画面の中身、友だちとのやりとりが送られることはありません。届くのは学習時間・日数・時間帯の傾向など、アプリが自動記録したデータのやさしい要約だけです。",
  },
  {
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" fill="none" />
        <path d="M3 8l9 5 9-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </>
    ),
    title: "週1回、いつものLINEかメールに",
    body: "専用アプリの追加や難しい設定は不要。週に一度、読むのに1分ほどのレポートが自動で届くだけです。毎日ではないから数字に一喜一憂せず、長い目で成長を見守れます。",
  },
  {
    icon: (
      <>
        <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" fill="none" />
        <path d="M3.5 19a5.5 5.5 0 0111 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
        <path d="M16 6a3 3 0 010 6M16.5 13.2a5.5 5.5 0 014 5.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      </>
    ),
    title: "お子さまは、仲間と続けられる",
    body: "生徒向けアプリは完全無料のまま。オンライン自習室やポモドーロタイマー、同じ目標を持つ仲間とのコミュニティが、「ひとりじゃ続かない勉強」を続けやすくします。報告の手間もゼロです。",
  },
]

export function AssuranceSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="assurance" className="bg-[#FCF7F1] py-16 md:py-20 lg:py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-[1120px] px-6 transition-all duration-700 md:px-12 lg:px-[80px] ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <SectionHeading
          eyebrow="Designed for Trust"
          title={
            <>
              安心して見守るための、
              <br />
              4つの設計
            </>
          }
          className="mb-[40px] md:mb-[60px] lg:mb-[80px]"
        />
        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="flex gap-4 rounded-3xl bg-white p-6 shadow-[0px_4px_24px_rgba(0,0,0,0.06)] md:gap-5 md:p-8"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.6s ease ${i * 90}ms, transform 0.6s ease ${i * 90}ms`,
              }}
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/8 text-primary md:h-14 md:w-14">
                <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden>
                  {item.icon}
                </svg>
              </span>
              <div>
                <h3 className="mb-2 text-[17px] font-bold leading-snug text-primary md:text-[19px]">
                  {item.title}
                </h3>
                <p className="font-bold leading-[1.9] text-[#5a5a5a] text-[13px] md:text-[15px]">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
