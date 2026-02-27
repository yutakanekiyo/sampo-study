"use client"

import Image from "next/image"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function FooterCTASection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <>
      {/* CTA Section */}
      <section className="bg-secondary px-6 py-[50px] md:px-[93px] md:py-[100px]">
        <div
          ref={ref}
          className={`rounded-[40px] bg-primary px-8 py-16 transition-all duration-700 md:rounded-tl-[180px] md:rounded-tr-[90px] md:rounded-bl-[20px] md:rounded-br-[90px] md:px-16 md:py-20 lg:px-24 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-10 text-center md:flex-row md:items-center md:justify-between md:text-left">
            {/* Text */}
            <div>
              <h2 className="mb-4 text-[28px] font-bold leading-tight text-white md:text-[40px] lg:text-[52px]">
                まずは無料で始めてみよう
              </h2>
              <p className="text-[14px] font-bold leading-[1.9] text-white/80 md:text-[16px] lg:text-[20px]">
                一歩ずつ、みんなで進んでいこう。
                <br />
                あなたの挑戦を、SAMPO STUDYが応援します。
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex-shrink-0">
              <a
                href="https://discord.gg/VHBwskUBKZ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-[340px] flex-col items-center rounded-full bg-white px-10 py-4 text-primary shadow-lg transition-all hover:brightness-95"
              >
                <span className="text-[12px] font-bold">無料で今すぐ始められる</span>
                <span className="text-[18px] font-bold md:text-[20px]">Discordに参加する</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#dce5df] bg-white">
        <div className="mx-auto max-w-[1600px] px-6 pt-10 pb-6 md:px-[93px] md:pt-[76px] md:pb-8">
          {/* Top row: logo + tagline left, SNS right */}
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:mb-[60px]">
            <div className="flex items-center gap-[19px]">
              <Image
                src="/images/sampo-logo.svg"
                alt="SAMPO STUDY ロゴ"
                width={258}
                height={122}
                className="h-[80px] w-auto md:h-[100px] lg:h-[122px]"
              />
              <div className="flex flex-col text-[14px] font-bold leading-[23px] text-primary md:text-[16px]">
                <p>今日の一歩、</p>
                <p>明日へ二歩、</p>
                <p>未来への三歩。</p>
              </div>
            </div>

            <div className="flex items-center gap-[40px]">
              <a
                href="https://twitter.com/sampostudy"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-60"
                aria-label="X (Twitter)"
              >
                <Image src="/images/logo-x.png" alt="X" width={34} height={34} className="h-[28px] w-auto md:h-[34px]" />
              </a>
              <a
                href="https://discord.gg/VHBwskUBKZ"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-60"
                aria-label="Discord"
              >
                <Image src="/images/logo-discord.png" alt="Discord" width={34} height={34} className="h-[28px] w-auto md:h-[34px]" />
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="mb-8 border-t border-[#dce5df]" />

          {/* Legal + copyright */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-[70px]">
              <Link
                href="/legal/tokushoho"
                className="text-[14px] font-medium text-[#5c7066] transition-colors hover:text-foreground md:text-[19px]"
              >
                特定商取引法に基づく表記
              </Link>
              <Link
                href="/legal/privacy"
                className="text-[14px] font-medium text-[#5c7066] transition-colors hover:text-foreground md:text-[19px]"
              >
                プライバシーポリシー
              </Link>
              <Link
                href="/legal/terms"
                className="text-[14px] font-medium text-[#5c7066] transition-colors hover:text-foreground md:text-[19px]"
              >
                利用規約
              </Link>
            </div>
            <p className="text-[12px] text-[#5c7066]">
              &copy; {new Date().getFullYear()} 株式会社三歩 All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
