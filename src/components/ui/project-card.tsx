"use client";

import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Image from "next/image";
import { git } from "@/assets";
import { fadeIn } from "@/lib/motion";
import { Project } from "@/types";
import { getTechIcon } from "@/utils/tech-icons";
import { Layers, X } from "lucide-react";

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
    const [showArchitecture, setShowArchitecture] = useState(false);

    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
            className="cursor-pointer perspective-1000"
        >
            <Tilt
                tiltMaxAngleX={3}
                tiltMaxAngleY={3}
                scale={1.02}
                transitionSpeed={450}
                tiltEnable={!showArchitecture}
                className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-[500px] perspective-1000'
            >
                <div
                    className="relative w-full h-full transition-all duration-500 preserve-3d"
                    style={{
                        transformStyle: "preserve-3d",
                        transform: showArchitecture ? "rotateY(180deg)" : "rotateY(0deg)",
                    }}
                >
                    {/* FRONT FACE */}
                    <div className="absolute inset-0 backface-hidden p-5 flex flex-col h-full" style={{ backfaceVisibility: "hidden" }}>
                        <div className='relative w-full h-[230px] flex-shrink-0 overflow-hidden rounded-2xl'>
                            <Image
                                src={image}
                                alt='project_image'
                                fill
                                className={`w-full h-full object-cover ${imageClassName || ""}`}
                            />

                            <div className='absolute inset-0 flex justify-end m-3 card-img_hover gap-2'>
                                {/* Architecture Toggle */}
                                <div
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setShowArchitecture(true);
                                    }}
                                    className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform'
                                    title="View Architecture"
                                >
                                    <Layers size={20} className="text-white" />
                                </div>

                                {/* Git Link */}
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

                        <div className='mt-5 flex-1 flex flex-col'>
                            <h3 className='text-white-100 font-bold text-[24px]'>{name}</h3>
                            <p className='mt-2 text-secondary text-[14px] line-clamp-4 flex-1'>{description}</p>
                        </div>

                        <div className='mt-4 flex flex-wrap gap-3'>
                            {tags.map((tag) => {
                                const { type, icon: Icon } = getTechIcon(tag.name);
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
                                                // @ts-ignore
                                                <Icon size={20} className="text-secondary" />
                                            )}
                                        </div>
                                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black-100 text-white text-[10px] rounded opacity-0 group-hover/tag:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10 border border-white/10">
                                            {tag.name}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* BACK FACE (Architecture) */}
                    <div
                        className="absolute inset-0 backface-hidden p-5 flex flex-col h-full bg-black-200 rounded-2xl border border-white/10"
                        style={{
                            backfaceVisibility: "hidden",
                            transform: "rotateY(180deg)"
                        }}
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-white font-bold text-lg">System Architecture</h3>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowArchitecture(false);
                                }}
                                className="p-1 hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X size={20} className="text-secondary hover:text-white" />
                            </button>
                        </div>

                        <div className="flex-1 w-full bg-[#0d1117] rounded-xl p-4 flex flex-col justify-center items-center gap-4 border border-white/5 overflow-hidden relative">
                            <div className="flex flex-col items-center justify-center text-center gap-4">
                                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-2">
                                    <Layers size={32} className="text-secondary opacity-50" />
                                </div>
                                <h4 className="text-white font-bold text-xl">Coming Soon</h4>
                                <p className="text-secondary text-sm max-w-[200px]">
                                    Detailed system architecture diagrams for this project will be available soon.
                                </p>
                            </div>
                        </div>

                        <div className="mt-4 text-[12px] text-secondary text-center">
                            Scalable microservices architecture with {tags[0]?.name || "React"} frontend.
                        </div>
                    </div>
                </div>
            </Tilt>
        </motion.div>
    );
};
