"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { Blog } from "@/types";
import Tilt from "react-parallax-tilt";
import { getTechIcon } from "@/utils/tech-icons";

interface BlogCardProps extends Blog {
    index: number;
}

const BlogCard = ({
    index,
    id,
    title,
    subtitle,
    date,
    tags,
    image,
}: BlogCardProps) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
            className='w-full h-full'
        >
            <Tilt
                tiltMaxAngleX={3}
                tiltMaxAngleY={3}
                scale={1.02}
                transitionSpeed={450}
                className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full flex flex-col group'
            >
                <Link href={`/blog/${id}`} className="flex flex-col h-full">
                    <div className='relative w-full h-[230px] overflow-hidden rounded-2xl'>
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                        />
                    </div>

                    <div className='mt-5 flex-1'>
                        <p className='text-secondary text-[14px] font-medium'>{date}</p>
                        <h3 className='text-white-100 font-bold text-[24px] mt-2 group-hover:text-[#915EFF] transition-colors'>
                            {title}
                        </h3>
                        <p className='mt-2 text-secondary text-[14px] line-clamp-3'>{subtitle}</p>
                    </div>

                    <div className='mt-4 flex flex-wrap gap-3'>
                        {tags.map((tag) => {
                            const { type, icon: Icon } = getTechIcon(tag.name);
                            return (
                                <div
                                    key={`${id}-${tag.name}`}
                                    className="relative group/tag"
                                >
                                    <div className="w-8 h-8 rounded-full bg-black-200/50 p-1.5 flex justify-center items-center border border-white/5 hover:border-white/20 transition-colors">
                                        {type === "image" ? (
                                            <Image
                                                src={Icon as any}
                                                alt={tag.name}
                                                width={20}
                                                height={20}
                                                className="object-contain w-full h-full"
                                            />
                                        ) : (
                                            // @ts-ignore
                                            <Icon size={16} className="text-secondary" />
                                        )}
                                    </div>
                                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black-100 text-white text-[10px] rounded opacity-0 group-hover/tag:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10 border border-white/10">
                                        {tag.name}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </Link>
            </Tilt>
        </motion.div>
    );
};

export default BlogCard;
