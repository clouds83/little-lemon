import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import BookingForm from './components/BookingForm'
import Modal from './components/ui/Modal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      {isModalOpen && (
        <Modal
          component={BookingForm}
          onClose={handleCloseModal}
        />
      )}

      <Header onOpenBookingForm={handleOpenModal} />
      <main>
        <Hero onOpenBookingForm={handleOpenModal} />

        <Highlights />
      </main>
      <footer>
        <div className="container">Footer</div>
      </footer>
    </>
  )
}

export default App
