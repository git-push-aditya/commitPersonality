"use client";
import { motion } from "framer-motion"
import Image from "next/image";

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
            className="lg:h-[400px] bg-white lg:w-[80%] w-[90%] lg:flex items-center justify-start mx-auto border-1 hover:border-1 hover:shadow-lg hover:scale-101 hover:-translate-y-1 duration-300 my-8 rounded-[3rem] gap-20 lg:px-20 px-5 py-8"
        >

            <Image
                className="lg:h-[350px] lg:w-[230px] h-[320px] w-[210px] object-cover mx-auto lg:mx-0 "
                src={getProfilePicId(Photo)} alt={""}            />
            <div className="flex flex-col lg:w-[70%] w-[100%] gap-4">
                <div className="font-averie lg:text-[2.3rem] w-[100%] text-[1.8rem] mt-4 mx-auto ">{Name}</div>

                <div className="flex flex-col">
                    <div className="font-averie text-[1.3rem] ">One line:</div>
                    <div className="font-newTitile text-[1rem] flex-justify ">
                        {OneLine}
                    </div>
                </div>

                <div className="flex flex-col ">
                    <div className="font-averie text-[1.3rem]">Vibe:</div>
                    <div className="font-newTitile text-[1rem] text-justify  ">
                        {Behaviour}
                    </div>
                </div>

                <div className="flex flex-col ">
                    <div className="font-averie text-[1.3rem]">Repo Side effect:</div>
                    <div className="font-newTitile text-[1rem] text-justify">
                        {repoSideEffects}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}


function getProfilePicId(id: String) {
    return `/personalityPic/${id}.png`;
}