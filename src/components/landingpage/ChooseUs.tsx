"use client"

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ChooseUs() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  
  const myStaticVideoUrl = "https://a096ffzo0ohltf70.public.blob.vercel-storage.com/Final-video-OlLul9rUFDOdkFykODKHsDJUABVked.MP4";

  return (
    <section className="w-full py-16 bg-white flex justify-center items-center">
      <article className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 px-4">
        {/* Text Content */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, type: "spring" }}
          viewport={{ once: true }}
        >
          <h1 className="text-sm md:text-base font-medium mb-4 text-white text-center bg-secondary rounded-full px-4 py-1 shadow-md w-fit">
            Why Choose Us
          </h1>
          <h2 className="text-3xl md:text-3xl font-bold mb-6 text-primary">
            Your Home Deserves Intentional Design.
          </h2>
          <div className="text-lg text-gray-700 space-y-4">
            <p>
              Your home deserves more than random pieces thrown together. It
              deserves intention — an evocative blend of beauty and function.
            </p>
            <p className="text-base text-gray-500 mb-4">
              With our free design consultation and tailored lookbook, we help
              you fit and switch your space into something that feels like a
              soft touch of heaven.
            </p>
            <p className="text-base text-gray-500 mb-4">
              From statement decor that feels like it’s screaming your name! To
              layouts that reflect your essence — our expert designers bring
              your dream space to life.
            </p>
            <p className="font-semibold text-primary text-base">
              But don’t wait. Consultations fill up fast, and once they’re gone,
              they’re gone.
            </p>
          </div>
        </motion.div>
        {/* Video Content */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, type: "spring" }}
          viewport={{ once: true }}
          ref={ref}
        >
          <div className="w-full max-w-2xl aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-black">
            {inView && (
              <video
                src={myStaticVideoUrl}
                controls
                className="w-full h-auto object-cover"
                poster="/video-frame.jpg"
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </motion.div>
      </article>
    </section>
  );
}