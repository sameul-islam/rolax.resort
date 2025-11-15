import React, { useState } from 'react'
import HeroImage from '../../assets/image/Hero.avif';
import { easeIn, easeOut, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {

  return (
    <section className='relative h-screen lg:h-[90vh] bg-fixed flex flex-col items-center justify-center bg-center bg-cover' style={{ backgroundImage: `url(${HeroImage})`, backgroundPosition: "center", backgroundSize: " cover"}} >
      {/* Overlay */}
      <div className='absolute inset-0 bg-black/30 md:bg-black/40'> </div>

       {/* Hero Content */}
       <motion.div
       className='relative z-10 text-center text-white px-6'
       initial={{ opacity: 0, y: 50 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 1, ease: easeIn }}
       >
        <h1 className='text-5xl lg:text-8xl font-bold font-Playfair mb-6 drop-shadow-2xl'>
          Most Relaxing Place
        </h1>
         <p className='text-md lg:text-lg font-medium drop-shadow-lg font-Lora'>
           ENJOY YOUR WONDERFUL HOLIDAYS WITH A GREAT LUXURY EXPERIENCE!
         </p>
       </motion.div>

<motion.button
  className='z-10 relative overflow-hidden text-center text-lg font-semibold text-white mt-5 py-2 px-6 border-2 font-EB border-white
             bg-black/20 group hover:text-black transition-colors duration-200'
  initial={{ opacity: 0, y: 80 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 2, ease: easeOut }}
>
  <span className="absolute left-0 top-0 w-0 h-full bg-white transition-all duration-200 ease-linear group-hover:w-full -z-10"></span>
  <Link to="/rooms" className="relative z-10">
    BOOK A ROOM
  </Link>
</motion.button>


    </section>
  )
}

export default Hero





