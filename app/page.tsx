import Header from "@/components/header"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import ServiceSections from "@/components/ServiceSections"
import SocialConnect from "@/components/SocialConnect"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <ServiceSections />
      <SocialConnect />
      <Footer />
    </div>
  )
}

