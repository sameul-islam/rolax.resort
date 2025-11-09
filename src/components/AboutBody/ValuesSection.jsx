// ValuesSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { GiCoffeeCup, GiFamilyHouse, GiKnifeFork } from "react-icons/gi";
import { IoIosBed } from "react-icons/io";


const valuesData = [
  {
    icon: <GiKnifeFork className="w-12 h-12 text-[#eaaa76]" />,
    title: "Gourmet Dining",
    description: "Experience world-class cuisine prepared by our expert chefs.",
  },
  {
    icon: <GiCoffeeCup className="w-12 h-12 text-[#eaaa76]" />,
    title: "Premium Beverages",
    description: "Handcrafted cocktails and premium beverages to delight every palate.",
  },
  {
    icon: <IoIosBed className="w-12 h-12 text-[#eaaa76]" />,
    title: "Luxury & Comfort",
    description: "Elegant rooms and suites offering unmatched comfort and style.",
  },
  {
    icon: <GiFamilyHouse className="w-12 h-12 text-[#eaaa76]" />,
    title: "Family Friendly",
    description: "Spacious facilities and amenities catering to families and children.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ValuesSection = () => {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-Playfair font-semibold text-[#3d3d3d]">
            Our Core Values
          </h2>
          <p className="text-gray-600 font-EB text-base md:text-lg mt-4">
            The principles that define us and guide every experience for our guests.
          </p>
        </div>

        {/* Values Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {valuesData.map((value, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="flex flex-col font-Libre items-center gap-4 p-6 bg-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 text-center"
            >
              {value.icon}
              <h3 className="text-xl font-semibold text-[#3d3d3d]">{value.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection;
