"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/motion";
import { styles } from "@/styles/styles";

interface SectionProps {
    children: React.ReactNode;
    idName: string;
    className?: string;
    forceAnimation?: boolean;
}

const Section = ({ children, idName, className = "", forceAnimation = false }: SectionProps) => {
    return (
        <motion.section
            variants={staggerContainer()}
            initial='hidden'
            whileInView={forceAnimation ? undefined : 'show'}
            animate={forceAnimation ? 'show' : undefined}
            viewport={{ once: true, amount: 0.1 }}
            className={`${styles.padding} max-w-7xl mx-auto relative z-0 ${className}`}
        >
            <span className='hash-span' id={idName}>
                &nbsp;
            </span>
            {children}
        </motion.section>
    );
};

export default Section;
