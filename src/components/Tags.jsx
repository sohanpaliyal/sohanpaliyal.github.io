import React from "react";

const Tags = ({ tags, className = "mt-4" }) => {
    return (
        <div className={`${className} flex flex-wrap gap-2`}>
            {tags.map((tag) => (
                <div
                    key={tag.name}
                    className="px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 
                     hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300 cursor-default
                     shadow-sm hover:shadow-md group"
                >
                    <p className={`text-[13px] font-medium ${tag.color} tracking-wide`}>
                        #{tag.name}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Tags;
