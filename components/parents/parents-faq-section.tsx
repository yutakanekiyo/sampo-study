"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SectionHeading } from "./section-heading"

const faqs = [
  {
    q: "子どもに知られずにレポートを受け取ることはできますか？",
    a: "いいえ、できません。レポートはお子さまがアプリ上で連携を承認してはじめて届く仕組みです。SAMPO STUDYは「見張る」ためではなく「安心して見守る」ためのサービスなので、はじめる前にお子さまと一言相談していただくことをおすすめします。",
  },
  {
    q: "子どもが嫌がりそうで心配です",
    a: "無理にはじめる必要はありません。「干渉しないために使いたい」という気持ちを、まず本人に伝えてみてください。問い詰められるより、記録で伝わるほうが気が楽だと感じるお子さまもいます。同意が前提だからこそ、健全に続けられる仕組みです。",
  },
  {
    q: "テストの点数や成績も分かりますか？",
    a: "いいえ。レポートに載るのは、学習時間・学習日数・時間帯の傾向・継続状況など、アプリが自動で記録できる学習データの要約のみです。点数や偏差値は記録していません。結果ではなく、「続ける過程」をあたたかく見守るためのレポートです。",
  },
  {
    q: "子どもがアプリを使わなかった週はどうなりますか？",
    a: "記録が少なかったという事実が、そのまま届きます。数字が少ない週は責める材料ではなく、「少し疲れているのかな」と気づくきっかけとしてお使いください。学習量に波があるのは自然なことで、長い目で傾向を見られるのがこの仕組みの良さです。",
  },
  {
    q: "子どもがまだSAMPO STUDYを使っていなくても申し込めますか？",
    a: "はい。まずお子さまに無料のSAMPO STUDYをはじめていただき、その後レポート連携を設定する流れです。アプリは無料なので、親子で一緒に試しながらはじめられます。",
  },
  {
    q: "子ども側に利用料はかかりますか？",
    a: "かかりません。オンライン自習室やポモドーロタイマー、仲間とのコミュニティなど、生徒向けの機能はすべて無料です。有料なのは保護者向けレポート機能のみで、解約した後も、お子さまはアプリをそのまま無料で使い続けられます。",
  },
  {
    q: "支払いは年間一括だけですか？合わなかったら？",
    a: "お支払いは年間一括払いのみです（ベーシック＝年額14,400円／サポート付き＝年額60,000円、いずれも税込）。ただし30日間の返金保証つきで、ご利用開始から30日以内にご連絡いただければ、理由を問わず全額返金します。じっくりお試しいただいたうえで、ご判断ください。",
  },
  {
    q: "学習データはどのように扱われますか？",
    a: "レポートに利用するのは学習時間などの記録データのみで、プライバシーポリシーに基づき適切に管理します。自習室のカメラ映像が保護者に共有されることはありません。",
  },
]

export function ParentsFaqSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="faq" className="py-16 md:py-20 lg:py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-4xl px-6 transition-all duration-700 md:px-8 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <SectionHeading
          eyebrow="FAQ"
          title="よくあるご質問"
          className="mb-[40px] md:mb-[60px] lg:mb-[80px]"
        />
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-[28px] border border-border bg-background px-7 shadow-[0_4px_24px_rgba(0,0,0,0.06)] md:rounded-[32px] md:px-8"
            >
              <AccordionTrigger className="py-5 text-left text-[15px] font-bold text-primary hover:no-underline md:text-base">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-[14px] font-bold leading-loose text-[#5a5a5a] md:text-[15px]">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
