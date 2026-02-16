"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import {
  Video,
  Timer,
  BarChart3,
  HelpCircle,
  MessageCircle,
} from "lucide-react"

const features = [
  {
    icon: Video,
    title: "オンライン自習室",
    description:
      "カメラON/OFFどちらでも参加可能。家だと集中できない、一人だと続かない——そんな悩みを解決するオンラインの学習空間。画面の向こうに仲間がいるだけで、自然と机に向かえる。塾のような緊張感を、自宅にいながら再現できる。",
  },
  {
    icon: Timer,
    title: "ポモドーロチャンネル",
    description:
      "「25分勉強＋5分休憩」と「85分勉強＋5分休憩」の2つのリズムから選べる。自分に合ったペースで集中と休憩を繰り返すことで、長時間の勉強でもダレずに続けられる。タイマーに合わせてみんなで一斉に勉強するから、一人では作れないリズムが生まれる。",
  },
  {
    icon: BarChart3,
    title: "学習記録",
    description:
      "勉強した時間や日数が自動で数値として記録される。「今日は何時間やった」「今週はこれだけ頑張れた」が一目でわかるから、自分の努力が見える形で積み上がっていく。モチベーションの維持に直結する機能。",
  },
  {
    icon: HelpCircle,
    title: "質問チャンネル",
    description:
      "勉強中にわからないところがあれば、質問チャンネルに投稿できる。同じ受験生同士で教え合える環境があるから、一人で悩んで止まる時間を減らせる。",
  },
  {
    icon: MessageCircle,
    title: "雑談チャンネル",
    description:
      "勉強ばかりだと息が詰まる。雑談チャンネルでは、同じ目標を持つ仲間と気軽に話せる。休憩時間のちょっとした会話が、また勉強に向かうエネルギーになる。",
  },
]

export function FeaturesSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="features" className="bg-secondary py-20 md:py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-4 transition-all duration-700 md:px-8 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold tracking-wider text-primary">
            FREE FEATURES
          </p>
          <h2 className="mb-4 text-2xl font-bold text-foreground md:text-4xl">
            ずっと無料 - 0円で使える機能
          </h2>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground">
            これだけの機能が、すべて完全無料。
            <br />
            登録も、月額も、一切かかりません。
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-background p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md md:p-8"
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(16px)",
              }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-6 py-3 text-sm font-semibold text-primary">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
              {'0'}
            </span>
            {'すべて無料で利用できます'}
          </div>
        </div>
      </div>
    </section>
  )
}
