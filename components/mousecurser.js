"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import arrowright from "../public/icons/arrowright.svg";

const MouseFollower = () => {
  const cursorRef = useRef(null);
  const [arrow, setArrow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
      });
    };

    const handleMouseEnter = () => {
      setArrow(true);
      gsap.to(cursor, { scale: 5, backgroundColor: "transparent" });
    };

    const handleMouseLeave = () => {
      setArrow(false);
      gsap.to(cursor, { scale: 1, backgroundColor: "#FF4D00" });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const element = document.getElementById("sidescroll");
    if (element) {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (element) {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
    >
      {arrow && <Image src={arrowright} alt="Arrow Right" width={36} height={36} />}
    </div>
  );
};

export default MouseFollower;
