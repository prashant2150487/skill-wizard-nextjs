'use client'

import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'

import AiIcon from '../../../../public/png/ai.jpg'
import JsIcon from '../../../../public/png/js.jpg'

import styles from './styles.module.scss'

const CourseContainer = () => {
  const testimonials = [
    {
      features: [
        'Open Source',
        'Supports JavaScript & Python',
        'In-built no-code database',
        'Build Your Own Integrations',
      ],
      title: 'Foundations of Coding',
      buttonLabel: 'Read More',
      src: JsIcon, // Replace with actual image paths
    },
    {
      features: [
        'Advanced AI tools',
        'Real-time collaboration',
        'Easy Deployment',
        'Cloud Native',
      ],
      title: 'Innovative AI Solutions',
      buttonLabel: 'Learn More',
      src: AiIcon, // Replace with actual image paths
    },
  ]

  return (
    <div className={styles['container-wrapper']}>
      {/* @ts-ignore */}
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  )
}

export default CourseContainer
