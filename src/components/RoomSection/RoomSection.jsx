import React, { useState } from "react";
import roomsData from "../RoomsData"; 
import { Link } from "react-router-dom";

const RoomsSection = () => {
  const roomsPerPage = 6; 
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(roomsData.length / roomsPerPage);


  const indexOfLastRoom = currentPage * roomsPerPage;
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
  const currentRooms = roomsData.slice(indexOfFirstRoom, indexOfLastRoom);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" }); 
  };

  return (
    <section className="max-w-[1600px] mx-auto px-4 md:px-10 lg:px-16 py-16">
      <h2 className="text-4xl md:text-5xl font-Playfair text-center mb-8 text-[#4b4b4b]">
        Our Rooms
      </h2>

      {/* Rooms Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentRooms.map((room) => (
          <div
            key={room.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2 text-[#3d3d3d]">
                {room.name}
              </h3>
              <p className="text-gray-600 mb-3">{room.description}</p>
              <p className="text-lg font-bold text-[#eaaa76] mb-4">
                ${room.price} / Night
              </p>
              <Link
                to={`/booking/${room.id}`}
                className="inline-block w-full text-center py-3 bg-[#eaaa76] text-[#3d3d3d] font-semibold rounded hover:bg-[#f0c27b] transition"
              >
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12 gap-3">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`px-4 py-2 rounded border ${
              currentPage === i + 1
                ? "bg-[#eaaa76] text-[#3d3d3d] border-[#eaaa76]"
                : "bg-white text-gray-700 border-gray-300 hover:bg-[#f7e2c7]"
            } transition`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default RoomsSection;
