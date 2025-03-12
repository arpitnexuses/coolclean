"use client"

import React, { useRef } from "react"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Paintbrush, Cpu, Battery, ArrowRight } from "lucide-react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Applications() {
  const [activeTab, setActiveTab] = useState("surface")
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const applications = [
    {
      id: "surface",
      title: "Surface Preparation Before Painting",
      description: "Surface preparation is critical in ensuring flawless paint adhesion in automotive manufacturing. CO₂ cleaning removes dust, debris, and light oils from surfaces without leaving condensation or residue, resulting in superior paint finish and reduced defects.",
      icon: <Paintbrush className="h-7 w-7" />,
      benefits: ["Superior paint finish", "No residue", "Reduced defects"],
    },
    {
      id: "particle",
      title: "Particle Removal for Critical Components",
      description: "Automotive components such as fuel systems, batteries, and precision assemblies require meticulous cleaning to prevent failures and performance issues. CO₂ cleaning ensures that these critical parts remain free from particles that could affect efficiency and longevity.",
      icon: <Cpu className="h-7 w-7" />,
      benefits: ["Improved efficiency", "Extended longevity", "Precision cleaning"],
    },
    {
      id: "ev",
      title: "EV Manufacturing Cleaning",
      description: "Electric vehicle (EV) manufacturing demands sustainable, high-quality cleaning solutions. CO₂ cleaning is ideal for battery cells, trays, and other EV components, offering precise and non-abrasive cleaning.",
      icon: <Battery className="h-7 w-7" />,
      benefits: ["Sustainable solution", "Non-abrasive", "High precision"],
    },
  ]

  return (
    <section ref={sectionRef} id="applications" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-1 mb-6 rounded-full bg-blue-50 text-blue-600 border border-blue-100">
            <span className="px-3 py-1 text-sm font-medium">Key Applications</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Dynamic Solutions for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Automotive Sector
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl">
            Our CO<sub>2</sub> spray cleaning system helps automotive companies reduce scrap, cut labor costs, and improve
            quality across their manufacturing processes.
          </p>
        </motion.div>

        <Tabs
          defaultValue="surface"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TabsList className="grid w-full grid-cols-3 mb-12 p-1 bg-slate-100/80 backdrop-blur-sm rounded-full">
              {applications.map((app) => (
                <TabsTrigger
                  key={app.id}
                  value={app.id}
                  className="rounded-full py-3 data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    <span
                      className={`inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-300 ${
                        activeTab === app.id ? "bg-blue-100" : "bg-transparent"
                      }`}
                    >
                      {React.cloneElement(app.icon, {
                        className: `h-5 w-5 ${activeTab === app.id ? "text-blue-600" : "text-slate-500"}`,
                      })}
                    </span>
                    <span className="font-medium">
                      {app.id === "surface"
                        ? "Surface Prep"
                        : app.id === "particle"
                        ? "Particle Removal"
                        : "EV Manufacturing"}
                    </span>
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </motion.div>

          <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-slate-200">
            <AnimatePresence mode="wait">
              {applications.map((app) => (
                <TabsContent key={app.id} value={app.id} className="outline-none">
                  <div className="grid md:grid-cols-2 items-center">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5 }}
                      className="p-8 md:p-12"
                    >
                      <div className="mb-6 p-3 bg-blue-50 rounded-full w-14 h-14 flex items-center justify-center">
                        {React.cloneElement(app.icon, { className: "h-7 w-7 text-blue-600" })}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{app.title}</h3>
                      <p className="text-slate-600 mb-6">{app.description}</p>
                      <div className="space-y-3">
                        {app.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-center gap-2 text-slate-700">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                      <Button className="mt-8 group" variant="outline">
                        Learn more
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                      className="relative h-full"
                    >
                      <div className="h-[400px] md:h-[500px] overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent z-10 md:hidden" />
                        <img
                          src="/placeholder.svg?height=400&width=600"
                          alt={app.id === "surface" 
                            ? "Surface preparation with CO2 cleaning"
                            : app.id === "particle"
                            ? "Particle removal with CO2 cleaning"
                            : "EV manufacturing with CO2 cleaning"
                          }
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    </motion.div>
                  </div>
                </TabsContent>
              ))}
            </AnimatePresence>
          </div>
        </Tabs>
      </div>
    </section>
  )
} 