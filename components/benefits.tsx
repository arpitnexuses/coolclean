"use client"

import { useState, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Recycle, Zap, Target, PiggyBank } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function Benefits() {
  const [hoveredCard, setHoveredCard] = useState(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const benefits = [
    {
      id: 1,
      title: "Efficiency",
      description: "Replace multi-stage water washers with compact, high-performance systems",
      icon: <Zap className="h-10 w-10" />,
      color: "blue",
    },
    {
      id: 2,
      title: "Sustainability",
      description: "Reduce water use, carbon footprint, and hazardous waste",
      icon: <Recycle className="h-10 w-10" />,
      color: "green",
    },
    {
      id: 3,
      title: "Precision",
      description: "Achieve particle-free surfaces for critical components",
      icon: <Target className="h-10 w-10" />,
      color: "indigo",
    },
    {
      id: 4,
      title: "Cost Savings",
      description: "Lower operational costs while improving throughput",
      icon: <PiggyBank className="h-10 w-10" />,
      color: "purple",
    },
  ]

  const getColorClasses = (color, isHovered) => {
    const colorMap = {
      blue: {
        bg: isHovered ? "bg-blue-600" : "bg-blue-50",
        text: isHovered ? "text-white" : "text-blue-600",
        border: "border-blue-100",
        highlight: "bg-blue-600",
      },
      green: {
        bg: isHovered ? "bg-emerald-600" : "bg-emerald-50",
        text: isHovered ? "text-white" : "text-emerald-600",
        border: "border-emerald-100",
        highlight: "bg-emerald-600",
      },
      indigo: {
        bg: isHovered ? "bg-indigo-600" : "bg-indigo-50",
        text: isHovered ? "text-white" : "text-indigo-600",
        border: "border-indigo-100",
        highlight: "bg-indigo-600",
      },
      purple: {
        bg: isHovered ? "bg-purple-600" : "bg-purple-50",
        text: isHovered ? "text-white" : "text-purple-600",
        border: "border-purple-100",
        highlight: "bg-purple-600",
      },
    }

    return colorMap[color] || colorMap.blue
  }

  return (
    <section id="benefits" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.08),transparent_50%)]"></div>

      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-1 mb-6 rounded-full bg-blue-50 text-blue-600 border border-blue-100">
            <span className="px-3 py-1 text-sm font-medium">Key Benefits</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Streamlined Operations, Reduced Overhead
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl">
            Our CO<sub>2</sub> cleaning technology delivers multiple benefits to transform your manufacturing process.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const isHovered = hoveredCard === benefit.id
            const colorClasses = getColorClasses(benefit.color, isHovered)

            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className={`relative overflow-hidden transition-all duration-300 h-full backdrop-blur-sm ${
                    isHovered
                      ? "shadow-xl transform -translate-y-2 border-transparent bg-white"
                      : "shadow-md border-slate-100 bg-white/80"
                  }`}
                  onMouseEnter={() => setHoveredCard(benefit.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="p-6 md:p-8 flex flex-col h-full">
                    <div
                      className={`p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 transition-colors duration-300 ${colorClasses.bg} ${colorClasses.text}`}
                    >
                      {benefit.icon}
                    </div>
                    <h3
                      className={`text-xl font-bold mb-3 transition-colors duration-300 ${isHovered ? "text-slate-900" : "text-slate-800"}`}
                    >
                      {benefit.title}
                    </h3>
                    <p className={`transition-colors duration-300 ${isHovered ? "text-slate-700" : "text-slate-600"}`}>
                      {benefit.description}
                    </p>

                    {/* Decorative elements */}
                    <div
                      className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-10 transition-opacity duration-300 ${isHovered ? "opacity-20" : "opacity-0"} ${colorClasses.bg}`}
                    ></div>
                  </div>
                  <div
                    className={`absolute bottom-0 left-0 h-1 transition-all duration-500 ${colorClasses.highlight} ${
                      isHovered ? "w-full" : "w-0"
                    }`}
                  ></div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

