"use client";

import React from "react";
import { motion } from "framer-motion";
import { styles } from "@/styles/styles";
import { services } from "@/constants";
import { fadeIn, textVariant } from "@/lib/motion";
import Section from "@/components/ui/section";
import { ServiceCard } from "@/components/ui/service-card";

const About = () => {
    return (
        <Section idName='about'>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "tween", 0.1, 1)}
                className='mt-4 text-secondary text-[17px] max-w-full leading-[30px]'
            >
                Frontend Developer with 4.5+ years of experience building scalable, high-performance web applications using React, Angular, TypeScript, and JavaScript. Strong expertise in UI architecture, state management (Redux Toolkit, RxJS), REST API integration, real-time features, and performance optimization (Core Web Vitals: LCP, FCP, CLS). Proven ability to deliver responsive, user-centric solutions across
                eCommerce, SaaS, and real-time platforms. Solid understanding of design principles, object-oriented programming, unit testing, and software architecture patterns, with hands-on experience across the full software development lifecycle.
            </motion.p>

            <div className='mt-20 flex flex-wrap gap-10'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </Section>
    );
};

export default About;
