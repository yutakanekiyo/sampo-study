import Image from "next/image"
import Link from "next/link"

export function ParentsFooter() {
  return (
    <footer className="border-t border-[#dce5df] bg-white">
      <div className="mx-auto max-w-[1600px] px-6 py-8 md:px-[93px] md:py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Image
                src="/assets/logo-sampostudy.svg"
                alt="SAMPO STUDY"
                width={258}
                height={122}
                className="h-[28px] w-auto md:h-[32px]"
              />
              <span className="border-l border-border pl-3 text-[12px] font-bold text-[#5c7066]">
                保護者レポート
              </span>
            </div>
            <p className="text-[12px] font-bold text-[#5c7066]">
              ひとりじゃ続かない勉強を、アプリでもっと続けやすく。
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href="/"
              className="text-[13px] font-medium text-[#5c7066] transition-colors hover:text-foreground md:text-[14px]"
            >
              SAMPO STUDYについて
            </Link>
            <Link
              href="/legal/tokushoho"
              className="text-[13px] font-medium text-[#5c7066] transition-colors hover:text-foreground md:text-[14px]"
            >
              特定商取引法に基づく表記
            </Link>
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
          </nav>
        </div>

        <div className="mt-6 border-t border-[#eef2ee] pt-5 md:mt-8">
          <p className="text-[11px] text-[#5c7066] md:text-[12px]">
            運営: 株式会社三歩（オンライン自習室 SAMPO STUDY 開発・運営）
          </p>
          <p className="mt-1 text-[11px] text-[#5c7066] md:text-[12px]">
            &copy; {new Date().getFullYear()} 株式会社三歩（SAMPO Inc.） All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
