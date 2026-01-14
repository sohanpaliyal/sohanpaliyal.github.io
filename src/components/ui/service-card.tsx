"use client";

import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "@/lib/motion";
import { Service } from "@/types";

interface ServiceCardProps {
    index: number;
    title: string;
    icon: any;
}

export const ServiceCard = ({ index, title, icon }: ServiceCardProps) => (
    <Tilt
        className='xs:w-[250px] w-full'
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        scale={1.05}
        transitionSpeed={450}
    >
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
            <div
                className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            >
                <Image
                    src={icon}
                    alt={title}
                    width={64}
                    height={64}
                    className='object-contain'
                />

                <h3 className='text-white-100 text-[20px] font-bold text-center'>
                    {title}
                </h3>
            </div>
        </motion.div>
    </Tilt>
);
