"use client"

import Image from "next/image"
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
    question: "アプリの操作が不安なのですが、初めてでも大丈夫ですか？",
    answer:
      "大丈夫です。利用開始時の案内に沿って進めば、すぐに使い始められます。わからないことがあれば、アプリ内のサポートチャンネルでいつでもご質問いただけます。",
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
  {
    question: "どこからお金を得て、運営しているんですか？",
    answer:
      "広告費という名目で、企業様からお金をいただいて運営しております。",
  },
]

export function FAQSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="faq"
      className="relative overflow-hidden pb-[60px] pt-[30px] md:pb-36 md:pt-20"
    >
      {/* Decorative background */}
      <Image
        src="/assets/5.svg"
        alt=""
        width={244}
        height={267}
        aria-hidden
        className="pointer-events-none absolute left-0 top-40 z-0 w-[140px] md:left-8 md:top-56 md:w-[200px] lg:w-[244px]"
      />
      <Image
        src="/assets/8.svg"
        alt=""
        width={465}
        height={357}
        aria-hidden
        className="pointer-events-none absolute -left-16 top-80 z-0 w-[280px] md:-left-10 md:top-[420px] md:w-[420px] lg:w-[500px]"
      />
      <Image
        src="/assets/9.svg"
        alt=""
        width={221}
        height={410}
        aria-hidden
        className="pointer-events-none absolute -right-8 top-72 z-0 w-[160px] md:-right-4 md:top-72 md:w-[200px] lg:w-[240px]"
      />

      <div
        ref={ref}
        className={`relative z-10 mx-auto max-w-4xl px-4 transition-all duration-700 md:px-8 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="mb-[40px] text-center md:mb-[60px] lg:mb-[80px]">
          <p className="mb-3 text-[14px] font-bold tracking-widest text-primary md:text-[16px] lg:text-[18px]">
            FAQ
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
              よくある質問
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

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-[32px] border border-border bg-background px-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] md:rounded-[34px]"
            >
              <AccordionTrigger className="py-5 text-left text-base font-bold text-[#5a5a5a] hover:no-underline md:text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-base font-bold leading-loose text-primary md:text-lg">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
