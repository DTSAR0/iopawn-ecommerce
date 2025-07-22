import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartProvider } from "@/components/cart/cart-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "IOPAWN - Fine Jewellery. Pure Potential.",
  description:
    "Discover modern, minimalist jewellery crafted with precision and elegance. IOPAWN offers contemporary designs for the discerning individual.",
  keywords: "jewellery, jewelry, modern, minimalist, silver, rings, necklaces, earrings",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-silver-50 text-silver-900`}>
        <CartProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
