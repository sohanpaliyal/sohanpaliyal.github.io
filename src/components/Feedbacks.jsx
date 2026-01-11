import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { technicalEnhancements } from "../constants";

const FeedbackCard = ({
  index,
  title,
  description,
  tags,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='glassmorphism p-4 rounded-3xl xs:w-[320px] w-full flex flex-col justify-between'
  >
    <div>
      <h4 className='text-white-100 font-bold text-[24px] mb-2 text-vs-blue'>
        {title}
      </h4>
      <p className='text-secondary text-white-100 text-[14px] leading-relaxed mb-4'>
        {description}
      </p>
    </div>

    <div className='flex flex-wrap gap-2'>
      {tags.map((tag) => (
        <span
          key={tag.name}
          className={`text-[12px] ${tag.color} px-2 py-1 rounded-full border border-white/10 font-medium`}
        >
          {tag.name}
        </span>
      ))}
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 glassmorphism rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Production Ready</p>
          <h2 className={styles.sectionHeadText}>Technical Enhancements.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {technicalEnhancements.map((enhancement, index) => (
          <FeedbackCard key={enhancement.title} index={index} {...enhancement} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
