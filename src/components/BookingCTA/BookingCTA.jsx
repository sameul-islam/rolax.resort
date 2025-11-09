import React, { useState } from "react";
import { BedDouble, Users, CalendarDays, ChevronDown, CheckCircle } from "lucide-react";
import CTAImage from "../../assets/image/BookingCTA.avif";
import { Link } from "react-router-dom";

const BookingSection = () => {
  const [nights, setNights] = useState(1);
  const [guests, setGuests] = useState(2);
  const [type, setType] = useState("Room");

  const basePrices = {
    Room: 100,
    Suite: 150,
    Deluxe: 200,
    Apartment: 250,
  };

  const totalPrice = basePrices[type] * nights + guests * 20;

  return (
    <section
      className="relative w-full md:bg-fixed bg-cover bg-center py-24"
      style={{
         backgroundImage: `url(${CTAImage})`,
                backgroundPosition: "center",
                backgroundSize: "cover" 
    }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Text Section */}
        <div className="text-white md:w-1/2 space-y-5">
          <h3 className="text-2xl font-semibold text-[#eaaa76] font-Lora uppercase tracking-wide">
            Find Best Hotel for Living
          </h3>
          <h1 className="text-4xl font-Playfair md:text-5xl font-bold leading-tight">
            Find the Best Hotel <br /> for Your Next Vacation
          </h1>
          <p className="text-gray-300 font-Playfair leading-relaxed max-w-md">
            Experience comfort, luxury, and personalized service with our top-rated rooms and exclusive offers.
            Book your stay now and make unforgettable memories. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus laborum iusto ullam odit nostrum.
          </p>

          <div className="flex items-center gap-4 mt-6">
          <Link to='/rooms'> 
          <button className="px-6 py-3 bg-[#eab676] hover:bg-[#f0c27b] font-EB text-black font-semibold  transition duration-300">
              Book Now
            </button>
            </Link> 
          <Link to="/contact">
           <button className="px-6 py-3 border-2 border-[#eab676] hover:bg-[#eab676] hover:text-black text-white font-semibold font-PT transition duration-300">
              Contact Us
            </button>
            </Link> 
          </div>
        </div>

        {/* Right Booking Form */}
        <form
          className="backdrop-blur-md font-Playfair bg-white/10 border border-white/20 p-6 rounded-2xl shadow-2xl md:w-[400px] w-full text-white space-y-6"
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BedDouble className="text-[#eab676]" /> Book Your Stay
          </h2>

          {/* Number of Nights */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-1">
              <CalendarDays className="text-[#eab676]" size={18} />
              Number of Nights
            </label>
            <select
              value={nights}
              onChange={(e) => setNights(Number(e.target.value))}
              className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-[#eab676] appearance-none relative"
              style={{
                backgroundImage: "none",
              }}
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num} Night{num > 1 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>

          {/* Number of Guests */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-1">
              <Users className="text-[#eab676]" size={18} />
              Number of Guests
            </label>
            <input
              type="range"
              min="1"
              max="10"
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full accent-[#eab676]"
            />
            <p className="text-right text-sm text-gray-300">
              Guests: <span className="font-semibold text-[#eab676]">{guests}</span>
            </p>
          </div>

          {/* Room Type */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-1">
              <BedDouble className="text-[#eab676]" size={18} />
              Type of Accommodation
            </label>
            <div className="relative">
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-[#eab676] appearance-none"
                style={{ backgroundImage: "none" }}
              >
                <option value="Room">Room</option>
                <option value="Suite">Suite</option>
                <option value="Deluxe">Deluxe</option>
                <option value="Apartment">Apartment</option>
              </select>
            </div>
          </div>

          {/* Total Price */}
          <div className="border-t border-white/10 pt-4">
            <p className="text-sm text-gray-300">Total Price</p>
            <p className="text-3xl font-bold text-[#eab676]">${totalPrice}</p>
          </div>

          <button
            type="submit"
            className="w-full mt-4 flex items-center justify-center gap-2 bg-[#eab676] text-black font-semibold py-3 rounded-full hover:bg-[#f0c27b] transition duration-300"
          >
            <CheckCircle size={18} /> Confirm Booking
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingSection;







