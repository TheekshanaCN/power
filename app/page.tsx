import React, { useState } from "react";
import { motion } from "framer-motion"
import { cn } from "@/lib/utils";
import { Spotlight } from "../components/ui/spotlight";
import { FlipWords } from "../components/ui/flip-words";
import { HeroParallax } from "../components/ui/hero-parallax";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { BackgroundGradient } from "../components/ui/background-gradient";
import { FaArrowRight, FaDownload } from 'react-icons/fa'; 
import SocialShare from "@/components/social"
import { FloatingNav } from "../components/ui/floating-navbar";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Footer from '@/components/Footer'
import TeamPage from '@/components/team-page'
import { DynamicNavbar } from "@/components/NavbarDemo";
import Link from "next/link";
import BrandScroll from "@/components/Brand"
import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
  const words = ["Teaching", "Vlogging", "Sample"];
  const whoami = `The Sri Lanka #1 School Management System. Power School is a web-based school management system that enables school administrators to manage their school's daily activities. It is a powerful tool that helps schools to manage and organize their day-to-day activities. Power School is designed to be user-friendly and easy to use. It is a comprehensive solution that helps schools to manage their students, teachers, staff, and parents. Power School is a complete school management system that helps schools to manage their day-to-day activities efficiently.`;



  return (
    <>
    <div className="relative  w-full">
       <DynamicNavbar /> {/* Added Navbar */}
    <div className="bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* Spotlight Section */}
      <div className="h-[30rem] md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden px-4">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#FFB300" />
        <div className="p-4 max-w-7xl mx-auto relative z-10 w-full text-center">
          <h1 className="text-3xl mb-9 md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Welcome To <br /> Power School<br />        </h1>
          <h2 className="mt-5 font-normal text-sm md:text-base text-neutral-300 max-w-lg mx-auto ">
          Sri Lanka #1 School Management System
          </h2>
          
          <div className="mt-8 flex justify-center gap-6">
      {/* Try Now Button */}
      <button className="relative px-8 py-3 text-black bg-yellow-500 rounded-md text-lg font-semibold shadow-xl transform transition duration-300 ease-in-out hover:scale-105 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600 overflow-hidden flex items-center justify-center gap-2">
        <FaArrowRight className="text-xl" /> {/* Arrow icon from Font Awesome */}
        Try Now
      </button>

      {/* Download App Button */}
      <button className="relative px-8 py-3 text-black bg-yellow-500 rounded-md text-lg font-semibold shadow-xl transform transition duration-300 ease-in-out hover:scale-105 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600 overflow-hidden flex items-center justify-center gap-2">
        <FaDownload className="text-xl" /> {/* Download icon from Font Awesome */}
        Download App
      </button>
    </div>


        </div>
      </div>
      <BrandScroll />
      
      {/* Who Am I Section */}

  <div id='about' className="px-4 py-10 text-center bg-black/[0.96]">
    <h2 className="text-3xl md:text-6xl mb-6 font-bold text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text">
      What Is The Power School
    </h2>
    <div className="flex justify-center">
    <BackgroundGradient  className="rounded-[22px] p-2 sm:p-2 bg-black/[0.96] dark:bg-zinc-900">
      <Image
        src={`/main.jpg`}
        alt="Portrait of Power School"
        height={900}
        width={900}
        className="object-contain mx-auto rounded-md shadow-lg"
        quality={100} // This ensures the image is loaded with good quality
      />
      </BackgroundGradient>
    </div>
    <TextGenerateEffect className="mt-5 text-white text-sm md:text-base" words={whoami} />
  </div>



      {/* Products Section */}
      <div id='services' className="px-4 py-10 text-white">
        <HeroParallax products={products} />
      </div>


 {/* Social Sharing */}
 <div className="px-4 py-6 text-center">
            <p className="text-white mb-1">Share this page:</p>
            <div className="flex justify-center space-x-2">
              <SocialShare />
            </div>
          </div>

    </div><Footer /></div>
    </>
  );
}

export const products = [
  
    {
      title: "SFT King",
      link: "https://sftking.lk",
      thumbnail: "https://aceternity.com/images/products/thumbnails/new/rogue.png",
    },
    {
      title: "Scool Management System",
      link: "https://mis.sftking.lk",
      thumbnail: "https://ishankashamal.tech/asset/Capture.PNG",
    },
    {
      title: "Mis Computers",
      link: "https://miscomputers.lk",
      thumbnail: "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
    },
    {
      title: "SFT King",
      link: "https://sftking.lk",
      thumbnail: "https://aceternity.com/images/products/thumbnails/new/rogue.png",
    },
    {
      title: "SFT King",
      link: "https://sftking.lk",
      thumbnail: "https://aceternity.com/images/products/thumbnails/new/rogue.png",
    },
    {
      title: "Mis Computers",
      link: "https://miscomputers.lk",
      thumbnail: "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
    },
    {
      title: "Mis Computers",
      link: "https://miscomputers.lk",
      thumbnail: "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
    },
    {
      title: "SFT King",
      link: "https://sftking.lk",
      thumbnail: "https://aceternity.com/images/products/thumbnails/new/rogue.png",
    },
    {
      title: "Scool Management System",
      link: "https://mis.sftking.lk",
      thumbnail: "https://ishankashamal.tech/asset/Capture.PNG",
    },
    {
      title: "SFT King",
      link: "https://sftking.lk",
      thumbnail: "https://aceternity.com/images/products/thumbnails/new/rogue.png",
    },
    {
      title: "Scool Management System",
      link: "https://mis.sftking.lk",
      thumbnail: "https://ishankashamal.tech/asset/Capture.PNG",
    },
    {
      title: "Mis Computers",
      link: "https://miscomputers.lk",
      thumbnail: "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
    },
    {
      title: "SFT King",
      link: "https://sftking.lk",
      thumbnail: "https://aceternity.com/images/products/thumbnails/new/rogue.png",
    },
    {
      title: "SFT King",
      link: "https://sftking.lk",
      thumbnail: "https://aceternity.com/images/products/thumbnails/new/rogue.png",
    },  
];
