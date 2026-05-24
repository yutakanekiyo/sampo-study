"use client"

import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative pt-[100px] pb-20 md:pt-[140px] md:pb-[120px]">
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12 lg:px-[80px]">
        {/* Main hero row */}
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:gap-8 lg:gap-16">
          {/* Left column */}
          <div className="flex w-full flex-col gap-8 md:w-[55%] md:max-w-[640px] md:gap-10">
            <h1 className="font-bold leading-[1.6] tracking-japanese text-primary text-[34px] md:text-[44px] md:leading-[1.55] lg:text-[60px] lg:leading-[1.5]">
              ひとりじゃ
              <br />
              続かない勉強を、
              <br />
              アプリでもっと
              <br />
              続けやすく。
            </h1>

            <p className="font-bold leading-[1.85] text-[#5a5a5a] text-[15px] md:text-[18px] lg:text-[20px]">
              オンライン自習室、学習記録、コミュニティ機能で、
              <br className="hidden md:inline" />
              毎日の勉強を続ける為の環境をひとつに。
              <br className="hidden md:inline" />
              完全無料の中高生向け学習アプリ。
            </p>

            {/* App Store / Google Play download badges */}
            <div className="flex flex-wrap items-center gap-3 md:gap-4">
              <a
                href="#cta"
                className="inline-flex transition-opacity hover:opacity-85"
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
                href="#cta"
                className="inline-flex transition-opacity hover:opacity-85"
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

            {/* 4 feature pill cards + secondary CTA (centered to the card group) */}
            <div className="flex w-fit flex-col items-center gap-6 md:gap-8">
              <div className="flex gap-2 md:gap-3">
                <FeatureCard iconSrc="/assets/0yen.svg" label="完全無料" />
                <FeatureCard iconSrc="/assets/24h.svg" label={<>24時間<br />いつでも</>} />
                <FeatureCard iconSrc="/assets/people.svg" label="仲間と学べる" />
                <FeatureCard iconSrc="/assets/graph.svg" label={<>学習記録で<br />成長</>} />
              </div>

              <a
                href="#features"
                className="group inline-flex items-center justify-center gap-8 rounded-full border-[3px] border-primary bg-white px-8 py-2.5 text-primary shadow-[0px_4px_14px_rgba(0,0,0,0.12)] transition-all hover:bg-primary/5 md:min-w-[210px] md:py-3 lg:min-w-[230px]"
              >
                <span className="text-[16px] font-bold md:text-[18px] lg:text-[20px]">機能を見る</span>
                <Image
                  src="/assets/arrow.svg"
                  alt=""
                  width={11}
                  height={22}
                  className="h-[18px] w-auto transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          {/* Right column: phone mockups */}
          <div className="relative mx-auto w-full max-w-[420px] md:mx-0 md:w-[45%] md:max-w-none">
            <div className="relative mx-auto aspect-[1/2.05] w-[260px] sm:w-[320px] md:w-[340px] lg:w-[400px]">
              <div className="absolute left-[-32%] top-[18%] hidden w-[78%] -rotate-[15deg] md:block">
                <Image
                  src="/assets/feature-03.png"
                  alt=""
                  width={333}
                  height={723}
                  className="h-auto w-full drop-shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
                />
              </div>
              <div className="absolute right-[-38%] top-[30%] hidden w-[80%] rotate-[28deg] md:block">
                <Image
                  src="/assets/feature-05.png"
                  alt=""
                  width={333}
                  height={723}
                  className="h-auto w-full drop-shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
                />
              </div>
              <div className="relative z-10">
                <Image
                  src="/assets/mockup-home.png"
                  alt="SAMPO STUDYアプリのホーム画面"
                  width={440}
                  height={900}
                  className="h-auto w-full drop-shadow-[0_24px_50px_rgba(0,0,0,0.22)]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Trust cards */}
        <div className="mt-20 flex flex-col items-center gap-6 md:mt-28 md:flex-row md:justify-center md:gap-[60px] lg:gap-[67px]">
          <div className="flex w-full max-w-[400px] flex-col items-center justify-center gap-6 rounded-[28px] bg-white px-8 py-10 shadow-[0px_4px_20px_rgba(0,0,0,0.08)] md:h-[280px] md:rounded-[32px] md:py-12">
            <div className="flex items-center justify-center gap-3 md:gap-4">
              <Image
                src="/assets/leaf-left.png"
                alt=""
                width={70}
                height={120}
                className="h-[80px] w-auto md:h-[100px]"
              />
              <div className="flex flex-col items-center gap-2 text-primary">
                <p className="text-[20px] font-bold md:text-[24px]">難関大合格者</p>
                <p className="text-[36px] font-bold leading-none md:text-[42px]">続出!</p>
              </div>
              <Image
                src="/assets/leaf-right.png"
                alt=""
                width={70}
                height={120}
                className="h-[80px] w-auto md:h-[100px]"
              />
            </div>
            <p className="text-[15px] font-bold text-[#5a5a5a] md:text-[18px]">
              東大・京大・早慶上智など
            </p>
          </div>

          <div className="flex w-full max-w-[400px] flex-col items-center justify-center gap-6 rounded-[28px] bg-white px-8 py-10 shadow-[0px_4px_20px_rgba(0,0,0,0.08)] md:h-[280px] md:rounded-[32px] md:py-12">
            <div className="flex flex-col items-center gap-3">
              <Image
                src="/assets/hensachi-up.png"
                alt=""
                width={84}
                height={64}
                className="h-[48px] w-auto md:h-[56px]"
              />
              <p className="text-[22px] font-bold text-primary md:text-[26px]">偏差値</p>
              <p className="text-[36px] font-bold leading-none text-primary md:text-[42px]">
                最大 15 UP!
              </p>
            </div>
            <p className="text-[15px] font-bold text-[#5a5a5a] md:text-[18px]">
              多くのユーザーが成績UPを実感
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  iconSrc,
  label,
}: {
  iconSrc: string
  label: React.ReactNode
}) {
  return (
    <div className="flex aspect-[126/150] w-[78px] flex-col items-center justify-center gap-1.5 rounded-xl bg-white px-1.5 shadow-[0px_4px_20px_rgba(0,0,0,0.08)] md:w-[96px] md:gap-2 md:rounded-2xl">
      <div className="flex h-7 items-center justify-center md:h-9">
        <Image src={iconSrc} alt="" width={36} height={36} className="h-full w-auto" />
      </div>
      <p className="text-center text-[10px] font-bold leading-tight text-primary md:text-[12px]">
        {label}
      </p>
    </div>
  )
}
