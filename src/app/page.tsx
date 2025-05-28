import AboutUs from "@/components/landingpage/AboutUs";
import ChooseUs from "@/components/landingpage/ChooseUs";
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
      <ChooseUs />
      <AboutUs />
      <Portfolio />
      <Services />
      <Cta />
      <Footer />
    </div>
  );
}
