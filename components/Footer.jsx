import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, Clock } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="flex flex-col">
            <Link href="/">
              <Image src="/images/logo.png" alt="Douglas Tech Solutions Logo" width={200} height={80} className="h-auto mb-4" />
            </Link>
            <p className="text-[#6DD3E1] mt-2">
              Allow Douglas Tech Solutions to bring you into the future by integrating Smart Systems into your Home Today.
            </p>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-700">CONTACTS</h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-[#6DD3E1] mr-2 mt-1 flex-shrink-0" />
                <a
                  href="mailto:brandon@douglastechsolutions.com"
                  className="text-[#6DD3E1] hover:underline break-words"
                >
                  brandon@douglastechsolutions.com
                </a>
              </li>
              <li className="flex items-center pt-2">
                <Phone className="w-5 h-5 text-[#6DD3E1] mr-2 flex-shrink-0" />
                <a href="tel:347-533-3725" className="text-[#6DD3E1] hover:underline">
                  347-533-3725
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-700">SERVICES</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/home-automation" className="hover:text-[#6DD3E1] transition-colors">
                  Home Automation
                </Link>
              </li>
              <li>
                <Link href="/services/home-theatre" className="hover:text-[#6DD3E1] transition-colors">
                  Home Theatre Audio/Video
                </Link>
              </li>
              <li>
                <Link href="/services/networking" className="hover:text-[#6DD3E1] transition-colors">
                  Networking
                </Link>
              </li>
              <li>
                <Link href="/services/surveillance" className="hover:text-[#6DD3E1] transition-colors">
                  Home Video Surveillance
                </Link>
              </li>
              <li>
                <Link href="/services/phone-systems" className="hover:text-[#6DD3E1] transition-colors">
                  Phone Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-700">HOURS</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Clock className="w-5 h-5 text-[#6DD3E1] mr-2" />
                <span>
                  M-F: <span className="text-[#6DD3E1]">8-6PM</span>
                </span>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 text-[#6DD3E1] mr-2" />
                <span>
                  Saturday: <span className="text-[#6DD3E1]">8-12AM</span>
                </span>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 text-[#6DD3E1] mr-2" />
                <span>
                  Sunday: <span className="text-[#6DD3E1]">Closed</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400">
          <p className="mb-2">© {currentYear} Douglas Tech Solutions LLC</p>
          <p>Site design © {currentYear} Whatever Web Solutions LLC</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

