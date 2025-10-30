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
    <section className="relative flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 py-20 md:py-28 px-6 md:px-20 bg-gradient-to-br from-indigo-100 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      
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
          I'm <span className="font-semibold text-indigo-600 dark:text-indigo-400">Sneara Parvin</span>, a frontend developer building elegant, responsive, and user-friendly web apps with React, Next.js, and Tailwind CSS.
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

      {/* 🌀 Rotating Skills Circle on Right */}
      <motion.div
        className="flex-1 relative flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="relative w-72 h-72">
          {/* Fixed Center Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-blue-600 dark:text-blue-400 z-20">
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
              const radius = 100;
              return (
                <div
                  key={i}
                  className="absolute flex flex-col items-center justify-center text-center"
                  style={{
                    left: `calc(50% + ${radius * Math.cos(angle)}px)`,
                    top: `calc(50% + ${radius * Math.sin(angle)}px)`,
                  }}
                >
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-md">
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
