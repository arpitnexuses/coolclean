import BookDemoForm from "../components/book-demo-form"
import Benefits from "../components/benefits"
import CaseStudy from "../components/case-study"
import Applications from "../components/applications"
import Hero from "../components/hero"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import ScrollProgress from "../components/scroll-progress"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <ScrollProgress />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Applications />
        <Benefits />
        <CaseStudy />
        <section id="book-demo" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,112,243,0.05),transparent_40%)]"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="inline-flex items-center justify-center p-1 mb-8 rounded-full bg-blue-50 text-blue-600 border border-blue-100">
                <span className="px-3 py-1 text-sm font-medium">Ready to transform your process?</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4 max-w-3xl">
              Interested in Learning More?
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl">
              Schedule a demo or test on sample parts to see how CO<sub>2</sub> cleaning can improve your processes.
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              <BookDemoForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

