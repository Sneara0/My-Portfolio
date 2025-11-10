"use client";

import { motion } from "framer-motion";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import SectionTitle from "./SectionTitle";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-950">
      <SectionTitle title="About Me" />

      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* 🖼️ Left: Image */}
        <motion.div
          className="flex-1 flex justify-center md:justify-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-indigo-600 dark:border-indigo-400 shadow-lg hover:scale-105 transition-transform duration-300">
            <img
              src="/images/sneara.jfif" // ✅ তোমার নিজের ইমেজ
              alt="Sneara Parvin"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>

        {/* 📝 Right: About Details */}
        <motion.div
          className="flex-1 text-center md:text-left space-y-5 text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-indigo-600 dark:text-indigo-400">
            I'm Sneara Parvin 👋
          </h3>

          <p className="text-lg leading-relaxed">
            A passionate <span className="font-semibold">Full Stack Web Developer</span> from Bangladesh 🇧🇩.
            I specialize in creating stunning, responsive, and interactive web apps using
            <span className="text-indigo-500 dark:text-indigo-400"> React, Next.js, Tailwind CSS</span> and more.
          </p>

          <p className="text-lg leading-relaxed">
            I love solving real-world problems with clean, creative, and functional code.
            Always eager to learn, explore AI, and push web development boundaries.
          </p>

         

          {/* 🌐 Social Links */}
          <div className="pt-6">
            <h4 className="text-xl font-semibold mb-3">Connect With Me</h4>
            <div className="flex justify-center md:justify-start gap-5 text-2xl">
              <a
                href="https://facebook.com/yourprofile"
                target="_blank"
                className="text-blue-600 dark:text-blue-400 hover:scale-110 transition-transform"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://wa.me/8801XXXXXXXXX"
                target="_blank"
                className="text-green-500 hover:scale-110 transition-transform"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://github.com/yourgithub"
                target="_blank"
                className="text-gray-900 dark:text-white hover:scale-110 transition-transform"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/yourlinkedin"
                target="_blank"
                className="text-blue-700 dark:text-blue-400 hover:scale-110 transition-transform"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
