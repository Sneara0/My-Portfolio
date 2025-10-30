"use client";
import { useState } from "react";
import { FaBarsStaggered, FaFacebook, FaSquareWhatsapp } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-gray-400 via-green-400 to-green-200
      dark:from-green-800 dark:via-green-900 dark:to-green-950 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-lg
      border-b border-gray-200 dark:border-gray-800 rounded-full
      shadow-lg shadow-green-400/30 dark:shadow-blue-500/30 transition-colors duration-500">

      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-4">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white dark:text-gray-200">
          Sneara <span className="text-gray-200/80 dark:text-gray-300">Dev</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          {links.map((link) => (
            <Link key={link.path} href={link.path} className="relative group text-white dark:text-gray-200 font-medium transition">
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className={`md:hidden cursor-pointer p-2 rounded-full border-2
            ${open ? 'border-amber-500 bg-amber-100 text-amber-800' 
                   : 'border-green-500 bg-green-100 text-green-800 hover:border-green-700 transition-all duration-300'}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          animate={open ? { y: [0, -5, 0], rotate: [0, 10, -10, 0] } : {}}
          transition={{ repeat: Infinity, repeatType: "loop", duration: 1.2 }}
        >
          {open ? <FaTimes size={24} /> : <FaBarsStaggered size={24} />}
        </motion.button>

      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-16 right-0 w-3/4 h-screen bg-white/80 dark:bg-gray-900/90 backdrop-blur-md border-l border-gray-200 dark:border-gray-700 shadow-xl flex flex-col items-center py-8 space-y-6"
          >
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setOpen(false)}
                className="text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-yellow-400 dark:hover:text-yellow-300 transition-all duration-300"
              >
                {link.name}
              </Link>
            ))}

            {/* Social Icons */}
            <div className="flex gap-6 pt-6 border-t border-gray-300 dark:border-gray-700 w-3/4 justify-center">
              <Link href="https://www.facebook.com/sneyara.parabhina" target="_blank"
                className="text-blue-600 dark:text-blue-400 hover:scale-125 hover:shadow-lg hover:shadow-blue-400/50 transition-transform duration-300">
                <FaFacebook size={26} />
              </Link>

              <Link href="https://wa.me/01832346270" target="_blank"
                className="text-green-600 dark:text-green-400 hover:scale-125 hover:shadow-lg hover:shadow-green-400/50 transition-transform duration-300">
                <FaSquareWhatsapp size={26} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
