import { Home, AudioWaveformIcon as Waveform, BarChart3, Camera, Phone, Network } from "lucide-react"
import ServiceCard from "./ServiceCard"

const Services = () => {
  const services = [
    {
      title: "Home Automation",
      description:
        "Transform your home with seamless control systems that connect lighting, climate, security, and entertainment. Our smart home solutions provide convenience, energy efficiency, and peace of mind with intuitive interfaces you can manage from anywhere.",
      icon: Home,
    },
    {
      title: "Home Theatre Audio/Video",
      description:
        "Experience cinema-quality entertainment in the comfort of your home. We design and install custom audio/video systems with premium sound, stunning visuals, and simple controls that turn any space into an immersive entertainment environment.",
      icon: Waveform,
    },
    {
      title: "Networking",
      description:
        "Power your digital life with robust, secure networking solutions. We deliver high-performance wired and wireless networks that ensure reliable connectivity for all your devices, eliminating dead zones and supporting your growing smart home ecosystem.",
      icon: BarChart3,
    },
    {
      title: "Surveillance",
      description:
        "Protect what matters most with advanced security camera systems. Our surveillance solutions offer crystal-clear video, remote monitoring, motion detection, and smart alerts, giving you complete visibility and control over your property's security.",
      icon: Camera,
    },
    {
      title: "Phone Systems",
      description:
        "Stay connected with modern, reliable communication systems for your home or business. Our phone solutions integrate with your existing technology for crystal-clear calls, advanced features, and flexibility that traditional systems can't match.",
      icon: Phone,
    },
    {
      title: "Structure Wiring",
      description:
        "Build a solid foundation for all your technology with professional structured wiring. Our expert installation ensures your home is future-proofed with organized, high-quality cabling that supports all your audio, video, data, and security needs.",
      icon: Network,
    },
  ]

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-[#6DD3E1] text-4xl md:text-5xl font-bold mb-16">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

