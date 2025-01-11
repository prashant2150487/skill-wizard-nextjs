"use client"
import styles from './page.module.css'

import HomePageSkillFun from '@/containers/Homepage'

export default function Home() {
 

  return (
    <div className={styles['homepage-container']}>
    <HomePageSkillFun/>

    </div>
  )
}
