'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import styles from './styles.module.scss'
import { Button } from '@/components/ui/button'
import ImageContainer from '@/components/Images'
import RegisterIcon from '../../../../public/png/right-up-arrow.png'

interface FallingObjectProps {
  items: any // Array of emojis or objects to fall
}

const FallingObjects: React.FC<FallingObjectProps> = ({ items }) => {
  const [positions, setPositions] = useState<number[]>([])

  useEffect(() => {
    // Generate unique random positions to avoid overlap
    const generateUniquePositions = () => {
      const posSet = new Set<number>()
      while (posSet.size < items.length) {
        const newPos = Math.random() * 100 // Random position (0% to 100%)
        // Ensure minimum distance between positions (e.g., 10%)
        if (![...posSet].some((pos) => Math.abs(pos - newPos) < 10)) {
          posSet.add(newPos)
        }
      }
      return Array.from(posSet)
    }

    setPositions(generateUniquePositions())
  }, [items])

  return (
    <div className={styles.container}>
      <div>
        <p className={styles['title-wrapper']}>
          Shape their tomorrow, start today!
        </p>
        <p className={styles['description-wrapper']}>
          Start early and equip your child with the tools and confidence to
          navigate tomorrow's challenges with ease.
        </p>
      </div>
      <p>
        <Button className={styles['button-component']}>
          Register Now! <ImageContainer icon={RegisterIcon} alt="Register icon" />
        </Button>
      </p>
      {items.map((item: any, index: number) => (
        <motion.div
          key={index}
          className={styles.object}
          initial={{ y: '-10%', opacity: 0 }} // Start off-screen
          whileInView={{ y: 'calc(70vh - 300px)', opacity: 1 }} // Land at 70vh
          viewport={{ once: true }} // Animate only when in view
          transition={{
            delay: index * 0.5, // Staggered start
            duration: Math.random() * 2 + 3, // Free-fall duration (3s to 5s)
            ease: 'easeInOut', // Natural free-fall ease
          }}
          style={{
            left: `${positions[index] || 0}%`, // Precomputed unique position
          }}
        >
          {item}
        </motion.div>
      ))}
    </div>
  )
}

export default FallingObjects
