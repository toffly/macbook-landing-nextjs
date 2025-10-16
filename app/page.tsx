import React from 'react'
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductViewer from "@/components/ProductViewer";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";
import Showcase from "@/components/Showcase";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <ProductViewer/>
            <Showcase/>
        </div>
    )
}
export default Page
