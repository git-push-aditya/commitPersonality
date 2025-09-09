"use client";
import { AnimatePresence, motion } from "framer-motion";
import { GithubIcon, TwitterIcon } from "./icons";
import { useRef, useEffect, useState } from "react";

export default function TopBar() {

    const tabStyle = " hover:text-black text-[1.4rem] font-[2rem] text-gray-600 transition-hover hover:-translate-y-1 duration-200 ";

    const topbar = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState<boolean>()
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsVisible(entry.intersectionRatio < 0.9);
                });
            },
            {
                threshold: Array.from({ length: 101 }, (_, i) => i / 100),
            }
        );

        if (topbar.current) observer.observe(topbar.current);

        return () => {
            if (topbar.current) observer.unobserve(topbar.current);
        };
    }, []);

    return         <motion.div
        initial={{opacity:0}} 
        animate={{opacity:1}}
        transition={{duration:0.4, ease:"easeIn"}}
        className="cursor-pointer">
        <div
            ref={topbar}
            className="flex items-center mt-4 w-[90%] mx-auto py-4 pr-10 font-newTitile text-2xl pl-16"
        >
            <div 
                className="text-[1.8rem] font-heading font-[0.5rem]">commitPersonality</div>
            <div 
                className="flex-1 flex items-center justify-center gap-10 text-slate-300 hover:text-black transition-colors duration-200">
                <div className={tabStyle}>Test</div>
                <div className={tabStyle}>Personalities</div>
                <div className={tabStyle}>Stories</div>
                <div className={tabStyle}>Creator</div>
            </div>
            <div
                className="flex justify-center items-center gap-6 mr-6">
                <TwitterIcon dim="43"/>
                <GithubIcon dim="45" style=" cursor-pointer" />
            </div>
        </div>


        <AnimatePresence>
            {isVisible && <motion.div
                key={"topbar"}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, x: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className={`flex items-center justify-between mt-4 w-[90%] font-newTitile rounded-[2rem] py-4 pr-10 pl-16 mx-auto text-2xl font-bold z-50 fixed top-0 left-0 right-0 left-right-0  backdrop-blur-2xl bg-white/10`}
            >
            <div
                className="text-[1.8rem] font-heading">commitPersonality</div>
            <div 
                className="flex-1 flex items-center justify-center gap-10 text-slate-300 hover:text-black transition-colors duration-200">
                <div className={tabStyle}>Test</div>
                <div className={tabStyle}>Personalities</div>
                <div className={tabStyle}>Stories</div>
                <div className={tabStyle}>Creator</div>
            </div>
            <div
                className="flex justify-center items-center gap-6 mr-6">
                <TwitterIcon dim="43"/>
                <GithubIcon dim="45" style=" cursor-pointer" />
            </div>
            </motion.div>}
        </AnimatePresence>
    </motion.div>
}