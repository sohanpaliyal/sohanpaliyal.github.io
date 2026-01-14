import React from "react";
import { blogs } from "@/constants";
import Section from "@/components/ui/section";
import BlogCard from "@/components/ui/blog-card";
import { styles } from "@/styles/styles";

export const metadata = {
    title: "Blog | Sohan Paliyal",
    description: "Technical articles on JavaScript, Web Development, and Performance Engineering.",
};

const BlogPage = () => {
    return (
        <div className='pt-20'>
            <Section idName='blogs'>
                <div className="flex flex-col">
                    <p className={styles.sectionSubText}>My thoughts</p>
                    <h2 className={styles.sectionHeadText}>Blog.</h2>
                </div>

                <p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
                    A collection of technical deep-dives, explanations, and engineering insights.
                </p>

                <div className='mt-20 flex flex-wrap gap-7'>
                    {blogs.map((blog, index) => (
                        <BlogCard key={blog.id} index={index} {...blog} />
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default BlogPage;
