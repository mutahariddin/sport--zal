import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Amenities from "@/components/amenities"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <Amenities />
      <Contact />
      <Footer />
    </main>
  )
}
