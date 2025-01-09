'use client'

import Head from 'next/head'
import styles from './styles.module.scss'
import LeftSection from './LeftSection'
import RightSection from './RightSection'

const HeroSection = () => {
  return (
    <>
      <Head>
        <title>SkillWizard</title>
        <meta name="description" content="Learn coding with SkillWizard" />
      </Head>
      <div className={styles.container}>
        <div className={styles.left}>
          <LeftSection />
        </div>
        <div className={styles.right}>
          <RightSection />
        </div>
      </div>
    </>
  )
}

export default HeroSection
