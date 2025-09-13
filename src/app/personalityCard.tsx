"use client";
import { motion } from "framer-motion"

interface personalityProp {
    Photo: String;
    Name: String;
    OneLine: String;
    Behaviour: String;
    repoSideEffects: String;
}

export function PersonalityCard({
    Photo,
    Name,
    OneLine,
    Behaviour,
    repoSideEffects,
}: personalityProp) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount : 0.5 }} 
            className="h-[400px] bg-white w-[80%] flex items-center justify-start mx-auto border-1 hover:border-1 hover:shadow-lg hover:scale-101 hover:-translate-y-1 duration-300 my-8 rounded-[3rem] gap-20 px-20"
        >

            <img
                className="h-[350px] w-[230px] object-cover "
                src={getProfilePicId(Photo)}
            />
            <div className="flex flex-col  w-[70%] gap-4">
                <div className="font-averie text-[2.3rem]">{Name}</div>

                <article className="flex flex-col ">
                    <div className="font-averie text-[1.3rem]">One line:</div>
                    <div className="font-newTitile text-[1rem] ">
                        {OneLine}
                    </div>
                </article>

                <article className="flex flex-col ">
                    <div className="font-averie text-[1.3rem]">Vibe:</div>
                    <div className="font-newTitile text-[1rem] ">
                        {Behaviour}
                    </div>
                </article>

                <article className="flex flex-col ">
                    <div className="font-averie text-[1.3rem]">Repo Side effect:</div>
                    <div className="font-newTitile text-[1rem] ">
                        {repoSideEffects}
                    </div>
                </article>
            </div>
        </motion.div>
    );
}


function getProfilePicId(id: String) {
    return `/personalityPic/${id}.png`;
}