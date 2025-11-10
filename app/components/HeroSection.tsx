"use client";
import Link from "next/link";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiTypescript, SiGoland } from "react-icons/si";

const HeroSection = () => {
  const [text] = useTypewriter({
    words: [
      "Hi, I'm Sneara",
      "Frontend Developer 💻",
      "Next.js | React | Tailwind CSS",
      "I Build Stunning Web Experiences",
    ],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  const skills = [
    { name: "React", icon: <FaReact className="text-blue-500 w-8 h-8" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black w-8 h-8" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600 w-8 h-8" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600 w-8 h-8" /> },
    { name: "GoLang", icon: <SiGoland className="text-teal-600 w-8 h-8" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 w-8 h-8" /> },
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 w-8 h-8" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 w-8 h-8" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 w-8 h-8" /> },
    { name: "Database", icon: <FaDatabase className="text-gray-500 w-8 h-8" /> },
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 md:gap-20 py-16 md:py-28 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-gray-500 via-gray-700 to-black dark:from-pink-900 dark:via-purple-900 dark:to-black overflow-hidden">

      {/* 📝 Text Section */}
      <motion.div
        className="flex-1 text-center md:text-left space-y-5 md:space-y-6 z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold text-white drop-shadow-lg">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-white to-pink-600 animate-pulse">
            {text}
          </span>
          <Cursor cursorStyle="|" />
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-md mx-auto md:mx-0">
          I'm <span className="font-semibold text-gray-400">Sneara Parvin</span>, a frontend developer building elegant, responsive, and user-friendly web apps with React, Next.js, and Tailwind CSS.
        </p>

        <div className="flex justify-center md:justify-start flex-wrap gap-4 mt-6">
          <Link
            href="/Sneara_Parvin_Frontend_Resume.pdf"
            target="_blank"
            className="px-5 py-3 bg-gradient-to-r from-pink-500 via-purple-600 to-black text-white font-medium rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            ⬇️ Download Resume
          </Link>
        </div>
      </motion.div>

      {/* 🌀 Rotating Skills Circle */}
      <motion.div
        className="flex-1 relative flex items-center justify-center pointer-events-none w-full md:w-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
          {/* Fixed Center Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-pink-400 dark:text-pink-500 z-20 text-lg sm:text-xl md:text-2xl lg:text-3xl animate-pulse">
            Skills
          </div>

          {/* Rotating Icons */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {skills.map((skill, i) => {
              const angle = (i / skills.length) * 2 * Math.PI;
              const radius = 90;
              return (
                <div
                  key={i}
                  className="absolute flex flex-col items-center justify-center text-center transform-gpu hover:scale-125 transition-transform duration-300"
                  style={{
                    left: `calc(50% + ${radius * Math.cos(angle)}px)`,
                    top: `calc(50% + ${radius * Math.sin(angle)}px)`,
                  }}
                >
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-xl hover:shadow-pink-500/50 transition-shadow duration-300">
                    {skill.icon}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
