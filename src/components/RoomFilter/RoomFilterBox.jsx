import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const RoomFilterBox = () => {
  const [roomType, setRoomType] = useState("");
  const [viewType, setViewType] = useState("");
  const [guests, setGuests] = useState(1);
  const [children, setChildren] = useState(0);

  return (
    <div className="bg-[#2f3542] font-EB text-white shadow-lg mb-20  p-6 md:p-8 mx-4 md:mx-10 -mt-20 relative">
      <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        
        {/* Check-in */}
        <div className="flex flex-col">
          <label className="text-gray-100 font-semibold mb-1">Check-in</label>
          <input
            type="date"
            className="border border-white/60 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#eaaa76]"
          />
        </div>

        {/* Check-out */}
        <div className="flex flex-col">
          <label className="text-gray-100 font-semibold mb-1">Check-out</label>
          <input
            type="date"
            className="border border-white/60 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#eaaa76]"
          />
        </div>

        {/* Room Type */}
        <div className="flex flex-col relative">
          <label className="text-gray-100 font-semibold mb-1">Room Type</label>
          <select
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            className="appearance-none border border-white/60 bg-[#2f3542] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#eaaa76] pr-8"
          >
            <option value="">Select Type</option>
            <option value="classic">Classic Rooms</option>
            <option value="deluxe">Family Rooms</option>
            <option value="suite">Superior Rooms</option>
            <option value="luxary">Luxury Rooms</option>
          </select>
        </div>

        {/* Guests */}
        <div className="flex flex-col">
          <label className="text-gray-100 font-semibold mb-1">Guests</label>
          <input
            type="number"
            min="1"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="border border-white/60 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#eaaa76]"
          />
        </div>

        {/* View Type */}
        <div className="flex flex-col relative">
          <label className="text-gray-100 font-semibold mb-1">View Type</label>
          <select
            value={viewType}
            onChange={(e) => setViewType(e.target.value)}
            className="appearance-none border border-white/60 bg-[#2f3542] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#eaaa76] pr-8"
          >
            <option value="">Select View</option>
            <option value="sea">Sea View</option>
            <option value="city">City View</option>
            <option value="garden">Garden View</option>
          </select>
        </div>

        {/* Available Button */}
        <div className="flex items-end">
          <button
            type="submit"
            className="w-full bg-[#e8b285] text-[#3d3d3d] font-semibold py-3 hover:bg-[#e2b36c] transition"
          >
            Check Availability
          </button>
        </div>

      </form>
    </div>
  );
};

export default RoomFilterBox;
