// TeamSection.jsx
import React from "react";
import { motion } from "framer-motion";
import Chef1 from "../../assets/image/chef1.jpg";
import Chef2 from "../../assets/image/chef2.jpg";
import Chef3 from "../../assets/image/chef3.jpg";
import Chef4 from "../../assets/image/chef4.jpg";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const teamMembers = [
  {
    name: "John Doe",
    role: "Head Chef",
    image: Chef1,
  },
  {
    name: "Sarah Smith",
    role: "Sous Chef",
    image: Chef2,
  },
  {
    name: "Michael Brown",
    role: "Pastry Chef",
    image: Chef3,
  },
  {
    name: "Emily Johnson",
    role: "Restaurant Manager",
    image: Chef4,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const TeamSection = () => {
  return (
    <section className="w-full py-24 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-Playfair font-semibold text-[#3d3d3d]">
            Meet Our Team
          </h2>
          <p className="text-gray-600 font-EB text-base md:text-lg mt-4">
            Passionate professionals dedicated to delivering exceptional experiences.
          </p>
        </div>

        {/* Team Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="flex flex-col items-center font-Libre gap-4 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-[90%] sm:w-full h-80 sm:h-64 object-cover"
              />
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-[#3d3d3d]">{member.name}</h3>
                <p className="text-gray-500 text-sm mb-3">{member.role}</p>
                <div className="flex justify-center gap-3">
                  <a href="#" className="text-gray-500 hover:text-[#eaaa76] transition">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-[#eaaa76] transition">
                    <FaTwitter />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-[#eaaa76] transition">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
