import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full glassmorphism h-full flex flex-col'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5 flex-1'>
          <h3 className='text-white-100 font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px] leading-relaxed'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Cards = ({ projects }) => {
  return (
    <div className='mt-20 flex flex-wrap gap-7'>
      {projects.map((project, index) => (
        <ProjectCard key={`project-${index}`} index={index} {...project} />
      ))}
    </div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <Cards projects={projects} />

      {/* Technical Enhancements Section */}
      <div className="mt-20">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} `}>Production Ready</p>
          <h2 className={`${styles.sectionHeadText}`}>Technical Enhancements.</h2>
        </motion.div>
      </div>

      <p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mb-10'>
        Beyond standard implementation, I focused on several enhancements to ensure the portfolio is production-ready, accessible, and high-performing.
      </p>

      {/* Task Grid for Specific Career Technical Achievements */}
      <div className='flex flex-wrap gap-7'>
        <div className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full glassmorphism flex flex-col justify-between'>
          <div>
            <h4 className='text-white-100 font-bold text-[24px] mb-2 text-vs-blue'>
              01. Complex UI & Data Systems
            </h4>
            <p className='text-secondary text-[14px] leading-relaxed mb-4'>
              Designed intuitive interfaces for <b>SimprosysAPIs</b>, featuring dynamic "Manage Products" tables with collapsible variant views, advanced filtering, and bulk-customization rule engines for seamless feed management.
            </p>
          </div>
          <div className='flex flex-wrap gap-2'>
            <span className='text-[12px] blue-text-gradient px-2 py-1 rounded-full border border-blue-500/30 font-medium'>React</span>
            <span className='text-[12px] purple-text-gradient px-2 py-1 rounded-full border border-purple-500/30 font-medium'>TypeScript</span>
            <span className='text-[12px] blue-text-gradient px-2 py-1 rounded-full border border-blue-500/30 font-medium'>Tanstack Table</span>
          </div>
        </div>

        <div className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full glassmorphism flex flex-col justify-between'>
          <div>
            <h4 className='text-white-100 font-bold text-[24px] mb-2 text-vs-blue'>
              02. Scalable Architectures
            </h4>
            <p className='text-secondary text-[14px] leading-relaxed mb-4'>
              Engineered multi-role platforms like <b>Karmm</b> using single codebases. Built complex modules for real-time delivery tracking, automated certificate generation, and secure role-based admin panels.
            </p>
          </div>
          <div className='flex flex-wrap gap-2'>
            <span className='text-[12px] blue-text-gradient px-2 py-1 rounded-full border border-blue-500/30 font-medium'>Redux Toolkit</span>
            <span className='text-[12px] purple-text-gradient px-2 py-1 rounded-full border border-purple-500/30 font-medium'>Framer Motion</span>
            <span className='text-[12px] blue-text-gradient px-2 py-1 rounded-full border border-blue-500/30 font-medium'>System Design</span>
          </div>
        </div>

        <div className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full glassmorphism flex flex-col justify-between'>
          <div>
            <h4 className='text-white-100 font-bold text-[24px] mb-2 text-vs-blue'>
              03. Performance Engineering
            </h4>
            <p className='text-secondary text-[14px] leading-relaxed mb-4'>
              Specialized in optimizing Core Web Vitals (<b>FCP & LCP</b>) and implementing reactive programming with <b>RxJS</b>. Focused on modular, testable code and next-gen assets for optimal user experience.
            </p>
          </div>
          <div className='flex flex-wrap gap-2'>
            <span className='text-[12px] blue-text-gradient px-2 py-1 rounded-full border border-blue-500/30 font-medium'>RxJS</span>
            <span className='text-[12px] purple-text-gradient px-2 py-1 rounded-full border border-purple-500/30 font-medium'>Optimization</span>
            <span className='text-[12px] blue-text-gradient px-2 py-1 rounded-full border border-blue-500/30 font-medium'>Performance</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
