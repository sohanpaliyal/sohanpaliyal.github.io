import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import ReactMarkdown from 'react-markdown';
import { styles } from "../styles";
import { blogs } from "../constants";
import { StarsCanvas } from ".";
import { calculateReadTime } from "../utils/helpers";

const BlogDetail = () => {
    const { id } = useParams();
    const blog = blogs.find((b) => b.id === id);

    if (!blog) {
        return (
            <div className="relative z-0 bg-primary min-h-screen flex items-center justify-center">
                <h1 className="text-white text-[30px]">Blog not found</h1>
                <StarsCanvas />
            </div>
        );
    }

    return (
        <div className='relative z-0 bg-primary min-h-screen overflow-x-hidden'>
            <div className="absolute inset-0 bg-primary opacity-95 z-[1] pointer-events-none"></div>
            <div className={`sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-10`}>
                <div className="mt-5">
                    {/* If Navbar is not present here, we should provide a way to go back home or uses standard nav */}
                    {/* Assuming Navbar is global, but if this is a separate route, we might need padding-top */}
                    <Link to="/blog" className="text-secondary hover:text-white-100 text-[18px] font-medium cursor-pointer flex items-center gap-2">
                        <span>&larr;</span> Back to Blogs
                    </Link>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-10"
                >
                    <div className="w-full h-[300px] sm:h-[400px] relative rounded-2xl overflow-hidden mb-10 flex items-center justify-center bg-tertiary">
                        <img src={blog.image} alt={blog.title} className="w-full h-full object-contain" />
                    </div>

                    <div className="flex justify-between items-center text-secondary text-[14px] border-b border-secondary/20 pb-4 mb-10">
                        <div className="flex items-center gap-2">
                            <span className="text-white font-medium">{blog.author}</span>
                        </div>
                        <span>{blog.date} • {calculateReadTime(blog.content)}</span>
                    </div>

                    <div className="text-secondary text-[20px] mt-2 italic mb-10 pl-6 border-l-4 border-purple-500">
                        {blog.subtitle}
                    </div>

                    <article className="prose prose-invert prose-lg max-w-none">
                        <ReactMarkdown
                            components={{
                                h1: ({ node, ...props }) => <h1 className="text-white-100 text-[30px] sm:text-[40px] font-bold mt-12 mb-6" {...props} />,
                                h2: ({ node, ...props }) => <h2 className="text-white-100 text-[24px] sm:text-[30px] font-bold mt-10 mb-5 border-b border-secondary/20 pb-2" {...props} />,
                                h3: ({ node, ...props }) => <h3 className="text-white-100 text-[20px] sm:text-[24px] font-bold mt-8 mb-4" {...props} />,
                                h4: ({ node, ...props }) => <h4 className="text-white-100 text-[18px] sm:text-[20px] font-bold mt-6 mb-3" {...props} />,
                                p: ({ node, ...props }) => <p className="text-secondary text-[16px] sm:text-[18px] leading-[28px] sm:leading-[32px] mb-6" {...props} />,
                                ul: ({ node, ...props }) => <ul className="list-disc ml-6 mb-6 text-secondary" {...props} />,
                                ol: ({ node, ...props }) => <ol className="list-decimal ml-6 mb-6 text-secondary" {...props} />,
                                li: ({ node, ...props }) => <li className="text-secondary text-[16px] sm:text-[18px] mb-2 pl-2" {...props} />,
                                code: ({ node, inline, className, children, ...props }) => {
                                    return !inline ? (
                                        <div className="bg-[#1a1a2e] p-4 rounded-lg my-6 overflow-x-auto border border-secondary/20 shadow-xl">
                                            <code className="text-blue-200 font-mono text-[14px] sm:text-[16px]" {...props}>{children}</code>
                                        </div>
                                    ) : (
                                        <code className="bg-secondary/10 px-1.5 py-0.5 rounded text-pink-500 font-mono text-[90%]" {...props}>{children}</code>
                                    )
                                },
                                blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-purple-500 pl-6 py-2 italic text-secondary bg-secondary/5 rounded-r-lg my-6" {...props} />,
                                img: ({ node, ...props }) => <img className="rounded-xl my-8 mx-auto shadow-lg border border-secondary/20 max-h-[500px] object-cover" {...props} />,
                                a: ({ node, ...props }) => <a className="text-purple-500 hover:text-purple-400 underline underline-offset-4" target="_blank" rel="noopener noreferrer" {...props} />,
                                hr: ({ node, ...props }) => <hr className="border-secondary/20 my-10" {...props} />,
                            }}
                        >
                            {blog.content}
                        </ReactMarkdown>
                    </article>

                    {/* Next/Prev Navigation could go here */}
                    <div className="mt-20 pt-10 border-t border-secondary/20 text-center">
                        <Link to="/blog" className="px-8 py-3 bg-tertiary rounded-full text-white-100 font-bold hover:bg-secondary/20 border border-secondary/20 transition-colors">
                            Read More Blogs
                        </Link>
                    </div>
                </motion.div>
            </div>
            <StarsCanvas />
        </div>
    );
};

export default BlogDetail;
