import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CallButton from './components/CallButton'
import WhatsAppButton from './components/WhatsAppButton'
import PageTransition from './components/PageTransition'
import LoaderScreen from './components/LoaderScreen'

import Home from './pages/Home'
import Locations from './pages/Locations'
import CityPage from './pages/CityPage'
import AreaPage from './pages/AreaPage'
import Hotels from './pages/Hotels'
import HotelDetails from './pages/HotelDetails'
import Booking from './pages/Booking'
import About from './pages/About'
import Contact from './pages/Contact'
import Experiences from './pages/Experiences'
import Offers from './pages/Offers'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Cancellation from './pages/Cancellation'
import Refund from './pages/Refund'
import NotFound from './pages/NotFound'

export default function App() {
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 3000)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <LoaderScreen visible={isLoading} />
      {!isLoading && (
        <>
          <Navbar />
          <main className="flex-1">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                <Route path="/locations" element={<PageTransition><Locations /></PageTransition>} />
                <Route path="/locations/:citySlug" element={<PageTransition><CityPage /></PageTransition>} />
                <Route path="/locations/:citySlug/:areaSlug" element={<PageTransition><AreaPage /></PageTransition>} />
                <Route path="/hotels" element={<PageTransition><Hotels /></PageTransition>} />
                <Route path="/hotels/:hotelSlug" element={<PageTransition><HotelDetails /></PageTransition>} />
                <Route path="/booking" element={<PageTransition><Booking /></PageTransition>} />
                <Route path="/about" element={<PageTransition><About /></PageTransition>} />
                <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
                <Route path="/offers" element={<PageTransition><Offers /></PageTransition>} />
                <Route path="/experiences" element={<PageTransition><Experiences /></PageTransition>} />
                <Route path="/privacy" element={<PageTransition><Privacy /></PageTransition>} />
                <Route path="/terms" element={<PageTransition><Terms /></PageTransition>} />
                <Route path="/cancellation" element={<PageTransition><Cancellation /></PageTransition>} />
                <Route path="/refund" element={<PageTransition><Refund /></PageTransition>} />
                <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
          <CallButton />
          <WhatsAppButton />
        </>
      )}
    </div>
  )
}
