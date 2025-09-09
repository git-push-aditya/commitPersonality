"use client";
import { RightArrow } from "./icons";
import SplitText from "../components/splitText";
import GradientText from '../components/GradientText'
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../components/1.Our process.json";
import ScrollFloat from '../components/ScrollFloat';
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";


export default function Home() { 
    useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);


  const pointer = "text-[1.5rem] font-bold font-newTitile";
  const def = " text-[1.4rem] text-gray-700 tracking-wide ";
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="overflow-x-hidden">
      <div className="relative overflow-hidden h-screen w-screen">
        <div className="relative z-20 flex flex-col items-start justify-center h-full w-full  ml-50 -translate-y-30 font-heading">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeIn" }}
            className="flex flex-col items-start">
            <SplitText
              text="Your commits are roasting you."
              className="text-black text-[2.9rem] font-bold line-clamp-2 tracking-tighter px-1 m-0"
              delay={30}
              duration={2}
              ease="elastic.out(1,0.3)"
              splitType="words, chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="0px"
              textAlign="center"
            />
            <SplitText
              text="What do your commits say?"
              className="text-black text-[2.9rem] font-bold tracking-tighter px-1 m-0"
              delay={30}
              duration={2}
              ease="elastic.out(1,0.3)"
              splitType="words, chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="0px"
              textAlign="center"
            /></motion.div>
          <motion.div
            initial={{ y: 5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 5, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeIn", delay: 0.5 }}
            className="font-newTitile text-[1.2rem] my-2 text-gray-600  w-[650px]">
            We turn your commits into memes and personality types — <br />even <span className="italic text-gray-900 font-bold">fix bug lol</span> says a lot.
          </motion.div>
          <div className="flex items-center text-[3rem]">
            <motion.div
              initial={{ y: 5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.9, ease: "anticipate" }}>
              <GradientText
                colors={["#9333ea, #3b82f6, #06b6d4, #10b981, #9333ea"]}
                className=""
              ><div
                className="text-[2rem] font-heading">Take test</div>
              </GradientText></motion.div>
            <motion.div
              initial={{ x: 8, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.9, ease: "backIn" }}
              className="ml-3 font items-center border-2 px-3 rounded-2xl flex gap-1 hover:gap-3 cursor-pointer transition-hover duration-200 ease-in-out hover:border-blue-400">
              <div className="text-[1.8rem] font-heading m-0 p-0">
                now
              </div>
              <RightArrow dim="18" />
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeIn" }}>
          <video
            className="absolute top-0 left-0 w-full h-full translate-x-70 rotate-[270deg] scale-145  pointer-events-none m-0 p-0 z-10"
            src="/Untitled.mp4"
            autoPlay
            loop
            muted
            playsInline
            controls={false}
          /></motion.div>
      </div>
      <div
        className=" flex justify-center items-center my-10 mx-auto gap-x-32">
        <div className=" w-[30%] h-[30%] ">
          <Lottie animationData={animationData} loop={true} />
        </div>
        <div
          className="flex flex-col justify-center items-center">
          <div
            className="text-[4.5rem] font-[2rem] my-4 font-averie">
            How it works :
          </div>
          <div className="pl-18">
            <div
              className={pointer}>1.Click "Take Test" -<span className={def}>start instantly, no signup hassle.</span></div>
            <div
              className={pointer}>2.Enter your GitHub ID -<span className={def}>we pull your commit messages.</span></div>
            <div
              className={pointer}>3.Get your personality type- <span className={def}>analyzed, fun, and surprisingly accurate.</span></div>
          </div>
        </div>

      </div>
      <div className="h-screen w-screen flex  flex-col justify-center items-center">
      <div
        className=" text-[3rem]  scale-60 font-averie">
        <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='center bottom+=30%'
          scrollEnd='bottom bottom-=40%'
          textClassName=" text-[5rem] tracking-tighter " 
          stagger={0.03}
          scrollContainerRef={undefined}
          >
          “Behind every bug fix,
          there's a piece of you."
        </ScrollFloat>
        </div>
        <div
        className=" scale-23 font-averie -mt-35">
          <ScrollFloat
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='center bottom+=30%'
            scrollEnd='bottom bottom-=40%'
            textClassName=" text-[5rem] tracking-tighter text-purple-900 " 
            stagger={0.03}
            scrollContainerRef={undefined}
            >
            -Team commitPersonality
          </ScrollFloat>        
      </div>
      </div>


      {/* Personality type section */}
      <div 
        className="">
          
      </div>
    </div>
  );
}
