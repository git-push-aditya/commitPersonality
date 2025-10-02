"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react"
import SplitText from "../../components/splitText";
import TextType from '../../components/TextType';
import { BlockIcon, ChatbotEnter } from "../icons"; 
import axios from "axios";  

export default function Test() {

    const inputRef = useRef<HTMLInputElement | null>(null);
    const [githubId, setGithubId] = useState<string>("");
    const [isPending, setIsPending] = useState<boolean>(false);
    const [isError, setError] = useState<boolean>(false);

    useEffect(()=>{
        inputRef.current?.focus;
    },[])

    const handleId = async () => {
        try {
            setIsPending(true);
            const id = inputRef.current?.value; 
            setGithubId(id ?? " ");
            const res = await axios.post('/api/commit',{ 
                gitHubId : id 
            }); 
            setIsPending(false);
        } catch (e) {
            setError(true);
            setIsPending(false)
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
                        className="xl:w-[55%] w-[85%] z-50 xl:h-[10%] lg:h-[10%] h-[8%] rounded-[3rem] flex gap-10 items-center pl-5 bg-white shadow-xl hover:shadow-3xl  mb-3 group-hover"
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
                        className="h-screen w-screen overflow-hidden flex flex-col justify-center items-center">
                        < motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className=""
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <TextType
                                text={["Fetching your GitHub commits…", "Parsing and analyzing commit messages…", "Running insights through our LLM engine…", "Assigning your personality (and a joke, of course)…"]}
                                typingSpeed={40}
                                pauseDuration={200}
                                initialDelay={100}
                                className="text-black xl:text-[1.9rem] lg:text-[1.7rem] md:text-[1.6rem] font-averie text-[1.2rem]"
                                showCursor={true}
                                cursorCharacter="|"
                            />
                        </motion.div> 
                    </div>
                    ) : (<div>
                        
                    </div>)
                )}
            </AnimatePresence>

        </div >

    </div >
}
