import React from "react";
import { LuBedDouble } from "react-icons/lu";
import { motion } from "framer-motion";
import CozyImage from "../../assets/image/cozy-room.avif";
import SpecialImage from "../../assets/image/special-offer.avif";
import { BiSolidOffer } from "react-icons/bi";
import { Link } from "react-router-dom";

const AboutSection = () => {


  return (
    <section className="flex flex-col lg:flex-row w-[99%] md:w-[95%] lg:w-[99%] xl:w-[90%] mx-auto  mt-72 lg:mt-40 gap-8 px-1 sm:px-4 lg:px-0 overflow-hidden">
      {/* Left Boxes */}
      <div className="flex flex-col md:flex-row gap-4 ">


        {/* Mobile Cozy Room */}
        <div
          className="relative  flex flex-col md:hidden justify-between bg-[#27272a] md:bg-black/60 hover:bg-[#27272a] transition-all duration-500 shadow-xl overflow-hidden h-[600px]">
          {/* Image */}
          <div className="h-1/2 w-full overflow-hidden">
            <img
              src={CozyImage}
              alt="Cozy Image"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Text */}
          <div className="flex flex-col justify-center items-center h-1/2 text-center px-4">
            <LuBedDouble size={60} className="text-[#f5b181]" />
            <h3 className="text-4xl md:text-5xl text-white font-Playfair py-4">
              Cozy Room
            </h3>
            <p className="text-sm md:text-base text-white font-EB leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati debitis quia in expedita consequatur consectetur quae ut! Delectus, quibusdam ipsa.
            </p>
          </div>
        </div>

        {/* Desktop Cozy Room */}
        <div
          className="relative hidden md:flex flex-col justify-between bg-[#27272a] md:bg-black/60 hover:bg-[#27272a] transition-all duration-500 shadow-xl overflow-hidden h-[600px]">
          {/* Text */}
          <div className="flex flex-col justify-center items-center h-1/2 text-center px-4">
            <LuBedDouble size={60} className="text-[#f5b181]" />
            <h3 className="text-4xl md:text-5xl text-white font-Playfair py-4">
              Cozy Room
            </h3>
            <p className="text-sm md:text-base text-white font-EB leading-relaxed">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem dolore quisquam omnis laborum commodi doloremque id modi, quasi sed molestiae!
            </p>
          </div>
          {/* Image */}
          <div className="h-1/2 w-full overflow-hidden">
            <img
              src={CozyImage}
              alt="Cozy Room"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Special Offer */}
        <div
          className="relative flex flex-col justify-between bg-[#27272a] md:bg-black/60 hover:bg-[#27272a] transition-all duration-500 shadow-xl overflow-hidden h-[600px]">
          {/* Image */}
          <div className="h-1/2 w-full overflow-hidden">
            <img
              src={SpecialImage}
              alt="Special Offer"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Text */}
          <div className="flex flex-col justify-center items-center h-1/2 text-center px-4">
            <BiSolidOffer size={60} className="text-[#f5b181]" />
            <h3 className="text-4xl md:text-5xl text-white font-Playfair py-4">
              Special Offer
            </h3>
            <p className="text-sm md:text-base text-white font-EB leading-relaxed">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat odio nemo ipsam sit eos, harum deleniti obcaecati natus nobis expedita.
            </p>
          </div>
        </div>
      </div>

      {/* Right About Section */}
      <motion.div
        className="lg:max-w-1/3 flex flex-col justify-center px-4 lg:px-0 text-center lg:text-left gap-6"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2.7, ease: [0.16, 1, 0.3, 1],}}
        viewport={{ once: true, amount: 0.4  }}
      >
        <p className="font-PT">About Us</p>
        <h2 className="text-4xl md:text-5xl font-Playfair font-bold text-[#4b4b4b]">
         Rolax.Resort A Hotel Booking Agency
        </h2>
        <p className="text-md md:text-lg text-gray-600 font-Roboto leading-relaxed">
          Rolax Resort offers a blend of luxury and comfort. Enjoy our
          beautifully designed rooms, special offers, and world-class service
          for a perfect holiday experience. Relax, rejuvenate, and make
          unforgettable memories with us.
        </p>
        <Link to="/rooms">
        <button className="bg-[#e5ae84] shadow-[0_0_15px_rgba(229,174,132,0.5)] text-gray-900 font-semibold px-6 py-3 font-Libre hover:bg-[#f2ad79] transition duration-300 w-max mx-auto lg:mx-0">
          Book Your Room Now
        </button>
        </Link>
      </motion.div>
    </section>
  );
};

export default AboutSection;
