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
    <section id="about" className="bg-background py-20 md:py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-4 transition-all duration-700 md:px-8 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold tracking-wider text-primary">
            ABOUT
          </p>
          <h2 className="mb-4 text-2xl font-bold text-foreground md:text-4xl">
            SAMPO STUDYとは
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground">
            Discord上で運営される、完全無料のオンライン自習室。
            <br className="hidden md:block" />
            家だと集中できない。一人だと続かない。
            <br className="hidden md:block" />
            そんな悩みを、仲間と一緒に解決する場所です。
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point, index) => (
            <div
              key={point.title}
              className="flex flex-col items-center rounded-2xl border border-border bg-secondary p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(16px)",
              }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <point.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-base font-bold text-foreground">
                {point.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
