import { Timeline } from "@/components/about/timeline"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-light text-silver-900 mb-6">Our Story</h1>
        <p className="text-xl text-silver-600 max-w-3xl mx-auto leading-relaxed">
          IOPAWN was born from a vision to create jewellery that transcends trends, focusing on timeless design and
          exceptional craftsmanship that speaks to the modern individual.
        </p>
      </div>
      <Timeline />
    </div>
  )
}
