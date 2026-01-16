"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/constants";
import { logo, menu, close } from "@/assets";
import { styles } from "@/styles/styles";

import { Github, Linkedin, Phone, Menu, X, Search } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useCommandPalette } from "@/context/CommandPaletteContext";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const { open } = useCommandPalette();

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`${styles.paddingX
                } w-full flex items-center py-5 fixed top-0 z-20 bg-[#050816]/90 backdrop-blur-md transition-all duration-300 ${scrolled ? "shadow-lg" : ""
                }`}
        >
            <div className='w-full flex justify-between items-center max-w-[1400px] mx-auto'>
                <Link
                    href='/'
                    className='flex items-center gap-2'
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <Image src={logo} alt='logo' width={36} height={36} className='object-contain' />
                    <p className='text-white-100 text-[18px] font-bold cursor-pointer flex '>
                        Sohan Paliyal
                    </p>
                </Link>

                <div className="flex items-center gap-10">
                    <ul className='list-none hidden sm:flex flex-row gap-10'>
                        {navLinks.map((nav) => (
                            <li
                                key={nav.id}
                                className={`${active === nav.title ? "text-white-100" : "text-secondary"
                                    } hover:text-vs-purple hover:font-bold text-[18px] font-medium cursor-pointer transition-all duration-200`}
                                onClick={() => setActive(nav.title)}
                            >
                                {nav.id === "blog" ? (
                                    <Link href='/blog'>{nav.title}</Link>
                                ) : (
                                    <a href={pathname === "/" ? `#${nav.id}` : `/#${nav.id}`}>{nav.title}</a>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Social Links */}
                    <div className="hidden lg:flex items-center gap-4 border-l border-glass-border pl-6">
                        <a
                            href='tel:+919587711187'
                            title="Call Me"
                            className='text-secondary hover:text-vs-blue transition-colors flex items-center justify-center'
                        >
                            <Phone size={20} />
                        </a>
                        <a
                            href='https://github.com/sohanpaliyal'
                            target='_blank'
                            rel='noopener noreferrer'
                            title="GitHub"
                            className='text-secondary hover:text-vs-blue transition-colors'
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href='https://linkedin.com/in/sohanpaliyal'
                            target='_blank'
                            rel='noopener noreferrer'
                            title="LinkedIn"
                            className='text-secondary hover:text-vs-purple transition-colors'
                        >
                            <Linkedin size={20} />
                        </a>
                    </div>

                    {/* Command Palette Trigger */}
                    <button
                        onClick={open}
                        className="flex items-center gap-2 text-secondary hover:text-white-100 transition-colors"
                        title="Search (Cmd+K)"
                    >
                        <Search size={20} />
                        <span className="hidden lg:inline text-xs border border-white/20 px-1.5 py-0.5 rounded font-mono">
                            Cmd K
                        </span>
                    </button>

                    {/* Dark Mode Toggle */}
                    <ThemeToggle />

                    <div className='sm:hidden flex items-center'>
                        <button
                            type="button"
                            onClick={() => setToggle(!toggle)}
                            className="text-white-100 hover:text-vs-blue transition-colors focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {toggle ? <X size={28} /> : <Menu size={28} />}
                        </button>

                        <div
                            className={`${!toggle ? "hidden" : "flex"
                                } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl glassmorphism`}
                        >
                            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                                {navLinks.map((nav) => (
                                    <li
                                        key={nav.id}
                                        className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white-100" : "text-secondary"
                                            } hover:text-vs-purple hover:font-bold transition-all duration-200`}
                                        onClick={() => {
                                            setToggle(!toggle);
                                            setActive(nav.title);
                                        }}
                                    >
                                        {nav.id === "blog" ? (
                                            <Link href='/blog'>{nav.title}</Link>
                                        ) : (
                                            <a href={pathname === "/" ? `#${nav.id}` : `/#${nav.id}`}>{nav.title}</a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
