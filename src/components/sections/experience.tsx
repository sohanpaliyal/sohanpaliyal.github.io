"use client";

import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import Image from "next/image";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "@/styles/styles";
import { experiences } from "@/constants";
import { textVariant } from "@/lib/motion";
import Section from "@/components/ui/section";
import { Experience as ExperienceType } from "@/types";

const ExperienceCard = ({ experience }: { experience: ExperienceType }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "var(--glass-bg)",
                backdropFilter: "blur(12px)",
                color: "var(--text-primary)",
                border: "1px solid var(--glass-border)",
                boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.1)",
            }}
            contentArrowStyle={{ borderRight: "7px solid var(--glass-border)" }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
                <div className='flex justify-center items-center w-full h-full'>
                    <Image
                        src={experience.icon}
                        alt={experience.company_name}
                        width={48}
                        height={48}
                        className='w-[60%] h-[60%] object-contain'
                    />
                </div>
            }
        >
            <div>
                <h3 className='text-white-100 text-[24px] font-bold'>{experience.title}</h3>
                <p
                    className='text-secondary text-[16px] font-semibold'
                    style={{ margin: 0 }}
                >
                    {experience.company_name}
                </p>
            </div>

            <ul className='mt-5 list-disc ml-5 space-y-2'>
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className='text-white-100 text-[14px] pl-1 tracking-wider'
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

const Experience = () => {
    return (
        <Section idName='work'>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>
                    What I have done so far
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    Work Experience.
                </h2>
            </motion.div>

            <div className='mt-20 flex flex-col'>
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={`experience-${index}`}
                            experience={experience}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </Section>
    );
};

export default Experience;
