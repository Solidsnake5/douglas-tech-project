import Image from "next/image"
import Link from "next/link"

const ServiceSection = ({ title, description, imageSrc, index, learnMoreUrl = "#" }) => {
  // Determine if this is an even or odd index for alternating styles
  const isEven = index % 2 === 0

  return (
    <section className={`w-full py-16 md:py-24 ${isEven ? "bg-[#6DD3E1]" : "bg-white"}`}>
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 md:gap-16`}>
          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${isEven ? "text-white" : "text-[#6DD3E1]"}`}
            >
              {title}
            </h2>
            <p className={`text-base md:text-lg leading-relaxed mb-8 ${isEven ? "text-white" : "text-gray-700"}`}>
              {description}
            </p>
            <Link
              href={learnMoreUrl}
              className={`inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-colors ${
                isEven ? "bg-white text-[#6DD3E1] hover:bg-gray-100" : "bg-[#6DD3E1] text-white hover:bg-[#5BC0CE]"
              }`}
            >
              Learn More
            </Link>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl">
              <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceSection

