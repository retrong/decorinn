import AboutUs from "@/components/landingpage/AboutUs";
import Cta from "@/components/landingpage/Cta";
import Footer from "@/components/landingpage/Footer";
import Hero from "@/components/landingpage/Hero";
import Portfolio from "@/components/landingpage/Portfolio";
import { Services } from "@/components/landingpage/Services";
import React from "react";

export default function Home() {
  return (
    <div className="flex items-center flex-col justify-center ">
      <Hero />
      <AboutUs />
      <Portfolio />
      <Services />
      <Cta />
      <Footer />
    </div>
  );
}
