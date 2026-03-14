"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function VideoSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="video" className="relative bg-secondary py-[60px] md:py-[100px]">
      <div
        ref={ref}
        className={`relative z-10 pl-6 pr-6 md:pl-[150px] md:pr-[150px] transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Header */}
        <div className="mb-[36px] md:mb-[60px]">
          <p className="mb-4 text-[16px] font-bold text-primary md:text-[20px] lg:text-[26px]">
            Introduction
          </p>
          <h2 className="text-[26px] font-bold leading-tight text-primary md:text-[38px] lg:text-[56px]">
            サービス紹介
          </h2>
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
