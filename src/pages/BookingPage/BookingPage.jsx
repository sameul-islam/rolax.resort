import React, { useState, useMemo, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import roomsData from "../../components/RoomsData";
import { FaCalendarAlt } from "react-icons/fa";
import BookingHero from "./BookingHero";


const TAX_RATE = 0.10; 

const BookingPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const roomId = parseInt(id, 10);


  const room = roomsData.find((r) => r.id === roomId) || roomsData[0];


  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [guests, setGuests] = useState(2);
  const [roomsCount, setRoomsCount] = useState(1);
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [paid, setPaid] = useState(false);


  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn).setHours(0,0,0,0);
    const end = new Date(checkOut).setHours(0,0,0,0);
    const diff = end - start;
    if (diff <= 0) return 0;
    return Math.round(diff / (1000 * 60 * 60 * 24));
  }, [checkIn, checkOut]);


  const subtotal = useMemo(() => {
    return nights * room.price * roomsCount;
  }, [nights, room.price, roomsCount]);

  const tax = useMemo(() => +(subtotal * TAX_RATE).toFixed(2), [subtotal]);
  const total = useMemo(() => +(subtotal + tax).toFixed(2), [subtotal, tax]);


  const validate = () => {
    const e = {};
    if (!checkIn) e.checkIn = "Please select check-in date.";
    if (!checkOut) e.checkOut = "Please select check-out date.";
    if (checkIn && checkOut && nights <= 0) e.date = "Check-out must be after check-in.";
    if (guests < 1) e.guests = "At least 1 guest is required.";
    if (roomsCount < 1) e.roomsCount = "Select at least 1 room.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setPaid(true);

    }, 1400);
  };

        useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div>
        <BookingHero/>
        
    <main className="max-w-[1200px] mx-auto px-4 md:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Room detail */}
        <section className=" lg:col-span-2 bg-white rounded-xl shadow-md overflow-hidden">
          <div className=" w-full h-64 md:h-96 overflow-hidden">
            <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
          </div>

          <div className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-Playfair text-[#333]">{room.name}</h1>
                <p className="text-sm text-gray-500 mt-1">{room.description}</p>
              </div>

              <div className="text-right">
                <p className="text-xl font-semibold text-[#eaaa76]">${room.price} <span className="text-sm text-gray-500">/ Night</span></p>
              </div>
            </div>

            {/* Amenities / small features (example) */}
            <ul className="flex flex-wrap gap-3 mt-5 text-sm">
              <li className="bg-gray-50 px-3 py-1 rounded text-gray-600">Free WiFi</li>
              <li className="bg-gray-50 px-3 py-1 rounded text-gray-600">Breakfast Included</li>
              <li className="bg-gray-50 px-3 py-1 rounded text-gray-600">Air Conditioning</li>
              <li className="bg-gray-50 px-3 py-1 rounded text-gray-600">Room Service</li>
            </ul>

            {/* Optional longer description / policies */}
            <div className="mt-6 border-t pt-4">
              <h3 className="font-semibold text-gray-700 mb-2">About this room</h3>
              <p className="text-gray-600 leading-relaxed">
                {room.description} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, odit.
              </p>
              <p className="text-xs text-gray-400 mt-3">
                Check-in: 2:00 PM · Check-out: 11:00 AM · Free cancellation up to 24 hours before arrival.
              </p>
            </div>
          </div>
        </section>

        {/* Right: Booking form / summary */}
        <aside className="bg-white rounded-xl shadow-md p-6">
          <form onSubmit={handleConfirm} aria-label="Booking form">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                  <FaCalendarAlt /> Check-in
                </label>
                <DatePicker
                  selected={checkIn}
                  onChange={(date) => {
                    setCheckIn(date);
                    setErrors(prev => ({...prev, checkIn: undefined, date: undefined}));
                  }}
                  selectsStart
                  startDate={checkIn}
                  endDate={checkOut}
                  minDate={new Date()}
                  placeholderText="Select check-in"
                  className="border border-gray-200 rounded px-3 py-2"
                />
                {errors.checkIn && <p className="text-red-400 text-xs mt-1">{errors.checkIn}</p>}
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                  <FaCalendarAlt /> Check-out
                </label>
                <DatePicker
                  selected={checkOut}
                  onChange={(date) => {
                    setCheckOut(date);
                    setErrors(prev => ({...prev, checkOut: undefined, date: undefined}));
                  }}
                  selectsEnd
                  startDate={checkIn}
                  endDate={checkOut}
                  minDate={checkIn || new Date()}
                  placeholderText="Select check-out"
                  className="border border-gray-200 rounded px-3 py-2"
                />
                {errors.checkOut && <p className="text-red-400 text-xs mt-1">{errors.checkOut}</p>}
                {errors.date && <p className="text-red-400 text-xs mt-1">{errors.date}</p>}
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">Guests</label>
                <input
                  type="number"
                  min="1"
                  value={guests}
                  onChange={(e) => setGuests(Math.max(1, Number(e.target.value)))}
                  className="border border-gray-200 rounded px-3 py-2"
                />
                {errors.guests && <p className="text-red-400 text-xs mt-1">{errors.guests}</p>}
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">Rooms</label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={roomsCount}
                  onChange={(e) => setRoomsCount(Math.max(1, Number(e.target.value)))}
                  className="border border-gray-200 rounded px-3 py-2"
                />
                {errors.roomsCount && <p className="text-red-400 text-xs mt-1">{errors.roomsCount}</p>}
              </div>
            </div>

            <div className="mt-4">
              <label className="text-sm font-medium text-gray-700 mb-1 block">Special requests (optional)</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Any preferences or requests..."
                className="w-full border border-gray-200 rounded p-3 text-sm"
                rows={3}
              />
            </div>

            {/* Price summary */}
            <div className="mt-5 border rounded-lg border-gray-100 p-4 bg-gray-50">
              <div className="flex justify-between text-sm text-gray-600">
                <span>{nights} night(s) × ${room.price} × {roomsCount} room(s)</span>
                <span>${(nights * room.price * roomsCount) || 0}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>Tax ({Math.round(TAX_RATE * 100)}%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-semibold mt-3">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-5">
              <button
                type="submit"
                disabled={loading || paid}
                className={`w-full py-3 rounded-lg font-semibold ${
                  loading || paid ? "bg-gray-300 text-gray-700 cursor-not-allowed" : "bg-[#eaaa76] text-black hover:bg-[#f0c27b]"
                } transition`}
              >
                {loading ? "Processing..." : paid ? "Booking Confirmed" : "Confirm & Proceed to Payment"}
              </button>

              {/* Fake checkout: show success / confirmation */}
              {paid && (
                <div className="mt-4 bg-green-50 border border-green-200 text-green-800 p-3 rounded">
                  <p className="font-semibold">Payment successful (simulated)</p>
                  <p className="text-sm">Your booking for <strong>{room.name}</strong> is confirmed for <strong>{nights}</strong> night(s). We have sent a confirmation email (simulated).</p>

                  <div className="mt-3 flex gap-2">
                    <button
                      onClick={() => navigate("/")}
                      className="px-4 py-2 bg-white border rounded"
                    >
                      Back to Home
                    </button>
                    <button
                      onClick={() => {
                        // simulate download/receipt or navigate to a "booking details" page
                        alert("Download receipt (simulated).");
                      }}
                      className="px-4 py-2 bg-[#eaaa76] rounded"
                    >
                      Download Receipt
                    </button>
                  </div>
                </div>
              )}
            </div>
          </form>
        </aside>
      </div>
    </main>
    </div>
  );
};

export default BookingPage;
