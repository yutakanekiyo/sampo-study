"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const testimonials = [
  {
    icon: "/images/icon-male.png",
    summary: "家でも集中できるようになり、一人で抱え込む苦しさが減った。",
    body: [
      "受験では、1人での勉強時間が1番苦痛でした。",
      "学校や塾では周りに人がいるので、ある程度はできますが、家に帰ると一気に気が緩んでしまって集中できませんでした。",
      "SAMPOSTUDYに入って変わったのは、家にいながら勉強できるようになったことです。",
      "疲れた日でもまず入室だけしようとすると、気がついたら勉強を始めていて思った以上に集中できました。",
      "その積み重ねが習慣になっていき、1人で抱え込む苦しさが減ったのが自分にとっていちばん大きかったです。",
    ],
    author: "生徒（元高3）",
    result: "慶應大学合格",
  },
  {
    icon: "/images/icon-female.png",
    summary: "必要だったのは高額な授業より、努力を続けられる環境だった。",
    body: [
      "無料と聞いたときは、正直不安がありました。",
      "しかし、SAMPOSTUDYは毎週の保護者レポートそして、何より、本人の生活が変わっていったことで安心できました。家で机に向かう時間が増え、だらだら過ごす時間が減りました。",
      "成績も少しずつ上向き始め、「この子に必要だったのは高額な授業ではなく、努力を続けられる環境だったのかもしれない」と感じました。",
      "途中からは思い切って塾をやめ、SAMPOSTUDYを中心に切り替えましたが、結果として第一志望の大学に合格できました。",
    ],
    author: "保護者（高3・母）",
    result: null,
  },
]

export function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="testimonials" className="relative bg-primary py-[60px] md:py-[150px]">
      <div
        ref={ref}
        className={`relative z-10 pl-6 pr-6 md:pl-[150px] md:pr-[150px] transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Header */}
        <div className="mb-[36px] md:mb-[80px]">
          <p className="mb-4 text-[16px] font-bold text-white/70 md:text-[20px] lg:text-[26px]">
            Testimonials
          </p>
          <h2 className="text-[26px] font-bold leading-tight text-white md:text-[38px] lg:text-[56px]">
            利用者の声
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col justify-between rounded-[20px] bg-white/10 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/15 md:p-10"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Pictogram + Summary */}
              <div className="mb-6 flex items-center gap-4">
                <div className="h-32 w-32 shrink-0 overflow-hidden rounded-full bg-white/20">
                  <Image
                    src={t.icon}
                    alt=""
                    width={128}
                    height={128}
                    className="h-full w-full object-cover mix-blend-multiply"
                  />
                </div>
                <p className="text-[15px] font-bold leading-[1.7] text-white md:text-[17px] lg:text-[19px]">
                  {t.summary}
                </p>
              </div>

              {/* Body */}
              <div className="mb-8 flex flex-col gap-4 text-[12px] font-bold leading-[1.9] text-white/75 md:text-[13px] lg:text-[15px] lg:leading-[32px]">
                {t.body.map((paragraph, j) => (
                  <p key={j}>{paragraph}</p>
                ))}
              </div>

              <div className="border-t border-white/20 pt-6">
                <p className="text-[14px] font-bold text-white/80 md:text-[16px]">{t.author}</p>
                {t.result && (
                  <p className="mt-1 text-[16px] font-bold text-white md:text-[20px]">
                    {t.result}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
