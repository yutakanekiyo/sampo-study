"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function MessageSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      id="message"
      ref={ref}
      className={`relative py-7 pl-4 pr-6 transition-all duration-700 md:py-9 md:pl-6 md:pr-12 lg:py-[64px] lg:pl-[40px] lg:pr-[100px] ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      {/* Decorative background (organic blob + dots) — natural aspect ratio, anchored top-right */}
      <div
        className="pointer-events-none absolute right-[-4%] top-1/2 hidden aspect-[1091/825] w-[72%] -translate-y-1/2 lg:block"
        aria-hidden
      >
        <Image
          src="/assets/7.svg"
          alt=""
          fill
          className="object-contain object-right-top"
          priority={false}
        />
        {/* Sprout image overlaid inside the blob area */}
        <div className="absolute right-[2%] top-[8%] aspect-[721/648] w-[58%]">
          <Image
            src="/assets/sprout.png"
            alt=""
            fill
            className="object-contain"
            sizes="(min-width: 1024px) 35vw, 0px"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px]">
        {/* Section label */}
        <p className="mb-6 text-[16px] font-bold text-primary md:mb-8 md:text-[20px] lg:mb-10 lg:text-[26px]">
          代表メッセージ
        </p>

        {/* Quote (left) + heading & body (right) */}
        <div className="flex items-start gap-1 md:gap-2 lg:gap-3">
          <Image
            src="/assets/quote.svg"
            alt=""
            width={111}
            height={93}
            className="mt-1 h-[40px] w-auto flex-shrink-0 md:h-[60px] lg:mt-2 lg:h-[80px]"
          />

          <div className="relative z-10 -ml-2 min-w-0 flex-1 md:-ml-4 lg:-ml-6">
            {/* Heading */}
            <h2 className="mb-4 text-[22px] font-bold leading-[1.5] text-primary md:mb-5 md:text-[28px] lg:mb-6 lg:text-[38px] lg:leading-[1.4]">
              教育格差をなくし、
              <br />
              努力が正当に報われる
              <br />
              学習インフラを、無料で。
            </h2>

            {/* Body — wider, but capped so text doesn't run under the blob/sprout on lg+ */}
            <div className="flex max-w-full flex-col gap-2 text-[12px] font-bold leading-[1.95] text-[#5a5a5a] md:gap-2.5 md:text-[13px] lg:max-w-[78%] lg:gap-3 lg:text-[15px] lg:leading-[1.95] xl:max-w-[68%]">
              <p>SAMPO STUDY代表　伊藤翔馬です。</p>
              <p>
                「天は人の上に人を造らず」
                <br />
                慶應義塾大学　創設者・福澤諭吉氏が遺したこの言葉は、私の胸に深く刻まれています。本来、学びの機会はすべての人に等しく開かれているべきです。しかし、今の社会はどうでしょうか。生まれた環境や情報の格差が、そのまま進路や挑戦の格差に繋がってしまう現実が、いまだに色濃く残っています。
              </p>
              <p>私自身、学ぶ中で、この「格差」の壁に突き当たり、理想と現実の乖離を痛感してきました。</p>
              <p>
                「どうすれば成績が伸びるのか分からない」「頑張りたいのに、適切な場所がない」。
                <br />
                そんな孤独な葛藤を、これからの世代には味わわせたくない。その一心でこのプラットフォームを立ち上げました。
              </p>
              <p>
                私たちが目指すのは、個人の「気合い」だけに依存しない学習支援です。
                <br />
                学習の道筋を整え、日々の歩みを記録し、折れそうな時に支え合える仕組み――いわば「学習のインフラ」を構築しました。
              </p>
              <p>SAMPO STUDYは、すべての機能を完全無料で提供します。</p>
              <p>
                教育の格差をなくし、誰もが同じスタートラインから未来を描ける社会を創るためです。あなたの努力が、正当に報われる場所へ。私たちは、挑戦するすべての人の一番の理解者であり続けます。
              </p>
              <p className="mt-4 text-[14px] font-bold text-primary md:text-[15px] lg:text-[16px]">
                株式会社三歩　代表取締役CEO　伊藤 翔馬
              </p>
            </div>
          </div>
        </div>

        {/* Mobile/tablet: show sprout below the body so the visual still appears */}
        <div className="relative mt-10 flex justify-center lg:hidden">
          <div className="relative aspect-[1091/825] w-full max-w-[480px]">
            <Image src="/assets/7.svg" alt="" fill className="object-contain" />
            <div className="absolute right-[2%] top-[8%] aspect-[721/648] w-[58%]">
              <Image src="/assets/sprout.png" alt="" fill className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
