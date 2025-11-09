import React from "react";
import { motion } from "framer-motion";
import MissionImage from "../../assets/image/mission.avif"; 

const MissionSection = () => {
  return (
    <section className="w-full py-24 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10 lg:px-16 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Image */}
        <motion.div
          className="lg:w-1/2 rounded-xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <img
            src={MissionImage}
            alt="Our Mission"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          className="lg:w-1/2 flex flex-col gap-6"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-Playfair font-bold text-[#3d3d3d]">
            Our Story & Mission
          </h2>
          <p className="text-gray-600 font-EB text-base md:text-lg leading-relaxed">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eveniet rerum ab error accusantium obcaecati, provident similique fuga aliquam neque nesciunt sunt incidunt eligendi quia asperiores deserunt temporibus saepe unde exercitationem eum libero quidem tenetur rem architecto! Ipsa, facilis ab?
          </p>
          <p className="text-gray-600 font-PT text-base md:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic et, expedita corporis doloribus est saepe ducimus libero atque cum, eaque illo ex vel. Lorem ipsum dolor sit amet consectetur.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
