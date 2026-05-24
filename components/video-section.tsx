"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function VideoSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="video" className="relative pt-[60px] pb-[20px] md:pt-[100px] md:pb-[40px] lg:pt-[120px] lg:pb-[50px]">
      <div
        ref={ref}
        className={`relative z-10 mx-auto max-w-[1400px] px-6 transition-all duration-700 md:px-12 lg:px-[80px] ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Header — same pattern as features section */}
        <div className="mb-[40px] text-center md:mb-[60px] lg:mb-[80px]">
          <p className="mb-3 text-[14px] font-bold tracking-widest text-primary md:text-[16px] lg:text-[18px]">
            Introduction
          </p>
          <div className="flex items-center justify-center gap-4 md:gap-8 lg:gap-12">
            <Image
              src="/assets/dots1.svg"
              alt=""
              width={80}
              height={80}
              aria-hidden
              className="h-[14px] w-auto shrink-0 md:h-[20px] lg:h-[26px]"
            />
            <h2 className="text-[28px] font-bold leading-[1.4] text-primary md:text-[40px] lg:text-[52px] lg:leading-[1.35]">
              サービス紹介
            </h2>
            <Image
              src="/assets/dots2.svg"
              alt=""
              width={80}
              height={80}
              aria-hidden
              className="h-[14px] w-auto shrink-0 md:h-[20px] lg:h-[26px]"
            />
          </div>
        </div>

        {/* Video */}
        <div className="overflow-hidden rounded-[20px] shadow-lg">
          <video
            src="/sampo-introduction.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full"
          />
        </div>
      </div>
    </section>
  )
}
