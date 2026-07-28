"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ReportCard } from "./report-card"
import { SectionHeading } from "./section-heading"

const items = [
  {
    title: "今週の学習時間",
    example: "例：合計12時間45分（先週より＋1時間30分）",
    body: "「どれくらい勉強しているのか」が数字で分かるので、想像だけで不安をふくらませずにすみます。",
  },
  {
    title: "学習した日数",
    example: "例：7日のうち5日（直近1ヶ月の平均は週4.8日）",
    body: "毎日でなくても、コツコツ机に向かっている事実が見えると、見守る気持ちに余裕が生まれます。",
  },
  {
    title: "時間帯の傾向",
    example: "例：平日は21時〜23時に集中。土日は午前中心",
    body: "お子さまの勉強のリズムが分かるので、夜食の用意や声かけのタイミングにそっと活かせます。",
  },
  {
    title: "継続の記録",
    example: "例：自習室の利用が3週連続（自己ベスト更新中）",
    body: "続いていること自体がひとつの成果。結果が出る前の頑張りに、親が先に気づいて認めてあげられます。",
  },
  {
    title: "今週のひとことサマリー",
    example: "例：「先週より平日夜の学習時間が増えています」",
    body: "数字を細かく読み解かなくても、今週の学習の様子と変化の方向が、ひと目でつかめます。",
  },
]

export function ReportSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="report" className="py-16 md:py-20 lg:py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-[1120px] px-6 transition-all duration-700 md:px-12 lg:px-[80px] ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <SectionHeading
          eyebrow="Weekly Report"
          title={
            <>
              毎週届くレポートには、
              <br />
              こんなことが書いてあります
            </>
          }
          lead="週に一度、LINEまたはメールでお届け。載っているのは、アプリが自動記録した学習データのやさしい要約だけ。点数や順位ではなく、お子さまの「続ける力」が育っていく様子が、1分で読める形で分かります。"
          className="mb-[40px] md:mb-[60px] lg:mb-[80px]"
        />

        <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-12 lg:gap-16">
          {/* Phone */}
          <div className="mx-auto w-full max-w-[290px] md:mx-0 md:w-[44%] md:max-w-[340px] lg:max-w-[360px]">
            <div className="animate-float" style={{ animationDelay: "1s" }}>
              <ReportCard
                variant="stats"
                week="6/8（月）〜 6/14（日）"
                comment="先週より平日夜の学習時間が増えています。週末は午前からがんばりました。"
              />
            </div>
          </div>

          {/* Items */}
          <ul className="flex-1 space-y-4 md:space-y-5">
            {items.map((it, i) => (
              <li
                key={it.title}
                className="rounded-2xl bg-[#FCF7F1] p-6 md:p-7"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(16px)",
                  transition: `opacity 0.6s ease ${i * 80}ms, transform 0.6s ease ${i * 80}ms`,
                }}
              >
                <h3 className="mb-2 text-[17px] font-bold text-primary md:text-[19px]">{it.title}</h3>
                <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold text-primary md:text-[12px]">
                  {it.example}
                </span>
                <p className="font-bold leading-[1.9] text-[#5a5a5a] text-[13px] md:text-[15px]">
                  {it.body}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Mid CTA */}
        <div className="mt-12 flex flex-col items-center gap-3 text-center md:mt-16">
          <a
            href="#pricing"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-primary px-9 py-4 text-[15px] font-bold text-white shadow-[0px_5px_20px_4px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0px_10px_28px_4px_rgba(0,0,0,0.16)] hover:brightness-110 md:text-[16px] lg:px-11 lg:py-5"
          >
            自分に合うプランを見てみる
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <p className="text-[12px] font-medium text-[#5c7066] md:text-[13px]">
            2つのプラン・年間一括（税込）・30日間返金保証つき
          </p>
        </div>
      </div>
    </section>
  )
}
