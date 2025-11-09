import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import BookHero from '../../assets/image/booking-hero.avif';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';

const BookingHero = () => {
  return (
      <section
      className="relative h-[50vh] w-full bg-fixed bg-center bg-cover bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: `url(${BookHero})`,
      }}
       >
      {/* Overlay for dark tint */}
      <div className="absolute inset-0 bg-black/40"></div>
 
       {/* Navbar */}
       <Navbar/>

      <div className="relative z-10 text-center text-white px-4 sm:px-6 md:px-10">

        <div className="flex items-center pt-6 gap-3 font-Playfair justify-center">
        <Link to='/rooms' className="flex text-lg items-center text-white/80 hover:text-[#e89f69] transition duration-300">Rooms <IoIosArrowForward /> </Link>
        <p className="flex text-lg items-center text-white/80 ">Booking <IoIosArrowForward/></p>
       </div>

       <h1 className="text-3xl sm:text-4xl md:text-5xl font-Playfair py-3 font-bold mb-2">Book Your Stay</h1>


      </div>
      
    </section>
  )
}

export default BookingHero
