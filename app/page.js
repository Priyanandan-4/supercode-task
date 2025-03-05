"use client";
import { useRef, useState } from "react";
import Lenis from "lenis";
import gsap from "gsap/all";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import MouseFollower from "@/components/mousecurser";
import logo from "../public/icons/logo.svg";
import arrowdown from "../public/icons/arrowdown.svg";

export default function Home() {
  const heroref = useRef(null);
  const textref = useRef(null);
  const cursorRef = useRef(null);
  const [cursorText, setCursorText] = useState("");

  useGSAP(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

const tl = gsap.timeline();


tl.to(heroref.current, {
  y: "-100%",
  duration: 1,
  delay: 0.5,
  ease: "power2.inOut",
})
 .to("#text", {
    y: 0,
    duration: 0.7,
    stagger: 0.2,
    ease: "slowMo.easeOut",
  }, "+=0"); 


  

  }, []);

  const images = [
    "/image/image-three.png",
    "/image/image-one.png",
    "/image/image-two.png",
    "/image/image-three.png",
    "/image/image-one.png",
  ];

  return (
    <div className="w-full">
      <MouseFollower />

      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-999"
      >
        {cursorText}
      </div>

      {/* Hero Section */}
      <div className="w-full h-screen text-7xl font-inter font-[800] text-white flex justify-center items-center text-center leading-tight bg-[#eb5dd6]">
        THE DESIGN
        <br />
        AGENCY
      </div>

      <div
        ref={heroref}
        className="w-full h-screen bg-[#afee6b] text-black flex flex-col justify-between items-center absolute tracking-widest"
      >
        <div className="pt-10 overflow-hidden">
         <span className="inline-block  translate-y-14" id="text"><Image src={logo} width={50} height={50} alt="logo"  /></span> 
        </div>
        <div className="text-center text-6xl md:text-8xl lg:text-9xl font-inter font-[800] ">
          <h2 className="overflow-hidden" >
            <span className=" inline-block  translate-y-full" id="text">THE DESIGN</span>
          </h2>
          <h2 className="overflow-hidden" >
            <span className=" inline-block  translate-y-full" id="text">AGENCY</span>
          </h2>
        </div>

        <div className="overflow-hidden">
        <span className="inline-block  translate-y-28" id="text"><Image src={arrowdown} width={60} height={60} alt="logo" /></span>
        </div>
      </div>

      {/* Video Section */}
      <div className="z-10 w-full h-screen bg-white flex justify-center items-center text-center leading-tight text-8xl">
        <video
          src="/video/banner.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-[40%] h-[40%]"
        />
      </div>

      {/* About Section */}
      <div className="w-full h-96 md:h-screen font-bold bg-[#9ce968] text-black flex flex-col justify-center items-center">
        <div className="pt-10 text-2xl">WHO WE ARE</div>
        <div className="text-center text-6xl md:text-8xl font-bold">
          THE DESIGN
          <br />
          AGENCY
        </div>
        <div className="text-center leading-tight text-20 md:text-2xl pt-5 md:pt-8">
          Engaging user experience, world-class web design & development, unique
          brand identity solutions to shine.
        </div>
      </div>

      {/* Image Scroll Section */}
      <div
        id="sidescroll"
        className="w-full h-96 flex justify-center items-center overflow-x-hidden space-x-4 bg-[#9ce968]"
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="h-48 md:h-64 w-[250px] md:w-[450px] rounded-2xl flex-shrink-0 overflow-hidden"
          >
            <img
              src={src}
              alt={`Project ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="bg-[#73d848] w-full h-screen flex flex-col items-center justify-end space-y-32">
        <div className="h-40 w-36 bg-black"></div>
        <div className="h-40 w-full flex flex-col items-center justify-center">
          <hr className="border-white w-[90%] mb-2" />
          <div className="text-white sm:flex sm:justify-center sm:items-center text-center w-full">
            © 2025 Envato Trademarks and brands are the property of their
            respective owners.
          </div>
        </div>
      </div>
    </div>
  );
}
