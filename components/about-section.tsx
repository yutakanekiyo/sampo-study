"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Monitor, Users, Clock, Shield } from "lucide-react"

const points = [
  {
    icon: Monitor,
    title: "Discordで運営",
    description: "普段使い慣れたDiscordだから、新しいアプリをインストールする必要なし。",
  },
  {
    icon: Users,
    title: "仲間がいる環境",
    description: "同じ目標を持つ仲間と繋がれる。一人じゃないから続けられる。",
  },
  {
    icon: Clock,
    title: "24時間利用可能",
    description: "早朝でも深夜でも、自分のペースで好きなときに勉強できる。",
  },
  {
    icon: Shield,
    title: "完全無料",
    description: "すべての機能が0円。登録も月額もクレジットカードも一切不要。",
  },
]

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="about" className="bg-secondary py-[50px] md:py-[120px] lg:py-[150px]">
      <div
        ref={ref}
        className={`pl-6 pr-6 transition-all duration-700 md:pl-[150px] md:pr-[150px] ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Label + headline row + description */}
        <div className="mb-[60px] flex flex-col gap-[30px] md:mb-[80px] md:gap-[40px] lg:mb-[117px] lg:gap-[55px]">
          <p className="text-[16px] font-bold leading-[40px] text-primary md:text-[20px] lg:text-[26px]">
            What's SAMPO STUDY?
          </p>
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-[60px] lg:gap-[100px]">
            <h2 className="shrink-0 text-[34px] font-bold leading-[1.2] text-primary md:text-[44px] lg:text-[60px] lg:leading-[80px]">
              もう、一人じゃない。
            </h2>
            <p className="text-[16px] font-bold leading-[1.8] text-primary md:text-[20px] md:leading-[40px] lg:text-[26px] lg:leading-[40px]">
              Discord上で運営される、完全無料のオンライン自習室。<br />
              家だと集中できない。一人だと続かない。<br />
              そんな悩みを、仲間と一緒に解決する場所です。
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[40px]">
          {points.map((point, index) => (
            <div
              key={point.title}
              className="flex flex-col items-center rounded-[20px] bg-[#f0f5f1] px-[28px] pb-[40px] pt-[40px] text-center shadow-[6px_26px_40px_0px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[6px_26px_50px_0px_rgba(0,0,0,0.22)] lg:rounded-[30px] lg:px-[38px] lg:pb-[48px] lg:pt-[48px]"
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(16px)",
              }}
            >
              <div className="mb-[30px] flex h-[72px] w-[72px] items-center justify-center rounded-[18px] bg-primary/10 lg:mb-[46px] lg:h-[96px] lg:w-[96px] lg:rounded-[24px]">
                <point.icon className="h-[36px] w-[36px] text-primary lg:h-[48px] lg:w-[48px]" strokeWidth={1.5} />
              </div>
              <h3 className="mb-[16px] text-[20px] font-bold text-primary lg:mb-[46px] lg:text-[28px]">
                {point.title}
              </h3>
              <p className="text-[14px] font-medium leading-[1.6] text-[#5c7066] lg:text-[18px] lg:leading-[24.8px]">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
