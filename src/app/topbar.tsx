"use client";
import { AnimatePresence, motion } from "framer-motion";
import { CrossTopBar, GithubIcon, TopBarSVG, TwitterIcon } from "./icons";
import { useRef, useEffect, useState } from "react";
import { openProfile } from "./utils";
import { useRefs } from "./RefsContext";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"



export default function TopBar() {
    const { developerRef, testRef, personalitiesRef, storiesRef } = useRefs();
    const pathname = usePathname();
    const router = useRouter();

    const GetInView = ({ selectedRef }: { selectedRef: React.RefObject<HTMLDivElement | null> }) => {
        selectedRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    const [topBar, setTopBar] = useState<boolean>(false);

    const revertBackToHomePage = () => {
        if(pathname === "/test"){
            router.push("/");
        }
    }


    const tabStyle = " hover:text-black lg:text-[1.4rem] text-[1.1rem] font-[2rem] text-gray-600 transition-hover hover:-translate-y-1 duration-200 ";

    const topbar = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState<boolean>();

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

    return <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeIn" }}
        className={`cursor-pointer z-10 ${pathname === "/test" ? "bg-blue-100/10" : ""}`}>
        <div
            ref={topbar}
            className="flex justify-between items-center pt-8 lg:w-[90%] md:w-[96%] w-full mx-auto py-4 xl:pr-10 md:pr-7 pr-5 font-newTitile text-2xl xl:pl-16 md:pl-10 pl-8"
        >
            <div
                className="xl:text-[1.8rem] text-[1.6rem] font-heading font-[0.5rem]">commitPersonality</div>
            <div
                className="hidden flex-1 md:flex items-center justify-center lg:gap-10 gap-5 text-slate-300 hover:text-black transition-colors duration-200">
                <div
                    className={tabStyle}
                    onClick={() => { revertBackToHomePage(); GetInView({ selectedRef: testRef })}}>Test
                </div>
                <div
                    className={tabStyle}
                    onClick={() => { revertBackToHomePage(); GetInView({ selectedRef: personalitiesRef })}}>Personalities
                </div>
{/*                <div
                    className={tabStyle}
                    onClick={() => { revertBackToHomePage(); GetInView({ selectedRef: storiesRef })}}>Stories
                </div>*/}
                <div
                    className={tabStyle}
                    onClick={() => {revertBackToHomePage(); GetInView({ selectedRef: developerRef })}}>Developer
                </div>
            </div>
            <div
                className="hidden md:flex justify-center items-center lg:gap-6 gap-4 lg:mr-6 mr-3">

                <TwitterIcon
                    dim="43"
                    style="hover:text-blue-800 transition-hover duration-200 xl:size-11 lg:size-10 size-9" />
                <GithubIcon
                    dim="45"
                    style=" cursor-pointer hover:text-orange-600 transition-hover duration-200 xl:size-11 lg:size-10 size-9"
                    onClickHandler={() => openProfile({ hyperlink: "https://github.com/git-push-aditya/commitPersonality" })}
                />
            </div>
            <div className="flex md:hidden cursor-pointer">
                <DropdownMenu open={topBar} onOpenChange={setTopBar}>
                    <DropdownMenuTrigger asChild>
                        <button
                            onMouseDown={(e) => e.preventDefault()}
                            className="flex md:hidden justify-center items-center h-10 cursor-pointer">
                            {
                                topBar ? (
                                    <CrossTopBar
                                        dim="45"
                                        style="size-12 mr-2 scale-110 mt-1 cursor-pointer "
                                        onClickHandler={() => setTopBar(false)}
                                    />) :
                                    (<TopBarSVG
                                        onClickHandler={() => setTopBar(true)}
                                        dim="45"
                                        style="size-7 scale-x-120 scale-y-80 mr-4 hover:scale-x-125 hover:scale-y-82 transition-all duration-200 "
                                    />)
                            }
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-screen scale-140 mt-3" align="start">
                        <DropdownMenuGroup>
                            <DropdownMenuItem onClick={() => {
                                setTopBar(false);
                                setTimeout(() => GetInView({ selectedRef: testRef }), 100);
                            }}>
                                Test
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => {
                                setTopBar(false);
                                setTimeout(() => GetInView({ selectedRef: personalitiesRef }), 100);
                            }}>
                                Personalities
                            </DropdownMenuItem>
{/*                            <DropdownMenuItem onClick={() => {
                                setTopBar(false);
                                setTimeout(() => GetInView({ selectedRef: testRef }), 100);
                            }}>
                                Stories
                            </DropdownMenuItem>*/}
                            <DropdownMenuItem onClick={() => {
                                setTopBar(false);
                                setTimeout(() => GetInView({ selectedRef: developerRef }), 100);
                            }}>
                                Developer
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            onClick={() => openProfile({ hyperlink: "https://x.com/AdityaDtwt" })}> Twitter</DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => openProfile({ hyperlink: "https://github.com/git-push-aditya/commitPersonality" })}>
                            Github
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>


        <AnimatePresence>
            {isVisible && <motion.div
                key={"topbar"}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, x: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className={`flex items-center justify-between mt-4 lg:w-[90%] w-[96%] font-newTitile rounded-[2rem] py-4 xl:pr-10 md:pr-7 pr-5 xl:pl-16 md:pl-10 pl-8 mx-auto text-2xl font-bold z-50 fixed top-0 left-0 right-0 left-right-0  backdrop-blur-2xl bg-white/10`}
            >
                <div
                    className="xl:text-[1.8rem] lg:text-[1.6rem] text-[1.5rem] font-heading">commitPersonality</div>
                <div
                    className="hidden flex-1 md:flex items-center justify-center lg:gap-10 gap-5 text-slate-300 hover:text-black transition-colors duration-200">
                    <div
                        className={tabStyle}
                        onClick={() => { revertBackToHomePage(); GetInView({ selectedRef: testRef })}}>Test
                    </div>
                    <div
                        className={tabStyle}
                        onClick={() => {revertBackToHomePage();GetInView({ selectedRef: personalitiesRef })}}>Personalities
                    </div>
{/*                    <div
                        className={tabStyle}
                        onClick={() => {revertBackToHomePage(); GetInView({ selectedRef: storiesRef })}}>Stories
                    </div>*/}
                    <div
                        className={tabStyle}
                        onClick={() => {revertBackToHomePage(); GetInView({ selectedRef: developerRef })}}>Developer
                    </div>
                </div>
                <div
                    className="hidden md:flex justify-center items-center lg:gap-6 gap-4 lg:mr-6 mr-3">
                    <TwitterIcon dim="43" style="hover:text-blue-800 transition-hover duration-200 xl:size-11 size-9" />
                    <GithubIcon dim="45" style=" cursor-pointer hover:text-orange-600 transition-hover duration-200 xl:size-11 size-9" onClickHandler={() => openProfile({ hyperlink: "https://github.com/git-push-aditya/commitPersonality" })} />
                </div>
                <div className="flex md:hidden">
                    <DropdownMenu open={topBar} onOpenChange={setTopBar}>
                    <DropdownMenuTrigger asChild>
                        <button
                            onMouseDown={(e) => e.preventDefault()}
                            className="flex md:hidden justify-center items-center h-10 cursor-pointer">
                            {
                                topBar ? (
                                    <CrossTopBar
                                        dim="45"
                                        style="size-12 mr-2 scale-110 mt-1 cursor-pointer "
                                        onClickHandler={() => setTopBar(false)}
                                    />) :
                                    (<TopBarSVG
                                        onClickHandler={() => setTopBar(true)}
                                        dim="45"
                                        style="size-7 scale-x-120 scale-y-80 mr-4 hover:scale-x-125 hover:scale-y-82 transition-all duration-200 "
                                    />)
                            }
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-screen scale-140 mt-3" align="start">
                        <DropdownMenuGroup>
                            <DropdownMenuItem onClick={() => {
                                setTopBar(false);
                                setTimeout(() => GetInView({ selectedRef: testRef }), 100);
                            }}>
                                Test
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => {
                                setTopBar(false);
                                setTimeout(() => GetInView({ selectedRef: personalitiesRef }), 100);
                            }}>
                                Personalities
                            </DropdownMenuItem>
{/*                            <DropdownMenuItem onClick={() => {
                                setTopBar(false);
                                setTimeout(() => GetInView({ selectedRef: testRef }), 100);
                            }}>
                                Stories
                            </DropdownMenuItem>*/}
                            <DropdownMenuItem onClick={() => {
                                setTopBar(false);
                                setTimeout(() => GetInView({ selectedRef: developerRef }), 100);
                            }}>
                                Developer
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            onClick={() => openProfile({ hyperlink: "https://x.com/AdityaDtwt" })}> Twitter</DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => openProfile({ hyperlink: "https://github.com/git-push-aditya/commitPersonality" })}>
                            Github
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                </div>
            </motion.div>}
        </AnimatePresence>
    </motion.div>
}

