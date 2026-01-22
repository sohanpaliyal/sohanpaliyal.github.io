import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ContactOptionProps {
    href: string;
    icon: LucideIcon;
    title: string;
    subtitle: string;
    iconColor: string;
    iconBg: string;
    hoverBorder: string;
    hoverBg: string;
}

const ContactOption = ({ href, icon: Icon, title, subtitle, iconColor, iconBg, hoverBorder, hoverBg }: ContactOptionProps) => (
    <a
        href={href}
        target={href.startsWith('http') ? "_blank" : undefined}
        rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
        className={`
            relative flex items-center gap-5 p-5 rounded-2xl 
            bg-gradient-to-br from-white/5 to-transparent
            dark:from-white/[0.03] dark:to-transparent
            backdrop-blur-sm
            border border-white/10 dark:border-white/[0.08]
            ${hoverBorder} ${hoverBg}
            shadow-lg shadow-black/5 dark:shadow-black/20
            hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-black/30
            hover:-translate-y-1 hover:scale-[1.02]
            transition-all duration-300 ease-out
            group overflow-hidden
        `}
    >
        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

        {/* Icon container with gradient background */}
        <div className={`
            relative w-14 h-14 rounded-xl ${iconBg} 
            flex items-center justify-center flex-shrink-0
            group-hover:scale-110 
            transition-all duration-300 ease-out
            shadow-md shadow-black/10
            ring-1 ring-white/10
        `}>
            {/* Icon glow effect */}
            <div className={`absolute inset-0 rounded-xl ${iconBg} blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300`} />
            <Icon className={`${iconColor} relative z-10 drop-shadow-sm`} size={26} strokeWidth={1.75} />
        </div>

        {/* Text content */}
        <div className="flex flex-col gap-0.5 min-w-0">
            <h4 className="text-white-100 font-semibold text-base tracking-tight group-hover:text-white transition-colors">
                {title}
            </h4>
            <p className="text-secondary text-sm opacity-80 truncate">
                {subtitle}
            </p>
        </div>

        {/* Arrow indicator */}
        <div className="ml-auto opacity-0 group-hover:opacity-60 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
            <svg className="w-5 h-5 text-white-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
        </div>
    </a>
);

export default ContactOption;
