"use client";

import React from "react";
import { motion } from "framer-motion";
import { styles } from "@/styles/styles";
import { companyProjects, personalProjects, technicalEnhancements } from "@/constants";
import { fadeIn, textVariant } from "@/lib/motion";
import Section from "@/components/ui/section";
import { ProjectCard } from "@/components/ui/project-card";

const Works = () => {
    return (
        <Section idName='work'>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} `}>My work</p>
                <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
            </motion.div>

            <div className='w-full flex'>
                <motion.p
                    variants={fadeIn("", "tween", 0.1, 1)}
                    className='mt-3 text-secondary text-[17px] max-w-full leading-[30px]'
                >
                    Following projects showcases my skills and experience through
                    real-world examples of my work. Each project is briefly described with
                    links to code repositories and live demos in it. It reflects my
                    ability to solve complex problems, work with different technologies,
                    and manage projects effectively.
                </motion.p>
            </div>

            <div className='mt-20 flex flex-col gap-16'>
                <div>
                    <h3 className="text-white-100 text-[24px] font-bold mb-8">Company Projects</h3>
                    <div className="flex flex-wrap gap-7">
                        {companyProjects.map((project, index) => (
                            <ProjectCard key={`company-${index}`} index={index} {...project} />
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-white-100 text-[24px] font-bold mb-8">Personal Projects</h3>
                    <div className="flex flex-wrap gap-7">
                        {personalProjects.map((project, index) => (
                            <ProjectCard key={`personal-${index}`} index={index} {...project} />
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Works;
