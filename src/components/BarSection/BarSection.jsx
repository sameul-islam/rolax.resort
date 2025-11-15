import React from "react";
import { motion } from "framer-motion";
import BarImage from "../../assets/image/bar.avif"; 
import Drink1 from "../../assets/image/drink1.avif";
import Drink2 from "../../assets/image/drink2.avif";
import Drink3 from "../../assets/image/drink3.avif";
import Drink4 from "../../assets/image/drink4.avif";
import Drink5 from "../../assets/image/drink5.avif";
import Drink6 from "../../assets/image/drink6.avif";
import Drink7 from "../../assets/image/drink7.avif";
import Drink8 from "../../assets/image/drink8.avif";
import Drink9 from "../../assets/image/drink9.avif";
import Drink10 from "../../assets/image/drink10.avif";

const barMenu = [
  { name: "Classic Mojito", price: "$12", img: Drink1 },
  { name: "Whiskey Sour", price: "$15", img: Drink2 },
  { name: "Margarita", price: "$14", img: Drink3 },
  { name: "Cosmopolitan", price: "$13", img: Drink4 },
  { name: "Bloody Mary", price: "$16", img: Drink5 },
  { name: "Old Fashioned", price: "$18", img: Drink6 },
  { name: "Pina Colada", price: "$15", img: Drink7 },
  { name: "Tequila Sunrise", price: "$14", img: Drink8 },
  { name: "Gin Tonic", price: "$12", img: Drink9 },
  { name: "Irish Coffee", price: "$16", img: Drink10 },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const BarSection = () => {
  return (
    <section className="relative w-full px-4 md:px-8 lg:px-16 xl:px-2 2xl:px-16 py-24 bg-[#faf7f3] overflow-hidden">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-lg text-gray-600 font-PT">Our Bar</p>
        <h2 className="text-4xl md:text-5xl py-6 md:py-8 font-Playfair font-bold text-[#4b4b4b]">
          Relax at Our Exclusive Bar
        </h2>
      </div>

      <div className="flex flex-col xl:flex-row-reverse items-start xl:items-center gap-12">
        {/* Right Image */}
        <motion.div
          className="xl:w-1/2 rounded-md overflow-hidden shadow-2xl"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <img
            src={BarImage}
            alt="Bar"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Left Menu Grid */}
        <motion.div
          className="w-full xl:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {barMenu.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="flex items-center justify-between p-5 bg-white rounded-tl-4xl rounded-br-4xl shadow-lg cursor-pointer hover:bg-[#d49e7b] hover:text-white transition duration-300"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover shadow-md"
                />
                <span className="text-gray-700 font-Libre group-hover:text-white">
                  {item.name}
                </span>
              </div>
              <span className="text-gray-700 font-semibold group-hover:text-white">
                {item.price}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BarSection;
