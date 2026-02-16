"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Monitor, Bot, CalendarCheck } from "lucide-react"

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
            Discord上で運営されるオンライン学習プラットフォーム。
            <br className="hidden md:block" />
            無料の自習室を土台に、AIを活用した有料プランでさらに学びを深められます。
          </p>
        </div>

        {/* Layer diagram */}
        <div className="mx-auto max-w-2xl">
          {/* Outer layer - free */}
          <div className="rounded-2xl border-2 border-primary/20 bg-secondary p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                <Monitor className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">
                  無料 - オンライン自習室
                </h3>
                <p className="text-sm text-muted-foreground">
                  すべての機能の土台。誰でも無料で使えます
                </p>
              </div>
            </div>

            {/* Inner layers - paid */}
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="flex-1 rounded-xl border border-primary/30 bg-background p-5 shadow-sm">
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                  <h4 className="text-sm font-bold text-foreground">
                    半学半教AI
                  </h4>
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  AIに教えることで理解を深める、逆転の学習法。アウトプット中心で確実に定着。
                </p>
                <div className="mt-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  月額 5,000円
                </div>
              </div>

              <div className="flex-1 rounded-xl border border-primary/30 bg-background p-5 shadow-sm">
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10">
                    <CalendarCheck className="h-4 w-4 text-primary" />
                  </div>
                  <h4 className="text-sm font-bold text-foreground">
                    プランニングAI
                  </h4>
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  志望校・現状学力から最適な学習ルートを自動設計。週単位でタスクと振り返りを回す。
                </p>
                <div className="mt-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  月額 5,000円
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
