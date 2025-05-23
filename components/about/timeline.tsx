"use client"

import { motion } from "framer-motion"

const milestones = [
  {
    year: "2020",
    title: "The Beginning",
    description: "IOPAWN was founded with a vision to create modern jewellery that transcends traditional boundaries.",
  },
  {
    year: "2021",
    title: "First Collection",
    description: "Launched our debut collection featuring minimalist designs crafted from premium sterling silver.",
  },
  {
    year: "2022",
    title: "Sustainable Practices",
    description: "Implemented eco-friendly manufacturing processes and ethically sourced materials.",
  },
  {
    year: "2023",
    title: "Global Recognition",
    description: "Featured in leading design magazines and worn by influential figures worldwide.",
  },
  {
    year: "2024",
    title: "Innovation Continues",
    description: "Expanding our collection with new techniques and contemporary designs for the modern individual.",
  },
]

export function Timeline() {
  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-silver-300"></div>

      <div className="space-y-16">
        {milestones.map((milestone, index) => (
          <motion.div
            key={milestone.year}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
          >
            <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
              <div className="bg-white p-6 rounded-2xl shadow-silver">
                <h3 className="text-2xl font-light text-primary mb-2">{milestone.year}</h3>
                <h4 className="text-xl font-medium text-silver-900 mb-3">{milestone.title}</h4>
                <p className="text-silver-600 leading-relaxed">{milestone.description}</p>
              </div>
            </div>

            {/* Timeline dot */}
            <div className="relative z-10">
              <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-silver"></div>
            </div>

            <div className="w-1/2"></div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
