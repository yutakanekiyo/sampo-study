"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "本当に無料で使えますか？",
    answer:
      "はい！ オンライン自習室、ポモドーロチャンネル、学習記録、質問・雑談チャンネル、すべて完全無料です。クレジットカードの登録も不要です。",
  },
  {
    question: "Discordを使ったことがなくても大丈夫ですか？",
    answer:
      "大丈夫です。参加後の案内に沿って進めば、すぐに使い始められます。わからないことがあれば、サポートチャンネルでいつでもご質問いただけます。",
  },
  {
    question: "カメラはオンにしないといけませんか？",
    answer:
      "カメラON/OFFどちらでも参加できます。自分に合ったスタイルで利用してください。",
  },
  {
    question: "高校生でも使えますか？",
    answer:
      "はい。大学受験生（高2〜高3、既卒含む）を中心に、幅広い学年の方が利用しています。",
  },
]

export function FAQSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="faq" className="bg-secondary py-[60px] md:py-36">
      <div
        ref={ref}
        className={`mx-auto max-w-3xl px-4 transition-all duration-700 md:px-8 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="mb-10 text-center md:mb-20">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">
            FAQ
          </p>
          <h2 className="mb-6 font-display text-3xl font-black text-primary md:text-5xl">
            よくある質問
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-2xl border border-border bg-background px-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
            >
              <AccordionTrigger className="py-6 text-left text-base font-bold text-foreground hover:no-underline md:text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-sm leading-loose text-muted-foreground md:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
