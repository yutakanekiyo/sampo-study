"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative flex flex-col overflow-hidden bg-primary">
      {/* Background blob 1 - Vector 1 (left side) */}
      <div className="pointer-events-none absolute -bottom-16 -left-32 h-[580px] w-[610px] select-none">
        <svg
          width="734"
          height="699"
          viewBox="0 0 734 699"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          <path
            d="M98.2561 16.1558C-21.1254 65.4305 -49.2004 168.583 -81.6318 293.533C-117.873 433.161 -152.806 568.093 -42.2278 660.801C60.2879 746.749 166.605 660.801 300.416 660.801C383.044 660.801 433.378 686.208 511.998 660.801C615.247 627.434 684.894 578.736 719.298 475.883C761.324 350.242 709.698 241.748 609.652 154.844C545.557 99.1695 489.396 97.9975 408.349 72.6585C290.868 35.9289 212.03 -30.8044 98.2561 16.1558Z"
            fill="#1D5E53"
          />
        </svg>
      </div>

      {/* Background blob 2 - Vector 2 (right side) */}
      <div className="pointer-events-none absolute -right-20 top-0 h-[580px] w-[890px] select-none">
        <svg
          width="1086"
          height="712"
          viewBox="0 0 1086 712"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          <path
            d="M242.008 685.981C92.8324 620.016 -37.9618 494.26 10.1244 338.212C52.0786 202.064 196.268 215.415 324.852 154.421C485.04 78.4358 578.327 -23.0805 753.393 4.68549C974.049 39.6823 1184.84 192.484 1153.63 414.019C1132.44 564.385 1050.92 686.252 901.052 709.363C798.726 725.142 751.06 642.577 648.448 628.794C489.588 607.455 388.633 750.817 242.008 685.981Z"
            fill="#1D535E"
          />
        </svg>
      </div>

      {/* ── Hero content (PC image is relative to this block) ── */}
      <div className="relative">
        {/* Main content */}
        <div className="relative z-10 flex w-full items-center px-6 pt-[88px] pb-20 md:pt-[112px] md:pl-[150px] md:pr-12">
          <div className="flex w-full flex-col items-center gap-[48px] md:items-start md:gap-[71px]">
            <div className="flex flex-col items-center gap-[20px] text-center md:items-start md:gap-[31px] md:text-left">
              <p className="text-[18px] font-bold leading-[40px] text-primary-foreground md:text-[26px]">
                いつでも、どこでも、仲間と一緒に。
              </p>

              <div className="flex flex-col items-center gap-[20px] md:items-start md:gap-[31px]">
                <h2 className="text-[24px] font-bold leading-snug text-primary-foreground md:text-[36px] md:leading-[56px] lg:text-[48px] lg:leading-[70px]">
                  Discordで繋がる、
                  <br />
                  完全無料のオンライン自習室
                </h2>
                <h1
                  className="font-display text-[52px] font-bold leading-none tracking-tight text-primary-foreground md:whitespace-nowrap md:text-[72px] md:leading-[100px] lg:text-[100px]"
                  style={{ textShadow: "0 4px 20px rgba(0,0,0,0.25)" }}
                >
                  SAMPO STUDY
                </h1>
              </div>
            </div>

            <a
              href="https://discord.gg/VHBwskUBKZ"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-[340px] flex-col items-center rounded-full bg-primary-foreground px-12 py-3 shadow-[0px_5px_50px_8px_rgba(0,0,0,0.25)] transition-all hover:brightness-95 hover:shadow-2xl md:py-4"
            >
              <span className="text-[13px] font-bold text-primary/60 md:text-[15px]">無料で今すぐ始められる</span>
              <span className="flex items-center gap-2 text-[20px] font-bold text-primary md:text-[25px]">
                Discordに参加する
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </a>

            {/* Mobile: image in flow */}
            <div className="md:hidden">
              <Image
                src="/images/hero-pc-vol2.png"
                alt="SAMPO STUDYのオンライン自習室の様子"
                width={600}
                height={420}
                className="h-auto w-full drop-shadow-[0_24px_60px_rgba(0,0,0,0.5)]"
                priority
              />
            </div>
          </div>
        </div>

        {/* Desktop: PC image — absolutely positioned within this hero block */}
        <div className="absolute right-[-20%] top-1/2 z-0 hidden w-[65%] -translate-y-1/2 md:block">
          <Image
            src="/images/hero-pc-vol2.png"
            alt="SAMPO STUDYのオンライン自習室の様子"
            width={900}
            height={630}
            className="h-auto w-full drop-shadow-[0_24px_60px_rgba(0,0,0,0.5)]"
            priority
          />
        </div>
      </div>

      {/* ── Traction ── */}
      <div className="relative z-10 pb-[70px] pt-[40px] md:pb-[100px] md:pt-[60px]">
        <div className="mx-auto max-w-[900px] px-6 md:px-[60px]">
          <div className="mb-[30px] text-center md:mb-[50px]">
            <h2 className="mb-2 text-[24px] font-bold leading-tight text-white md:text-[34px] lg:text-[40px]">
              早慶東大合格者続出！
            </h2>
            <p className="text-[14px] font-bold text-white/80 md:text-[16px] lg:text-[20px]">
              3ヶ月でこれだけ偏差値が向上しています！
            </p>
          </div>

          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-[60px] lg:gap-[120px]">
            {/* Card 1 */}
            <div className="relative flex h-[200px] w-[200px] items-center justify-center md:h-[230px] md:w-[230px] lg:h-[260px] lg:w-[260px]">
              <Image src="/images/group17.svg" alt="" fill className="object-contain" />
              <div className="relative z-10 flex flex-col items-center gap-2 text-center text-[#444]">
                <p className="text-[14px] font-bold leading-tight md:text-[16px] lg:text-[20px]">
                  難関大学合格者
                </p>
                <p className="font-bold leading-none">
                  <span className="text-[30px] md:text-[36px] lg:text-[42px]">40</span>
                  <span className="text-[20px] md:text-[24px] lg:text-[28px]"> → </span>
                  <span className="text-[44px] md:text-[54px] lg:text-[62px]">60!</span>
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative flex h-[200px] w-[200px] items-center justify-center md:h-[230px] md:w-[230px] lg:h-[260px] lg:w-[260px]">
              <Image src="/images/group17.svg" alt="" fill className="object-contain" />
              <div className="relative z-10 flex flex-col items-center gap-2 text-center text-[#444]">
                <p className="text-[14px] font-bold leading-tight md:text-[16px] lg:text-[20px]">
                  全体平均
                </p>
                <p className="font-bold leading-none">
                  <span className="text-[18px] md:text-[22px] lg:text-[22px]">最大</span>
                  <span className="text-[36px] md:text-[44px] lg:text-[48px]">15</span>
                  <span className="text-[28px] md:text-[34px] lg:text-[38px]">UP!</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-[-2px] left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 40C360 80 720 0 1080 40C1260 60 1380 60 1440 56V80H0V40Z"
            fill="#f0f5f1"
          />
        </svg>
      </div>
    </section>
  )
}
