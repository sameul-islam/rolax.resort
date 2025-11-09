// import React, { useState } from "react";
// import { FiZoomIn } from "react-icons/fi";
// import { motion, AnimatePresence } from "framer-motion";
// import gallery1 from "../../assets/image/gallery1.avif";
// import gallery2 from "../../assets/image/gallery2.avif";
// import gallery3 from "../../assets/image/gallery3.avif";
// import gallery4 from "../../assets/image/gallery4.avif";
// import gallery5 from "../../assets/image/gallery5.avif";
// import gallery6 from "../../assets/image/gallery6.avif";

// const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

// const GallerySection = () => {
//   const [selectedImg, setSelectedImg] = useState(null);

//   return (
//     <section className="py-20 px-4 md:px-8 xl:px-16 bg-gray-100">
//       <h4 className="font-PT text-lg md:text-xl text-gray-600 text-center">Our Gallery</h4>
//       <h1 className="text-4xl md:text-5xl font-Playfair text-center py-6 md:py-8 font-bold text-[#4b4b4b]">
//         Instagram Gallery
//       </h1>

//       {/* Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
//         {images.map((img, idx) => (
//           <motion.div
//             key={idx}
//             className="relative cursor-pointer overflow-hidden rounded-lg"
//             whileHover="hover"
//             onClick={() => setSelectedImg(img)}
//           >
//             <img
//               src={img}
//               alt={`Gallery ${idx + 1}`}
//               className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
//             />

//             {/* Overlay */}
//             <motion.div
//               className="absolute top-0 left-0 w-full h-full bg-black/40 flex items-center justify-center"
//               variants={{
//                 hover: { x: 0, opacity: 1 },
//                 initial: { x: "-100%", opacity: 0 },
//               }}
//               initial="initial"
//               whileHover="hover"
//               transition={{ duration: 0.5, ease: "easeOut" }}
//             >
//               <FiZoomIn className="text-white text-3xl md:text-4xl" />
//             </motion.div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Lightbox / Popup */}
//       <AnimatePresence>
//         {selectedImg && (
//           <motion.div
//             className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelectedImg(null)}
//           >
//             <motion.img
//               src={selectedImg}
//               alt="Selected"
//               className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"
//               initial={{ scale: 0.8 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.8 }}
//               transition={{ type: "spring", stiffness: 150, damping: 20 }}
//             />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default GallerySection;







import React, { useState } from "react";
import { FiZoomIn } from "react-icons/fi";
import gallery1 from "../../assets/image/gallery1.avif";
import gallery2 from "../../assets/image/gallery3.avif";
import gallery3 from "../../assets/image/gallery4.avif";
import gallery4 from "../../assets/image/gallery5.avif";
import gallery5 from "../../assets/image/gallery6.avif";

const images = [gallery1, gallery2, gallery3, gallery4, gallery5];

const GallerySection = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="pt-20  bg-gray-50 overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-1 md:gap-0">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="relative cursor-pointer overflow-hidden group"
            onClick={() => setSelectedImg(img)}
          >
            <img
              src={img}
              alt={`Gallery ${idx + 1}`}
              className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute top-0 -left-full w-full h-full bg-black/40 flex items-center justify-center transition-all duration-500 ease-out group-hover:left-0">
              <FiZoomIn className="text-white/80 text-3xl md:text-4xl" />
            </div>
          </div>
        ))}
      </div>

      {/* Popup Lightbox */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center  p-1"
          onClick={() => setSelectedImg(null)}
        >
          <img
            src={selectedImg}
            alt="Selected"
            className="max-h-[98vh] max-w-[98vw] md:max-h-[90vh] md:max-w-[90vw] rounded-sm shadow-2xl transition-transform duration-300"
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
