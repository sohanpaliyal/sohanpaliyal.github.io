"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { Blog } from "@/types";

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

                <div className='mt-4 flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                        <p
                            key={`${id}-${tag.name}`}
                            className={`text-[14px] ${tag.color}`}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Link>
        </motion.div>
    );
};

export default BlogCard;
