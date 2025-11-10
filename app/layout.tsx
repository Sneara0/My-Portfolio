import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";


export const metadata: Metadata = {
  title: "Sneara | Portfolio",
  description: "Personal portfolio built with Next.js + Tailwind CSS + Framer Motion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black text-gray-800 dark:text-gray-100 transition-all duration-300">
        <Navbar />
        <main className="min-h-[80vh] px-4 sm:px-8 md:px-16 lg:px-24">{children}</main>
        <AboutSection />

      </body>
    </html>
  );
}
