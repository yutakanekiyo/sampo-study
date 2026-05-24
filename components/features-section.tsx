"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

type Feature = {
  number: string
  title: string
  description: string
  image: string
  imageAlt: string
  comingSoon?: boolean
}

function FeatureText({ feature }: { feature: Feature }) {
  return (
    <div className="flex-1">
      <div className="relative mb-3 md:mb-4 lg:mb-6">
        <span className="pointer-events-none absolute bottom-0 left-[-6px] select-none font-futura text-[80px] font-black leading-none text-[#A5BCB7] md:left-[-12px] md:text-[120px] lg:left-[-16px] lg:text-[170px]">
          {feature.number}
        </span>
        <h3 className="relative z-10 text-[24px] font-bold leading-tight text-primary md:text-[34px] lg:text-[48px]">
          {feature.title}
          {feature.comingSoon && (
            <span className="ml-3 inline-block translate-y-[-4px] rounded-full border border-primary/30 bg-primary/5 px-3 py-1 align-middle text-[11px] font-bold text-primary md:ml-4 md:text-[13px] lg:ml-5 lg:text-[14px]">
              開発中
            </span>
          )}
        </h3>
      </div>
      <p className="whitespace-pre-line font-bold leading-[1.9] text-[#5a5a5a] text-[14px] md:text-[16px] lg:text-[18px] lg:leading-[2]">
        {feature.description}
      </p>
    </div>
  )
}

type BackgroundShape = {
  src: string
  top: string
  left?: string
  right?: string
  width: string
  rotate: number
  opacity: number
}

// Positions are viewport-relative (vh / %) because the parent uses
// `position: sticky` and fills 100vh while the features section is in view.
// Each SVG (1-10) used exactly once, with bigger shapes anchoring and several
// pulled toward the center.
// Slight tilts for the snake-layout mockups (02-06): even numbers lean
// counter-clockwise (negative), odd numbers clockwise (positive), each a
// slightly different amount so the page feels hand-placed.
const imageTilt: Record<string, number> = {
  "01": 3,
  "02": -3,
  "03": 4,
  "04": -5,
  "05": 2,
  "06": -4,
}

// Positions spread across the entire 0-100vh range so that as the background
// drifts during parallax scrolling, both top and bottom areas stay populated.
const backgroundShapes: BackgroundShape[] = [
  { src: "/assets/2.svg", top: "2vh", left: "-8%", width: "26%", rotate: -8, opacity: 0.75 },
  { src: "/assets/1.svg", top: "6vh", right: "-6%", width: "34%", rotate: 14, opacity: 0.75 },
  { src: "/assets/10.svg", top: "12vh", left: "38%", width: "24%", rotate: 28, opacity: 0.75 },
  { src: "/assets/5.svg", top: "28vh", right: "24%", width: "16%", rotate: 0, opacity: 0.75 },
  { src: "/assets/3.svg", top: "40vh", left: "28%", width: "32%", rotate: 18, opacity: 0.75 },
  { src: "/assets/7.svg", top: "58vh", left: "10%", width: "28%", rotate: 35, opacity: 0.75 },
  { src: "/assets/4.svg", top: "72vh", left: "-10%", width: "26%", rotate: -15, opacity: 0.75 },
  { src: "/assets/6.svg", top: "70vh", right: "-8%", width: "34%", rotate: 6, opacity: 0.75 },
]

const features: Feature[] = [
  {
    number: "01",
    title: "オンライン自習室",
    description:
      "家だと集中できない、一人だと続かない——。\nそんな悩みを解決するオンラインの学習空間。カメラON/OFFどちらでも参加可能。画面の向こうに仲間がいるだけで、自然と机に向かえる。塾のような緊張感を、自宅にいながら再現できる。",
    image: "/assets/mockup-feature-01-room.png",
    imageAlt: "オンライン自習室の画面",
  },
  {
    number: "02",
    title: "ポモドーロ",
    description:
      "「25分勉強＋5分休憩」と「85分勉強＋5分休憩」の2つのリズムから選べる。自分に合ったペースで集中と休憩を繰り返すことで、長時間の勉強でもダレずに続けられる。タイマーに合わせてみんなで一斉に勉強するから、一人では作れないリズムが生まれる。",
    image: "/assets/feature-02.png",
    imageAlt: "ポモドーロタイマーの画面",
  },
  {
    number: "03",
    title: "学習記録",
    description:
      "勉強した時間や日数が自動で数値として記録される。「今日は何時間やった」「今週はこれだけ頑張れた」が一目でわかるから、自分の努力が見える形で積み上がっていく。モチベーションの維持に直結する機能。",
    image: "/assets/feature-03.png",
    imageAlt: "学習記録ダッシュボードの画面",
  },
  {
    number: "04",
    title: "質問・解説",
    description:
      "勉強中にわからないところがあれば、質問機能から投稿できる。同じ受験生同士で教え合える環境があるから、一人で悩んで止まる時間を減らせる。",
    image: "/assets/feature-04.png",
    imageAlt: "質問・解説機能の画面",
  },
  {
    number: "05",
    title: "コミュニティ",
    description:
      "勉強ばかりだと息が詰まる。コミュニティでは、同じ目標を持つ仲間と気軽に話せる。休憩時間のちょっとした会話が、また勉強に向かうエネルギーになる。",
    image: "/assets/feature-05.png",
    imageAlt: "コミュニティ画面",
  },
  {
    number: "06",
    title: "オシエルAI",
    description:
      "一人ひとりの志望校・現在の学力・残り日数に合わせて、入試当日までの学習計画を自動で組み立てるAI。日々の進捗に応じて計画を調整し、合格までの最短ルートを伴走する。",
    image: "/assets/mockup-ai.png",
    imageAlt: "オシエルAIの画面",
    comingSoon: true,
  },
]

export function FeaturesSection() {
  const { ref, isVisible } = useScrollAnimation()
  const sectionRef = useRef<HTMLElement | null>(null)
  const [parallaxY, setParallaxY] = useState(0)

  // Scroll-linked parallax driven by NORMALIZED progress (0 → 1) across the
  // section's sticky range. The background drifts by exactly MAX_DRIFT_VH from
  // start to end of the section, so bg and section reach their respective
  // start/end at the same moment regardless of section height or viewport size.
  useEffect(() => {
    const MAX_DRIFT_VH = 40 // total upward drift across the whole section
    let raf = 0
    const update = () => {
      raf = 0
      const el = sectionRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const viewport = window.innerHeight
      // Range of scroll during which the sticky bg is pinned to the viewport top.
      const stickyRange = el.offsetHeight - viewport
      if (stickyRange <= 0) {
        setParallaxY(0)
        return
      }
      const scrolled = Math.max(0, Math.min(stickyRange, -rect.top))
      const progress = scrolled / stickyRange
      const driftPx = (viewport * MAX_DRIFT_VH) / 100
      setParallaxY(-progress * driftPx)
    }
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(update)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll, { passive: true })
    update()
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative bg-white pt-[40px] pb-[80px] md:pt-[60px] md:pb-[140px] lg:pt-[80px] lg:pb-[180px]"
    >
      {/* Sticky background layer with parallax drift.
          - h-[140vh] gives a 40vh buffer so the bottom of the viewport stays
            covered even when the layer drifts upward during parallax.
          - Inner wrapper holds the SVGs and gets transform: translateY based
            on scroll, producing the parallax effect (bg slower than foreground). */}
      <div
        aria-hidden
        className="pointer-events-none sticky top-0 z-0 h-screen w-full overflow-hidden select-none"
      >
        <div
          className="absolute left-0 right-0 top-0 h-[140vh] will-change-transform"
          style={{ transform: `translateY(${parallaxY}px)` }}
        >
          {backgroundShapes.map((shape, i) => (
            <Image
              key={i}
              src={shape.src}
              alt=""
              width={600}
              height={600}
              className="absolute h-auto"
              style={{
                top: shape.top,
                left: shape.left,
                right: shape.right,
                width: shape.width,
                transform: `rotate(${shape.rotate}deg)`,
                opacity: shape.opacity,
              }}
            />
          ))}
        </div>
      </div>

      <div
        ref={ref}
        className={`relative z-10 mx-auto -mt-[100vh] max-w-[1400px] px-6 transition-all duration-700 md:px-12 lg:px-[80px] ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Section header */}
        <div className="mb-[60px] text-center md:mb-[100px] lg:mb-[140px]">
          <p className="mb-3 text-[14px] font-bold tracking-widest text-primary md:text-[16px] lg:text-[18px]">
            Free Features
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
              これだけの機能が、
              <br className="md:hidden" />
              すべて完全無料。
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

        {/* Feature 01 — full-width row, text on left, image on right.
            Image container gets a larger flex ratio + negative right margin so
            the artwork breaks out past the section padding. */}
        <div
          className="relative z-[11] mb-8 flex flex-col gap-10 md:mb-10 md:flex-row md:items-center md:gap-12 lg:mb-12 lg:gap-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div className="md:flex-1">
            <FeatureText feature={features[0]} />
          </div>
          <div className="flex items-center justify-center md:flex-[1.5] md:-mr-8 lg:-mr-24 xl:-mr-36">
            <Image
              src={features[0].image}
              alt={features[0].imageAlt}
              width={1000}
              height={1000}
              className="h-auto w-full max-w-[480px] object-contain md:max-w-[680px] lg:max-w-[840px] xl:max-w-[960px]"
              style={{
                filter: "drop-shadow(0px 20px 40px rgba(0,0,0,0.18))",
                transform: `rotate(${imageTilt["01"] ?? 0}deg)`,
              }}
            />
          </div>
        </div>

        {/* Features 02-06 — snake layout: alternating half-width columns, each
            starting roughly at the vertical middle of the previous image. */}
        <div className="flex flex-col gap-16 md:gap-0">
          {features.slice(1).map((feature, i) => {
            const isLeft = i % 2 === 0 // 02 left, 03 right, 04 left, 05 right, 06 left
            const isFirstOfSnake = i === 0
            return (
              <div
                key={feature.number}
                className={`relative w-full md:w-[62%] ${
                  isLeft ? "md:self-start" : "md:self-end"
                } ${isFirstOfSnake ? "" : "md:-mt-[180px] lg:-mt-[220px]"}`}
                style={{
                  // Higher feature number wins overlap stacking.
                  zIndex: 12 + i,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(24px)",
                  transition: `opacity 0.7s ease ${(i + 1) * 80}ms, transform 0.7s ease ${(i + 1) * 80}ms`,
                }}
              >
                {/* Mobile: text + image stacked. Desktop: image on the OUTER
                    edge (pushed past the section's horizontal padding so it
                    almost touches the viewport edge), text on the INNER side. */}
                <div
                  className={`flex flex-col gap-6 md:items-center md:gap-12 lg:gap-16 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex shrink-0 items-center justify-center ${
                      isLeft
                        ? "md:-ml-12 lg:-ml-24 xl:-ml-32"
                        : "md:-mr-12 lg:-mr-24 xl:-mr-32"
                    }`}
                  >
                    <Image
                      src={feature.image}
                      alt={feature.imageAlt}
                      width={700}
                      height={700}
                      className="h-auto w-full max-w-[220px] object-contain md:max-w-[240px] lg:max-w-[290px]"
                      style={{
                        filter: "drop-shadow(0px 20px 40px rgba(0,0,0,0.18))",
                        transform: `rotate(${imageTilt[feature.number] ?? 0}deg)`,
                      }}
                    />
                  </div>
                  <FeatureText feature={feature} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
