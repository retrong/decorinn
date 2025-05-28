"use client"

import React, { useState } from "react";
import ButtonCustom from "@/components/ui/ButtonCustom";
import { GoDotFill } from "react-icons/go";
import { FaBars, FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

export const navData = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#service" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact Us", href: "#contact-us" },
]

export const navSocials = [
  { name: "Facebook", href: "#", icon: <FaFacebookF /> },
  { name: "Instagram", href: "#", icon: <FaInstagram /> },
  { name: "Twitter", href: "#", icon: <FaXTwitter /> },
];

export default function Hero() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section id="Hero" className="p-6 bg-secondary w-full min-h-screen">
      <div className="relative min-h-screen w-full flex flex-col overflow-hidden p-2 bg-primary rounded-2xl">
        {/* Hero Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-contain bg-center z-0"
          style={{
            backgroundImage: "url(/hero-3.jpeg)",
          }}
        />
        {/* Overlay for darkening the image */}
        <div className="absolute inset-0 bg-black/70 z-10" />

        {/* Navbar */}
        <nav className="relative z-40 flex items-center justify-between px-2 py-2 gap-8">
          <div className="text-2xl font-bold text-white font-pacifico">
            Decorinn
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-12 text-white text-lg font-normal">
            {navData.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="relative group transition-all duration-300"
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger Icon */}
          <button
            className="md:hidden text-white cursor-pointer text-2xl focus:outline-none z-30"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Mobile Nav */}
          <div
            className={`fixed top-0 right-0 h-full w-[70%] bg-primary z-[999] transform transition-transform duration-300 ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            } md:hidden shadow-lg`}
          >
            <div className="flex flex-col h-full p-8">
              <div className="flex items-center justify-between mb-8">
                <span className="text-2xl font-bold text-white font-pacifico">
                  Decorinn
                </span>
                <button
                  className="text-white text-2xl cursor-pointer focus:outline-none"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <FaTimes />
                </button>
              </div>
              <ul className="flex flex-col gap-8 text-white text-lg font-normal">
                {navData.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="relative group transition-all duration-300"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.name}
                      <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex gap-4 mt-auto pt-8">
                {navSocials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="flex items-center gap-2 text-white hover:text-primary hover:bg-white hover:rounded-full p-2 transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/* Overlay for mobile menu */}
          {menuOpen && (
            <div
              className="fixed inset-0 bg-black/50 z-30 md:hidden"
              onClick={() => setMenuOpen(false)}
            />
          )}
        </nav>

        {/* Hero Content */}
       <div className="relative z-20 flex flex-1 flex-col items-start justify-end text-start md:px-8 px-0">
          <motion.p
            className="text-sm flex items-center gap-2 text-white px-3 py-1 bg-gray-700 rounded-full mb-4 font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
          >
            <GoDotFill className="animate-[ping_1s_ease-in-out_infinite] text-white" />
            Available for work
          </motion.p>
          <motion.h1
            className="text-4xl md:text-5xl font-normal text-white mb-4 drop-shadow-lg max-w-5xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, type: "spring" }}
          >
            If your space could talk, would it whisper elegance or scream
            confusion?
          </motion.h1>
          <motion.p
            className="text-base md:text-lg font-normal text-[#d0d1db] mb-8 max-w-5xl drop-shadow"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7, type: "spring" }}
          >
            Let your space whisper elegance with a custom interior lookbook and a free interior design consultation anywhere in Nigeria, curated to silence the confusion with style and
            intention.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
          >
            <Link href="#contact-us">
              <ButtonCustom className="pl-6 py-2 mb-6 font-normal">
                Book Your Free Consultation
              </ButtonCustom>
            </Link>
          </motion.div>
        </div>

        <div className="z-20 flex items-center justify-end gap-8 px-4">
          {navSocials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="flex items-center gap-2 text-white hover:text-primary hover:bg-white hover:rounded-full p-2 transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
