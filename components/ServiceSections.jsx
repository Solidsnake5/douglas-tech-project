import ServiceSection from "./ServiceSection"

const ServiceSections = () => {
  const serviceDetails = [
    {
      title: "Home Automation",
      description:
        "Experience the future of living with our cutting-edge home automation solutions. Control lighting, climate, security, and entertainment systems with a single touch or voice command. Our smart home technology seamlessly integrates with your lifestyle, offering unprecedented convenience and energy efficiency.",
      imageSrc: "/images/home-automation.jpg",
      learnMoreUrl: "/services/home-automation",
    },
    {
      title: "Home Theatre Audio/Video",
      description:
        "Immerse yourself in spectacular entertainment with our custom home theatre solutions. We design and install premium audio and video systems that deliver cinema-quality experiences in the comfort of your home. Our expert team carefully selects and positions each component for unparalleled clarity and realism.",
      imageSrc: "/images/audio-video.jpg",
      learnMoreUrl: "/services/home-theatre",
    },
    {
      title: "Networking",
      description:
        "Power your connected life with our robust networking solutions. We design and implement high-performance wired and wireless networks that ensure reliable, secure connectivity throughout your home or business. Our expert team eliminates dead zones and optimizes bandwidth for all your devices.",
      imageSrc: "/images/networking.jpg",
      learnMoreUrl: "/services/networking",
    },
    {
      title: "Surveillance",
      description:
        "Protect what matters most with our advanced surveillance systems. We provide comprehensive security solutions featuring high-definition cameras, intelligent motion detection, and remote monitoring capabilities. Access live and recorded footage from anywhere using your smartphone or tablet.",
      imageSrc: "/images/surveillance.jpg",
      learnMoreUrl: "/services/surveillance",
    },
    {
      title: "Phone Systems",
      description:
        "Stay connected with our modern, reliable phone systems designed for today's communication needs. We offer flexible solutions that integrate with your existing technology infrastructure, providing crystal-clear voice quality and advanced features that traditional systems can't match.",
      imageSrc: "/images/phone.jpg",
      learnMoreUrl: "/services/phone-systems",
    },
    {
      title: "Structure Wiring",
      description:
        "Build a solid foundation for all your technology with our professional structured wiring services. We design and install organized, high-quality cabling systems that support all your audio, video, data, and security needs while ensuring your home is prepared for future technological advances.",
      imageSrc: "/images/networking.jpg",
      learnMoreUrl: "/services/structure-wiring",
    },
  ]

  return (
    <div className="w-full">
      {serviceDetails.map((service, index) => (
        <ServiceSection
          key={index}
          title={service.title}
          description={service.description}
          imageSrc={service.imageSrc}
          index={index}
          learnMoreUrl={service.learnMoreUrl}
        />
      ))}
    </div>
  )
}

export default ServiceSections

