import React from 'react'
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductViewer from "@/components/ProductViewer";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <ProductViewer/>
        </div>
    )
}
export default Page
