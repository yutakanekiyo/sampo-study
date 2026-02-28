"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function TractionSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="relative bg-primary pb-[100px] pt-[60px] md:pb-[140px] md:pt-[100px]">
      <div
        ref={ref}
        className={`mx-auto max-w-[1200px] px-6 transition-all duration-700 md:px-[60px] ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Header */}
        <div className="mb-[50px] text-center md:mb-[70px]">
          <h2 className="mb-3 text-[32px] font-bold leading-tight text-white md:text-[48px] lg:text-[55px]">
            早慶東大合格者続出！
          </h2>
          <p className="text-[16px] font-bold text-white/80 md:text-[22px] lg:text-[30px]">
            3ヶ月でこれだけ偏差値が向上しています！
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col items-center gap-12 md:flex-row md:justify-center md:gap-[80px] lg:gap-[190px]">
          {/* Card 1 */}
          <div className="relative flex h-[280px] w-[280px] items-center justify-center md:h-[320px] md:w-[320px] lg:h-[357px] lg:w-[357px]">
            <Image
              src="/images/group17.svg"
              alt=""
              fill
              className="object-contain"
            />
            <div className="relative z-10 flex flex-col items-center gap-3 text-center text-[#444]">
              <p className="text-[20px] font-bold leading-tight md:text-[24px] lg:text-[30px]">
                難関大学合格者
              </p>
              <p className="font-bold leading-none">
                <span className="text-[44px] md:text-[52px] lg:text-[60px]">40</span>
                <span className="text-[28px] md:text-[34px] lg:text-[40px]"> → </span>
                <span className="text-[64px] md:text-[78px] lg:text-[90px]">60!</span>
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative flex h-[280px] w-[280px] items-center justify-center md:h-[320px] md:w-[320px] lg:h-[357px] lg:w-[357px]">
            <Image
              src="/images/group17.svg"
              alt=""
              fill
              className="object-contain"
            />
            <div className="relative z-10 flex flex-col items-center gap-3 text-center text-[#444]">
              <p className="text-[20px] font-bold leading-tight md:text-[24px] lg:text-[30px]">
                全体平均
              </p>
              <p className="font-bold leading-none">
                <span className="text-[28px] md:text-[34px] lg:text-[30px]">最大</span>
                <span className="text-[52px] md:text-[62px] lg:text-[60px]">15</span>
                <span className="text-[40px] md:text-[46px] lg:text-[50px]">UP!</span>
              </p>
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
