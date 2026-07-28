"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { SectionHeading } from "./section-heading"

function Check({ light = false }: { light?: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden className="mt-0.5 shrink-0">
      <circle cx="12" cy="12" r="11" fill={light ? "rgba(255,255,255,0.18)" : "hsl(150 53% 24% / 0.1)"} />
      <path
        d="M7.5 12.5l3 3 6-6.5"
        stroke={light ? "#fff" : "hsl(150 53% 24%)"}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

export function PricingSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="pricing" className="py-16 md:py-20 lg:py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-[1120px] px-6 transition-all duration-700 md:px-12 lg:px-[80px] ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <SectionHeading
          eyebrow="Price"
          title={
            <>
              ご家庭に合った、
              <br />
              2つのプラン。
            </>
          }
          lead="どちらも年間一括払い・税込。30日間返金保証つきなので、合わなければ全額お返しします。お子さまのアプリ利用は、どちらのプランでもずっと無料です。"
          className="mb-[40px] md:mb-[60px] lg:mb-[80px]"
        />

        <div className="mx-auto grid max-w-[860px] gap-6 md:grid-cols-2">
          {/* Basic */}
          <div className="flex flex-col rounded-[28px] border border-border bg-white p-7 shadow-[0px_4px_24px_rgba(0,0,0,0.06)] md:p-9">
            <span className="text-[15px] font-bold text-primary md:text-[16px]">ベーシック</span>
            <p className="mt-2 min-h-[3.4em] text-[13px] font-bold leading-[1.8] text-[#5a5a5a] md:text-[14px]">
              まずは「見える」から。毎週のレポートで、お子さまの学習を見守る基本のプランです。
            </p>
            <div className="mt-5 flex items-end gap-1">
              <span className="mb-1 text-[12px] font-bold text-[#8a968d]">月あたり</span>
              <span className="font-futura text-[44px] font-black leading-none text-primary md:text-[52px]">1,200</span>
              <span className="mb-1 text-[15px] font-bold text-primary">円</span>
            </div>
            <p className="mt-2 text-[12px] font-bold text-[#8a968d]">年額 14,400円（税込）の一括払い</p>
            <ul className="mt-6 space-y-3">
              {[
                "毎週の学習レポート（学習時間・日数・時間帯・継続の記録）",
                "LINEまたはメールで自動配信",
                "お子さまのアプリ利用は引き続き無料",
              ].map((f) => (
                <li key={f} className="flex gap-2.5 text-[13px] font-bold leading-[1.7] text-[#5a5a5a] md:text-[14px]">
                  <Check />
                  {f}
                </li>
              ))}
            </ul>
            {/* TODO: 申込フォーム確定時に href を差し替え */}
            <a
              href="#"
              data-cta="signup"
              className="group mt-7 inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary px-7 py-3.5 text-[14px] font-bold text-primary transition-all duration-300 hover:bg-primary hover:text-white md:text-[15px]"
            >
              このプランではじめる
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* Support (featured) */}
          <div className="relative flex flex-col overflow-hidden rounded-[28px] bg-[#2C6457] p-7 pt-10 shadow-[0px_20px_50px_rgba(0,0,0,0.22)] ring-1 ring-primary/10 md:-translate-y-3 md:p-9 md:pt-12">
            <span className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-2xl bg-white px-5 py-1.5 text-[11px] font-bold text-primary shadow-[0_4px_14px_rgba(0,0,0,0.12)] md:text-[12px]">
              いちばん選ばれています
            </span>
            <span className="text-[15px] font-bold text-white md:text-[16px]">サポート付き</span>
            <p className="mt-2 min-h-[3.4em] text-[13px] font-bold leading-[1.8] text-white/80 md:text-[14px]">
              レポートに加えて、学習アドバイザーが伴走。相談しながら、受験まで一緒に進めるプランです。
            </p>
            <div className="mt-5 flex items-end gap-1">
              <span className="mb-1 text-[12px] font-bold text-white/70">月あたり</span>
              <span className="font-futura text-[44px] font-black leading-none text-white md:text-[52px]">5,000</span>
              <span className="mb-1 text-[15px] font-bold text-white">円</span>
            </div>
            <p className="mt-2 text-[12px] font-bold text-white/70">年額 60,000円（税込）の一括払い</p>
            <ul className="mt-6 space-y-3">
              {[
                "ベーシックのすべてに加えて",
                "学習アドバイザーへメッセージで相談（月に複数回）",
                "月1回のオンライン面談",
              ].map((f) => (
                <li key={f} className="flex gap-2.5 text-[13px] font-bold leading-[1.7] text-white/90 md:text-[14px]">
                  <Check light />
                  {f}
                </li>
              ))}
            </ul>
            {/* TODO: 申込フォーム確定時に href を差し替え */}
            <a
              href="#"
              data-cta="signup"
              className="group mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-[14px] font-bold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:brightness-95 md:text-[15px]"
            >
              このプランではじめる
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-[760px] text-center text-[12px] font-medium leading-[1.9] text-[#8a968d]">
          ※ 30日間返金保証：ご利用開始から30日以内にご連絡いただければ、理由を問わず全額返金します。
          <br className="hidden md:inline" />
          お支払いは年間一括払いのみです。
        </p>
      </div>
    </section>
  )
}
