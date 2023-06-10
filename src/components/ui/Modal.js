import React from 'react'
import styles from './Modal.module.css'

const Modal = ({ component: Component, onClose }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <button
          className={styles.closeButton}
          onClick={onClose}>
          <svg
            height="16px"
            version="1.1"
            viewBox="0 0 512 512"
            width="16px">
            <path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z" />
          </svg>
        </button>
        <Component />
      </div>
    </div>
  )
}

export default Modal
