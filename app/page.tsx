import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductViewer from "@/components/ProductViewer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Showcase from "@/components/Showcase";
import Performance from "@/components/Performance";
import Features from "@/components/Features";
import Highlights from "@/components/Highlights";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance />
      <Features />
      <Highlights />
      <Footer />
    </div>
  );
};
export default Page;
