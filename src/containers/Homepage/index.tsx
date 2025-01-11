import React from 'react'
import FeedbackContainer from './FeedbackContainer'
import HeroSection from './Hero section'
import FaqContainer from './Faq'
import MarqueeContainer from './MovingContainer'
import FallingObjects from './FallngObjectAnimation'
import { Badge } from '@/components/ui/badge'

import styles from './styles.module.scss'
import CourseContainer from './Course'
import Header from './Header'
import Footer from './Footer'

const HomePageSkillFun = () => {
  const emojis = [
    <Badge
      variant="secondary"
      className={styles['badge-container']}
      style={{ backgroundColor: '#f5f5f5' }}
    >
      Vedic Maths
    </Badge>,
    <Badge
      variant="secondary"
      className={styles['badge-container']}
      style={{ backgroundColor: '#e3f2fd' }}
    >
      Artificial Intelligence
    </Badge>,
    <Badge
      variant="secondary"
      className={styles['badge-container']}
      style={{ backgroundColor: '#fce4ec' }}
    >
      C++
    </Badge>,
    <Badge
      variant="secondary"
      className={styles['badge-container']}
      style={{ backgroundColor: '#e8f5e9' }}
    >
      Python
    </Badge>,
    <Badge
      variant="secondary"
      className={styles['badge-container']}
      style={{ backgroundColor: '#ede7f6' }}
    >
      Java
    </Badge>,
    <Badge
      variant="secondary"
      className={styles['badge-container']}
      style={{ backgroundColor: '#fff3e0' }}
    >
      Tech
    </Badge>,
    <Badge
      variant="secondary"
      className={styles['badge-container']}
      style={{ backgroundColor: '#f1f8e9' }}
    >
      Coding
    </Badge>,
    <Badge
      variant="secondary"
      className={styles['badge-container']}
      style={{ backgroundColor: '#e3f2fd' }}
    >
      CBSE
    </Badge>,
  ]

  return (
    <div>
      <Header />
      <HeroSection />
      <FeedbackContainer />
      <CourseContainer />
      <FaqContainer />
      <MarqueeContainer />
      <FallingObjects items={emojis} />
      <Footer />
      <div style={{ height: '300px', backgroundColor: '#2E31A6' }} />
    </div>
  )
}

export default HomePageSkillFun
