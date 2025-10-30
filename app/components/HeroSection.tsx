"use client";
import Link from "next/link";
import Image from "next/image";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [text] = useTypewriter({
    words: [
      "Hi, I'm Sneara ",
      "Frontend Developer 💻",
      "Next.js | React | Tailwind CSS ",
      "I Build Stunning Web Experiences ",
    ],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  // Generate multiple stars for background
  const stars = Array.from({ length: 30 });

  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-20 py-20 md:py-28 px-6 md:px-20 bg-gradient-to-br from-indigo-100 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      
      {/* ✨ Twinkling Stars */}
      {stars.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full blur-sm"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2 + Math.random() * 2,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* 🌠 Shooting Stars */}
      <motion.div
        className="absolute w-1 h-1 bg-white rounded-full blur-sm"
        initial={{ x: -50, y: 0 }}
        animate={{ x: 500, y: 150, opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear", repeatDelay: 2 }}
      />
      <motion.div
        className="absolute w-1 h-1 bg-white rounded-full blur-sm"
        initial={{ x: 500, y: 50 }}
        animate={{ x: -400, y: 200, opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear", repeatDelay: 3 }}
      />

      {/* 📝 Text Section */}
      <motion.div
        className="flex-1 text-left space-y-5 md:space-y-6 z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight drop-shadow-md">
          {text}
          <Cursor cursorStyle="|" />
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-lg drop-shadow-sm">
          I'm{" "}
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">
            Sneara Parvin
          </span>
          , a frontend developer building elegant, responsive, and user-friendly web apps with React, Next.js, and Tailwind CSS.
        </p>

        <div className="flex flex-wrap gap-4 mt-6">
          <Link
            href="/Sneara_Parvin_Frontend_Resume.pdf"
            target="_blank"
            className="px-2 py-3 bg-indigo-600 text-white text-sm font-medium rounded shadow-sm hover:bg-indigo-700 hover:shadow-xl transition-all duration-300"
          >
            📄 Download Resume
          </Link>
          
        </div>
      </motion.div>

      {/* 🖼️ Image Section */}
      <motion.div
        className="flex-1 flex justify-center md:justify-end z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded overflow-hidden border-4 border-indigo-500 dark:border-indigo-400 shadow-2xl group">
          <Image
            src="/images/sneara.jfif"
            alt="Sneara Parvin"
            width={400}
            height={400}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            priority
          />
          {/* Glow hover effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500/30 to-purple-400/30 blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
