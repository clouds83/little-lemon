import React, { useState } from 'react'
import logo from '../assets/Asset 16@4x.png'
import styles from './Header.module.css'

export default function Header({ onOpenBookingForm }) {
  return (
    <header>
      <div className="container">
        <nav>
          <a href="/">
            <img
              src={logo}
              alt="Little Lemon"
            />
          </a>

          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Menu</a>
            </li>
            <li>
              <a
                onClick={() => {
                  onOpenBookingForm()
                }}>
                Reservation
              </a>
            </li>
            <li>
              <a>Order Online</a>
            </li>
            <li>
              <a>Login</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
