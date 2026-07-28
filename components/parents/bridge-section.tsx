"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function BridgeSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="bridge" className="px-3 py-[16px] md:px-4 md:py-[28px] lg:px-6 lg:py-[40px]">
      <div
        ref={ref}
        className={`relative overflow-hidden rounded-[40px] bg-[#2C6457] px-6 py-14 text-center transition-all duration-700 md:rounded-[56px] md:px-12 md:py-20 lg:rounded-[72px] lg:py-[100px] ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <p className="mb-4 text-[13px] font-bold tracking-[0.18em] text-white/70 md:text-[15px]">
          Our Philosophy
        </p>
        <h2 className="mx-auto max-w-[900px] text-[24px] font-bold leading-[1.5] text-white md:text-[36px] lg:text-[44px] lg:leading-[1.45]">
          「見張る」ではなく「見守る」を、
          <br />
          仕組みにしました。
        </h2>
        <p className="mx-auto mt-6 max-w-[780px] font-bold leading-[1.95] text-white/85 text-[14px] md:mt-8 md:text-[16px] lg:text-[17px]">
          お子さまがSAMPO STUDYの自習室で勉強すると、学習時間や日数がアプリに自動で記録されます。
          保護者レポートは、その要約を週に一度LINEやメールでお届けする機能。
          お子さま本人が承認してはじめて届く、隠しごとのない仕組みだから、
          憶測ではなく事実をもとに、ちょうどいい距離で見守れます。
        </p>
      </div>
    </section>
  )
}
