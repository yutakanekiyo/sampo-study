"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import {
  Video,
  Timer,
  BarChart3,
  HelpCircle,
  MessageCircle,
} from "lucide-react"
import Image from "next/image"

function ImagePlaceholder({
  label,
  aspectRatio = "aspect-video",
  className = "",
}: {
  label: string
  aspectRatio?: string
  className?: string
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-xl bg-muted/60 transition-colors hover:bg-muted ${aspectRatio} ${className}`}
    >
      <p className="px-4 text-center text-sm text-muted-foreground">{label}</p>
    </div>
  )
}

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

        {/* Feature 1: Online study room - full width */}
        <div
          className="mb-6 rounded-2xl border border-border bg-background p-6 shadow-sm transition-all duration-500 md:p-8"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(16px)",
          }}
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <Video className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">オンライン自習室</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                カメラON/OFFどちらでも参加可能。家だと集中できない、一人だと続かない——そんな悩みを解決するオンラインの学習空間。画面の向こうに仲間がいるだけで、自然と机に向かえる。塾のような緊張感を、自宅にいながら再現できる。
              </p>
            </div>
          </div>
        </div>

        {/* Feature 2: Pomodoro - full width */}
        <div
          className="mb-6 rounded-2xl border border-border bg-background p-6 shadow-sm transition-all duration-500 md:p-8"
          style={{
            transitionDelay: isVisible ? "100ms" : "0ms",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(16px)",
          }}
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <Timer className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">ポモドーロチャンネル</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {'「25分勉強＋5分休憩」と「85分勉強＋5分休憩」の2つのリズムから選べる。自分に合ったペースで集中と休憩を繰り返すことで、長時間の勉強でもダレずに続けられる。タイマーに合わせてみんなで一斉に勉強するから、一人では作れないリズムが生まれる。'}
              </p>
            </div>
          </div>
        </div>

        {/* Feature 3: Study records - with images B & D side by side */}
        <div
          className="mb-6 rounded-2xl border border-border bg-background p-6 shadow-sm transition-all duration-500 md:p-8"
          style={{
            transitionDelay: isVisible ? "200ms" : "0ms",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(16px)",
          }}
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">学習記録</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {'勉強した時間や日数が自動で数値として記録される。「今日は何時間やった」「今週はこれだけ頑張れた」が一目でわかるから、自分の努力が見える形で積み上がっていく。モチベーションの維持に直結する機能。'}
              </p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="overflow-hidden rounded-xl border border-border">
              <Image
                src="/images/dashboard.png"
                alt="SAMPO STUDYの学習ダッシュボード"
                width={1200}
                height={675}
                className="h-auto w-full"
              />
            </div>
            <ImagePlaceholder
              label="[画像D] 自動記録されている様子のスクリーンショット"
              aspectRatio="aspect-[16/9]"
              className="w-full"
            />
          </div>
        </div>

        {/* Feature 4: Q&A channel - with image C */}
        <div
          className="mb-6 rounded-2xl border border-border bg-background p-6 shadow-sm transition-all duration-500 md:p-8"
          style={{
            transitionDelay: isVisible ? "300ms" : "0ms",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(16px)",
          }}
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="flex-1">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <HelpCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">質問チャンネル</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    勉強中にわからないところがあれば、質問チャンネルに投稿できる。同じ受験生同士で教え合える環境があるから、一人で悩んで止まる時間を減らせる。
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[60%]">
              <ImagePlaceholder
                label="[画像C] 早稲田志望者チャンネルの会話スクリーンショット"
                aspectRatio="aspect-[16/9]"
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Feature 5: Chat channel */}
        <div
          className="mb-6 rounded-2xl border border-border bg-background p-6 shadow-sm transition-all duration-500 md:p-8"
          style={{
            transitionDelay: isVisible ? "400ms" : "0ms",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(16px)",
          }}
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <MessageCircle className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">雑談チャンネル</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                勉強ばかりだと息が詰まる。雑談チャンネルでは、同じ目標を持つ仲間と気軽に話せる。休憩時間のちょっとした会話が、また勉強に向かうエネルギーになる。
              </p>
            </div>
          </div>
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
