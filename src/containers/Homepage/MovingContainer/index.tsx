'use client'

import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'

import styles from './styles.module.scss';

const MarqueeContainer: React.FC = () => {
  const items = [
    {
      quote: 'This is an amazing service!',
      name: 'John Doe',
      title: 'Software Engineer',
    },
    {
      quote: 'Highly recommend to everyone.',
      name: 'Jane Smith',
      title: 'Product Manager',
    },
    {
      quote: 'Fantastic experience overall.',
      name: 'Alice Brown',
      title: 'Designer',
    },
  ]

  return (
    <div className={styles['container-wrapper']}>
      <InfiniteMovingCards items={items} />
    </div>
  )
}

export default MarqueeContainer
