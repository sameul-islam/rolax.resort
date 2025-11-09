import React from "react";
import ContactHeroImage from '../../assets/image/contacthero.avif';
import Navbar from "../Navbar/Navbar";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const ContactHero = () => {
  return (
    <section
      className="relative h-[60vh] w-full bg-fixed bg-center bg-cover bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: `url(${ContactHeroImage})`,
      }}
    >
      {/* Overlay for dark tint */}
      <div className="absolute inset-0 bg-black/40"></div>
 
       {/* Navbar */}
       <Navbar/>

      <div className="relative z-10 text-center text-white px-4 sm:px-6 md:px-10">

        <div className="flex items-center gap-3 font-Playfair justify-center">
        <Link to='/' className="flex text-lg items-center text-white/80 hover:text-[#e89f69] transition duration-300">Home <IoIosArrowForward /> </Link>
        <p className="flex text-lg items-center text-white/80 ">Contact <IoIosArrowForward/></p>
       </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-Playfair tracking-wide mb-4 leading-tight">
           Contact Us
        </h1>

      </div>
      
    </section>
  );
};

export default ContactHero;
