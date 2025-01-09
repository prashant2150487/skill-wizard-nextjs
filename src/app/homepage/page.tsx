'use client'

import React from 'react'
import styles from './styles.module.scss'
import Home from '@/containers/Homepage/Hero section'
import HomePageSkillFun from '@/containers/Homepage'

const HomePage: React.FC = () => {
  return (
    <div className={styles['homepage-container']}>
      <HomePageSkillFun />
    </div>
  )
}

export default HomePage
