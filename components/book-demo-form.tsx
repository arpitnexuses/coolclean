"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { Check, Loader2, ArrowRight } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function BookDemoForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    jobTitle: "",
    interestArea: "surface-prep",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const formRef = useRef(null)
  const isInView = useInView(formRef, { once: true, amount: 0.3 })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, interestArea: value }))
  }

  const handleNextStep = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setCurrentStep(2)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-demo-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setIsSubmitting(false)
      setIsSubmitted(true)
      toast({
        title: "Demo request submitted!",
        description: "We'll contact you shortly to schedule your personalized demo.",
      })
    } catch (error) {
      setIsSubmitting(false)
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <>
      <motion.div
        ref={formRef}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="border-none shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl bg-white backdrop-blur-sm">
          <div className="p-0">
            {isSubmitted ? (
              <div className="p-8 md:p-12 text-center bg-gradient-to-br from-blue-50/50 to-white">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-8"
                >
                  <Check className="h-10 w-10 text-green-600" />
                </motion.div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Thank You!</h3>
                <p className="text-slate-600 mb-8 max-w-md mx-auto">
                  Your demo request has been submitted successfully. One of our specialists will contact you shortly to
                  schedule your personalized demonstration.
                </p>
                <Button
                  variant="outline"
                  className="border-blue-200 text-blue-600 hover:bg-blue-50"
                  onClick={() => {
                    setIsSubmitted(false)
                    setCurrentStep(1)
                    setFormData({
                      name: "",
                      company: "",
                      email: "",
                      phone: "",
                      jobTitle: "",
                      interestArea: "surface-prep",
                    })
                  }}
                >
                  Submit Another Request
                </Button>
              </div>
            ) : (
              <div className="p-8 md:p-12 bg-gradient-to-br from-blue-50/50 to-white">
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                          currentStep === 1 ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600"
                        }`}
                      >
                        1
                      </div>
                      <div className="h-0.5 w-8 bg-blue-100"></div>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                          currentStep === 2 ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600"
                        }`}
                      >
                        2
                      </div>
                    </div>
                    <p className="text-sm text-slate-500">Step {currentStep} of 2</p>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {currentStep === 1 ? "Your Information" : "Your Interests"}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {currentStep === 1
                      ? "Tell us about yourself."
                      : "Help us understand your specific needs and interests."}
                  </p>
                </div>

                {currentStep === 1 ? (
                  <form onSubmit={handleNextStep} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-slate-700">
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="border-slate-200 focus:border-blue-400 h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-slate-700">
                          Company Name
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Acme Inc."
                          required
                          value={formData.company}
                          onChange={handleChange}
                          className="border-slate-200 focus:border-blue-400 h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-slate-700">
                          Work Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john.doe@example.com"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="border-slate-200 focus:border-blue-400 h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-slate-700">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="(123) 456-7890"
                          value={formData.phone}
                          onChange={handleChange}
                          className="border-slate-200 focus:border-blue-400 h-12"
                        />
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6 rounded-xl shadow-lg shadow-blue-200/50 group"
                      >
                        Continue
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </form>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="jobTitle" className="text-slate-700">
                          Job Title
                        </Label>
                        <Input
                          id="jobTitle"
                          name="jobTitle"
                          placeholder="Manufacturing Engineer"
                          value={formData.jobTitle}
                          onChange={handleChange}
                          className="border-slate-200 focus:border-blue-400 h-12"
                        />
                      </div>

                      <div className="space-y-3">
                        <Label className="text-slate-700">Primary Interest Area</Label>
                        <RadioGroup
                          value={formData.interestArea}
                          onValueChange={handleRadioChange}
                          className="grid gap-4"
                        >
                          <div className="flex items-center space-x-3 border border-slate-200 rounded-lg p-4 transition-colors hover:bg-blue-50/50">
                            <RadioGroupItem id="surface-prep" value="surface-prep" />
                            <div>
                              <Label htmlFor="surface-prep" className="font-medium text-slate-900">
                                Surface Preparation
                              </Label>
                              <p className="text-sm text-slate-500">Cleaning before painting or coating application</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3 border border-slate-200 rounded-lg p-4 transition-colors hover:bg-blue-50/50">
                            <RadioGroupItem id="particle-removal" value="particle-removal" />
                            <div>
                              <Label htmlFor="particle-removal" className="font-medium text-slate-900">
                                Particle Removal
                              </Label>
                              <p className="text-sm text-slate-500">Precision cleaning for critical components</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3 border border-slate-200 rounded-lg p-4 transition-colors hover:bg-blue-50/50">
                            <RadioGroupItem id="ev-manufacturing" value="ev-manufacturing" />
                            <div>
                              <Label htmlFor="ev-manufacturing" className="font-medium text-slate-900">
                                EV Manufacturing
                              </Label>
                              <p className="text-sm text-slate-500">
                                Specialized cleaning for electric vehicle components
                              </p>
                            </div>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Button
                        type="button"
                        variant="outline"
                        className="border-slate-200 text-slate-700 hover:bg-slate-100 py-6 rounded-xl"
                        onClick={() => setCurrentStep(1)}
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6 rounded-xl shadow-lg shadow-blue-200/50"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Processing...
                          </>
                        ) : (
                          "Book Your Free Demo"
                        )}
                      </Button>
                    </div>
                  </form>
                )}

                <p className="text-sm text-slate-500 mt-6 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </div>
            )}
          </div>
        </Card>
      </motion.div>
      <Toaster />
    </>
  )
}

