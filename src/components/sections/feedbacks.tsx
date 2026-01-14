"use client";

import React from "react";
import { motion } from "framer-motion";
import { styles } from "@/styles/styles";
import { fadeIn, textVariant } from "@/lib/motion";
import Section from "@/components/ui/section";

const FeedbackCard = ({
    index,
    testimonial,
    name,
    designation,
    company,
    image,
}: any) => (
    <motion.div
        variants={fadeIn("", "spring", index * 0.5, 0.75)}
        className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
    >
        <p className='text-white-100 font-black text-[48px]'>"</p>

        <div className='mt-1'>
            <p className='text-white-100 tracking-wider text-[18px]'>{testimonial}</p>

            <div className='mt-7 flex justify-between items-center gap-1'>
                <div className='flex-1 flex flex-col'>
                    <p className='text-white-100 font-medium text-[16px]'>
                        <span className='blue-text-gradient'>@</span> {name}
                    </p>
                    <p className='mt-1 text-secondary text-[12px]'>
                        {designation} of {company}
                    </p>
                </div>

                <img
                    src={image}
                    alt={`feedback_by-${name}`}
                    className='w-10 h-10 rounded-full object-cover'
                />
            </div>
        </div>
    </motion.div>
);

const Feedbacks = () => {
    return (
        <div className={`mt-12 bg-black-100 rounded-[20px] overflow-hidden`}>
            <Section idName='feedbacks' className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
                <motion.div variants={textVariant()}>
                    <p className={styles.sectionSubText}>What others say</p>
                    <h2 className={styles.sectionHeadText}>Testimonials.</h2>
                </motion.div>

                <div className={`mt-20 flex flex-wrap gap-7 pb-14`}>
                    {/* Add testimonial data here if needed, or mapping from constants */}
                </div>
            </Section>
        </div>
    );
};

export default Feedbacks;
