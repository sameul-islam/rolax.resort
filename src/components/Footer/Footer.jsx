import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaCcVisa,
  FaCcAmazonPay,
  FaCcPaypal,
  FaCcAmex,
} from "react-icons/fa";
import { FaCcApplePay } from "react-icons/fa6";
import { GrSend } from "react-icons/gr";
import { LiaCcAmex } from "react-icons/lia";
import { MdOutlineAccessTime } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); 
  const [errorMsg, setErrorMsg] = useState("");

  const companyName = "ROLAX.RESORT"; 
  const phone = "+880 1234 567890";
  const emailContact = "info@rolax.com";
  const address = "South Beach Road, Cox's Bazar, Bangladesh";

  const validateEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    setErrorMsg("");
    if (!validateEmail(email)) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address.");
      return;
    }


    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 900);

  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#3d3d3d] text-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  gap-8">
          {/* BRAND & DESC */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="text-xl md:text-2xl font-Playfair tracking-wide text-[#eaaa76]">
                {companyName}
              </div>
            </div>
            <p className="text-sm font-EB text-gray-300 leading-relaxed max-w-[320px]">
              Rolax Resort - luxury stay, exceptional service, and unforgettable experiences.
              Relax, rejuvenate, and create memories with us.
            </p>

            <div className="flex items-center gap-3 mt-2">
              <a
                href="#"
                aria-label="Facebook"
                className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* CONTACT */}
          <div className="font-PT">
            <h4 className="text-lg font-semibold text-gray-100 mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <span className="flex items-center gap-x-1 font-semibold text-gray-200"> <SlLocationPin /> Address</span>
                <span>{address}</span>
              </li>
              <li>
                <span className="flex items-center gap-x-1 font-semibold text-gray-200"> <BsTelephone /> Phone</span>
                <a href={`tel:${phone}`} className="hover:underline">
                  {phone}
                </a>
              </li>
              <li>
                <span className="flex items-center gap-x-1 font-semibold text-gray-200"> <AiOutlineMail /> Email</span>
                <a href={`mailto:${emailContact}`} className="hover:underline">
                  {emailContact}
                </a>
              </li>
              <li>
                <span className="flex items-center gap-x-1 font-semibold text-gray-200"> <MdOutlineAccessTime /> Opening Hours</span>
                <span className="text-gray-300 block">Daily - 7:00 AM to 11:00 PM</span>
              </li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div className="font-EB">
            <h4 className="text-lg font-semibold text-gray-100 mb-4">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-300">
              <li>
                <a href="/" className="hover:text-[#eaaa76] transition">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-[#eaaa76] transition">About</a>
              </li>
              <li>
                <a href="/rooms" className="hover:text-[#eaaa76] transition">Rooms</a>
              </li>
              <li>
                <a href="/resto&bar" className="hover:text-[#eaaa76] transition">Resto & Bar</a>
              </li>
              <li>
                <a href="/blog" className="hover:text-[#eaaa76] transition">Blog</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#eaaa76] transition">Contact</a>
              </li>
            </ul>

            <div className="mt-6 font-Roboto">
              <h4 className="text-sm font-semibold text-gray-100 mb-3">Payment Methods</h4>
              {/* Replace with real payment icons images if available */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-7 rounded flex items-center justify-center text-blue-300 text-xs"><FaCcVisa size={40} /></div>
                <div className="w-10 h-7 rounded flex items-center justify-center text-blue-300 text-xs"><FaCcPaypal size={40} /></div>
                <div className="w-10 h-7 rounded flex items-center justify-center text-blue-300 text-xs"><FaCcApplePay size={40} /></div>
                <div className="w-10 h-7 rounded flex items-center justify-center text-blue-300 text-xs"><FaCcAmazonPay size={40} /></div>
              </div>
            </div>
          </div>

          {/* NEWSLETTER / SUBSCRIBE */}
          <div className="font-Libre">
            <h4 className="text-lg font-semibold text-gray-100 mb-4">Subscribe to our Newsletter</h4>
            <p className="text-sm text-gray-300 mb-4">
              Get exclusive deals, travel tips, and the latest offers - delivered monthly.
            </p>

            <form onSubmit={handleSubscribe} className="flex  gap-3">
              <label htmlFor="newsletter" className="sr-only">Email address</label>
              <input
                id="newsletter"
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setStatus("idle"); setErrorMsg(""); }}
                placeholder="Your email address"
                className="w-full bg-white/5 placeholder:text-gray-300 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#eaaa76] transition"
                aria-label="Email address"
                required
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center px-5 bg-[#eaaa76] text-black font-semibold hover:bg-[#f0c27b] transition"
                aria-live="polite"
              >
                {status === "sending" ? "Subscribing..." : <GrSend  size={20}/>}
              </button>
            </form>

            {/* Feedback */}
            <div className="mt-3" aria-live="polite">
              {status === "error" && <p className="text-sm text-red-400">{errorMsg}</p>}
              {status === "success" && <p className="text-sm text-green-300">Thanks - you're subscribed!</p>}
            </div>

            <p className="text-xs text-gray-400 mt-6">
              We respect your privacy. You can unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-10 font-Roboto border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a href="/privacy" className="text-sm text-gray-300 hover:text-[#eaaa76]">Privacy Policy</a>
            <a href="/terms" className="text-sm text-gray-300 hover:text-[#eaaa76]">Terms</a>
            <a href="/sitemap" className="text-sm text-gray-300 hover:text-[#eaaa76]">Sitemap</a>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;










