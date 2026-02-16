"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Check, Minus, ArrowRight } from "lucide-react"

const plans = [
  {
    name: "無料プラン",
    price: "0",
    priceLabel: "円",
    description: "まずはここから。すべての基本機能が使えます。",
    highlight: true,
    badge: "おすすめ",
    features: [
      { label: "オンライン自習室", included: true },
      { label: "ポモドーロチャンネル", included: true },
      { label: "学習記録", included: true },
      { label: "質問/雑談チャンネル", included: true },
      { label: "AIアウトプット学習", included: false },
      { label: "学習プロセスの記録・可視化", included: false },
      { label: "弱点抽出と反復設計", included: false },
      { label: "最適な参考書ルート設計", included: false },
      { label: "週間タスク自動生成", included: false },
      { label: "週次レビューと再設計", included: false },
    ],
  },
  {
    name: "半学半教AIコース",
    price: "5,000",
    priceLabel: "円/月",
    description: "AIに教えることで理解を深める、逆転の学習法。",
    highlight: false,
    badge: null,
    features: [
      { label: "オンライン自習室", included: true },
      { label: "ポモドーロチャンネル", included: true },
      { label: "学習記録", included: true },
      { label: "質問/雑談チャンネル", included: true },
      { label: "AIアウトプット学習", included: true },
      { label: "学習プロセスの記録・可視化", included: true },
      { label: "弱点抽出と反復設計", included: true },
      { label: "最適な参考書ルート設計", included: false },
      { label: "週間タスク自動生成", included: false },
      { label: "週次レビューと再設計", included: false },
    ],
  },
  {
    name: "プランニングAIコース",
    price: "5,000",
    priceLabel: "円/月",
    description: "勉強を気合いから設計へ。最短ルートを自動設計。",
    highlight: false,
    badge: null,
    features: [
      { label: "オンライン自習室", included: true },
      { label: "ポモドーロチャンネル", included: true },
      { label: "学習記録", included: true },
      { label: "質問/雑談チャンネル", included: true },
      { label: "AIアウトプット学習", included: false },
      { label: "学習プロセスの記録・可視化", included: false },
      { label: "弱点抽出と反復設計", included: false },
      { label: "最適な参考書ルート設計", included: true },
      { label: "週間タスク自動生成", included: true },
      { label: "週次レビューと再設計", included: true },
    ],
  },
]

export function PricingSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="pricing" className="bg-background py-20 md:py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-4 transition-all duration-700 md:px-8 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold tracking-wider text-primary">
            PRICING
          </p>
          <h2 className="mb-4 text-2xl font-bold text-foreground md:text-4xl">
            料金プラン
          </h2>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground">
            無料プランですべての基本機能を利用可能。
            <br className="hidden md:block" />
            さらに伸ばしたい人には有料AIコースもご用意。
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border-2 p-6 transition-all duration-500 md:p-8 ${
                plan.highlight
                  ? "border-primary bg-background shadow-lg shadow-primary/10"
                  : "border-border bg-background"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(16px)",
              }}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-6 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <h3 className="mb-2 text-lg font-bold text-foreground">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              <div className="mb-6 flex items-baseline gap-1">
                <span className="font-display text-4xl font-extrabold text-foreground">
                  {plan.price}
                </span>
                <span className="text-sm text-muted-foreground">
                  {plan.priceLabel}
                </span>
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature.label} className="flex items-center gap-3">
                    {feature.included ? (
                      <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                    ) : (
                      <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-muted">
                        <Minus className="h-3 w-3 text-muted-foreground/40" />
                      </div>
                    )}
                    <span
                      className={`text-sm ${
                        feature.included
                          ? "text-foreground"
                          : "text-muted-foreground/50"
                      }`}
                    >
                      {feature.label}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="https://discord.gg/NvG9Wng4"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold transition-all ${
                  plan.highlight
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border border-primary/30 bg-primary/5 text-primary hover:bg-primary/10"
                }`}
              >
                {plan.highlight ? "無料で始める" : "Discordに参加する"}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
