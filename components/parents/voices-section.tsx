"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { SectionHeading } from "./section-heading"

const voices = [
  {
    body: "「勉強しなさい」を言う回数が、明らかに減りました。夜に2時間やっていると分かってからは、私のほうから先に「おつかれさま」と言えるように。機嫌をうかがいながら探りを入れる、あの感じがなくなったのがいちばんうれしいです。",
    attr: "例：高2男子の保護者の場合",
  },
  {
    body: "正直、監視みたいで嫌がられるかなと思っていました。でも本人が「記録が残るほうがやる気が出る」と言って自分で承認してくれて。聞かなくても分かる安心感は、想像していた以上でした。",
    attr: "例：中3男子の保護者の場合",
  },
  {
    body: "単身赴任中で、息子の様子は妻からの又聞きでした。いまは週に一度のレポートが楽しみで、3週続いていたときには久しぶりに自分から電話をかけて「続いてるんだってな」と話せました。成績より先に、こういう会話がしたかったんだと気づきました。",
    attr: "例：高3男子の保護者の場合",
  },
]

export function VoicesSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="voices" className="py-16 md:py-20 lg:py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-[1120px] px-6 transition-all duration-700 md:px-12 lg:px-[80px] ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <SectionHeading
          eyebrow="Usage Image"
          title={
            <>
              導入後の毎日は、
              <br />
              こんなふうに変わるかもしれません
            </>
          }
          className="mb-[40px] md:mb-[60px] lg:mb-[80px]"
        />
        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {voices.map((v, i) => (
            <div
              key={i}
              className="relative flex flex-col rounded-3xl bg-[#FCF7F1] p-7 md:p-8"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.6s ease ${i * 90}ms, transform 0.6s ease ${i * 90}ms`,
              }}
            >
              <span className="mb-2 font-futura text-[44px] font-black leading-none text-[#A5BCB7]/50" aria-hidden>
                &ldquo;
              </span>
              <p className="flex-1 font-bold leading-[1.95] text-[#5a5a5a] text-[13px] md:text-[14px]">
                {v.body}
              </p>
              <span className="mt-5 text-[12px] font-bold text-primary">{v.attr}</span>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-[12px] font-medium text-[#8a968d]">
          ※ 利用イメージを伝えるための例であり、特定の利用者の体験談ではありません。
        </p>
      </div>
    </section>
  )
}
