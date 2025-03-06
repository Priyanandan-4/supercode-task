"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VideoScrollEffect() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;

    gsap.fromTo(
      video,
      { 
        width: "40%", 
        height: "40%" 
      },
      {
        width: "100%",
        height: "100%",
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom center",
          scrub: 4,
          pin: true, 
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill()); 
    };
  }, []);

  return (
    <div ref={containerRef} className="h-screen flex items-center justify-center overflow-hidden bg-[#E99768]">
      <video
        src="/video/banner.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="object-cover"
        ref={videoRef}
      />
    </div>
  );
}