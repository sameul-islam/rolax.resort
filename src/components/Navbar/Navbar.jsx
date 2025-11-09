import React, { useEffect, useState } from "react";
import NavbarTop from "./NavbarTop";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const Menu = [
  { id: 1, name: "HOME", link: "/" },
  { id: 2, name: "ABOUT", link: "/about" },
  { id: 3, name: "ROOMS", link: "/rooms" },
  { id: 4, name: "RESTO & BAR", link: "/resto&bar" },
  { id: 5, name: "BLOG", link: "/blog" },
  { id: 6, name: "CONTACT", link: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => (document.body.style.overflow = 'auto');
  },[open]);

  return (
    <div className="flex flex-col w-full absolute top-0 left-0 z-20">
      <NavbarTop />

      <nav className="flex items-center justify-between w-[90%] md:w-[85%] mx-auto py-4 text-white">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold font-Playfair tracking-wide ">
          ROLAX<span className="text-[#e89f69]">.RESORT</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8">
          {Menu.map((menu) => {
            const isActive = location.pathname === menu.link;
            return (
              <li key={menu.id}>
                <Link
                  to={menu.link}
                  className={`text-lg font-semibold transition font-Lora duration-300 ${
                    isActive
                      ? "text-[#eeb78e] border-b-2 border-[#eeb78e]"
                      : "hover:text-[#eeb78e]"
                  }`}
                >
                  {menu.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Hamburger */}
        <div
          className="lg:hidden text-3xl cursor-pointer z-30"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </div>

        {/* Drawer Menu */}
        <AnimatePresence>
          {open && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setOpen(false)}
                className="fixed inset-0 bg-[#412602] "
              />
              {/* Drawer Panel */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.4 }}
                className="fixed top-0 right-0 w-3/4 h-full bg-[#403220]/80 backdrop-blur-sm z-20 flex flex-col items-center justify-center gap-10 "
              >
                {Menu.map((menu) => (
                  <Link
                    key={menu.id}
                    to={menu.link}
                    onClick={() => setOpen(false)}
                    className="text-lg text-white font-Lora hover:text-[#eab676] transition duration-300"
                  >
                    {menu.name}
                  </Link>
                ))}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
