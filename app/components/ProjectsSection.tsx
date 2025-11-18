"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Expense Tracker",
    description:
      "A secure Expense Tracker built with Next.js, Prisma, and PostgreSQL. User authentication is handled with Clerk. Track your daily expenses, view analytics, and manage budgets easily.",
    image: "/images/expense-tracker.png",
    live: "#",
    code: "https://github.com/snearaparvin/ExpenseTracker",
  },
  {
    title: "Job Hunt Hub",
    description:
      "A complete job portal where users can browse, apply, and track jobs. Admin panel included for posting jobs. Built with React, Node.js, and MongoDB.",
    image: "/images/job-hunt.png",
    live: "#",
    code: "https://github.com/snearaparvin/JobHuntHub",
  },
  {
    title: "E-commerce Website",
    description:
      "A full-featured e-commerce platform with product listing, cart, and checkout. Built using Next.js, Tailwind CSS, and Stripe for payments.",
    image: "/images/ecommerce.png",
    live: "#",
    code: "https://github.com/snearaparvin/EcommerceSite",
  },
  {
    title: "Hospital Management System",
    description:
      "Manage patients, doctors, appointments, and billing efficiently using React, Node.js, and Tailwind CSS.",
    image: "/images/hospital.png",
    live: "#",
    code: "https://github.com/snearaparvin/HospitalManagement",
  },
  {
    title: "Flight Booking Agency",
    description:
      "A flight booking web app with AI-powered suggestions for flights and travel plans, built with React, Next.js, and Tailwind CSS.",
    image: "/images/flight-agency.png",
    live: "#",
    code: "https://github.com/snearaparvin/AIFlightAgency",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative py-20 px-6 bg-gradient-to-b from-gray-900 via-black to-black text-white"
    >
      <SectionTitle title="Projects" />

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-2xl overflow-hidden relative group shadow-lg hover:shadow-pink-500/50 transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={250}
              className="object-cover w-full h-48 sm:h-56 lg:h-64"
            />

            <div className="p-5 space-y-3">
              <h3 className="text-lg font-semibold text-pink-400">{project.title}</h3>
              <p className="text-gray-300 text-sm sm:text-base">{project.description}</p>

              <div className="flex gap-4 mt-2">
                <Link
                  href={project.live}
                  target="_blank"
                  className="px-3 py-1 bg-gradient-to-r from-pink-500 via-purple-600 to-black text-white rounded-lg text-sm font-medium hover:scale-105 transition-all duration-300 flex items-center gap-1"
                >
                  Live
                </Link>
                <Link
                  href={project.code}
                  target="_blank"
                  className="px-3 py-1 bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white rounded-lg text-sm font-medium hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  <FaGithub /> Code
                </Link>
              </div>

              
              <p className="mt-3 text-gray-400 text-sm text-right italic">
                Sneara Parvin
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
