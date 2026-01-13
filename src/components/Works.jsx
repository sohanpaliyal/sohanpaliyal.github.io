import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import Tags from "./Tags";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { companyProjects, personalProjects, tiltOptions } from "../constants";
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
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      onClick={() => window.open(source_code_link, "_blank")}
    >
      <Tilt
        {...tiltOptions}
        className='bg-tertiary rounded-2xl sm:w-[360px] w-full glassmorphism h-full flex flex-col cursor-pointer'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-t-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer shadow-lg border border-white/10'
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-1/2 h-1/2 object-contain text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </div>
          </div>
        </div>

        <div className="p-5 flex flex-col flex-1">
          <div className='flex-1'>
            <h3 className='text-white-100 font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px] leading-relaxed'>{description}</p>
          </div>

          <Tags tags={tags} />
        </div>
      </Tilt>
    </motion.div>
  );
};



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
          className='mt-3 text-secondary text-[17px] leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <h3 className={`${styles.sectionHeadText} text-[30px] mt-10`}>Company Projects.</h3>
      <div className='mt-5 flex flex-wrap gap-7'>
        {companyProjects.map((project, index) => (
          <ProjectCard key={`company-project-${index}`} index={index} {...project} />
        ))}
      </div>

      <h3 className={`${styles.sectionHeadText} text-[30px] mt-10`}>Personal Projects.</h3>
      <div className='mt-5 flex flex-wrap gap-7'>
        {personalProjects.map((project, index) => (
          <ProjectCard key={`personal-project-${index}`} index={index} {...project} />
        ))}
      </div>

      {/* Technical Enhancements Section */}

    </>
  );
};

export default SectionWrapper(Works, "work");
