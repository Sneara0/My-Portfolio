"use client";

import { motion } from "framer-motion";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import SectionTitle from "./SectionTitle";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-20 px-4 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white"
    >
      {/* ✨ Star Background Effect */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      <div className="relative z-10">
        <SectionTitle title="About Me" className="text-white" />

        <motion.div
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 mt-10"
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
            <div className="w-90 h-90 md:w-100 md:h-100 rounded-2xl overflow-hidden border-4 border-gray-700 shadow-2xl shadow-indigo-900/50 hover:shadow-indigo-500/80 hover:scale-105 transition-all duration-500">
              <img
                src="/images/sneara.jfif"
                alt="Sneara Parvin"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          {/* 📝 Right: About Details */}
          <motion.div
            className="flex-1 text-center md:text-left space-y-4 text-gray-300"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              I'm Sneara Parvin ✨
            </h3>

            <p className="text-base leading-relaxed">
              Hi! I'm <span className="font-semibold text-cyan-400">Sneara Parvin</span>, a passionate
              <span className="font-semibold text-pink-400"> Frontend Developer</span> from Bangladesh 🇧🇩. I love building modern and responsive web apps with clean, maintainable code.
            </p>

            <p className="text-base leading-relaxed">
              I completed my <span className="font-semibold text-cyan-400">B.Sc. in Computer Science and Engineering</span> from 
              <span className="font-semibold text-pink-400"> North Western University</span> in 2024 with a CGPA of 
              <span className="font-semibold text-cyan-400"> 3.38</span>. Before that, I completed my 
              <span className="font-semibold"> HSC in 2018</span> and <span className="font-semibold">SSC in 2016</span>.
            </p>

            <p className="text-base leading-relaxed">
              My web development journey started in <span className="text-pink-400 font-semibold">December 2024</span>. Since then, I’ve been learning 
              <span className="text-cyan-400 font-semibold"> React, Next.js, Tailwind CSS</span> — and exploring backend and AI tools to create scalable applications.
            </p>

            <p className="text-base leading-relaxed">
              I’m deeply motivated by problem-solving and innovation. My goal is to keep learning, growing, and building meaningful digital experiences.
            </p>

            {/* 🌐 Social Links */}
            <div className="pt-4">
              <h4 className="text-lg font-semibold mb-2">Connect With Me</h4>
              <div className="flex justify-center md:justify-start gap-5 text-xl">
                <a
                  href="https://facebook.com/snearaparvin.dev"
                  target="_blank"
                  className="text-blue-400 hover:scale-125 hover:text-pink-400 transition-all duration-300"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://wa.me/88017XXXXXXXX"
                  target="_blank"
                  className="text-green-400 hover:scale-125 hover:text-pink-400 transition-all duration-300"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://github.com/snearaparvin"
                  target="_blank"
                  className="text-gray-200 hover:scale-125 hover:text-pink-400 transition-all duration-300"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/in/snearaparvin"
                  target="_blank"
                  className="text-blue-500 hover:scale-125 hover:text-pink-400 transition-all duration-300"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* 🌌 Star Animation */}
      <style jsx>{`
        .stars,
        .stars2,
        .stars3 {
          position: absolute;
          width: 100%;
          height: 100%;
          background-repeat: repeat;
          background-position: 0 0;
          z-index: 0;
        }

        .stars {
          background-image: radial-gradient(white 1px, transparent 1px);
          background-size: 3px 3px;
          animation: moveStars 60s linear infinite;
          opacity: 0.2;
        }

        .stars2 {
          background-image: radial-gradient(white 1px, transparent 1px);
          background-size: 2px 2px;
          animation: moveStars 90s linear infinite;
          opacity: 0.15;
        }

        .stars3 {
          background-image: radial-gradient(white 1px, transparent 1px);
          background-size: 1px 1px;
          animation: moveStars 120s linear infinite;
          opacity: 0.1;
        }

        @keyframes moveStars {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 10000px 10000px;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
