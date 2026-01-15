"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { styles } from "@/styles/styles";
import { sohan } from "@/assets";
import { useState, useEffect } from "react";

const Typewriter = ({ text, speed = 150, pause = 1500 }: { text: string; speed?: number; pause?: number }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!isMounted) return;

        let isCancelled = false;

        const loop = async () => {
            while (!isCancelled) {
                // Typing
                for (let i = 0; i <= text.length; i++) {
                    if (isCancelled) return;
                    setDisplayedText(text.slice(0, i));
                    await new Promise((r) => setTimeout(r, speed));
                }

                // Pause at the end
                await new Promise((r) => setTimeout(r, pause));

                // Deleting
                for (let i = text.length; i >= 0; i--) {
                    if (isCancelled) return;
                    setDisplayedText(text.slice(0, i));
                    await new Promise((r) => setTimeout(r, speed / 2));
                }

                // Pause before restarting
                await new Promise((r) => setTimeout(r, 500));
            }
        };

        loop();

        return () => {
            isCancelled = true;
        };
    }, [text, speed, pause, isMounted]);

    if (!isMounted) {
        return <span>&nbsp;</span>;
    }

    return (
        <span className="whitespace-pre">
            {displayedText}
            <span className="animate-pulse text-inherit">|</span>
        </span>
    );
};

const Hero = () => {
    return (
        <section className={`relative w-full h-screen mx-auto`}>
            <div className={`${styles.paddingX} absolute inset-0 top-[120px] sm:top-[160px] max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-16`}>
                {/* Left Side: Indicator & Text */}
                <div className='flex flex-row items-start gap-5 lg:flex-[1.5] flex-1'>
                    <div className='flex flex-col justify-center items-center mt-5'>
                        <div className='w-5 h-5 rounded-full bg-vs-blue' />
                        <div className='w-1 h-60 sm:h-[450px] vectorshift-gradient' />
                    </div>

                    <div className="z-10">
                        <h1 className={`${styles.heroHeadText} mb-6`}>
                            Hi, I'm <br className="hidden sm:block" />
                            <span className='text-vs-blue whitespace-nowrap'><Typewriter text="Sohan Paliyal" /></span>
                        </h1>
                        <p className={`${styles.heroSubText} max-w-4xl`}>
                            I build scalable web applications and high-performance digital experiences.
                        </p>

                        {/* Social Links & Contact */}
                        <div className='flex flex-wrap gap-4 mt-8 items-center'>
                            <a
                                href='tel:+919587711187'
                                title="Call Me"
                                className='w-10 h-10 rounded-full border border-vs-blue/50 flex justify-center items-center hover:bg-vs-blue/10 transition-colors group'
                            >
                                <Phone className='w-5 h-5 text-vs-blue group-hover:scale-110 transition-transform' />
                            </a>

                            <div className="flex gap-4">
                                <a
                                    href='https://github.com/sohanpaliyal'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    title="GitHub"
                                    className='w-10 h-10 rounded-full border border-glass-border flex justify-center items-center hover:bg-white/10 transition-colors'
                                >
                                    <Github className='w-5 h-5' />
                                </a>
                                <a
                                    href='https://linkedin.com/in/sohanpaliyal'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    title="LinkedIn"
                                    className='w-10 h-10 rounded-full border border-glass-border flex justify-center items-center hover:bg-white/10 transition-colors'
                                >
                                    <Linkedin className='w-5 h-5 text-[#0077b5]' />
                                </a>
                                <a
                                    href='mailto:paliyalsohan7@gmail.com'
                                    title="Email"
                                    className='w-10 h-10 rounded-full border border-glass-border flex justify-center items-center hover:bg-white/10 transition-colors'
                                >
                                    <Mail className='w-5 h-5 text-vs-glow' />
                                </a>
                            </div>
                        </div>

                        {/* Profile Image for Mobile (Centered under text) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="mt-10 lg:hidden"
                        >
                            <div className='relative w-[280px] h-[280px] mx-auto'>
                                <div className='absolute -inset-1 bg-gradient-to-r from-vs-blue to-vs-purple rounded-full blur opacity-50 animate-pulse'></div>
                                <Image
                                    src={sohan}
                                    alt='Sohan Ram'
                                    fill
                                    className='relative w-full h-full object-cover rounded-full border-4 border-vs-purple/30 shadow-2xl'
                                    priority
                                    fetchPriority="high"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Right Side: Profile Image (Desktop Only) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className='hidden lg:flex justify-center flex-1'
                >
                    <div className='relative group'>
                        {/* Animated Outer Glow */}
                        <div className='absolute -inset-4 bg-gradient-to-r from-vs-blue via-vs-purple to-vs-blue rounded-full blur-xl opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:animate-spin-slow'></div>

                        {/* Floating Glass Container */}
                        <div className='relative w-[350px] h-[350px] p-2 glassmorphism rounded-full border border-vs-purple/20 shadow-2xl transform transition hover:scale-105 duration-500'>
                            <Image
                                src={sohan}
                                alt='Sohan Ram'
                                fill
                                className='w-full h-full object-cover rounded-full p-2'
                                priority
                                fetchPriority="high"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
