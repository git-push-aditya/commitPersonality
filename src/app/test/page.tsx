"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react"
import SplitText from "../../components/splitText";
import TextType from '../../components/TextType';
import { BlockIcon, ChatbotEnter } from "../icons";
import Skeleton from "../skeleton";

export default function Test() {

    const inputRef = useRef<HTMLInputElement>(null);
    const [githubId, setGithubId] = useState<string>("");
    const [isPending, setIsPending] = useState<boolean>(false);
    const [isError, setError] = useState<boolean>(false);

    const handleId = () => {
        try {
            setIsPending(true);
            const id = inputRef.current?.value;
            setGithubId(id ?? " ");
        } catch (e) {
            setError(true);
        }
    }



    useEffect(() => {
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, []);

    return <div className="h-screen w-screen overflow-y-hidden bg-blue-100/10">
        <div
            className="flex flex-col gap-6 justify-center items-center h-screen w-screen -translate-y-30">
            <AnimatePresence mode="wait">
                {githubId === "" ? (<>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, ease: "easeIn" }}
                        className="flex mx-auto ">
                        <SplitText
                            text="Uncover Your GitHub Persona.."
                            className="text-black/90 2xl:text-[3.5rem] lg:text-[2.9rem] font-bold line-clamp-2 tracking-tight px-0 lg:px-1 mt-14 lg:mt-0 text-[2.1rem] font-heading"
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
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 55 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="xl:w-[55%] w-[85%] z-50 xl:h-[10%] lg:h-[60%] h-[50%] rounded-[3rem] flex gap-10 items-center pl-5 bg-white shadow-xl hover:shadow-3xl  mb-3 group-hover"
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <input
                            type="text"
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && !e.shiftKey) {
                                    e.preventDefault();
                                    handleId();
                                }
                            }}
                            className="scale-95 text-token-text-primary resize-none placeholder:ps-px scrollbar-hidden outline-none px-5 h-[100%] xl:text-[1.9rem] lg:text-xl text-[1.35rem] font-[550] w-[85%] font-averie"
                            placeholder="Enter your GitHub profile.."
                            ref={inputRef} />
                        <ChatbotEnter
                            dim="20"
                            style={`p-2 mr-5 hover:bg-gray-100 lg:size-19 size-16 cursor-pointer rounded-[3rem] transition-all duration-300 ${!isPending ? " block " : " hidden "}`}
                            onClickHandler={() => handleId()} />
                        <BlockIcon
                            style={` text-gray-500/90 mr-5 hover:text-gray-600/95 lg:size-17 animate-pulse size-14 cursor-default  rounded-[5rem]  transition-all duration-300 
                                ${isPending ? " block " : " hidden "}`} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <TextType
                            text={["Psst… drop your GitHub ID 👀", "Let's see what your repos say about you…", "Ready to reveal your coding persona?"]}
                            typingSpeed={75}
                            pauseDuration={1500}
                            className="text-black text-[1.5rem] font-averie"
                            showCursor={true}
                            cursorCharacter="|"
                        />
                    </motion.div>
                </>) : (
                    isPending ? (<div
                        className="h-screen w-screen flex flex-col">
                        < motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="xl:mt-40 ml-30"
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <TextType
                                text={["Fetching your GitHub commits…", "Parsing and analyzing commit messages…", "Running insights through our LLM engine…", "Assigning your personality (and a joke, of course)…"]}
                                typingSpeed={30}
                                pauseDuration={200}
                                initialDelay={100}
                                className="text-black text-[1.9rem] font-averie"
                                showCursor={true}
                                cursorCharacter="|"
                            />
                        </motion.div>
                        <Skeleton style=" -translate-y-12 ml-80 scale-x-300 scale-y-30" />
                        <div
                            className="flex gap-50">
                            <Skeleton style=" ml-100 scale-x-380 scale-y-230 mt-15" />
                            <Skeleton style=" ml-100 scale-x-380 scale-y-230 mt-15" />
                        </div>
                        <Skeleton style="scale-y-30 scale-x-780 mt-30 ml-200" />
                    </div>
                    ) : (<div>
                        
                    </div>)
                )}
            </AnimatePresence>

        </div >

    </div >
}


{
    /*              <motion.div
                        initial={{ opacity: 0, x: 45 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="xl:mt-40 ml-30 text-[3rem] font-heading text-black/90">Final Verdict - 
                    </motion.div> */
}