import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import styles from './styles.module.scss'

const faqData = [
  {
    id: 'item-1',
    question: 'Is it accessible?',
    answer: 'Yes. It adheres to the WAI-ARIA design pattern.',
  },
  {
    id: 'item-2',
    question: 'Is it styled?',
    answer:
      "Yes. It comes with default styles that match the other components' aesthetic.",
  },
  {
    id: 'item-3',
    question: 'Is it animated?',
    answer:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
  {
    id: 'item-4',
    question: 'Is it animated?',
    answer:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
  {
    id: 'item-5',
    question: 'Is it animated?',
    answer:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
]

const FaqContainer: React.FC = () => {
  return (
    <div className={styles['container-wrapper']}>
      <p className={styles['title-wrapper']}>Frequently Asked Questions</p>
      <Accordion
        type="single"
        collapsible
        className={styles['accordian-wrapper']}
      >
        {faqData.map((faq) => (
          <AccordionItem
            key={faq.id}
            value={faq.id}
            className={styles['accordian-container']}
          >
            <AccordionTrigger className={styles['question-container']}>
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className={styles['answer-container']}>
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

export default FaqContainer
