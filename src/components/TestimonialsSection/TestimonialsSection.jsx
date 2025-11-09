import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import user1 from "../../assets/image/user1.avif";
import user2 from "../../assets/image/user2.avif";
import user3 from "../../assets/image/user3.avif";
import user4 from "../../assets/image/user4.avif";
import user5 from "../../assets/image/user5.avif";
import user6 from "../../assets/image/user6.avif";

const testimonials = [
  {
    image: user1,
    name: "John Smith",
    role: "Business Traveler",
    rating: 5,
    text: "Amazing service and super clean rooms. The staff made me feel at home. Highly recommended!",
  },
  {
    image: user2,
    name: "Emily Johnson",
    role: "Vacation Guest",
    rating: 4,
    text: "Such a relaxing environment! The restaurant food was delicious, and the rooms were so cozy.",
  },
  {
    image: user3,
    name: "Michael Brown",
    role: "Family Guest",
    rating: 5,
    text: "Our family vacation was perfect here. The kids loved the pool and we loved the breakfast buffet!",
  },
  {
    image: user4,
    name: "Sophia Miller",
    role: "Solo Traveler",
    rating: 5,
    text: "I've stayed in many hotels, but this one truly stands out for its warmth and attention to detail.",
  },
  {
    image: user5,
    name: "Sophia Miller",
    role: "Solo Traveler",
    rating: 5,
    text: "I've stayed in many hotels, but this one truly stands out for its warmth and attention to detail.",
  },
  {
    image: user6,
    name: "Sophia Miller",
    role: "Solo Traveler",
    rating: 5,
    text: "I've stayed in many hotels, but this one truly stands out for its warmth and attention to detail.",
  },
];

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const currentTestimonial = testimonials[index];

  const slideVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, x: -100, transition: { duration: 0.6, ease: "easeIn" } },
  };

  return (
    <section className="bg-gray-50/80 py-8 md:py-14 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="text-center mb-12">
        <h4 className="font-PT text-lg md:text-xl text-gray-600">Testimonials</h4>
        <h1 className="text-4xl md:text-5xl font-Playfair py-4  text-[#4b4b4b]">
          What Our Guests Say
        </h1>
      </div>

      <div className="relative max-w-3xl font-Playfair mx-auto text-center min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white shadow-lg rounded-md p-10"
          >
            <img
              src={currentTestimonial.image}
              alt={currentTestimonial.name}
              className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-[#eaaa76] mb-6"
            />
            <p className="text-gray-600 italic leading-relaxed mb-6">
              “{currentTestimonial.text}”
            </p>
            <div className="flex justify-center mb-3">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="text-[#eaaa76] w-5 h-5 fill-[#eaaa76]" />
              ))}
            </div>
            <h3 className="text-lg font-bold text-[#4b4b4b]">{currentTestimonial.name}</h3>
            <p className="text-gray-500 text-sm">{currentTestimonial.role}</p>
          </motion.div>
        </AnimatePresence>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 space-x-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-4 h-1 rounded-2xl transition-all duration-300 ${
                i === index ? "bg-[#eaaa76] scale-125" : "bg-gray-300 hover:bg-[#eaaa76]/50"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
