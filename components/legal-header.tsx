import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export function LegalHeader() {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3 md:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/sampo-logo.jpg"
            alt="SAMPO STUDY ロゴ"
            width={180}
            height={60}
            className="h-10 w-auto rounded-lg md:h-12"
            priority
          />
        </Link>
        <Link
          href="/"
          className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          トップページに戻る
        </Link>
      </div>
    </header>
  )
}
