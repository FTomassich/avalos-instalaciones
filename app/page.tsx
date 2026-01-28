import { HeroSection } from "@/components/hero-section"
import { SpecialtiesSection } from "@/components/specialties-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { ValuesSection } from "@/components/values-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import  PlaylistCarousel from "@/components/PlaylistCarousel"
import { BlogSection } from "@/components/blog-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { WhatsappButton } from "@/components/WhatsappButton"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <WhatsappButton />
        <HeroSection />
        <SpecialtiesSection />
        <ServicesSection />
        <AboutSection />
        <PlaylistCarousel/>
        <ValuesSection />
        <WhyChooseSection /> 
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
