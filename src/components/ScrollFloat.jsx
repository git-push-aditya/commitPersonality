"use client";
import React, { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./ScrollFloat.css";

gsap.registerPlugin(ScrollTrigger);

const ScrollFloat = ({
  children,
  scrollContainerRef,
  containerClassName = "",
  textClassName = "",
  animationDuration = 1,
  ease = "back.inOut(2)",
  scrollStart = "top bottom",       
  scrollEnd = "bottom bottom-=40%", 
  stagger = 0.03,
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";

    return text.split("").map((char, index) => {
      if (char === "\r") return null; 
      if (char === "\n") {
        return <br key={index} />;
      }
      if (char === " ") {
        return (
          <span className="char" key={index}>
            {"\u00A0"}
          </span>
        );
      }
      return (
        <span className="char" key={index}>
          {char}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
 
    const ctx = gsap.context(() => {
      const scroller =
        scrollContainerRef && scrollContainerRef.current
          ? scrollContainerRef.current
          : window;
 
      const charElements = gsap.utils.toArray(".char", el);
 

      if (!charElements || charElements.length === 0) { 
        return;
      }
 
      gsap.set(charElements, {
        opacity: 0,
        yPercent: 120,
        scaleY: 2.3,
        scaleX: 0.7,
        transformOrigin: "50% 0%",
        willChange: "transform, opacity",
      });
 
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          scrub: true, 
        },
      });

      tl.to(charElements, {
        duration: animationDuration,
        ease: ease,
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        stagger: stagger,
      });
    }, el);
 
    return () => {
      ctx.revert();  
    }; 
  }, [
    children,
    scrollContainerRef,
    animationDuration,
    ease,
    scrollStart,
    scrollEnd,
    stagger,
  ]);

  return (
    <h2 ref={containerRef} className={`scroll-float ${containerClassName}`}>
      <span className={`scroll-float-text ${textClassName}`}>{splitText}</span>
    </h2>
  );
};

export default ScrollFloat;
