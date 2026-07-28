import type { Metadata } from "next"
import { ParentsHeader } from "@/components/parents/parents-header"
import { ParentsHero } from "@/components/parents/parents-hero"
import { TrustStrip } from "@/components/parents/trust-strip"
import { PainsSection } from "@/components/parents/pains-section"
import { BridgeSection } from "@/components/parents/bridge-section"
import { ReportSection } from "@/components/parents/report-section"
import { AssuranceSection } from "@/components/parents/assurance-section"
import { VoicesSection } from "@/components/parents/voices-section"
import { FlowSection } from "@/components/parents/flow-section"
import { PricingSection } from "@/components/parents/pricing-section"
import { ParentsFaqSection } from "@/components/parents/parents-faq-section"
import { ClosingSection } from "@/components/parents/closing-section"
import { StickyCta } from "@/components/parents/sticky-cta"
import { ParentsFooter } from "@/components/parents/parents-footer"

export const metadata: Metadata = {
  title: "SAMPO STUDY 保護者レポート | 聞かなくても、ちゃんと分かる。",
  description:
    "SAMPO STUDYの保護者レポートなら、お子さまの学習時間・学習日数・継続の様子が毎週届く。「勉強してるの？」と聞かなくても、ちゃんと分かる安心を。月あたり1,200円〜の年間プラン、30日間返金保証つき。お子さまのアプリ利用は無料。",
}

export default function ParentsPage() {
  return (
    <main>
      <ParentsHeader />
      <ParentsHero />
      <TrustStrip />
      <PainsSection />
      <BridgeSection />
      <ReportSection />
      <AssuranceSection />
      <VoicesSection />
      <FlowSection />
      <PricingSection />
      <ParentsFaqSection />
      <ClosingSection />
      <ParentsFooter />
      <StickyCta />
    </main>
  )
}
