import Link from "next/link"
import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

// Custom TikTok icon component
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-silver-50 border-t border-silver-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-light text-silver-900 tracking-wide">IOPAWN</span>
            </Link>
            <p className="text-silver-600 text-sm leading-relaxed">
              Fine jewellery crafted for the modern individual. Discover pieces that embody elegance and contemporary
              style.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-silver-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/catalogue" className="text-silver-600 hover:text-primary transition-colors text-sm">
                  Catalogue
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-silver-600 hover:text-primary transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-silver-600 hover:text-primary transition-colors text-sm">
                  Care Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="text-silver-600 hover:text-primary transition-colors text-sm">
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-silver-900 mb-4">Customer Care</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-silver-600 hover:text-primary transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-silver-600 hover:text-primary transition-colors text-sm">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="#" className="text-silver-600 hover:text-primary transition-colors text-sm">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="text-silver-600 hover:text-primary transition-colors text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-silver-900 mb-4">Stay Connected</h3>
            <p className="text-silver-600 text-sm mb-4">
              Subscribe to receive updates on new collections and exclusive offers.
            </p>
            <div className="flex space-x-2 mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 text-sm border border-silver-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button size="sm" className="px-4">
                Subscribe
              </Button>
            </div>
            <div className="flex space-x-3">
              <Link href="https://www.instagram.com/iopawn/" target="_blank" rel="noopener noreferrer" className="text-silver-600 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://www.tiktok.com/@iopawn" target="_blank" rel="noopener noreferrer" className="text-silver-600 hover:text-primary transition-colors">
                <TikTokIcon className="h-5 w-5" />
                <span className="sr-only">TikTok</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-silver-200 mt-8 pt-8 text-center">
          <p className="text-silver-600 text-sm">
            © 2024 IOPAWN. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  )
}
