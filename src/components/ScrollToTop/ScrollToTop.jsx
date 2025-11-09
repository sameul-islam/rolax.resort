import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { RiArrowUpDoubleLine } from "react-icons/ri";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-6 md:right-10 bg-[#eaaa76] text-gray-800 p-3 rounded-xl shadow-lg hover:bg-[#f1a262] transition-all duration-300 z-9999"
    >
      <RiArrowUpDoubleLine className="text-xl" />
    </motion.button>
  );
};

export default ScrollToTopButton;