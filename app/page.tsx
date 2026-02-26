import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { FeaturesSection } from "@/components/features-section"
import { MessageSection } from "@/components/message-section"
import { FAQSection } from "@/components/faq-section"
import { FooterCTASection } from "@/components/footer-cta-section"

export default function Page() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <MessageSection />
      <FAQSection />
      <FooterCTASection />
    </main>
  )
}
