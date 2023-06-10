import React, { useEffect, useState } from 'react'
import styles from './BookingForm.module.css'

const timeOptions = [
  '11:30',
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '16:30',
  '17:00',
  '17:30',
  '18:00',
  '18:30',
  '19:00',
  '19:30',
]

const personOptions = ['1 person', '2 person', '3 person', '4 person', '5 person']

export default function BookingForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [tableSize, setTableSize] = useState('')
  const [chosenTime, setChosenTime] = useState('')
  const [chosenDate, setChosenDate] = useState('')

  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [tableSizeError, setTableSizeError] = useState(false)
  const [chosenTimeError, setChosenTimeError] = useState(false)
  const [chosenDateError, setChosenDateError] = useState(false)

  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    if (isSubmitted) {
      const buttonTextResume = setTimeout(() => {
        setIsSubmitted(false)
      }, 2000)
      return () => {
        clearTimeout(buttonTextResume)
      }
    }
  }, [isSubmitted])

  function submitForm(e) {
    e.preventDefault()

    let hasError = false

    if (name.trim().length === 0) {
      setNameError(true)
      hasError = true
    }

    if (email.trim().length === 0 || !email.includes('@')) {
      setEmailError(true)
      hasError = true
    }

    if (!personOptions.includes(tableSize)) {
      setTableSizeError(true)
      hasError = true
    }

    if (
      new Date(chosenDate) < new Date() ||
      !new Date(chosenDate) ||
      !timeOptions.includes(chosenTime)
    ) {
      setChosenDateError(true)
      hasError = true
    }

    if (hasError) {
      alert('Invalid input! Please check the error message.')
      setIsSubmitted(false)
      return
    }

    setNameError(false)
    setEmailError(false)
    setTableSizeError(false)
    setChosenDateError(false)
    setChosenTimeError(false)

    const chosenHour = +chosenTime.split(':')[0]
    const chosenMinute = +chosenTime.split(':')[1]
    const combinedDateTime = new Date(chosenDate).setHours(chosenHour, chosenMinute)
    const reservedTime = new Date(combinedDateTime)

    console.log({ name, email, tableSize, reservedTime })

    setName('')
    setEmail('')
    setTableSize('')
    setChosenTime('')
    setChosenDate('')
    setIsSubmitted(true)
  }

  function validateEmail() {
    if (email.trim().length === 0 || !email.includes('@')) {
      setEmailError(true)
    }
  }

  function validateName() {
    if (name.trim().length === 0) {
      setNameError(true)
    }
  }

  return (
    <div className={styles.bookingFormWrapper}>
      <form onSubmit={submitForm}>
        <h3>Book a Table</h3>
        <div className={styles.controlForm}>
          <label htmlFor="name">Your Name</label>
          <input
            required
            name="name"
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={validateName}
          />
          {nameError && <p className={styles.inputError}>Name must not be empty</p>}
        </div>

        <div className={styles.controlForm}>
          <label htmlFor="email">Email</label>
          <input
            required
            name="email"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
          />
          {emailError && <p className={styles.inputError}>Invalid Email</p>}
        </div>

        <div className={styles.controlForm}>
          <label htmlFor="tableSize">Table Size</label>
          <select
            required
            id="tableSize"
            name="tableSize"
            value={tableSize}
            onChange={(e) => setTableSize(e.target.value)}>
            <option
              disabled
              value="">
              Choose...
            </option>
            {personOptions.map((option, index) => (
              <option
                key={index}
                value={option}>
                {option}
              </option>
            ))}
          </select>
          {tableSizeError && <p className={styles.inputError}>Please choose one of the options.</p>}
        </div>

        <div className={styles.controlForm}>
          <label htmlFor="date">Date</label>
          <input
            required
            id="date"
            name="date"
            type="date"
            min={new Date().toISOString().slice(0, 10)}
            value={chosenDate}
            onChange={(e) => setChosenDate(e.target.value)}
          />
          {chosenDateError && (
            <p className={styles.inputError}>Invalid Date, please choose a date after today!</p>
          )}
        </div>

        <div className={styles.controlForm}>
          <label htmlFor="time">Time</label>
          <select
            required
            id="time"
            name="time"
            value={chosenTime}
            onChange={(e) => setChosenTime(e.target.value)}>
            <option
              disabled
              value="">
              -- : --
            </option>
            {timeOptions.map((time, index) => (
              <option
                key={index}
                value={time}>
                {time}
              </option>
            ))}
          </select>

          {chosenTimeError && (
            <p className={styles.inputError}>Please choose one of the options.</p>
          )}
        </div>

        {isSubmitted ? (
          <p style={{ fontSize: '1rem' }}>Submit Reservation Success!</p>
        ) : (
          <input
            type="submit"
            value="Book now!"
            title="submitButton"
          />
        )}
      </form>
    </div>
  )
}
