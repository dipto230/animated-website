import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTittle from "./AnimatedTittle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const clipRef = useRef(null);
  const maskClipRef = useRef(null);

  useEffect(() => {
    if (clipRef.current && maskClipRef.current) {
      const clipAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: clipRef.current, // Target the correct element
          start: "center center",
          end: "+=800 center",
          scrub: 0.5,
          pin: true,
          pinSpacing: true,
        },
      });

      clipAnimation.to(maskClipRef.current, {
        width: "100vw",
        height: "100vh",
        borderRadius: 0,
        duration: 1,
        ease: "power1.inOut",
      });
    }
  }, []);

  return (
    <div id="about" className="min-h-screen w-screen">
      {/* Intro Section */}
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-[10px]">
          Welcome to Zentry
        </h2>
        <AnimatedTittle
         title="Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure"
          containerClass="mt-5 !text-black text-center"
         />
      </div>

      {/* Subtext Section */}
      <div className="about-subtext">
        <p>The Game of Games begins—your life, now an epic MMORPG</p>
        <p className="text-gray-500">
          Zentry unites every player from countless games and platforms, both
          digital and physical, into a unified Play Economy.
        </p>
      </div>

      {/* Scroll-Triggered Section */}
      <div ref={clipRef} className="h-dvh w-screen" id="clip">
        <div
          ref={maskClipRef}
          className="mask-clip-path about-image relative w-[50vw] h-[50vh] overflow-hidden rounded-lg"
        >
          <img
            src="/public/img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
