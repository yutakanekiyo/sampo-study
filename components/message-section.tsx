"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function MessageSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="message" className="relative bg-secondary py-[60px] md:py-[150px]">
      <div
        ref={ref}
        className={`relative z-10 pl-6 pr-6 md:pl-[150px] md:pr-[150px] transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Header */}
        <div className="mb-[36px] md:mb-[80px]">
          <p className="mb-4 text-[16px] font-bold text-primary md:text-[20px] lg:text-[26px]">
            Message
          </p>
          <h2 className="text-[26px] font-bold leading-tight text-primary md:text-[38px] lg:text-[56px]">
            代表メッセージ
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col items-start gap-10">
          {/* Text */}
          <div className="w-full">
            <div className="mb-12 flex flex-col gap-4 text-[13px] font-bold leading-[1.9] text-primary md:text-[15px] lg:text-[17px] lg:leading-[34px]">
              <p>SAMPO STUDY代表　伊藤翔馬です。</p>
              <p>「天は人の上に人を造らず」</p>
              <p>慶應義塾大学　創設者・福澤諭吉氏が遺したこの言葉は、私の胸に深く刻まれています。本来、学びの機会はすべての人に等しく開かれているべきです。しかし、今の社会はどうでしょうか。生まれた環境や情報の格差が、そのまま進路や挑戦の格差に繋がってしまう現実が、いまだに色濃く残っています。</p>
              <p>私自身、学ぶ中で、この「格差」の壁に突き当たり、理想と現実の乖離を痛感してきました。</p>
              <p>「どうすれば成績が伸びるのか分からない」「頑張りたいのに、適切な場所がない」。</p>
              <p>そんな孤独な葛藤を、これからの世代には味わわせたくない。その一心でこのプラットフォームを立ち上げました。</p>
              <p>私たちが目指すのは、個人の「気合い」だけに依存しない学習支援です。</p>
              <p>学習の道筋を整え、日々の歩みを記録し、折れそうな時に支え合える仕組み――いわば「学習のインフラ」を構築しました。</p>
              <p>SAMPO STUDYは、すべての機能を完全無料で提供します。</p>
              <p>教育の格差をなくし、誰もが同じスタートラインから未来を描ける社会を創るためです。あなたの努力が、正当に報われる場所へ。私たちは、挑戦するすべての人の一番の理解者であり続けます。</p>
            </div>

            {/* Author */}
            <div>
              <p className="mb-2 text-[16px] font-bold text-primary md:text-[20px] lg:text-[26px]">
                株式会社三歩　代表取締役CEO
              </p>
              <p className="text-[28px] font-bold text-primary md:text-[36px] lg:text-[46px]">
                伊藤 翔馬
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
