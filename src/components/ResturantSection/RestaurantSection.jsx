
import React from "react";
import { motion } from "framer-motion";
import RestaurantImage from "../../assets/image/restaurant.avif"; 
import Menu1 from "../../assets/image/menu1.avif";
import Menu2 from "../../assets/image/menu2.avif";
import Menu3 from "../../assets/image/menu3.avif";
import Menu4 from "../../assets/image/menu4.avif";
import Menu5 from "../../assets/image/menu5.avif";
import Menu6 from "../../assets/image/menu6.avif";
import Menu7 from "../../assets/image/menu7.avif";
import Menu8 from "../../assets/image/menu8.avif";
import Menu9 from "../../assets/image/menu9.avif";
import Menu10 from "../../assets/image/menu10.avif";

const menuItems = [
  { name: "Grilled Salmon", price: "$25", img: Menu1 },
  { name: "Beef Steak", price: "$30", img: Menu2 },
  { name: "Caesar Salad", price: "$15", img: Menu3 },
  { name: "Margherita Pizza", price: "$20", img: Menu4 },
  { name: "Pasta Carbonara", price: "$22", img: Menu5 },
  { name: "Tiramisu Dessert", price: "$12", img: Menu6 },
  { name: "Chicken Wings", price: "$18", img: Menu7 },
  { name: "Veggie Burger", price: "$17", img: Menu8 },
  { name: "Lobster Bisque", price: "$28", img: Menu9 },
  { name: "Chocolate Cake", price: "$14", img: Menu10 },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const RestaurantSection = () => {
  return (
    <section className="relative w-full  px-4 md:px-8 lg:px-16 xl:px-2 2xl:px-16 py-24 bg-gray-50/80">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-lg text-gray-600 font-PT">Resto & Bar</p>
        <h2 className="text-4xl md:text-5xl py-6 md:py-8 font-Playfair font-bold text-[#4b4b4b]">
          Explore Our Restaurant & Bar
        </h2>
      </div>

      <div className="flex flex-col xl:flex-row items-start xl:items-center gap-12">
        {/* Left Image */}
        <motion.div
          className="xl:w-1/2 rounded-md overflow-hidden shadow-2xl"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <img
            src={RestaurantImage}
            alt="Restaurant"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right Menu Grid */}
        <motion.div
          className="w-full xl:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {menuItems.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="flex items-center justify-between p-5 bg-white rounded-tr-4xl rounded-bl-4xl shadow-lg cursor-pointer hover:bg-[#eab676] hover:text-white transition duration-300"
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

export default RestaurantSection;
