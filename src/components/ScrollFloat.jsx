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
  scrollStart = "top bottom",       // safer defaults for debugging
  scrollEnd = "bottom bottom-=40%", // you can tweak
  stagger = 0.03,
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";

    // handle both \r\n and \n
    return text.split("").map((char, index) => {
      if (char === "\r") return null; // ignore CR if windows line endings
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

    // Use gsap.context to scope selectors & cleanup automatically
    const ctx = gsap.context(() => {
      const scroller =
        scrollContainerRef && scrollContainerRef.current
          ? scrollContainerRef.current
          : window;

      // use GSAP utility, returns an array
      const charElements = gsap.utils.toArray(".char", el);

      // debug: see how many char elements found
      // remove the comment if you want to see it
      // console.log("charElements.length:", charElements.length);

      if (!charElements || charElements.length === 0) {
        // nothing to animate
        return;
      }

      // set initial state first (safer)
      gsap.set(charElements, {
        opacity: 0,
        yPercent: 120,
        scaleY: 2.3,
        scaleX: 0.7,
        transformOrigin: "50% 0%",
        willChange: "transform, opacity",
      });

      // create timeline with ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          scrub: true,
          // markers: true, // enable while debugging to see start/end
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

    // cleanup on unmount
    return () => {
      ctx.revert(); // kills animations + ScrollTriggers created in this context
    };
    // include children so animation recalculates when text changes
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
