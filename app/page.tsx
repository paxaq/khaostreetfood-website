import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedDishes } from "@/components/featured-dishes"
import { AboutSection } from "@/components/about-section"
import { ReservationSection } from "@/components/reservation-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturedDishes />
      <AboutSection />
      <ReservationSection />
      <Footer />
    </main>
  )
}
