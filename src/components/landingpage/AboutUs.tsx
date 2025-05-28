"use client"
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AboutUs() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id="about"
      className="w-full py-16 bg-white flex justify-center items-center overflow-hidden"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 px-4">
        <motion.div
          className="w-full md:w-1/2 flex justify-center items-center order-2 md:order-1"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, type: "spring" }}
          viewport={{ once: true }}
          ref={ref}
        >
          <div className="w-full max-w-2xl aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-black">
            {inView && (
              <video
                src="/preview.MOV"
                controls
                loop
                className="w-full h-auto object-cover"
                poster="/video-frame2.jpg"
                preload="metadata"
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </motion.div>
        {/* Text Content */}
        <motion.div
          className="w-full md:w-1/2 md:mt-0 mt-5 order-1 md:order-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            About Us
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            At Decorinn, we believe your space should reflect your personality
            and style. With years of experience in home decor and interior
            design, our team is dedicated to helping you create beautiful,
            functional, and inspiring environments.
          </p>
          <p className="text-base text-gray-500 mb-4">
            Our curated collection features unique decor pieces, quality
            furnishings, and expert advice to transform any room. Whether you’re
            looking for a complete makeover or just a touch of elegance,
            Decorinn is your trusted partner in home improvement.
          </p>
          <motion.a
            href="#"
            className="inline-block mt-4 px-6 py-2 bg-primary text-white rounded-full font-medium shadow hover:bg-primary/90 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}