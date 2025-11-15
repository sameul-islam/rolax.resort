import React from "react";
import RestaurantHero from '../../assets/image/RestaurantHero.avif';
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const RestoBarHero = () => {
  return (
    <section
      className="relative h-[80vh] w-full bg-fixed bg-center bg-cover bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: `url(${RestaurantHero})`,
      }}
    >
      {/* Overlay for dark tint */}
      <div className="absolute inset-0 bg-black/40"></div>
 

      <div className="relative z-10 text-center text-white px-4 sm:px-6 md:px-10">

        <div className="flex items-center gap-3 font-Playfair justify-center">
        <Link to='/' className="flex text-lg items-center text-white/80 hover:text-[#e89f69] transition duration-300">Home <IoIosArrowForward /> </Link>
        <p className="flex text-lg items-center text-white/80 ">Resto&Bar <IoIosArrowForward/></p>
       </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-Playfair tracking-wide mb-4 leading-tight">
           A Taste of Elegance & Flavors
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 max-w-2xl mx-auto font-Roboto">
            Indulge in gourmet cuisine, handcrafted cocktails, and a warm ambiance that defines true fine dining.
        </p>

      </div>
      
    </section>
  );
};

export default RestoBarHero;
