"use client"

import { ReportCard } from "./report-card"

export function ParentsHero() {
  return (
    <section id="top" className="relative pt-[100px] pb-20 md:pt-[140px] md:pb-[120px]">
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12 lg:px-[80px]">
        <div className="flex flex-col gap-12 md:flex-row md:items-center md:gap-8 lg:gap-16">
          {/* Left: copy */}
          <div className="flex w-full flex-col gap-7 md:w-[54%] md:gap-9">
            <p
              className="will-animate animate-fade-in-up text-[13px] font-bold tracking-[0.18em] text-primary md:text-[15px]"
              style={{ animationDelay: "0.05s" }}
            >
              オンライン自習室 SAMPO STUDY の保護者向け機能
            </p>

            <h1
              className="will-animate animate-fade-in-up font-bold leading-[1.5] tracking-japanese text-primary text-[32px] md:text-[44px] md:leading-[1.45] lg:text-[58px]"
              style={{ animationDelay: "0.15s" }}
            >
              「勉強してるの？」と、
              <br />
              聞かなくていい
              <span className="relative whitespace-nowrap">
                毎日へ。
                <svg
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  aria-hidden
                  className="absolute -bottom-1 left-0 h-2 w-full text-primary/35"
                >
                  <path
                    d="M3 9 C 50 3, 150 3, 197 7"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p
              className="will-animate animate-fade-in-up font-bold leading-[1.95] text-[#5a5a5a] text-[14px] md:text-[16px] lg:text-[18px]"
              style={{ animationDelay: "0.3s" }}
            >
              お子さまの同意のもと、アプリが自動記録した学習時間や日数を、
              週に一度やさしいレポートでお届け。聞かなくても、ちゃんと見える。
              だから家での会話は、きっともっとあたたかくなっていくはずです。
            </p>

            <div
              className="will-animate animate-fade-in-up flex flex-col items-start gap-3"
              style={{ animationDelay: "0.45s" }}
            >
              <a
                href="#pricing"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-primary px-9 py-4 text-[15px] font-bold text-white shadow-[0px_5px_20px_4px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0px_10px_28px_4px_rgba(0,0,0,0.16)] hover:brightness-110 md:text-[16px] lg:px-11 lg:py-5 lg:text-[17px]"
              >
                30日間保証つきではじめる
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <p className="flex items-center gap-2 text-[12px] font-medium text-[#5c7066] md:text-[13px]">
                <span className="h-px w-4 bg-primary/40" />
                月あたり1,200円〜（年間一括・税込）・30日間返金保証・お子さまのアプリは無料のまま
              </p>
            </div>
          </div>

          {/* Right: report mockup */}
          <div className="relative mx-auto w-full max-w-[300px] md:mx-0 md:w-[46%] md:max-w-[340px]">
            <div
              className="will-animate animate-scale-in relative z-10"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="animate-float" style={{ animationDelay: "1.2s" }}>
                <ReportCard
                  variant="gauge"
                  week="6/1（月）〜 6/7（日）"
                  comment="夜21時台の学習が定着。週末はいつもより長くがんばりました。"
                  withNotification
                />
              </div>
            </div>

            {/* Floating chips */}
            <div
              className="will-animate animate-fade-in-up absolute -left-3 top-[22%] z-20 flex items-center gap-2 rounded-2xl bg-white px-3 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.12)] md:-left-8"
              style={{ animationDelay: "0.9s" }}
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 font-futura text-[11px] font-black text-primary">
                2w
              </span>
              <span className="text-[11px] font-bold leading-tight text-primary">
                <span className="block text-[8px] font-bold tracking-wider text-[#8a968d]">STREAK</span>
                連続利用 2週目
              </span>
            </div>
            <div
              className="will-animate animate-fade-in-up absolute -right-2 bottom-[14%] z-20 flex items-center gap-2 rounded-2xl bg-white px-3 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.12)] md:-right-6"
              style={{ animationDelay: "1.05s" }}
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M4 19h16" stroke="hsl(150 53% 24%)" strokeWidth="2" strokeLinecap="round" />
                  <path
                    d="M7 15l4-4 3 2 4.5-5.5"
                    stroke="hsl(150 53% 24%)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-[11px] font-bold leading-tight text-primary">
                <span className="block text-[8px] font-bold tracking-wider text-[#8a968d]">THIS WEEK</span>
                今週は 6日 学習
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
