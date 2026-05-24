"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

type Point = {
  title: string
  description: string
  // SVG path for the icon; null = placeholder (waiting on app icon asset)
  iconSrc: string | null
}

const points: Point[] = [
  {
    title: "専用アプリで運営",
    description: "学習に特化した\n使いやすい設計",
    iconSrc: null, // TODO: replace with the app icon asset when ready
  },
  {
    title: "仲間がいる環境",
    description: "同じ目標を持つ仲間と\n一緒に頑張れる",
    iconSrc: "/assets/people.svg",
  },
  {
    title: "24時間利用可能",
    description: "いつでも好きな時間に\n自習室に入れる",
    iconSrc: "/assets/24h.svg",
  },
  {
    title: "完全無料",
    description: "すべての機能を\n無料で利用できる",
    iconSrc: "/assets/0yen.svg",
  },
]

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="about" className="py-[20px] md:py-[40px] lg:py-[50px]">
      <div
        ref={ref}
        className={`px-3 transition-all duration-700 md:px-4 lg:px-6 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Gradient box: contains heading + (description + 4 cards) */}
        <div className="rounded-[40px] bg-gradient-to-r from-[#F4F5EE]/85 to-[#FCFAF7]/85 px-6 py-7 md:rounded-[56px] md:px-10 md:py-10 lg:rounded-[72px] lg:px-[60px] lg:py-[56px]">
          <div className="mx-auto max-w-[1400px]">
            {/* Heading + description (left) + 4 cards (right) */}
            <div className="flex flex-col gap-10 md:gap-12 lg:flex-row lg:items-center lg:gap-12">
              {/* Left: heading + description grouped together */}
              <div className="lg:flex-1 lg:max-w-[420px]">
                <h2 className="mb-4 text-[24px] font-bold leading-[1.4] tracking-[0.08em] text-primary md:mb-6 md:text-[32px] lg:mb-8 lg:text-[40px] lg:leading-[1.35]">
                  もう、一人じゃない。
                </h2>
                <p className="font-bold leading-[1.9] text-[#5a5a5a] text-[14px] md:text-[16px] lg:text-[18px]">
                  専用アプリで運営される、
                  <br />
                  完全無料のオンライン自習室。
                  <br />
                  家だと集中できない、一人だと続かない。
                  <br />
                  そんな悩みを、仲間と一緒に
                  <br />
                  解決する場所です。
                </p>
              </div>

              {/* Right: 4 white cards */}
              <div className="grid grid-cols-2 gap-4 md:gap-5 lg:flex-[1.4] lg:grid-cols-4 lg:gap-6">
                {points.map((point, index) => (
                  <div
                    key={point.title}
                    className="flex flex-col items-center gap-3 rounded-2xl bg-white px-4 py-6 text-center shadow-[0px_4px_20px_rgba(0,0,0,0.06)] md:gap-4 md:px-5 md:py-8 lg:rounded-3xl"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "translateY(0)" : "translateY(16px)",
                      transition: `opacity 0.6s ease ${index * 80}ms, transform 0.6s ease ${index * 80}ms`,
                    }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center md:h-14 md:w-14 lg:h-16 lg:w-16">
                      {point.iconSrc ? (
                        <Image
                          src={point.iconSrc}
                          alt=""
                          width={64}
                          height={64}
                          className="h-full w-auto"
                        />
                      ) : (
                        // Placeholder until the app icon asset is provided
                        <div className="flex h-full w-full items-center justify-center rounded-xl border-2 border-dashed border-primary/30 text-[10px] font-bold text-primary/50">
                          APP
                        </div>
                      )}
                    </div>
                    <p className="text-[15px] font-bold leading-tight text-primary md:text-[16px] lg:text-[18px]">
                      {point.title}
                    </p>
                    <p className="whitespace-pre-line text-[11px] font-medium leading-[1.6] text-[#5a5a5a] md:text-[12px] lg:text-[13px]">
                      {point.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
