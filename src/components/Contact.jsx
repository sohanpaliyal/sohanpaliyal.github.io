import React, { useRef, useState } from "react";
import { motion } from "framer-motion";


import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { socialLinks, ctaText } from "../constants";

const Contact = () => {

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] glassmorphism p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className='mt-5 mb-10'>
          <h4 className='text-vs-blue font-bold text-[20px] mb-4'>
            <a
              href="mailto:officialsohanpaliyal@gmail.com"
              className="hover:underline cursor-pointer transition-all hover:text-vs-glow"
            >
              {ctaText}
            </a>
          </h4>
          <div className='flex flex-wrap gap-5'>
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 bg-tertiary px-4 py-2 rounded-xl transition-all hover:scale-105 hover:bg-vs-blue/20'
              >
                <span className='text-[20px]'>{link.icon}</span>
                <span className='text-white-100 font-medium'>{link.name}</span>
              </a>
            ))}
          </div>
        </div>


      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
