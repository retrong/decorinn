"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, PanInfo } from "framer-motion";
import { GoDash } from "react-icons/go";

export default function Portfolio() {

  const reviews = [
    {
      id: 1,
      image: "/frame-8.jpg",
      alt: "img 1",
      
    },
    {
      id: 2,
      image: "/frame-9.jpg",
      alt: "img 2",
      
    },
    {
      id: 3,
      image: "/frame-6.jpg",
      alt: "img 3",
      
    },
    {
      id: 4,
      image: "/hero-1.jpeg",
      alt: "img 4",
      
    },
    {
      id: 5,
      image: "/frame-1.jpg",
      alt: "img 5",
      
    },
  ];

  const [activeReview, setActiveReview] = useState(1);
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardWidth = 412;
  const gap = 20;
  const effectiveWidth = cardWidth + gap;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const handleReviewDragEnd = (
    event: MouseEvent | TouchEvent,
    info: PanInfo
  ): void => {
    if (Math.abs(info.offset.x) > cardWidth / 3) {
      if (info.offset.x < 0 && activeReview < reviews.length - 1) {
        setActiveReview(activeReview + 1);
      } else if (info.offset.x > 0 && activeReview > 0) {
        setActiveReview(activeReview - 1);
      }
    }
  };

  return (
    <section id="portfolio" className="relative w-full flex flex-col justify-center items-center py-6 md:px-0 px-4 overflow-hidden mt-12 bg-[#f0e8e2]/25">
      {/* Header */}
      <div className="flex items-center w-full justify-center">
        <div className="flex flex-col md:flex-row justify-between w-full max-w-6xl items-center gap-4 md:gap-8 px-4 pt-8">
          <h1 className="font-normal md:text-5xl text-4xl text-primary px-4">
            Our Portfolio
          </h1>
          <div className="flex gap-2 items-center justify-center">
            <h3 className="text-2xl font-bold text-secondary font-pacifico">
              Decorinn
            </h3>
            <GoDash color="#391b19" height={30} />
            <p className="text-sm font-medium text-secondary w-full">
            Soft touch of heaven.
            </p>
          </div>

        </div>
      </div>

      {/* Carousel */}
      <motion.div
        className="relative w-full overflow-visible mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          ref={carouselRef}
          className="flex items-center"
          drag="x"
          dragConstraints={{
            left: -((reviews.length - 1) * effectiveWidth),
            right: 0,
          }}
          animate={{
            x:
              -activeReview * effectiveWidth +
              (carouselRef.current
                ? (carouselRef.current.offsetWidth - cardWidth) / 2
                : 0),
          }}
          onDragEnd={handleReviewDragEnd}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {reviews.map((review, idx) => (
            <motion.div
              key={review.id}
              className="flex-shrink-0"
              style={{
                width: `${cardWidth}px`,
                height: `476px`,
                margin: `0 ${gap / 2}px`,
              }}
              animate={{
                filter: idx === activeReview ? "blur(0px)" : "blur(1px)",
                opacity: idx === activeReview ? 1 : 0.7,
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Card */}
              <div className="w-fit md:w-[412px] h-[476px] flex flex-col justify-between rounded shadow-[0px_0px_25px_0px_#0000001A] overflow-hidden bg-white">
                <div className="w-full h-full">
                  <Image
                    src={review.image}
                    alt={review.alt}
                    width={412}
                    height={476}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              className={`w-2 h-2 rounded-full transition-colors ${
                idx === activeReview ? "bg-[#1B4D3E]" : "bg-gray-300"
              }`}
              onClick={() => setActiveReview(idx)}
            ></button>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
