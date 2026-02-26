"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const features = [
  {
    number: "01",
    title: "オンライン自習室",
    description:
      "家だと集中できない、一人だと続かない——。\nそんな悩みを解決するオンラインの学習空間。カメラON/OFFどちらでも参加可能。画面の向こうに仲間がいるだけで、自然と机に向かえる。塾のような緊張感を、自宅にいながら再現できる。",
    image: "/images/feature-01.png",
    imageAlt: "オンライン自習室の様子",
    textRight: true,
  },
  {
    number: "02",
    title: "ポモドーロチャンネル",
    description:
      "「25分勉強＋5分休憩」と「85分勉強＋5分休憩」の2つのリズムから選べる。自分に合ったペースで集中と休憩を繰り返すことで、長時間の勉強でもダレずに続けられる。タイマーに合わせてみんなで一斉に勉強するから、一人では作れないリズムが生まれる。",
    image: "/images/feature-02.png",
    imageAlt: "ポモドーロチャンネルのタイマー",
    textRight: false,
  },
  {
    number: "03",
    title: "学習記録",
    description:
      "勉強した時間や日数が自動で数値として記録される。「今日は何時間やった」「今週はこれだけ頑張れた」が一目でわかるから、自分の努力が見える形で積み上がっていく。モチベーションの維持に直結する機能。",
    image: "/images/feature-03.png",
    imageAlt: "学習記録ダッシュボード",
    textRight: true,
  },
  {
    number: "04",
    title: "質問チャンネル",
    description:
      "勉強中にわからないところがあれば、質問チャンネルに投稿できる。同じ受験生同士で教え合える環境があるから、一人で悩んで止まる時間を減らせる。",
    image: "/images/feature-04.png",
    imageAlt: "質問チャンネルでの数学の解説の様子",
    textRight: false,
  },
  {
    number: "05",
    title: "雑談チャンネル",
    description:
      "勉強ばかりだと息が詰まる。雑談チャンネルでは、同じ目標を持つ仲間と気軽に話せる。休憩時間のちょっとした会話が、また勉強に向かうエネルギーになる。",
    image: "/images/feature-05.png",
    imageAlt: "雑談チャンネルでの交流の様子",
    textRight: true,
  },
]

export function FeaturesSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="features" className="relative bg-primary py-[60px] md:py-[150px]">
      {/* Sticky vectors — h-0 trick: takes no layout space but children stay fixed in viewport */}
      <div className="pointer-events-none sticky top-0 z-0 hidden h-0 overflow-visible select-none lg:block">
        <div
          className="absolute -left-32 w-[580px] opacity-60"
          style={{ top: "calc(100vh - 560px)" }}
        >
          <Image src="/images/feature-vector1.svg" alt="" width={734} height={699} className="h-auto w-full" />
        </div>
        <div className="absolute -right-20 -top-10 w-[760px] opacity-60">
          <Image src="/images/feature-vector2.svg" alt="" width={1086} height={712} className="h-auto w-full" />
        </div>
      </div>

      <div
        ref={ref}
        className={`relative z-10 pl-6 pr-6 transition-all duration-700 md:pl-[150px] md:pr-[150px] ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Header */}
        <div className="mb-[36px] md:mb-[100px] lg:mb-[120px]">
          <p className="mb-[16px] text-[16px] font-bold leading-[40px] text-white md:text-[20px] lg:text-[26px]">
            Free Features
          </p>
          <h2 className="text-[26px] font-bold leading-tight text-white md:text-[40px] lg:text-[60px] lg:leading-[90px]">
            これだけの機能が、すべて完全無料。
          </h2>
        </div>

        {/* Feature list */}
        <div className="flex flex-col gap-[50px] md:gap-[120px] lg:gap-[180px]">
          {features.map((feature, index) => (
            <div
              key={feature.number}
              className={`flex flex-col gap-10 md:flex-row md:items-center md:gap-16 lg:gap-20 ${
                feature.textRight ? "md:flex-row-reverse" : ""
              }`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.7s ease ${index * 120}ms, transform 0.7s ease ${index * 120}ms`,
              }}
            >
              {/* Text block */}
              <div className="flex-1">
                {/* Number + title in same relative container so bottom edges align */}
                <div className="relative mb-4 lg:mb-6">
                  <span className="pointer-events-none absolute bottom-0 left-[-8px] select-none font-futura text-[100px] font-black leading-none text-white/25 md:left-[-14px] md:text-[140px] lg:left-[-20px] lg:text-[200px]">
                    {feature.number}
                  </span>
                  <h3 className="relative z-10 text-[26px] font-bold leading-tight text-white md:text-[38px] lg:text-[60px] lg:leading-[120px]">
                    {feature.title}
                  </h3>
                </div>
                <p className="whitespace-pre-line text-[14px] font-bold leading-[1.9] text-white md:text-[16px] lg:text-[20px] lg:leading-[40px]">
                  {feature.description}
                </p>
              </div>

              {/* Image — drop-shadow on the image itself, no border/frame */}
              <div className="flex-1">
                <Image
                  src={feature.image}
                  alt={feature.imageAlt}
                  width={700}
                  height={500}
                  className="h-auto w-full object-contain"
                  style={{ filter: "drop-shadow(0px 8px 40px rgba(0,0,0,0.4))" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
