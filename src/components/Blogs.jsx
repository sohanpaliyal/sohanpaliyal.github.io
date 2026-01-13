import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Tags from "./Tags";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { blogs, tiltOptions } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { calculateReadTime } from "../utils/helpers";

const BlogCard = ({ index, id, title, subtitle, date, content, tags, image }) => {
    const readTime = calculateReadTime(content);
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Link to={`/blog/${id}`}>
                <Tilt
                    {...tiltOptions}
                    className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full flex flex-col cursor-pointer'
                >
                    <div className='relative w-full h-[230px]'>
                        <img
                            src={image}
                            alt={title}
                            className='w-full h-full object-cover rounded-2xl'
                        />
                    </div>

                    <div className='mt-5 flex flex-col flex-1'>
                        <div className="flex justify-between items-center text-secondary text-[12px] mb-2">
                            <span>{date}</span>
                            <span>{readTime}</span>
                        </div>

                        <h3 className='text-white-100 font-bold text-[20px]'>{title}</h3>
                        <p className='mt-2 text-secondary text-[14px] flex-1'>{subtitle}</p>
                    </div>

                    <Tags tags={tags} />
                </Tilt>
            </Link>
        </motion.div>
    );
};

const Blogs = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText}`}>My Thoughts</p>
                <h2 className={`${styles.sectionHeadText}`}>Blogs.</h2>
            </motion.div>

            <div className='w-full flex'>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
                >
                    I write about web development, architecture, and the funny side of coding.
                    Check out my latest articles.
                </motion.p>
            </div>

            <div className='mt-20 flex flex-wrap gap-7'>
                {blogs.map((blog, index) => (
                    <BlogCard key={`blog-${index}`} index={index} {...blog} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Blogs, "blogs");
