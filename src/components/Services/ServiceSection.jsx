
import React from 'react';
import { motion } from 'framer-motion';
import { BiSwim } from 'react-icons/bi';
import { GiHealthNormal } from 'react-icons/gi';
import { IoRestaurantOutline, IoWifi } from 'react-icons/io5';
import { LiaHandsHelpingSolid, LiaHotelSolid } from 'react-icons/lia';
import service1 from '../../assets/image/service1.png';
import service2 from '../../assets/image/service2.png';
import service3 from '../../assets/image/service3.png';
import service4 from '../../assets/image/service4.png';
import service5 from '../../assets/image/service5.png';
import service6 from '../../assets/image/service6.png';



const services = [
  { image: service1, label: 'Free WiFi' },
  { image: service2, label: 'Easy Booking' },
  { image: service3, label: 'Restaurant' },
  { image: service4, label: 'Swimming Pool' },
  { image: service5, label: 'Health Care' },
  { image: service6, label: 'Help & Support' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.24,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
};

const ServiceSection = () => {
  return (
    <section className="flex flex-col items-center mt-20 md:mt-32 bg-gray-50/80 py-16 px-4 md:px-8 lg:px-3 xl:px-16 mx-auto">
      <h4 className="font-PT text-lg md:text-xl text-gray-600">Rolax Services</h4>
      <h1 className="text-4xl md:text-5xl font-Playfair text-center py-6 md:py-8 font-bold text-[#4b4b4b]">
        Explore Our Hotel Services
      </h1>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 py-14 lg:grid-cols-6 gap-6 md:gap-8 lg:gap-3 2xl:gap-8 w-full max-w-[1600px]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            className=" flex flex-col items-center justify-center bg-white hover:bg-[#dfe6e9] shadow-lg p-6 md:p-8 text-center hover:rounded-4xl 
                       rounded-sm cursor-pointer overflow-hidden transition-all duration-500"
          >

            <div className="relative flex flex-col items-center justify-center z-10">
              <div className="mb-4 w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 flex items-center justify-center shadow rounded-xl p-2 hover:scale-105 hover:rotate-12 transition duration-500">
                 <img src={service.image} alt={service.label} className="w-full h-full object-contain"/>
              </div>
              <span className="text-md md:text-lg font-Libre text-[#4b4b4b] ">
                {service.label}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServiceSection;










// import React from 'react';
// import { motion } from 'framer-motion';
// import { BiSwim } from 'react-icons/bi';
// import { GiHealthNormal } from 'react-icons/gi';
// import { IoRestaurantOutline, IoWifi } from 'react-icons/io5';
// import { LiaHandsHelpingSolid, LiaHotelSolid } from 'react-icons/lia';

// const services = [
//   { icon: <IoWifi />, label: 'Free WiFi' },
//   { icon: <LiaHotelSolid />, label: 'Easy Booking' },
//   { icon: <IoRestaurantOutline />, label: 'Restaurant' },
//   { icon: <BiSwim />, label: 'Swimming Pool' },
//   { icon: <GiHealthNormal />, label: 'Health Care' },
//   { icon: <LiaHandsHelpingSolid />, label: 'Help & Support' },
// ];

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: { staggerChildren: 0.24 },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
//   },
// };

// const ServiceSection = () => {
//   return (
//     <section className="flex flex-col items-center mt-20 md:mt-32 bg-gray-50/80 py-16 px-4 md:px-8 lg:px-3 xl:px-16 mx-auto">
//       <h4 className="font-PT text-lg md:text-xl text-gray-600">Rolax Services</h4>
//       <h1 className="text-4xl md:text-5xl font-Playfair text-center py-6 md:py-8 font-bold text-[#4b4b4b]">
//         Explore Our Hotel Services
//       </h1>

//       <motion.div
//         className="grid grid-cols-2 sm:grid-cols-3 py-14 lg:grid-cols-6 gap-6 md:gap-8 lg:gap-3 2xl:gap-8 w-full max-w-[1600px]"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//       >
//         {services.map((service, idx) => (
//           <motion.div
//             key={idx}
//             variants={cardVariants}
//             className="group flex flex-col items-center justify-center bg-white shadow-lg 
//                        p-6 md:p-8 text-center rounded-t-full rounded-br-full cursor-pointer overflow-hidden 
//                        transition-all duration-500 hover:bg-[#eab676]"
//           >
//             <div className="relative flex flex-col items-center justify-center z-10 transition-all duration-500">
//               <div className="text-[#d3a46a] group-hover:text-white transition-all duration-500 text-6xl md:text-7xl xl:text-8xl mb-4">
//                 {service.icon}
//               </div>
//               <span className="text-md md:text-lg font-Libre text-[#4b4b4b] group-hover:text-white transition-all duration-500">
//                 {service.label}
//               </span>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default ServiceSection;
