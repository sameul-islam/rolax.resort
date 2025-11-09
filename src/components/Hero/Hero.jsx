import React, { useState } from "react";
import HeroImage from "../../assets/image/photo-43.avif";
import { easeIn, motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

const Hero = () => {

  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);

  return (
    <section
      className="relative h-screen md:bg-fixed flex flex-col items-center justify-center bg-center bg-cover"
      style={{
        backgroundImage: `url(${HeroImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 md:bg-black/40"></div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <motion.div
        className="relative z-10 text-center text-white px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: easeIn }}
      >
        <h1 className="text-5xl lg:text-8xl font-bold font-Playfair mb-6 drop-shadow-2xl">
          Most Relaxing Place
        </h1>
        <p className="text-md lg:text-lg font-medium drop-shadow-lg font-Lora">
          ENJOY YOUR WONDERFUL HOLIDAYS WITH A GREAT LUXURY EXPERIENCE!
        </p>
      </motion.div>

      {/* Booking Box */}
      <div className="absolute -bottom-[250px] lg:bottom-5 w-[90%] md:w-[80%] lg:w-[99%] xl:w-[94%] 2xl:w-[82%] bg-[#3d3d3d] border-white/50  shadow-lg flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-2.5 xl:gap-5 px-6 py-8 text-white font-Roboto whitespace-nowrap">
          {/* Check In */}
          <div className="flex flex-col sm:flex-row sm:gap-5 lg:flex-col">
           <label className="text-sm mb-1 font-light">Check In</label>
           <DatePicker 
           selected={checkIn}
           onChange={(date) => setCheckIn(date)}
           placeholderText="Select date"
           className="bg-transparent border border-white/40  px-3 py-2 text-white focus:outline-none placeholder-white/70"
           />
          </div>
          {/* Check Out */}
          <div className="flex flex-col sm:flex-row sm:gap-5 lg:flex-col">
             <label className="text-sm mb-1 font-light">Check Out</label>
             <DatePicker
             selected={checkOut}
             onChange={(date) => setCheckOut(date)}
             placeholderText="Select date"
             className="bg-transparent border border-white/40  px-3 py-2 text-white focus:outline-none placeholder-white/70"
             />
          </div>
          {/* Room Type */}
          <div className="flex flex-col sm:flex-row sm:gap-5 lg:flex-col">
            <label className="text-sm mb-1 font-light">Room Type</label>
             <Dropdown
             label="Select Room"
             options={["Classic Room", "Luxury Room", "Family Room", "Superior Room"]}
             onSelect={(val) => console.log("Room Type:", val)}
           />
          </div>
          {/* Guests */}
          <div className="flex flex-col sm:flex-row sm:gap-5 lg:flex-col">
            <label className="text-sm font-light mb-1">Guest</label>
          <Dropdown
  label="#of Person"
  options={["1 Person", "2 Persons", "3 Persons", "4 Persons", "5 Person", "6-9 Person", "10+ Person"]}
  onSelect={(val) => console.log("Guests:", val)}
/>
          </div>
          {/* Button */}
          <Link to='/'>
          <button className="bg-[#e5ae84] text-gray-900 font-semibold px-6 lg:px-3 py-4 hover:bg-[#f2ad79] transition duration-300">
            Check Availability
          </button>
          </Link>
      </div>
    </section>
  );
};

export default Hero;








