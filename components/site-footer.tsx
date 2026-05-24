import Image from "next/image"
import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-[#dce5df] bg-white">
      <div className="mx-auto max-w-[1600px] px-6 py-5 md:px-[93px] md:py-6">
        {/* Single row: logo + tagline left, X icon / privacy / terms right */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 md:gap-x-10">
          <Image
            src="/assets/logo-sampostudy.svg"
            alt="SAMPO STUDY ロゴ"
            width={258}
            height={122}
            className="h-[28px] w-auto md:h-[32px]"
          />
          <div className="flex flex-col text-[11px] font-bold leading-[1.4] text-primary md:text-[12px]">
            <p>今日の一歩、</p>
            <p>明日へ二歩、</p>
            <p>未来への三歩。</p>
          </div>
          <div className="ml-auto flex flex-wrap items-center gap-x-6 gap-y-3 md:gap-x-10">
            <a
              href="https://twitter.com/sampostudy"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-60"
              aria-label="X (Twitter)"
            >
              <Image
                src="/images/logo-x.png"
                alt="X"
                width={34}
                height={34}
                className="h-[24px] w-auto md:h-[26px]"
              />
            </a>
            <Link
              href="/legal/privacy"
              className="text-[13px] font-medium text-[#5c7066] transition-colors hover:text-foreground md:text-[14px]"
            >
              プライバシーポリシー
            </Link>
            <Link
              href="/legal/terms"
              className="text-[13px] font-medium text-[#5c7066] transition-colors hover:text-foreground md:text-[14px]"
            >
              利用規約
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <p className="mt-4 text-center text-[11px] text-[#5c7066] md:mt-5 md:text-[12px]">
          &copy; {new Date().getFullYear()} 株式会社三歩 All rights reserved.
        </p>
      </div>
    </footer>
  )
}
