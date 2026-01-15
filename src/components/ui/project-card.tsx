"use client";

import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Image from "next/image";
import { git } from "@/assets";
import { fadeIn } from "@/lib/motion";
import { Project } from "@/types";
import { getTechIcon } from "@/utils/tech-icons";

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
                tiltMaxAngleX={3}
                tiltMaxAngleY={3}
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



                <div className='mt-4 flex flex-wrap gap-3'>
                    {tags.map((tag) => {
                        const { type, icon: Icon } = getTechIcon(tag.name);
                        // Note: For 'image', Icon is the src string/object. For 'lucide', it's the component.

                        return (
                            <div
                                key={`${name}-${tag.name}`}
                                className="relative group/tag"
                            >
                                <div className="w-10 h-10 rounded-full bg-black-200/50 p-2 flex justify-center items-center border border-white/5 hover:border-white/20 transition-colors">
                                    {type === "image" ? (
                                        <Image
                                            src={Icon as any}
                                            alt={tag.name}
                                            width={24}
                                            height={24}
                                            className="object-contain w-full h-full"
                                        />
                                    ) : (
                                        // @ts-ignore - Lucide icon component type
                                        <Icon size={20} className="text-secondary" />
                                    )}
                                </div>

                                {/* Tooltip */}
                                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black-100 text-white text-[10px] rounded opacity-0 group-hover/tag:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10 border border-white/10">
                                    {tag.name}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Tilt>
        </motion.div>
    );
};
