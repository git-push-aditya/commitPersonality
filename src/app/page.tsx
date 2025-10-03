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
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PersonalityCard } from "./personalityCard";
import { GithubIcon } from "./icons";
import { useRefs } from "./RefsContext";
import { useRouter } from "next/navigation";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export const openProfile = ({ hyperlink }: { hyperlink: string }) => {
  window.open(hyperlink, "_blank", "noopener,noreferrer");
}




export default function Home() {
  const router = useRouter();

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



  const pointer = "lg:text-[1.5rem] text-[1.2rem] font-bold font-newTitile";
  const def = " lg:text-[1.4rem] text-[1.2rem] text-gray-700 tracking-wide ";
  const howSectionRef = useRef<HTMLDivElement>(null);

  const { developerRef, testRef, personalitiesRef, storiesRef } = useRefs();


  useEffect(() => {
    gsap.from(howSectionRef.current, {
      scrollTrigger: {
        trigger: howSectionRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 100,
      duration: 0.5,
      ease: "back.inOut(2)",
    });
  }, []);

  useEffect(() => {
    gsap.from(developerRef.current, {
      scrollTrigger: {
        trigger: developerRef.current,
        start: "top 95%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 40,
      duration: 0.5,
      ease: "back.inOut(2)",
    });
  }, []);



  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <div
        ref={testRef}
        className="relative overflow-hidden h-screen w-screen">
        <div className="relative z-20 flex flex-col items-start items-start lg:justify-center h-full w-full 2xl:ml-50  xl:ml-30 lg:ml-20  2xl:-translate-y-30 lg:-translate-y-20 font-heading">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeIn" }}
            className="flex flex-col mx-auto lg:mx-0 items-start">
            <SplitText
              text="Your commits are roasting you."
              className="text-black 2xl:text-[2.9rem] lg:text-[2.5rem] font-bold line-clamp-2 tracking-tighter px-0 lg:px-1 mt-14 lg:mt-0 text-[2.1rem] "
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
              className="text-black 2xl:text-[2.9rem] lg:text-[2.5rem] font-bold tracking-tighter px-1 text-[2rem]"
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
            initial={{ y: 5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 5, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeIn", delay: 0.5 }}
            className="font-newTitile 2xl:text-[1.2rem] lg:text-[1rem] lg:text-start text-center ml-2 my-2 text-gray-600  lg:w-[650px] w-full pl-10 lg:pl-0">
            We turn your commits into memes and personality types — <br />even <span className="italic text-gray-900 font-bold">fix bug lol</span> says a lot.
          </motion.div>
          <div className="flex items-center mx-auto lg:mx-0 text-[3rem]">
            <motion.div
              initial={{ y: 5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.9, ease: "anticipate" }}>
              <GradientText
                colors={["#9333ea, #3b82f6, #06b6d4, #10b981, #9333ea"]}
                className=""
              ><div
                className="2xl:text-[2rem] lg:text-[1.6rem] text-[1.6rem] font-heading">Take test</div>
              </GradientText>
            </motion.div>
            <motion.div
              initial={{ x: 8, opacity: 0 }}
              onClick={() => { router.push('/test') }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.9, ease: "backIn" }}
              className="2xl:ml-3 ml-2 font items-center border-2 px-3 rounded-2xl flex gap-1 hover:gap-3 cursor-pointer transition-hover duration-200 ease-in-out hover:border-blue-400 2xl:scale-100 lg:scale-85">
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
            className="absolute 2xl:top-0 lg:top-5 left-0 w-full h-full lg:translate-x-60 xl:translate-x-70 rotate-[270deg] 2xl:scale-145 lg:scale-130 pointer-events-none m-0 p-0 z-10 scale-100 translate-x-0 top-22 "
            src="/Untitled.mp4"
            autoPlay
            loop
            muted
            playsInline
            controls={false}
          />
        </motion.div>
      </div>
      <div
        className=" w-[100%] rounded-[5rem] bg-blue-100/30 m-0 pb-40 border-1 ">
        <div
          ref={howSectionRef}
          className=" flex justify-center items-center mx-auto xl:gap-x-32  pt-50 pb-20 w-screen ">
          <div className=" hidden lg:block xl:w-[30%] xl:h-[30%] w-[40%] h-[40%] ">
            <Lottie animationData={animationData} loop={true} />
          </div>
          <div
            className="flex flex-col justify-center items-center mr-10 ">
            <div
              className="lg:text-[4.5rem] md:text-[3.2rem] text-[2.5rem] font-[1.5rem] my-4 font-averie text-center md:text-start">
              How it works :
            </div>
            <div className="lg:pl-18 px-5">
              <div className={pointer}>
                1.Click {"Take Test"} - <span className={def}>start instantly, no signup hassle.</span>
              </div>

              <div
                className={pointer}>2.Enter your GitHub ID -<span className={def}>we pull your commit messages.</span></div>
              <div
                className={pointer}>3.Get your personality type- <span className={def}>analyzed, fun, and surprisingly accurate.</span></div>
            </div>
          </div>
        </div>
        <div
          className="h-screen w-screen flex  flex-col justify-center items-center">
          <div
            className=" text-[3rem]  lg:scale-60 scale-88 font-averie">
            <ScrollFloat
              animationDuration={1}
              ease='back.inOut(2)'
              scrollStart='center bottom+=30%'
              scrollEnd='bottom bottom-=40%'
              textClassName=" text-[5rem] tracking-tighter "
              stagger={0.03}
              scrollContainerRef={undefined}
            >
              {`“Behind every bug fix, there's a piece of you."`}
            </ScrollFloat>
          </div>
          <div
            className=" lg:scale-23 scale-40 font-averie lg:-mt-35 -mt-5">
            <ScrollFloat
              animationDuration={1}
              ease='back.inOut(2)'
              scrollStart='center bottom+=30%'
              scrollEnd='bottom bottom-=40%'
              textClassName=" text-[5rem] tracking-tighter text-pur
            ple-900 "
              stagger={0.03}
              scrollContainerRef={undefined}
            >
              -Team commitPersonality
            </ScrollFloat>
          </div>
        </div>


        {/* Personality type section */}
        <motion.div
          ref={personalitiesRef}
          className="lg:text-[2.8rem] text-[2rem] font-heading lg:ml-40 ml-18 my-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }} >
          Personalities :
        </motion.div>
        <div
          className=" w-screen">
          <PersonalityCard
            Photo={"p1"}
            Name={"Conventional Connie"}
            OneLine={"The strict librarian of commits who thinks Git is the holy scripture."}
            Behaviour={"Connie whispers the Conventional Commits spec like a bedtime prayer. She refuses to commit until every word is lowercase, every scope is labeled, and every breaking change is marked with the drama it deserves."}
            repoSideEffects={"Opens PRs correcting your grammar.The history looks so polished you’d think it was generated by AI. Future devs love her, but teammates secretly roll their eyes when she corrects “feat” vs. “fix” for the 12th time."}
          />
          <PersonalityCard
            Photo={"p2"}
            Name={"Hotfix Hank"}
            OneLine={"The 3 A.M. hero who saves production with duct tape and vibes."}
            Behaviour={"Hank commits like he’s defusing a bomb — sweaty palms, racing heart, and a message that just says “pls work.” If code breaks, you’ll find him muttering “just one more quick fix.”"}
            repoSideEffects={"Logs are a battlefield of half-thoughts: “fixed it,” “really fixed it,” “no seriously fixed it.” Nobody knows what happened, but hey — the app runs."}
          />
          <PersonalityCard
            Photo={"p3"}
            Name={"Verbose Vera"}
            OneLine={"The Shakespeare of commits who writes sonnets instead of summaries."}
            Behaviour={"Vera treats every commit like a memoir. She includes the what, why, how, emotional context, and sometimes even what she had for lunch while debugging. Reading her commits is like attending a TED Talk."}
            repoSideEffects={"Future devs have way too much context. The logs are insanely helpful, but you’ll need a coffee refill just to scroll through them."}
          />
          <PersonalityCard
            Photo={"p4"}
            Name={"Amendable Andy"}
            OneLine={"The time traveler who edits history like it’s his personal diary."}
            Behaviour={"Andy can’t resist rewording commits, squashing them into “masterpieces,” and force-pushing with a smug smile. He believes “git log” should look like an art gallery wall — no rough drafts allowed."}
            repoSideEffects={"Everything looks flawless, but teammates quietly panic when their branches explode after his rebases. The repo is spotless, but also mildly terrifying."}
          />
        </div>
      </div>

      <div
        ref={developerRef}>
        <div
          className="lg:text-[2.8rem] text-[2.2rem] font-heading lg:ml-30 xl:ml-40 text-center lg:text-start mt-30">
          Meet the Developer :
        </div>
        <div
          className="lg:flex items-center justify-center mt-10 mb-40 mx-12">
          <div
            className="lg:w-[30%] md:w-[30%] xl:w-[20%] mx-auto w-[50%] mb-15 lg:mb-0">
            <Image
              src={"/me.png"}
              className=" rounded-[12rem] scale-110 lg:ml-15" alt={""} height={400} width={400} />
          </div>
          <div
            className="lg:w-[60%] w-[98%] mx-auto lg:text-[1.4rem] text-[1.3rem] font-newTitile lg:px-8 px-0 text-justify">
            <p>
              I’m Aditya, a 20-year-old developer with a strong passion for web development and DevOps. I love exploring how modern web technologies and cloud-native tools come together to create scalable, reliable, and user-friendly systems. Hackathons have been a big part of my journey — I enjoy the thrill of solving problems under tight deadlines, collaborating with teammates, and turning abstract ideas into working prototypes.</p>
            <p><br />
              Beyond the adrenaline of hackathons, I spend time experimenting with new stacks, refining my skills in containerization, orchestration, and automation, and constantly learning how to streamline development workflows. For me, building isn’t just about writing code — it’s about designing experiences, solving real challenges, and adding my own creative flavor to every project. My path so far has been full of trials and learning curves, but those moments have only strengthened my drive to keep pushing boundaries and making tech that feels alive.</p><br />

            <p>
              <GithubIcon
                dim="50"
                style=" cursor-pointer hover:text-orange-600 transition-hover duration-200"
                onClickHandler={() => openProfile({ hyperlink: "https://github.com/git-push-aditya" })}
              />
            </p>

          </div>
        </div>
      </div>

    </div>
  );
}
