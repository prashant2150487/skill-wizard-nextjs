'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import ImageContainer from '../Images'

import styles from './styles.module.scss'

interface ThreeCardDemoType {
  data: any
}
const ThreeDCardDemo: React.FC<ThreeCardDemoType> = (props) => {
  const { data } = props

  return (
    <div key={Math.random()} className={styles['container-wrapper']}>
      {data.map((item: any, index: number) => (
        <Card key={index} className={styles['card-container']}>
          <CardHeader>
            <CardTitle className={styles['card-title']}>
              <ImageContainer
                alt="student id"
                icon={item.image}
                className={styles['image-container']}
              />
            </CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{item.title}</p>
            <p>{item.school}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default ThreeDCardDemo
