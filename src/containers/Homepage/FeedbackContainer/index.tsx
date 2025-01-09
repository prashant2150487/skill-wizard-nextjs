import React from 'react'

import ThreeDCardDemo from '@/components/Card'
import AnaIcon from '../../../../public/png/ana.png'
import Rudra from '../../../../public/png/rudransh.png'
import Tanvi from '../../../../public/png/tanvi.png'

import styles from './styles.module.scss'

const data = [
  {
    id: 1,
    title: 'Rudransh Sehrawat',
    description:
      '"He understood exactly what I was going through and helped me craft a standout application. Thanks to him, I’m now at my dream school, Harvard!"',
    school: 'Class 7 Amity International School, Noida',
    image: AnaIcon,
  },
  {
    id: 2,
    title: 'Anaisha Niranjan',
    description:
      '"He understood exactly what I was going through and helped me craft a standout application. Thanks to him, I’m now at my dream school, Harvard!"',
    school: 'Class 6 Delhi Public School, Noida',
    image: Rudra,
  },
  {
    id: 3,
    title: 'Tanvi Rajput',
    description:
      '"He understood exactly what I was going through and helped me craft a standout application. Thanks to him, I’m now at my dream school, Harvard!"',
    school: 'Class 7 Apeejay School, Noida',
    image: Tanvi,
  },
]
const FeedbackContainer = () => {
  return (
    <article className={styles['wrapper-container']}>
      <div>
        <p className={styles['question-asked']}>Frequently Asked Questions</p>
        <p className={styles['title-wrapper']}>Hear from our Students</p>
      </div>{' '}
      <ThreeDCardDemo data={data} />
    </article>
  )
}

export default FeedbackContainer
