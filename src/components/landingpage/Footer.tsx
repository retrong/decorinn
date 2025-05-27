import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const navSocials = [
  { name: "Facebook", href: "#", icon: <FaFacebookF /> },
  { name: "Instagram", href: "#", icon: <FaInstagram /> },
  { name: "Twitter", href: "#", icon: <FaXTwitter /> },
];

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-primary to-[#391b19] py-8 px-4 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo and Copyright */}
        <div className="flex flex-col items-center md:items-start">
          <span className="text-2xl font-pacifico text-white mb-2">Decorinn</span>
          <span className="text-sm text-white/70">
            &copy; {new Date().getFullYear()} Decorinn. All rights reserved.
          </span>
        </div>
        {/* Navigation */}
        <nav className="flex flex-col md:flex-row items-center gap-4">
          <a href="#" className="text-white hover:text-primary/80 transition">Home</a>
          <a href="#" className="text-white hover:text-primary/80 transition">About</a>
          <a href="#" className="text-white hover:text-primary/80 transition">Services</a>
          <a href="#" className="text-white hover:text-primary/80 transition">Portfolio</a>
          <a href="#" className="text-white hover:text-primary/80 transition">Contact</a>
        </nav>
        {/* Socials */}
        <div className="flex gap-4">
          {navSocials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="text-white hover:bg-white hover:text-primary rounded-full p-2 transition-all duration-300 text-xl"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}