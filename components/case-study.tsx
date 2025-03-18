"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"

export default function CaseStudy() {
  const [expanded, setExpanded] = useState(false)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <section 
      id="case-studies" 
      ref={sectionRef} 
      className="py-24 relative overflow-hidden"
      style={{ scrollMarginTop: '100px' }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-blue-50/30 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.1),transparent_50%)]"></div>

      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-1 mb-6 rounded-full bg-blue-50 text-blue-600 border border-blue-100">
            <span className="px-3 py-1 text-sm font-medium">Success Story</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Real-World Impact: Toyoda Gosei's Success
          </h2>
          {/* <p className="text-xl text-slate-600 max-w-2xl">
            See how our CO<sub>2</sub> spray cleaning system transformed manufacturing efficiency.
          </p> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-gradient-to-br from-white to-blue-50/50 border-none shadow-xl max-w-4xl mx-auto overflow-hidden backdrop-blur-sm">
            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-stretch">
                <div className="rounded-xl overflow-hidden shadow-lg relative flex">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent z-10"></div>
                  <img
                    src="https://i.imgur.com/eJDGyqH.jpeg"
                    alt="Toyoda Gosei CO2 cleaning system in action"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg z-20">
                    <p className="text-sm font-medium text-blue-600">Toyoda Gosei Case Study</p>
                  </div>
                </div>

                <div className="space-y-8 flex flex-col justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="h-12 w-12 rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden">
                      <img
                        src="https://i.imgur.com/9LxodMX.png"
                        alt="Toyoda Gosei logo"
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Toyoda Gosei</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-600 text-white rounded-full h-12 w-12 flex items-center justify-center text-lg font-bold shadow-lg shadow-blue-200">
                        40%
                      </div>
                      <p className="text-slate-700 font-medium">Reduction in scrap materials</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="bg-emerald-600 text-white rounded-full h-12 w-12 flex items-center justify-center text-lg font-bold shadow-lg shadow-emerald-200">
                        ↓
                      </div>
                      <p className="text-slate-700 font-medium">Significant labor cost reduction</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="bg-indigo-600 text-white rounded-full h-12 w-12 flex items-center justify-center text-lg font-bold shadow-lg shadow-indigo-200">
                        ↑
                      </div>
                      <p className="text-slate-700 font-medium">Improved paint quality and consistency</p>
                    </div>
                  </div>

                  <div className={`overflow-hidden transition-all duration-500 ${expanded ? "max-h-96" : "max-h-0"}`}>
                    <p className="text-slate-600 mb-4">
                      After implementing Cool Clean's Omega™ FLEX CO<sub>2</sub> spray cleaning system, Toyoda Gosei
                      reduced labor costs and cut scrap by 40%, significantly improving paint quality and production
                      efficiency. The system replaced manual wiping with automated, high-precision CO<sub>2</sub>{" "}
                      cleaning, delivering consistent results and lowering operational costs.
                    </p>
                    <p className="text-slate-600">
                      The automated system eliminated the variability of manual cleaning processes, ensuring consistent
                      quality across all production runs and reducing the need for rework or touch-ups.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      variant="ghost"
                      className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0"
                      onClick={() => setExpanded(!expanded)}
                    >
                      {expanded ? (
                        <span className="flex items-center">
                          Show Less <ChevronUp className="ml-2 h-4 w-4" />
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Read More <ChevronDown className="ml-2 h-4 w-4" />
                        </span>
                      )}
                    </Button>

                    <Button asChild className="bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-200/50 group">
                      <Link
                        href="https://drive.google.com/file/d/1M5FEjtASdSAQYVA-imqZ-QizIKYQp6Ci/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Download Full Case Study{" "}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

