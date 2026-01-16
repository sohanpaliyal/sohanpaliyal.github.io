"use client";

import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

import { styles } from "@/styles/styles";
import Section from "@/components/ui/section";
import { slideIn } from "@/lib/motion";
import { Mail, Linkedin, MessageSquare, Phone } from "lucide-react";
import ContactOption from "@/components/ui/contact-option";

const EarthCanvas = dynamic(() => import("@/components/canvas/earth"), { ssr: false });

const Contact = () => {
    return (
        <Section idName='contact' className='xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className='flex-1 bg-white dark:bg-black-100 p-8 rounded-2xl shadow-xl dark:shadow-none'
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Let's Connect.</h3>

                <div className='mt-12 flex flex-col gap-6'>
                    <p className="text-secondary text-sm sm:text-[17px] leading-[30px] max-w-3xl">
                        Always open to discussing new projects, creative ideas, or opportunities to collaborate.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 mt-4">
                        <ContactOption
                            href="mailto:paliyalsohan7@gmail.com"
                            icon={Mail}
                            title="Email Me"
                            subtitle="paliyalsohan7@gmail.com"
                            iconColor="text-vs-blue"
                            iconBg="bg-vs-blue/10"
                            hoverBorder="hover:border-vs-blue/50"
                            hoverBg="hover:bg-vs-blue/5"
                        />
                        <ContactOption
                            href="https://wa.me/919587711187"
                            icon={MessageSquare}
                            title="WhatsApp Chat"
                            subtitle="Instant message for quick chat"
                            iconColor="text-green-500"
                            iconBg="bg-green-500/10"
                            hoverBorder="hover:border-green-500/50"
                            hoverBg="hover:bg-green-500/5"
                        />
                        <ContactOption
                            href="https://linkedin.com/in/sohanpaliyal"
                            icon={Linkedin}
                            title="LinkedIn"
                            subtitle="Professional networking"
                            iconColor="text-vs-purple"
                            iconBg="bg-vs-purple/10"
                            hoverBorder="hover:border-vs-purple/50"
                            hoverBg="hover:bg-vs-purple/5"
                        />
                        <ContactOption
                            href="tel:+919587711187"
                            icon={Phone}
                            title="Direct Call"
                            subtitle="+91 9587711187"
                            iconColor="text-vs-glow"
                            iconBg="bg-vs-glow/10"
                            hoverBorder="hover:border-vs-glow/50"
                            hoverBg="hover:bg-vs-glow/5"
                        />
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
