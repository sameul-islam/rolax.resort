import React from "react";
import { motion } from "framer-motion";
import FamilyRoomImg from "../../assets/image/family-room.avif";
import DeluxeRoomImg from "../../assets/image/deluxe-room.avif";
import SuiteRoomImg from "../../assets/image/suite-room.avif";
import ApartmentImg from "../../assets/image/apartment-room.avif";

const rooms = [
  {
    img: FamilyRoomImg,
    name: "Family Room",
    description: "Spacious room perfect for your family stay with modern amenities.",
    price: 450,
  },
  {
    img: DeluxeRoomImg,
    name: "Deluxe Room",
    description: "Enjoy luxury and comfort in our elegantly designed Deluxe Room.",
    price: 500,
  },
  {
    img: SuiteRoomImg,
    name: "Suite Room",
    description: "Experience ultimate comfort in our premium Suite Room.",
    price: 650,
  },
  {
    img: ApartmentImg,
    name: "Apartment",
    description: "Perfect for long stays, with full kitchen and living space.",
    price: 700,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const FeaturedRooms = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="text-center mb-12">
        <p className="text-[#4b4b4b] font-PT uppercase text-md md:text-lg">Our Rooms</p>
        <h2 className="text-4xl md:text-5xl py-5 md:py-8 font-Playfair font-bold text-[#3d3d3d]/90 mt-2">
          Featured Rooms
        </h2>
      </div>

      <motion.div
        className="grid grid-cols-1 font-Libre sm:grid-cols-2 xl:grid-cols-4 gap-8 px-4 md:px-8 xl:px-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {rooms.map((room, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            className="bg-white hover:rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500"
          >
            <img src={room.img} alt={room.name} className="w-full h-56 object-cover" />
            <div className="p-6 flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-gray-800">{room.name}</h3>
              <p className="text-gray-600 text-sm">{room.description}</p>
              <div className="flex justify-between items-center mt-4">
                <p className="text-[#eaaa76] font-bold text-lg">${room.price} / Night</p>
                <button className="bg-[#eaaa76] hover:bg-[#f0c27b] text-black px-4 py-2 font-semibold transition duration-300">
                  Book Now
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FeaturedRooms;
