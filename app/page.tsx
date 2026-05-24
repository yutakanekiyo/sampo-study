import { Header } from "@/components/header"
import { HeroParallaxBg } from "@/components/hero-parallax-bg"
import { HeroSection } from "@/components/hero-section"
import { VideoSection } from "@/components/video-section"
import { AboutSection } from "@/components/about-section"
import { FeaturesSection } from "@/components/features-section"
import { MessageSection } from "@/components/message-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { FAQSection } from "@/components/faq-section"
import { FooterCTASection } from "@/components/footer-cta-section"

export default function Page() {
  return (
    <main>
      <Header />
      <HeroParallaxBg>
        <HeroSection />
        <VideoSection />
        <AboutSection />
      </HeroParallaxBg>
      <FeaturesSection />
      <CTASection />
      <section className="relative pb-[20px] pt-[16px] md:pb-[40px] md:pt-[28px] lg:pb-[60px] lg:pt-[40px]">
        <div className="px-3 md:px-4 lg:px-6">
          <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-[#FCF7F1] via-[#FCF7F1] to-[#F4F5EE]/0 md:rounded-[56px] lg:rounded-[84px]">
            <MessageSection />
            <TestimonialsSection />
          </div>
        </div>
      </section>
      <FAQSection />
      <FooterCTASection />
    </main>
  )
}
