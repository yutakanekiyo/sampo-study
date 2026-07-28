"use client"

import Image from "next/image"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

type Testimonial = {
  icon: string
  summary: string
  body: string[]
  author: string
  result: string | null
  link?: { href: string; label: string }
}

const testimonials: Testimonial[] = [
  {
    icon: "/assets/user1.png",
    summary: "家でも集中できるようになり、一人で抱え込む苦しさが減った。",
    body: [
      "受験では、1人での勉強時間が1番苦痛でした。",
      "学校や塾では周りに人がいるので、ある程度はできますが、家に帰ると一気に気が緩んでしまって集中できませんでした。",
      "SAMPOSTUDYに入って変わったのは、家にいながら勉強できるようになったことです。",
      "疲れた日でもまず入室だけしようとすると、気がついたら勉強を始めていて思った以上に集中できました。",
      "その積み重ねが習慣になっていき、1人で抱え込む苦しさが減ったのが自分にとっていちばん大きかったです。",
    ],
    author: "生徒（元高校3年生）",
    result: "慶應大学合格",
  },
  {
    icon: "/assets/user2.png",
    summary: "必要だったのは高額な授業より、努力を続けられる環境だった。",
    body: [
      "無料と聞いたときは、正直不安がありました。",
      "しかし、SAMPOSTUDYは毎週の保護者レポートそして、何より、本人の生活が変わっていったことで安心できました。家で机に向かう時間が増え、だらだら過ごす時間が減りました。",
      "成績も少しずつ上向き始め、「この子に必要だったのは高額な授業ではなく、努力を続けられる環境だったのかもしれない」と感じました。",
      "途中からは思い切って塾をやめ、SAMPOSTUDYを中心に切り替えましたが、結果として第一志望の大学に合格できました。",
    ],
    author: "保護者（高3・母）",
    result: null,
    link: { href: "/parents", label: "保護者連携の詳細はこちら" },
  },
]

export function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      id="testimonials"
      ref={ref}
      className={`relative px-6 pb-7 pt-2 transition-all duration-700 md:px-12 md:pb-9 md:pt-4 lg:px-[80px] lg:pb-[64px] lg:pt-6 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <div className="mx-auto max-w-[1400px]">
            {/* Header — same pattern as Introduction / Free Features */}
            <div className="mb-[40px] text-center md:mb-[60px] lg:mb-[80px]">
              <p className="mb-3 text-[14px] font-bold tracking-widest text-primary md:text-[16px] lg:text-[18px]">
                Testimonials
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
                  利用者の声
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

            {/* Cards */}
            <div className="grid gap-6 md:grid-cols-2 md:gap-8">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="flex flex-col rounded-[20px] bg-white p-6 shadow-[0px_4px_24px_rgba(0,0,0,0.06)] transition-all duration-300 md:p-8 lg:p-10"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* Icon + Tags + Summary */}
                  <div className="mb-6 flex items-start gap-4">
                    <div className="h-24 w-24 shrink-0 overflow-hidden rounded-full bg-[#F9F5EC] md:h-28 md:w-28 lg:h-32 lg:w-32">
                      <Image
                        src={t.icon}
                        alt=""
                        width={256}
                        height={256}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-3">
                      {/* Tags */}
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold text-primary md:px-4 md:py-1.5 md:text-[12px] lg:text-[13px]">
                          {t.author}
                        </span>
                        {t.result && (
                          <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold text-primary md:px-4 md:py-1.5 md:text-[12px] lg:text-[13px]">
                            {t.result}
                          </span>
                        )}
                      </div>
                      <p className="text-[17px] font-bold leading-[1.6] text-primary md:text-[19px] lg:text-[22px]">
                        {t.summary}
                      </p>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="flex flex-col gap-2 text-[12px] font-bold leading-[1.95] text-[#5a5a5a] md:gap-2.5 md:text-[13px] lg:gap-3 lg:text-[15px] lg:leading-[1.95]">
                    {t.body.map((paragraph, j) => (
                      <p key={j}>{paragraph}</p>
                    ))}
                  </div>

                  {t.link && (
                    <Link
                      href={t.link.href}
                      className="group mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-5 py-2.5 text-[13px] font-bold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-white hover:shadow-[0px_8px_20px_rgba(44,100,87,0.2)] md:px-6 md:py-3 md:text-[14px]"
                    >
                      {t.link.label}
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
      </div>
    </div>
  )
}
