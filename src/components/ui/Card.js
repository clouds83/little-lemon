import React from 'react'
import styles from './Card.module.css'

export default function Card({ image, name, title, price, description, url = '' }) {
  return (
    <div className={styles.card}>
      <img
        src={image}
        alt={name}
      />
      <div className={styles.cardInfo}>
        <div>
          <p>{title}</p>
          <span>{price}</span>
        </div>
        <p>{description}</p>
      </div>
      <a href={url}>Order for delivery</a>
    </div>
  )
}
