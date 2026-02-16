import type { Metadata } from "next"
import { LegalHeader } from "@/components/legal-header"
import { LegalFooter } from "@/components/legal-footer"

export const metadata: Metadata = {
  title: "プライバシーポリシー | SAMPO STUDY",
  description:
    "株式会社三歩が提供するSAMPO STUDYのプライバシーポリシーです。",
}

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <LegalHeader />

      <main className="flex-1 py-12 md:py-16">
        <article className="mx-auto max-w-3xl px-4 md:px-8">
          <h1 className="mb-8 text-2xl font-bold text-primary md:text-3xl">
            プライバシーポリシー
          </h1>

          <p className="mb-8 leading-relaxed text-foreground/80">
            株式会社三歩（以下「当社」）は、個人情報の重要性を認識し、以下の方針に基づいて適切な管理と保護に努めます。当社が提供するサービスをご利用いただく際は、本ポリシーに同意のうえご利用ください。
          </p>

          <section className="mb-8">
            <h2 className="mb-3 text-lg font-bold text-primary">
              1. 個人情報の利用目的
            </h2>
            <p className="leading-relaxed text-foreground/80">
              当社は、学習プログラムの提供、学習サポート、サービス品質向上、重要なお知らせの配信、各種問い合わせへの対応のために個人情報を利用します。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-3 text-lg font-bold text-primary">
              2. 個人情報の第三者提供
            </h2>
            <p className="leading-relaxed text-foreground/80">
              法令に基づく場合を除き、事前にご本人の同意を得ることなく第三者へ個人情報を提供することはありません。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-3 text-lg font-bold text-primary">
              3. 個人情報の安全管理
            </h2>
            <p className="leading-relaxed text-foreground/80">
              個人情報への不正アクセス、紛失、破壊、改ざんおよび漏洩を防ぐため、適切な安全対策を実施します。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-3 text-lg font-bold text-primary">
              個人情報の保存期間
            </h2>
            <p className="mb-3 leading-relaxed text-foreground/80">
              当社は、以下の期間個人情報を保管します。
            </p>
            <ul className="list-disc space-y-1.5 pl-6 leading-relaxed text-foreground/80">
              <li>
                基本的な登録情報（氏名、連絡先、学習履歴等）: 退会後3年間
              </li>
              <li>決済関連情報: 税法に基づき7年間</li>
              <li>問い合わせ履歴: 対応完了後1年間</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-3 text-lg font-bold text-primary">
              4. クッキー（Cookie）等のトラッキング技術について
            </h2>
            <p className="leading-relaxed text-foreground/80">
              ウェブサイトの利用状況を把握し、サービス改善に役立てるためにCookie等のトラッキング技術を使用する場合があります。ブラウザの設定によりCookie等のトラッキング技術の受け入れを拒否することも可能です。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-3 text-lg font-bold text-primary">
              5. 個人情報の開示・訂正・削除
            </h2>
            <p className="leading-relaxed text-foreground/80">
              ご本人からの請求に応じて、保有する個人情報（氏名、連絡先、学習履歴、決済情報）の開示・訂正・削除を適切に対応します。窓口は下記お問い合わせ先をご利用ください。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-3 text-lg font-bold text-primary">
              6. プライバシーポリシーの改定
            </h2>
            <p className="leading-relaxed text-foreground/80">
              法令の改正やサービス内容の変更に応じて、本ポリシーの内容を予告なく改定する場合があります。重要な変更がある場合は、ウェブサイト上でお知らせします。
            </p>
          </section>

          <section className="rounded-lg border border-border bg-muted/50 p-6">
            <h2 className="mb-3 text-base font-bold text-foreground">
              お問い合わせ先
            </h2>
            <div className="space-y-1 text-sm leading-relaxed text-foreground/80">
              <p>株式会社三歩</p>
              <p>
                メール:{" "}
                <a
                  href="mailto:info@sampo-edu.com"
                  className="text-primary underline underline-offset-2 hover:opacity-80"
                >
                  info@sampo-edu.com
                </a>
              </p>
              <p>電話: 090-2824-2111（平日10:00〜18:00）</p>
            </div>
          </section>
        </article>
      </main>

      <LegalFooter />
    </div>
  )
}
