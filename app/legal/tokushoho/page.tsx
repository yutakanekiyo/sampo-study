import type { Metadata } from "next"
import { LegalHeader } from "@/components/legal-header"
import { LegalFooter } from "@/components/legal-footer"

export const metadata: Metadata = {
  title: "特定商取引法に基づく表示 | SAMPO STUDY",
  description:
    "株式会社三歩が提供するSAMPO STUDYの特定商取引法に基づく表示です。",
}

const items = [
  { label: "事業者", value: "株式会社三歩" },
  { label: "運営責任者", value: "伊藤 翔馬" },
  {
    label: "所在地",
    value: "〒102-0083 東京都千代田区麹町6-2-1 麹町サイトビル6F",
  },
]

export default function TokushohoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <LegalHeader />

      <main className="flex-1 py-12 md:py-16">
        <article className="mx-auto max-w-3xl px-4 md:px-8">
          <h1 className="mb-8 text-2xl font-bold text-primary md:text-3xl">
            特定商取引法に基づく表示
          </h1>

          <p className="mb-8 leading-relaxed text-foreground/80">
            本ページでは、株式会社三歩（以下「当社」）が提供するサービスに関し、特定商取引法に基づく表示を記載しています。ご利用をご検討中の方は事前にご確認ください。
          </p>

          <div className="overflow-hidden rounded-lg border border-border">
            <table className="w-full">
              <tbody>
                {items.map((item) => (
                  <tr key={item.label} className="border-b border-border last:border-b-0">
                    <th className="bg-muted/50 px-4 py-4 text-left text-sm font-semibold text-foreground md:w-48 md:px-6">
                      {item.label}
                    </th>
                    <td className="px-4 py-4 text-sm leading-relaxed text-foreground/80 md:px-6">
                      {item.value}
                    </td>
                  </tr>
                ))}
                <tr className="border-b border-border">
                  <th className="bg-muted/50 px-4 py-4 text-left text-sm font-semibold text-foreground md:w-48 md:px-6">
                    連絡先
                  </th>
                  <td className="px-4 py-4 text-sm leading-relaxed text-foreground/80 md:px-6">
                    <p>
                      メール:{" "}
                      <a
                        href="mailto:info@sampo-edu.com"
                        className="text-primary underline underline-offset-2 hover:opacity-80"
                      >
                        info@sampo-edu.com
                      </a>
                    </p>
                    <p className="mt-1">
                      電話: 090-2824-2111（平日10:00〜18:00）
                    </p>
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <th className="bg-muted/50 px-4 py-4 text-left text-sm font-semibold text-foreground md:w-48 md:px-6">
                    販売価格
                  </th>
                  <td className="px-4 py-4 text-sm leading-relaxed text-foreground/80 md:px-6">
                    各サービスページに税込価格を記載しています。お支払い時に別途手数料が発生する場合は、その旨を明記いたします。
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <th className="bg-muted/50 px-4 py-4 text-left text-sm font-semibold text-foreground md:w-48 md:px-6">
                    お支払い方法
                  </th>
                  <td className="px-4 py-4 text-sm leading-relaxed text-foreground/80 md:px-6">
                    クレジットカード決済、銀行振込、コンビニ決済に対応しています。詳細はお申し込み時にご案内いたします。
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <th className="bg-muted/50 px-4 py-4 text-left text-sm font-semibold text-foreground md:w-48 md:px-6">
                    役務の提供時期
                  </th>
                  <td className="px-4 py-4 text-sm leading-relaxed text-foreground/80 md:px-6">
                    お申し込み後、初回ガイダンスの実施日をメールにてお知らせし、ガイダンス完了後7営業日以内にサービスを提供します。
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <th className="bg-muted/50 px-4 py-4 text-left text-sm font-semibold text-foreground md:w-48 md:px-6">
                    返品・キャンセル
                  </th>
                  <td className="px-4 py-4 text-sm leading-relaxed text-foreground/80 md:px-6">
                    サービスの性質上、提供開始後のキャンセルは原則お受けできません。ただし、7日間返金保証の範囲内であれば所定の条件に基づき返金対応いたします。
                  </td>
                </tr>
                <tr>
                  <th className="bg-muted/50 px-4 py-4 text-left text-sm font-semibold text-foreground md:w-48 md:px-6">
                    動作環境
                  </th>
                  <td className="px-4 py-4 text-sm leading-relaxed text-foreground/80 md:px-6">
                    オンライン学習サービスはPC・タブレット・スマートフォンおよびDiscordが動作する環境と、安定したインターネット接続が必要です。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>
      </main>

      <LegalFooter />
    </div>
  )
}
