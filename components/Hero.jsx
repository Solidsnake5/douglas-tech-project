"use client"

import { useResponsive } from "./responsive-utils"
import Form from "./Form"

const Hero = ({
  title = "Creating Smart Homes for the Future",
  description = "Transform your living space with cutting-edge smart home technology designed for modern living. Our expert team at Douglas Tech Solutions specializes in seamless integration of security systems, automated lighting, climate control, and entertainment solutions that work together flawlessly. Experience the perfect balance of convenience, efficiency, and peace of mind with customized smart home systems tailored to your unique needs. From initial consultation to professional installation and ongoing support, we're with you every step of the way toward a smarter, safer home.",
  backgroundImage = "/images/audio-video.jpg",
}) => {
  const { breakpoint } = useResponsive()

  return (
    <section className="relative w-full">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-100"></div>
      </div>

      {/* Content Container */}
      <div className="relative container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-1/2 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{title}</h1>
            <p className="text-base md:text-lg opacity-90 leading-relaxed">{description}</p>
          </div>

          {/* Right Column - Form */}
          <div className="w-full lg:w-1/2">
            <Form />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

