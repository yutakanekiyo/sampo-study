import Image from "next/image"
import type { ReactNode } from "react"

/**
 * 保護者ページ共通のセクション見出し。メインサイト（FAQ・利用者の声）と同じ型：
 * 英語アイブロウ → ドット飾り（dots1/dots2）で挟んだ中央寄せ見出し → 任意のリード。
 */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  className = "",
}: {
  eyebrow: string
  title: ReactNode
  lead?: ReactNode
  className?: string
}) {
  return (
    <div className={`text-center ${className}`}>
      <p className="mb-3 text-[14px] font-bold tracking-widest text-primary md:text-[16px] lg:text-[18px]">
        {eyebrow}
      </p>
      <div className="flex items-center justify-center md:gap-8 lg:gap-12">
        {/* ドット飾りはmd+のみ。モバイルでは横幅を奪い長い見出しが不自然に折り返すため非表示。 */}
        <Image
          src="/assets/dots1.svg"
          alt=""
          width={80}
          height={80}
          aria-hidden
          className="hidden w-auto shrink-0 md:block md:h-[20px] lg:h-[26px]"
        />
        <h2 className="text-[24px] font-bold leading-[1.4] text-primary md:text-[34px] lg:text-[44px] lg:leading-[1.35]">
          {title}
        </h2>
        <Image
          src="/assets/dots2.svg"
          alt=""
          width={80}
          height={80}
          aria-hidden
          className="hidden w-auto shrink-0 md:block md:h-[20px] lg:h-[26px]"
        />
      </div>
      {lead && (
        <p className="mx-auto mt-6 max-w-[760px] font-bold leading-[1.9] text-[#5a5a5a] text-[14px] md:text-[16px] lg:text-[17px]">
          {lead}
        </p>
      )}
    </div>
  )
}
