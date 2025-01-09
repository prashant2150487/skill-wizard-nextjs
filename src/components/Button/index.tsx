'use client'

import React from 'react'
import styles from './styles.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
}

const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {label}
    </button>
  )
}

export default Button
