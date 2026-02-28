"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function TractionSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="relative bg-primary pb-[70px] pt-[40px] md:pb-[100px] md:pt-[60px]">
      <div
        ref={ref}
        className={`mx-auto max-w-[900px] px-6 transition-all duration-700 md:px-[60px] ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Header */}
        <div className="mb-[30px] text-center md:mb-[50px]">
          <h2 className="mb-2 text-[24px] font-bold leading-tight text-white md:text-[34px] lg:text-[40px]">
            早慶東大合格者続出！
          </h2>
          <p className="text-[14px] font-bold text-white/80 md:text-[16px] lg:text-[20px]">
            3ヶ月でこれだけ偏差値が向上しています！
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-[60px] lg:gap-[120px]">
          {/* Card 1 */}
          <div className="relative flex h-[200px] w-[200px] items-center justify-center md:h-[230px] md:w-[230px] lg:h-[260px] lg:w-[260px]">
            <Image
              src="/images/group17.svg"
              alt=""
              fill
              className="object-contain"
            />
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
            <Image
              src="/images/group17.svg"
              alt=""
              fill
              className="object-contain"
            />
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
