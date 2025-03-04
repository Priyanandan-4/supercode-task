"use client"
import { useEffect, useRef } from "react";
import Lenis from 'lenis'
import gsap from "gsap/all";
import Image from "next/image";
import logo from "../public/icons/logo.svg"
import arrowdown from "../public/icons/arrowdown.svg"
// import video from "../public/video/banner.mp4"

export default function Home() {

  const heroref = useRef(null);
  const textref = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    if (heroref.current) {
      gsap.to(heroref.current, {
        y: "-100%",
        duration: 1,
        delay: 0.5,
        ease: "power2.inOut",
      });
    }


    const tl = gsap.timeline();
    tl.from(textref,{ y:40, ease:"power2.inOut"})
  }, []);


  const images = [
    "/image/image-three.png",
    "/image/image-one.png",
    "/image/image-two.png",
    "/image/image-three.png",
    "/image/image-one.png"
  ];

  return (
    <div className="w-full">
      <div className="w-full h-screen text-7xl font-inter font-[800] text-white flex justify-center items-center text-center leading-tight bg-[#eb5dd6]">
        THE DESIGN<br />AGENCY
      </div>
      <div ref={heroref} className="w-full h-screen  bg-[#afee6b]  text-black flex flex-col justify-between items-center absolute tracking-widest">
        <div className="pt-10"><Image src={logo} width={50} height={50} alt="logo" /></div>
        <div className="text-center  text-6xl md:text-8xl lg:text-9xl font-inter font-[800]"><div ref={textref} >THE DESIGN</div><div>AGENCY</div></div>
        <div><Image src={arrowdown} width={60} height={60} alt="logo" /></div>
      </div>





      <div className="z-10 w-full h-screen bg-white flex justify-center items-center  text-center leading-tight   text-8xl  ">
      
      <video
        src="/video/banner.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-[40%] h-[40%]"
      />

      </div> 
     <div className="w-full h-96 md:h-screen  font-bold bg-[#9ce968]  text-black flex flex-col justify-center items-center">
        <div className="pt-10 text-2xl">WHO WE ARE</div>
        <div className="text-center  text-6xl md:text-8xl font-bold"> THE DESIGN<br />AGENCY</div>
        <div className="text-center leading-tight text-20 md:text-2xl   pt-5 md:pt-8">Engaging user experience, world class<br/> web design & development, unique<br/> brand identity solutions to shine.</div>
      </div>


      <div className=" w-full h-96 flex justify-center items-center overflow-x-hidden space-x-4  bg-[#9ce968]">
      {images.map((src, index) => (
        <div key={index} className="h-48 md:h-64 w-[250px] md:w-[450px] rounded-2xl flex-shrink-0 overflow-hidden relative">
          <img src={src} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
        </div>
      ))}
      </div>





      <div className="bg-[#73d848] w-full h-screen flex flex-col items-center justify-end space-y-32">
      <div className="h-40 w-36 bg-black">njajnaajna</div>
      <div className="h-40 w-full flex flex-col items-center justify-center">
      <hr className="border-white w-[90%] mb-2" />
      <div className="text-white">© 2025 Envato Trademarks and brands are the property of their respective owners.</div>
      </div>

      </div>
    </div> 
  );
}
