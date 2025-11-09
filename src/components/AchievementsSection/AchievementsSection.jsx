// import React from "react";
// import CountUp from "react-countup";
// import { motion } from "framer-motion";
// import { FaSmile, FaBed, FaUsers, FaMapMarkerAlt } from "react-icons/fa";

// const stats = [
//   { icon: <FaSmile />, value: 38000, label: "Happy Guests" },
//   { icon: <FaBed />, value: 320, label: "Luxury Rooms" },
//   { icon: <FaUsers />, value: 1000, label: "Expert Staffs" },
//   { icon: <FaMapMarkerAlt />, value: 587, label: "Destinations" },
// ];

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
// };

// const AchievementsSection = () => {
//   return (
//     <section className="bg-[#fffaf5] py-20 px-4 md:px-10 lg:px-16 flex flex-col items-center">
//       <h4 className="text-lg text-[#eaaa76] font-PT tracking-wide uppercase">
//         Our Achievements
//       </h4>
//       <h1 className="text-4xl md:text-5xl font-Playfair font-bold text-[#4b4b4b] text-center mt-3 mb-14">
//         Hotel In Numbers
//       </h1>

//       <motion.div
//         className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 w-full max-w-[1300px]"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//       >
//         {stats.map((stat, idx) => (
//           <motion.div
//             key={idx}
//             variants={cardVariants}
//             className="flex flex-col items-center justify-center bg-white shadow-md hover:shadow-lg rounded-2xl p-6 md:p-10 transition-all duration-500"
//           >
//             <div className="text-5xl md:text-6xl text-[#eaaa76] mb-4">
//               {stat.icon}
//             </div>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
//               <CountUp start={0} end={stat.value} duration={3} separator="," />
//               {stat.label === "Happy Guests" && "+"}
//             </h2>
//             <p className="text-lg text-gray-600 mt-2 font-Libre text-center">
//               {stat.label}
//             </p>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default AchievementsSection;






import React, { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";
import { FaSmile, FaBed, FaUsers, FaMapMarkerAlt } from "react-icons/fa";

const stats = [
  { icon: <FaSmile />, value: 38000, label: "Happy Guests" },
  { icon: <FaBed />, value: 320, label: "Luxury Rooms" },
  { icon: <FaUsers />, value: 1000, label: "Expert Staffs" },
  { icon: <FaMapMarkerAlt />, value: 587, label: "Destinations" },
];

const AchievementsSection = () => {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#3d3d3d] font-Lora text-[#eec8a9] py-8 px-4 md:px-10 lg:px-16 items-center"
    >
      <div className="grid grid-cols-2 mx-auto md:grid-cols-4 gap-6 md:gap-10 w-full max-w-[1300px]">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center  p-6 transition-all duration-500"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              {startCount ? (
                <CountUp start={0} end={stat.value} duration={2.5} separator="," />
              ) : (
                0
              )}
              {stat.label === "Happy Guests" && "+"}
            </h2>
            <p className="text-lg mt-2 font-Playfair text-white text-center">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
