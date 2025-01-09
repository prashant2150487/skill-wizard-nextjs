'use client'

import React from 'react'
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik'
import * as Yup from 'yup'
import Button from '@/components/Button'

import styles from './styles.module.scss'
import { useToast } from '@/hooks/use-toast'

interface FormValues {
  fullName: string
  guardianName: string
  whatsappNumber: string
  emailAddress: string
}

const initialValues: FormValues = {
  fullName: '',
  guardianName: '',
  whatsappNumber: '',
  emailAddress: '',
}

const phoneRegExp = /^[6-9]\d{9}$/

const validationSchema = Yup.object({
  fullName: Yup.string().required('Full Name is required'),
  guardianName: Yup.string().required('Guardian Name is required'),
  whatsappNumber: Yup.string()
    .matches(phoneRegExp, 'Invalid phone number')
    .required('WhatsApp Number is required'),
  emailAddress: Yup.string()
    .email('Invalid email address')
    .required('Email Address is required'),
})

const RightSection: React.FC = () => {
  const { toast } = useToast()

  const handleSubmit = (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>,
  ) => {
    console.log('Form Submitted:', values)
    toast({
      title: '',
      description: 'Demo book successfully',
    })
    resetForm()
  }

  return (
    <div className={styles.container}>
      <h2>Register Today</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div className={styles.fieldContainer}>
              <Field
                name="fullName"
                placeholder="Full Name of your Ward"
                className={styles.input}
              />
              <ErrorMessage
                name="fullName"
                component="div"
                className={styles.error}
              />
            </div>

            <div className={styles.fieldContainer}>
              <Field
                name="guardianName"
                placeholder="Guardian Name"
                className={styles.input}
              />
              <ErrorMessage
                name="guardianName"
                component="div"
                className={styles.error}
              />
            </div>

            <div className={styles.fieldContainer}>
              <Field
                name="whatsappNumber"
                placeholder="WhatsApp Number"
                className={styles.input}
              />
              <ErrorMessage
                name="whatsappNumber"
                component="div"
                className={styles.error}
              />
            </div>

            <div className={styles.fieldContainer}>
              <Field
                name="emailAddress"
                placeholder="Email Address"
                className={styles.input}
              />
              <ErrorMessage
                name="emailAddress"
                component="div"
                className={styles.error}
              />
            </div>

            <Button type="submit" label="Schedule Demo Now!" />
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default RightSection
