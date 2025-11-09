import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import ScrollToTopButton from './components/ScrollToTop/ScrollToTop'
import Rooms from './pages/Rooms/Rooms'
import BookingPage from './pages/BookingPage/BookingPage'
import RestoBar from './pages/Resto&Bar/RestoBar'
import About from './pages/About/About'
import Blog from './pages/Blog/Blog'
import Contact from './pages/Contact/Contact'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/rooms' element={<Rooms/>} />
        <Route path='/booking/:id' element={<BookingPage/>} />
        <Route path='/resto&bar' element={<RestoBar/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer/>
      <ScrollToTopButton/>
    </div>
  )
}

export default App
