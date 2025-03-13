"use client"

import Link from "next/link"
import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    const handleResourceClick = (e: Event) => {
      if (!(e.target instanceof HTMLElement)) return;
      
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      
      e.preventDefault();
      const href = link.getAttribute('href');
      if (!href) return;

      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    const resourcesLinks = document.querySelector('.resources-links');
    if (resourcesLinks) {
      resourcesLinks.addEventListener('click', handleResourceClick);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (resourcesLinks) {
        resourcesLinks.removeEventListener('click', handleResourceClick);
      }
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.2),transparent_40%)]"></div>

      <div className="container px-4 md:px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent"
              >
                Cool Clean
              </motion.span>
            </Link>
            <p className="text-slate-400 mb-6">
              Revolutionizing automotive manufacturing with efficient, sustainable, and residue-free CO<sub>2</sub>{" "}
              cleaning solutions.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/CoolCleanTechnologies" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://twitter.com/CoolCleanTecLLC" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://www.linkedin.com/company/cool-clean-technologies" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://www.youtube.com/user/CoolClean2001" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Solutions</h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  href="#surface-preparation" 
                  className="text-slate-400 hover:text-white transition-colors inline-block"
                >
                  Surface Preparation
                </Link>
              </li>
              <li>
                <Link 
                  href="#particle-removal" 
                  className="text-slate-400 hover:text-white transition-colors inline-block"
                >
                  Particle Removal
                </Link>
              </li>
              <li>
                <Link 
                  href="#ev-manufacturing" 
                  className="text-slate-400 hover:text-white transition-colors inline-block"
                >
                  EV Manufacturing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Resources</h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  href="#case-studies" 
                  className="text-slate-400 hover:text-white transition-colors inline-block"
                >
                  Case Studies
                </Link>
              </li>
              {/* <li>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors inline-block">
                  White Papers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors inline-block">
                  Technical Specs
                </Link>
              </li> */}
              <li>
                <Link href="https://www.coolclean.com/news/" className="text-slate-400 hover:text-white transition-colors inline-block">
                  Blog
                </Link>
              </li>
              {/* <li>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors inline-block">
                  FAQ
                </Link>
              </li> */}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-blue-400" />
                <a href="mailto:sales@coolclean.com" className="text-slate-400 hover:text-white transition-colors">
                  sales@coolclean.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-blue-400" />
                <a href="tel:+16518428600" className="text-slate-400 hover:text-white transition-colors">
                +1 651-842-8600
                </a>
              </li>
            </ul>
            <div className="mt-8 p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm">
              <h4 className="text-sm font-semibold mb-3 text-white">Why Cool Clean?</h4>
              <p className="text-slate-400 text-sm">
                Over 20 years of experience in CO<sub>2</sub> cleaning technology with proven results across automotive,
                medical, and electronics industries.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Cool Clean Technologies. All rights reserved.
          </p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
              Terms of Service
            </Link>
            <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
              Sitemap
            </Link>
          </div>
        </div>
      </div>

      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 rounded-full h-12 w-12 shadow-lg shadow-blue-900/20 p-0 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </footer>
  )
}

