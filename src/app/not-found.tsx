import Link from "next/link";
import Image from "next/image";
import { astronaut_isolated, astronaut_isolated_light, space_bg, space_light_bg } from "@/assets";

export default function NotFound() {
    return (
        <div className='relative z-0 bg-white dark:bg-black w-full h-screen overflow-y-auto overflow-x-hidden transition-colors duration-300 scrollbar-hide'>
            {/* Background Ambience */}
            <div className='fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none'>
                {/* Dark Mode Background */}
                <div className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-500">
                    <Image
                        src={space_bg}
                        alt="Deep space nebula background"
                        fill
                        className="object-cover opacity-80"
                        quality={100}
                        priority
                    />
                    {/* Dark Mode Nebula Overlays */}
                    <div className='absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-purple-900/30 blur-[100px] animate-nebula-slow mix-blend-screen' />
                    <div className='absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full bg-blue-900/30 blur-[100px] animate-nebula-fast mix-blend-screen' />
                    {/* Floating particles */}
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-float mix-blend-screen" style={{ animationDelay: '0s' }} />
                    <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-float mix-blend-screen" style={{ animationDelay: '2s' }} />
                </div>

                {/* Light Mode Background */}
                <div className="absolute inset-0 opacity-100 dark:opacity-0 transition-opacity duration-500">
                    <Image
                        src={space_light_bg}
                        alt="Light celestial sky background"
                        fill
                        className="object-cover opacity-90"
                        quality={100}
                        priority
                    />
                    {/* Light Mode Soft Glows */}
                    <div className='absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-blue-200/40 blur-[100px] animate-nebula-slow' />
                    <div className='absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full bg-purple-200/40 blur-[100px] animate-nebula-fast' />
                </div>
            </div>

            {/* Content with adjusted spacing */}
            <div className="relative z-10 flex flex-col items-center justify-start min-h-screen w-full max-w-4xl mx-auto p-4 pt-32 sm:pt-48 pb-20 text-center">
                {/* 3D Illustrations - Swapping based on Theme */}
                <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] mb-8 animate-float translate-y-8 sm:translate-y-12">
                    {/* Dark Mode Astronaut (Black BG Masked) */}
                    <div className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-500">
                        <Image
                            src={astronaut_isolated}
                            alt="Lost Astronaut Dark"
                            fill
                            className="object-contain"
                            priority
                            style={{
                                maskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)',
                                WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)'
                            }}
                        />
                    </div>

                    {/* Light Mode Astronaut (White BG Masked) */}
                    <div className="absolute inset-0 opacity-100 dark:opacity-0 transition-opacity duration-500">
                        <Image
                            src={astronaut_isolated_light}
                            alt="Lost Astronaut Light"
                            fill
                            className="object-contain"
                            priority
                            style={{
                                maskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)',
                                WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)'
                            }}
                        />
                    </div>
                </div>

                <h1 className="text-[50px] sm:text-[80px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 dark:from-[#E6DDFD] dark:to-[#7AD7FF] mb-2 drop-shadow-lg dark:drop-shadow-[0_0_15px_rgba(122,215,255,0.5)] transition-all">
                    404
                </h1>

                <p className="text-gray-600 dark:text-gray-300 text-[16px] sm:text-[18px] max-w-md mb-8 drop-shadow-sm dark:drop-shadow-md backdrop-blur-sm bg-white/30 dark:bg-black/10 p-2 rounded-xl transition-colors">
                    The coordinates you're looking for don't exist in this universe.
                    Let's get you back to safety.
                </p>

                <Link
                    href="/"
                    className="bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-all font-bold py-3 px-8 rounded-full shadow-lg shadow-purple-500/20 dark:shadow-purple-900/20 flex items-center gap-2 hover:scale-105 active:scale-95 duration-200"
                >
                    <span>🚀</span>
                    Return to Home
                </Link>
            </div>
        </div>
    );
}
