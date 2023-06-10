import React from 'react'
import styles from './Hero.module.css'
import heroImage from './../assets/hero-image.jpg'

export default function Hero({ onOpenBookingForm }) {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <div>
          <h1>Little Lemon</h1>
          <span className={styles.subtitle}>Chicago</span>
          <p>
            We are a Mediterranean restaurant, proudly owned by a family, dedicated to serving
            traditional recipes infused with a contemporary flair
          </p>
          <button
            onClick={() => {
              onOpenBookingForm()
            }}>
            Reserve a Table
          </button>
        </div>
        <div>
          <img
            src={heroImage}
            alt=""
          />
        </div>
      </div>
    </section>
  )
}
