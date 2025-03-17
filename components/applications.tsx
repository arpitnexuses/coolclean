"use client"

import React, { useRef, useEffect } from "react"
import { useState } from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { Paintbrush, Cpu, Battery } from "lucide-react"
import { motion, useInView } from "framer-motion"

type TabId = 'surface' | 'particle' | 'ev';
type HashMapping = {
  [key: string]: TabId;
};

export default function Applications() {
  const [activeTab, setActiveTab] = useState<TabId>("surface")
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      
      const hashToTab: HashMapping = {
        '#surface-preparation': 'surface',
        '#particle-removal': 'particle',
        '#ev-manufacturing': 'ev'
      };

      if (hash in hashToTab) {
        setActiveTab(hashToTab[hash]);
        
        // Improved scroll handling
        setTimeout(() => {
          const element = document.getElementById(hash.slice(1));
          if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
          }
        }, 100); // Small delay to ensure DOM is ready
      }
    };

    // Initial load handling
    if (window.location.hash) {
      handleHashChange();
    }

    // Add click handler for footer links
    const handleFooterLinkClick = (e: any) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        window.location.hash = href;
        handleHashChange();
      }
    };

    const footerLinks = document.querySelectorAll('footer a[href^="#"]');
    footerLinks.forEach(link => {
      link.addEventListener('click', handleFooterLinkClick);
    });

    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      footerLinks.forEach(link => {
        link.removeEventListener('click', handleFooterLinkClick);
      });
    };
  }, []);

  const applications = [
    {
      id: "surface",
      title: "Surface Preparation Before Painting",
      description:
        "Surface preparation is essential for optimal paint adhesion in automotive manufacturing. CO₂ cleaning removes dust, debris, and light oils from surfaces without leaving condensation or residue, resulting in superior paint finish and reduced defects.",
      icon: <Paintbrush className="h-7 w-7" />,
      image: "/INOAC_2.jpg",
      alt: "Surface preparation with CO2 cleaning",
    },
    {
      id: "particle",
      title: "Particle Removal for Critical Components",
      description:
        "Automotive components such as fuel systems, batteries, and precision assemblies require meticulous cleaning to prevent failures and performance issues. CO₂ cleaning ensures that these critical parts remain free from particles that could affect efficiency and longevity.",
      icon: <Cpu className="h-7 w-7" />,
      image: "/MP.jpg",
      alt: "Particle removal with CO2 cleaning",
    },
    {
      id: "ev",
      title: "EV Manufacturing Cleaning",
      description:
        "Electric vehicle (EV) manufacturing demands sustainable, high-quality cleaning solutions. CO₂ cleaning is ideal for battery cells, trays, and other EV components, offering precise and non-abrasive cleaning.",
      icon: <Battery className="h-7 w-7" />,
      image: "/battery.png",
      alt: "EV manufacturing with CO2 cleaning",
    },
  ]

  return (
    <section id="applications" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white pointer-events-none"></div>

      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-1 mb-6 rounded-full bg-blue-50 text-blue-600 border border-blue-100">
            <span className="px-3 py-1 text-sm font-medium">Key Applications</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Dynamic Solutions for Automotive Sector
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl">
            Our CO<sub>2</sub> spray cleaning solutions help automotive companies to reduce scrap, cut labor cost and improve quality.  
          </p>
        </motion.div>

        <TabsPrimitive.Root
          defaultValue="surface"
          value={activeTab}
          onValueChange={(value: string) => setActiveTab(value as TabId)}
          className="w-full max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TabsPrimitive.List className="grid w-full grid-cols-3 mb-12 p-1 bg-slate-100/80 backdrop-blur-sm rounded-full">
              {applications.map((app) => (
                <TabsPrimitive.Trigger
                  key={app.id}
                  value={app.id}
                  className="rounded-full py-3 text-center transition-all duration-200 hover:bg-white/50 data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
                >
                  <span className="flex items-center justify-center gap-2">
                    <span
                      className={`hidden sm:inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors ${
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
                </TabsPrimitive.Trigger>
              ))}
            </TabsPrimitive.List>
          </motion.div>

          <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl">
            {applications.map((app) => (
              <TabsPrimitive.Content 
                key={app.id} 
                value={app.id} 
                className="outline-none relative"
                id={`${app.id === "surface" 
                  ? "surface-preparation"
                  : app.id === "particle"
                  ? "particle-removal"
                  : "ev-manufacturing"}`}
                style={{ scrollMarginTop: '120px' }}
              >
                <div className="grid md:grid-cols-2 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="p-8 md:p-12"
                  >
                    <div className="mb-6 p-3 bg-blue-50 rounded-full w-14 h-14 flex items-center justify-center">
                      {React.cloneElement(app.icon, { className: "h-7 w-7 text-blue-600" })}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{app.title}</h3>
                    <p className="text-slate-600">{app.description}</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative h-full"
                  >
                    <div className="h-[300px] md:h-[400px] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent z-10 md:hidden"></div>
                      <img src={app.image || "/placeholder.svg"} alt={app.alt} className="w-full h-full object-cover" />
                    </div>
                  </motion.div>
                </div>
              </TabsPrimitive.Content>
            ))}
          </div>
        </TabsPrimitive.Root>
      </div>
    </section>
  )
}

