'use client'

import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

type Testimonial = {
  features: string[]
  title: string
  buttonLabel: string
  src: string
}
export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[]
  autoplay?: boolean
}) => {
  const [active, setActive] = useState(0)

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const isActive = (index: number) => {
    return index === active
  }

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000)
      return () => clearInterval(interval)
    }
  }, [autoplay])

  return (
    <div className="max-w-4xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-20">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side - Image */}
        <div>
          <div className="relative h-64 w-full bg-gray-100 rounded-xl">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 1,
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0,
                    scale: isActive(index) ? 1 : 0.7,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.title}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-xl object-cover"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: 'easeInOut',
            }}
          >
            <h3 className="text-2xl font-bold" style={{ color: '#2E31A6' }}>
              {testimonials[active].title}
            </h3>
            <ul className="mt-4 text-sm text-gray-700 space-y-2">
              {testimonials[active].features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
          <button
            className="mt-8 px-6 py-3 rounded-lg text-white font-medium hover:bg-purple-700"
            style={{ backgroundColor: '#2E31A6' }}
          >
            {testimonials[active].buttonLabel}
          </button>
          <div className="flex gap-4 pt-8">
            <button
              onClick={handlePrev}
              className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center"
            >
              <IconArrowLeft className="h-5 w-5 text-gray-700" />
            </button>
            <button
              onClick={handleNext}
              className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center"
            >
              <IconArrowRight className="h-5 w-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
