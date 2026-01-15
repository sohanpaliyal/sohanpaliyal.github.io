import React from "react";
import ReactMarkdown from "react-markdown";
import { blogs } from "@/constants";
import Section from "@/components/ui/section";
import { styles } from "@/styles/styles";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const blog = blogs.find((b) => b.id === id);
    if (!blog) return {};

    return {
        title: `${blog.title} | Sohan Paliyal`,
        description: blog.subtitle,
    };
}

const BlogDetail = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const blog = blogs.find((b) => b.id === id);

    if (!blog) {
        notFound();
    }

    return (
        <div className='pt-20 pb-20'>
            <Section idName='blog-detail'>
                <Link
                    href="/blog"
                    className="text-secondary hover:text-white-100 mb-10 inline-block transition-colors"
                >
                    ← Back to blogs
                </Link>

                <div className="relative w-full h-[400px] rounded-3xl overflow-hidden mb-10 shadow-2xl">
                    <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="flex flex-col mb-10">
                    <p className="text-secondary font-medium mb-2">{blog.date} • By {blog.author}</p>
                    <h1 className="text-white-100 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] leading-tight">
                        {blog.title}
                    </h1>
                </div>

                <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-black-100 dark:prose-headings:text-white-100 prose-p:text-secondary prose-li:text-secondary prose-strong:text-black-100 dark:prose-strong:text-white-100 prose-code:text-vs-blue prose-code:bg-tertiary prose-code:px-1 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none prose-pre:bg-black-100 prose-pre:text-white-100 prose-pre:rounded-xl prose-pre:p-4">
                    <ReactMarkdown>{blog.content}</ReactMarkdown>
                </div>
            </Section>
        </div>
    );
};

export function generateStaticParams() {
    return blogs.map((blog) => ({
        id: blog.id,
    }));
}

export default BlogDetail;
