"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Header() {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640)
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <header className="w-full bg-[#6DD3E1] py-3 sm:py-4 lg:py-5">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-3 sm:mb-0">
          <Link href="/">
            <div className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Douglas Tech Solutions Logo"
                width={isMobile ? 150 : isTablet ? 180 : 200}
                height={isMobile ? 60 : isTablet ? 70 : 80}
                className="h-auto"
                priority
              />
            </div>
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <div className="text-white text-base sm:text-lg lg:text-xl font-semibold whitespace-nowrap">
            CALL US:{" "}
            <a href="tel:347-533-3725" className="hover:underline">
              347-533-3725
            </a>
          </div>
          <Link
            href="/contact"
            className="bg-white text-[#6DD3E1] px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all text-sm sm:text-base whitespace-nowrap"
          >
            GET A FREE CONSULTATION
          </Link>
        </div>
      </div>
    </header>
  )
}

