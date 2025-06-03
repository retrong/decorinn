import React from "react";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";


export const navSocials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/dec0r.inn/",
    icon: <FaInstagram />,
  },
  {
    name: "Tiktok",
    href: "https://www.tiktok.com/@dec0r.inn",
    icon: <FaTiktok />,
  },
  {
    name: "Whatsapp",
    href: "https://wa.me/+2349110169337",
    icon: <FaWhatsapp />,
  },
];

const footerlinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#service" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact-us" },
];

export default function Footer() {
  return (
    <footer className="px-4 md:px-4 w-full">
      <div className="w-full bg-gradient-to-r from-primary to-[#391b19] md:pt-14 pt-8 py-4 px-6 mt-3 rounded-t-2xl">
        <div className=" mx-auto flex flex-col items-center justify-between gap-6">
          {/* Logo and Copyright */}
          <div className=" flex flex-col md:flex-row gap-4 md:gap-0 justify-between w-full">
            <div className="flex items-center md:items-start">
              <span className="text-5xl font-pacifico text-white mb-2">
                Decorinn
              </span>
            </div>

            {/* Navigation */}
            <div>
              <h2 className="text-white text-xl font-normal mb-4">
                Quick Links
              </h2>
              {/* First row: first 3 links */}
              <div className="flex justify-between md:flex-row flex-col md:gap-24 gap-3">
                <nav className="flex flex-col gap-3 mb-2">
                  {footerlinks.slice(0, 3).map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="relative group text-white font-normal text-lg  transition"
                    >
                      {link.label}
                      <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-[80%]" />
                    </a>
                  ))}
                </nav>
                {/* Second row: remaining links */}
                <nav className="flex flex-col gap-3">
                  {footerlinks.slice(3).map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-white relative group text-lg font-light  transition"
                    >
                      {link.label}
                      <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-[80%]" />
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          <div className="border border-[#d0d1db1a] w-full my-6 px-4" />

          <div className="flex flex-col md:flex-row space-y-2 w-full justify-between">
            <div className=" space-y-2 order-2 md:order-1">
              <p className="text-base text-white">
                &copy; {new Date().getFullYear()} Decorinn. All rights reserved.
              </p>
              <a
                href="https://retrong.vercel.app"
                className="text-base text-white"
              >
                {" "}
                Website design by <span className="hover:italic">Retrong</span>{" "}
              </a>
            </div>

            {/* Socials */}
            <div className="flex flex-row gap-4 order-1 md:order-2">
              {navSocials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-white hover:bg-white hover:text-primary rounded-full p-2 transition-all duration-300 text-2xl"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}