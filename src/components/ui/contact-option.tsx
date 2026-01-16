import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ContactOptionProps {
    href: string;
    icon: LucideIcon;
    title: string;
    subtitle: string;
    // Specific color classes to avoid dynamic tailwind issues
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
        className={`flex items-center gap-4 p-4 rounded-xl bg-tertiary border border-glass-border ${hoverBorder} ${hoverBg} transition-all group`}
    >
        <div className={`w-12 h-12 rounded-lg ${iconBg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
            <Icon className={iconColor} size={24} />
        </div>
        <div>
            <h4 className="text-white-100 font-bold">{title}</h4>
            <p className="text-secondary text-sm">{subtitle}</p>
        </div>
    </a>
);

export default ContactOption;
