import Image from "next/image"
import Link from "next/link"

export function LegalFooter() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 md:flex-row md:justify-between md:px-8">
        <div className="flex flex-col items-center gap-3 md:items-start">
          <Image
            src="/images/sampo-logo.jpg"
            alt="SAMPO STUDY ロゴ"
            width={180}
            height={60}
            className="h-12 w-auto rounded-lg"
          />
          <p className="text-xs text-muted-foreground">
            挑戦するすべての人に、公平な機会と正しい設計を。
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://twitter.com/sampostudy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
            aria-label="X (Twitter)"
          >
            X
          </a>
          <a
            href="https://discord.gg/NvG9Wng4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
            aria-label="Discord"
          >
            Discord
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-4xl border-t border-border px-4 pt-6 md:px-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <Link
              href="/legal/tokushoho"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              特定商取引法に基づく表記
            </Link>
            <Link
              href="/legal/privacy"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              プライバシーポリシー
            </Link>
            <Link
              href="/legal/terms"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              利用規約
            </Link>
          </div>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} 株式会社三歩 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
