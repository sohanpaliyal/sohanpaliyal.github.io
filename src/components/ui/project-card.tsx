"use client";

import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Image from "next/image";
import { git } from "@/assets";
import { fadeIn } from "@/lib/motion";
import { Project } from "@/types";

interface ProjectCardProps extends Project {
    index: number;
}

export const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
    imageClassName,
}: ProjectCardProps) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
            onClick={() => window.open(source_code_link, "_blank")}
            className="cursor-pointer"
        >
            <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                scale={1.02}
                transitionSpeed={450}
                className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full flex flex-col'
            >
                <div className='relative w-full h-[230px] overflow-hidden rounded-2xl'>
                    <Image
                        src={image}
                        alt='project_image'
                        fill
                        className={`w-full h-full object-cover ${imageClassName || ""}`}
                    />

                    <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                        <div
                            onClick={(e) => {
                                e.stopPropagation();
                                window.open(source_code_link, "_blank");
                            }}
                            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform'
                        >
                            <Image
                                src={git}
                                alt='source code'
                                width={20}
                                height={20}
                                className='object-contain'
                            />
                        </div>
                    </div>
                </div>

                <div className='mt-5 flex-1'>
                    <h3 className='text-white-100 font-bold text-[24px]'>{name}</h3>
                    <p className='mt-2 text-secondary text-[14px]'>{description}</p>
                </div>

                <div className='mt-4 flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                        <p
                            key={`${name}-${tag.name}`}
                            className={`text-[14px] ${tag.color}`}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    );
};
