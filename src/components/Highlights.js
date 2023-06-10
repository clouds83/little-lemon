import React from 'react'
import Card from './ui/Card'
import saladImg from '../assets/salad.jpg'
import spaghetti from '../assets/spaghetti.jpg'
import Bruschetta from '../assets/bruschetta.jpg'

import styles from './Highlights.module.css'

export default function Highlights() {
  return (
    <section className={`${styles.highlights} container`}>
      <div className={styles.toolbar}>
        <h2>Our Specials</h2>
        <button onClick={() => {}}>Online Menu</button>
      </div>

      <div className={styles.cardsWrapper}>
        <Card
          image={saladImg}
          name="Greek Salad"
          title="Greek Salad"
          price="$12.99"
          description="A traditional Greek salad consists of sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese."
        />
        <Card
          image={Bruschetta}
          name="Bruschetta"
          title="Bruschetta"
          price="$5.99"
          description="Bruschetta is an antipasto from Italy consisting of grilled bread rubbed with garlic and topped with olive oil and salt."
        />
        <Card
          image={spaghetti}
          name="Spaghetti"
          title="Spaghetti"
          price="$15.99"
          description="Our favorite weeknight friendly spaghetti recipe with a meat sauce that is made completely from scratch. Use ground beef, turkey, pork, chicken or lamb to make it!"
        />
      </div>
    </section>
  )
}
