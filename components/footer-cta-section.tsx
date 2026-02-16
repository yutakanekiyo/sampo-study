"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function FooterCTASection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <>
      {/* CTA Section */}
      <section className="relative overflow-hidden bg-primary py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 right-0 h-80 w-80 rounded-full bg-primary-foreground/20 blur-3xl" />
          <div className="absolute -bottom-24 left-0 h-80 w-80 rounded-full bg-primary-foreground/10 blur-3xl" />
        </div>

        <div
          ref={ref}
          className={`relative z-10 mx-auto max-w-3xl px-4 text-center transition-all duration-700 md:px-8 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="mb-4 text-2xl font-bold text-primary-foreground md:text-4xl">
            まずは無料で始めてみよう
          </h2>
          <p className="mb-8 text-base leading-relaxed text-primary-foreground/80">
            一歩ずつ、みんなで進んでいこう。
            <br />
            あなたの挑戦を、SAMPO STUDYが応援します。
          </p>
          <a
            href="https://discord.gg/sampostudy"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary-foreground px-8 py-4 text-base font-bold text-primary shadow-lg transition-all hover:shadow-xl hover:brightness-95"
          >
            無料でDiscordに参加する
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 md:flex-row md:justify-between md:px-8">
          <div className="flex flex-col items-center gap-3 md:items-start">
            <Image
              src="/images/sampo-logo.jpg"
              alt="SAMPO STUDY ロゴ"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
            <p className="text-xs text-muted-foreground">
              挑戦するすべての人に、公平な機会と正しい設計を。
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://twitter.com/sampostudy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
              aria-label="X (Twitter)"
            >
              X
            </a>
            <a
              href="https://discord.gg/sampostudy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
              aria-label="Discord"
            >
              Discord
            </a>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-6xl border-t border-border px-4 pt-6 text-center md:px-8">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} 株式会社三歩 All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}
