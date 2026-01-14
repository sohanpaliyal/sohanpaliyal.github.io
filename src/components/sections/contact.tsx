"use client";

import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

import { styles } from "@/styles/styles";
import Section from "@/components/ui/section";
import { slideIn } from "@/lib/motion";
import { Mail, Linkedin, MessageSquare, Phone } from "lucide-react";

const EarthCanvas = dynamic(() => import("@/components/canvas/earth"), { ssr: false });

const Contact = () => {
    return (
        <Section idName='contact' className='xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Let's Connect.</h3>

                <div className='mt-12 flex flex-col gap-6'>
                    <p className="text-secondary text-[17px] leading-[30px] max-w-3xl">
                        I'm currently looking for new opportunities and my inbox is always open.
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="flex flex-col gap-4 mt-4">
                        <a
                            href="mailto:paliyalsohan7@gmail.com"
                            className="flex items-center gap-4 p-4 rounded-xl bg-tertiary border border-glass-border hover:border-vs-blue/50 hover:bg-vs-blue/5 transition-all group"
                        >
                            <div className="w-12 h-12 rounded-lg bg-vs-blue/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Mail className="text-vs-blue" size={24} />
                            </div>
                            <div>
                                <h4 className="text-white-100 font-bold">Email Me</h4>
                                <p className="text-secondary text-sm">paliyalsohan7@gmail.com</p>
                            </div>
                        </a>

                        <a
                            href="https://wa.me/919587711187"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-4 rounded-xl bg-tertiary border border-glass-border hover:border-green-500/50 hover:bg-green-500/5 transition-all group"
                        >
                            <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <MessageSquare className="text-green-500" size={24} />
                            </div>
                            <div>
                                <h4 className="text-white-100 font-bold">WhatsApp Chat</h4>
                                <p className="text-secondary text-sm">Instant message for quick chat</p>
                            </div>
                        </a>

                        <a
                            href="https://linkedin.com/in/sohanpaliyal"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-4 rounded-xl bg-tertiary border border-glass-border hover:border-vs-purple/50 hover:bg-vs-purple/5 transition-all group"
                        >
                            <div className="w-12 h-12 rounded-lg bg-vs-purple/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Linkedin className="text-vs-purple" size={24} />
                            </div>
                            <div>
                                <h4 className="text-white-100 font-bold">LinkedIn</h4>
                                <p className="text-secondary text-sm">Professional networking & recruitment</p>
                            </div>
                        </a>

                        <a
                            href="tel:+919587711187"
                            className="flex items-center gap-4 p-4 rounded-xl bg-tertiary border border-glass-border hover:border-vs-glow/50 hover:bg-vs-glow/5 transition-all group"
                        >
                            <div className="w-12 h-12 rounded-lg bg-vs-glow/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Phone className="text-vs-glow" size={24} />
                            </div>
                            <div>
                                <h4 className="text-white-100 font-bold">Direct Call</h4>
                                <p className="text-secondary text-sm">Tap to call +91 9587711187</p>
                            </div>
                        </a>
                    </div>
                </div>
            </motion.div>

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
            >
                <EarthCanvas />
            </motion.div>
        </Section>
    );
};

export default Contact;
