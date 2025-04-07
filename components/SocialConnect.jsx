import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

const SocialConnect = () => {
  return (
    <section className="w-full bg-[#6DD3E1] py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-white text-base sm:text-lg mb-4 sm:mb-0">Get connected with us on social networks</p>

          <div className="flex items-center space-x-6">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="w-6 h-6 text-white hover:text-gray-100 transition-colors" />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="w-6 h-6 text-white hover:text-gray-100 transition-colors" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6 text-white hover:text-gray-100 transition-colors" />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="w-6 h-6 text-white hover:text-gray-100 transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialConnect

