"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary-foreground/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-primary-foreground/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-20 text-center md:px-8 md:py-28">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-5 py-2.5 text-sm font-bold text-primary-foreground">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-300" />
          完全無料 - 0円で今すぐ始められる
        </div>

        <h1 className="mb-6 max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tight text-primary-foreground md:text-6xl lg:text-7xl">
          もう1人じゃない
        </h1>

        <p className="mb-10 max-w-xl text-base leading-relaxed text-primary-foreground/80 text-pretty md:text-lg">
          Discordで繋がる、完全無料のオンライン自習室。
          <br className="hidden md:block" />
          いつでも、どこでも、仲間と一緒に。
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="https://discord.gg/NvG9Wng4"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-xl bg-primary-foreground px-8 py-4 text-base font-bold text-primary shadow-lg transition-all hover:shadow-xl hover:brightness-95"
          >
            無料でDiscordに参加する
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#about"
            className="rounded-xl border border-primary-foreground/30 px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
          >
            詳しく見る
          </a>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-8 text-primary-foreground/60 md:gap-12">
          <div className="flex flex-col items-center">
            <span className="font-display text-2xl font-bold text-primary-foreground md:text-3xl">
              0
            </span>
            <span className="text-xs md:text-sm">{'円で始められる'}</span>
          </div>
          <div className="h-8 w-px bg-primary-foreground/20" />
          <div className="flex flex-col items-center">
            <span className="font-display text-2xl font-bold text-primary-foreground md:text-3xl">
              24/7
            </span>
            <span className="text-xs md:text-sm">いつでも利用可能</span>
          </div>
          <div className="h-8 w-px bg-primary-foreground/20" />
          <div className="flex flex-col items-center">
            <span className="font-display text-2xl font-bold text-primary-foreground md:text-3xl">
              Discord
            </span>
            <span className="text-xs md:text-sm">ベースで簡単</span>
          </div>
        </div>
      </div>

      {/* Image A: Main visual - spans full width below hero content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 pb-20 md:px-8">
        <div className="overflow-hidden rounded-xl shadow-2xl">
          <Image
            src="/images/study-room.png"
            alt="SAMPO STUDYのオンライン自習室の様子"
            width={1280}
            height={720}
            className="h-auto w-full"
            priority
          />
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 40C360 80 720 0 1080 40C1260 60 1380 60 1440 56V80H0V40Z"
            fill="hsl(0 0% 100%)"
          />
        </svg>
      </div>
    </section>
  )
}
