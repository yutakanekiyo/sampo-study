"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function MessageSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="message" className="relative bg-secondary py-[60px] md:py-[150px]">
      <div
        ref={ref}
        className={`relative z-10 pl-6 pr-6 md:pl-[150px] md:pr-[150px] transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Header */}
        <div className="mb-[36px] md:mb-[80px]">
          <p className="mb-4 text-[16px] font-bold text-primary md:text-[20px] lg:text-[26px]">
            Message
          </p>
          <h2 className="text-[26px] font-bold leading-tight text-primary md:text-[38px] lg:text-[56px]">
            代表メッセージ
          </h2>
        </div>

        {/* Content: photo left + text right */}
        <div className="flex flex-col items-start gap-10 md:flex-row md:items-stretch md:gap-16 lg:gap-20">
          {/* Photo */}
          <div className="w-full flex-shrink-0 md:w-[300px] lg:w-[380px]">
            <img
              src="/images/message-photo.png"
              alt="代表取締役CEO 伊藤翔馬"
              className="h-full w-full rounded-[40px] object-cover lg:rounded-[60px]"
            />
          </div>

          {/* Text */}
          <div className="flex-1">
            <div className="mb-12 flex flex-col gap-4 text-[13px] font-bold leading-[1.9] text-primary md:text-[15px] lg:text-[17px] lg:leading-[34px]">
              <p>ご覧いただきありがとうございます。SAMPO STUDY代表の伊藤翔馬です。</p>
              <p>「天は人の上に人を造らず」</p>
              <p>この言葉をご存知でしょうか。これは慶應義塾大学の創設者、福澤諭吉氏の言葉です。本来、努力する人に等しく機会が開かれる社会を示すはずの言葉ですが、いまは生まれた環境や情報の差が、進路や挑戦の差になりやすくなっています。</p>
              <p>努力しているのに、何をすれば伸びるのか分からず迷ってしまう。続けたいのに、場所やきっかけがなく止まってしまう。そんな瞬間を減らしたいと思い、私たちはこの場をつくりました。</p>
              <p>私たちが提供するのは、ただ聞くだけの授業ではありません。学習の場を開き、やるべきことを整理し、日々の積み上げを記録し、つまずいたら立て直せる仕組みを用意する「学習のインフラ」です。気合いや根性ではなく、構造と運用で前に進める状態を。孤独な努力ではなく、仲間とともに継続できる環境を。</p>
              <p>そして、誰もが当たり前に使えるように、SAMPO STUDYは無料で提供しています。教育の機会が最初から環境で左右される社会を変えたいからです。私たちは挑戦する全ての人のスタートラインを整え、努力が報われる道を造ります。</p>
            </div>

            {/* Author */}
            <div>
              <p className="mb-2 text-[16px] font-bold text-primary md:text-[20px] lg:text-[26px]">
                株式会社三歩　代表取締役CEO
              </p>
              <p className="text-[28px] font-bold text-primary md:text-[36px] lg:text-[46px]">
                伊藤 翔馬
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
