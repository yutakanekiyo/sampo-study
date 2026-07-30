"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function CTASection({ id }: { id?: string } = {}) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id={id} className="px-3 py-[16px] md:px-4 md:py-[28px] lg:px-6 lg:py-[40px]">
      <div
        ref={ref}
        className={`relative overflow-hidden rounded-[40px] bg-[#2C6457] transition-all duration-700 md:rounded-tl-[120px] md:rounded-tr-[60px] md:rounded-bl-[20px] md:rounded-br-[60px] lg:rounded-tl-[180px] lg:rounded-tr-[80px] lg:rounded-br-[80px] ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Decorative blob background */}
        <Image
          src="/assets/10.svg"
          alt=""
          width={1156}
          height={534}
          aria-hidden
          className="pointer-events-none absolute right-0 top-[58%] z-0 w-[74%] -translate-y-1/2 md:w-[70%] lg:w-[66%]"
        />

        {/* Phones (desktop only) — soft float so the card feels alive */}
        <div className="pointer-events-none absolute right-4 top-0 hidden h-full md:block lg:right-8 xl:right-12">
          <div className="relative h-full w-[470px] lg:w-[600px] xl:w-[730px]">
            <Image
              src="/assets/mockup-ai-rotate.png"
              alt=""
              width={365}
              height={668}
              aria-hidden
              className="absolute left-0 top-6 w-[220px] animate-float-soft lg:top-8 lg:w-[300px] xl:w-[365px]"
            />
            <Image
              src="/assets/mockup-home-rotate.png"
              alt=""
              width={284}
              height={585}
              aria-hidden
              className="absolute right-2 top-16 w-[180px] animate-float-soft lg:right-4 lg:top-20 lg:w-[230px] xl:right-6 xl:top-[92px] xl:w-[284px]"
              style={{ animationDelay: "0.8s", animationDuration: "7s" }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 pb-5 pl-6 pr-8 pt-8 md:max-w-[60%] md:pb-7 md:pl-[56px] md:pr-[80px] md:pt-[48px] lg:max-w-[55%] lg:pb-9 lg:pl-[96px] lg:pr-[134px] lg:pt-[56px]">
          <h2 className="mb-5 text-[30px] font-bold leading-[1.2] text-white md:mb-6 md:text-[40px] lg:text-[48px]">
            まずは無料で
            <br />
            始めてみよう
          </h2>
          <p className="mb-5 text-[13px] font-bold leading-[1.9] text-white md:mb-6 md:text-[15px] lg:text-[17px] lg:leading-[32px]">
            一歩ずつ、みんなで進んでいこう。
            <br />
            あなたの挑戦を、SAMPO STUDYが応援します。
          </p>

          {/* Primary CTA button + App Store / Google Play badges */}
          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            <a
              href="https://sampo-web.vercel.app/login?next=/"
              className="inline-flex w-fit items-center justify-center rounded-full bg-white px-9 py-3.5 text-[16px] font-bold text-primary shadow-[0px_5px_20px_4px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0px_10px_28px_4px_rgba(0,0,0,0.18)] hover:brightness-105 md:px-10 md:py-4 md:text-[18px]"
            >
              Web版はこちら
            </a>
            <a
              href="https://apps.apple.com/jp/app/sampo-study/id6763615097"
              className="inline-flex transition-all duration-300 hover:-translate-y-0.5 hover:opacity-85"
              aria-label="App Storeからダウンロード"
            >
              <Image
                src="/assets/Download_on_the_App_Store_Badge_JP_RGB_blk_100317.svg"
                alt="App Storeからダウンロード"
                width={180}
                height={60}
                className="h-[52px] w-auto md:h-[56px] lg:h-[60px]"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.sampostudy.app&pli=1"
              className="inline-flex transition-all duration-300 hover:-translate-y-0.5 hover:opacity-85"
              aria-label="Google Playで手に入れよう"
            >
              <Image
                src="/assets/google play.svg"
                alt="Google Playで手に入れよう"
                width={200}
                height={60}
                className="h-[52px] w-auto md:h-[56px] lg:h-[60px]"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
