import React from "react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="about" className="w-full py-16 bg-white flex justify-center items-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 px-4">
        {/* Images */}
        <div className="relative w-full  flex justify-start items-center min-h-[350px]">
          <Image
            src="/frame-4.jpg"
            alt="Decorinn About 1"
            width={500}
            height={500}
            className="w-[70%] h-auto object-cover rounded-lg shadow-lg relative z-10"
          />
          <Image
            src="/frame-5.jpg"
            alt="Decorinn About 2"
            width={500}
            height={500}
            className="w-[70%] h-auto object-cover rounded-lg shadow-xl absolute left-20 top-10 md:left-20 md:top-15 z-20 border-4 border-white"
          />
        </div>
        {/* Text Content */}
        <div className="w-full md:mt-0 mt-5 ">
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
          <a
            href="#"
            className="inline-block mt-4 px-6 py-2 bg-primary text-white rounded-full font-medium shadow hover:bg-primary/90 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}