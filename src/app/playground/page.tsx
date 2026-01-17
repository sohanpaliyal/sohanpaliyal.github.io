import Section from "@/components/ui/section";
import Playground from "@/components/Playground";
import Script from "next/script";

export const metadata = {
    title: "Free Online JavaScript Compiler & Code Editor | Run JS Online - Test & Debug",
    description: "Free online JavaScript compiler and code playground. Write, execute, and debug JavaScript code instantly in your browser. No installation required. Perfect for testing algorithms, learning JS, practicing coding interviews, and system design patterns. Features real-time console output and syntax highlighting.",
    keywords: [
        "online javascript compiler",
        "javascript playground",
        "run javascript online",
        "js compiler",
        "javascript editor online",
        "online code runner",
        "javascript code tester",
        "js online editor",
        "javascript sandbox",
        "code playground",
        "javascript interpreter",
        "online js executor",
        "javascript practice",
        "coding interview practice",
        "algorithm testing",
        "javascript debugging tool",
        "free code editor",
        "browser javascript compiler",
        "javascript learning tool",
        "react system design"
    ],
    openGraph: {
        title: "Free Online JavaScript Compiler | Run & Test JS Code Instantly",
        description: "Write and execute JavaScript code in your browser. Free online JS compiler with real-time output, syntax highlighting, and zero setup required.",
        type: "website",
        siteName: "Sohan Paliyal - Portfolio",
    },
    twitter: {
        card: "summary_large_image",
        title: "Free Online JavaScript Compiler | Run JS Code Live",
        description: "Execute JavaScript code instantly in your browser. Perfect for testing, learning, and debugging.",
    },
    alternates: {
        canonical: "https://sohanpaliyal.github.io/playground",
    },
};

export default function PlaygroundPage() {
    // Structured data for SEO
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "JavaScript Playground - Online Compiler",
        "applicationCategory": "DeveloperApplication",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "operatingSystem": "Any",
        "description": "Free online JavaScript compiler and code editor. Execute JavaScript code instantly in your browser with real-time console output.",
        "featureList": [
            "Real-time code execution",
            "Syntax highlighting",
            "Console output display",
            "Error handling",
            "Fullscreen mode",
            "No installation required"
        ]
    };

    return (
        <>
            <Script
                id="playground-structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            <div className="pt-28 pb-10 min-h-screen">
                <Section idName="playground" className="flex flex-col gap-6">
                    <div>
                        <h1 className="text-white-100 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                            Online JavaScript <span className="text-gradient-purple">Compiler</span>
                        </h1>
                        <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
                            Free online JavaScript compiler and code playground. Write, execute, and debug JavaScript code instantly in your browser.
                            No installation, no setup—just start coding. Perfect for testing algorithms, practicing for coding interviews,
                            learning JavaScript, and experimenting with system design patterns.
                        </p>

                        {/* SEO-friendly feature list */}
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl">
                            <div className="flex items-center gap-2 text-secondary text-sm">
                                <span className="text-vs-purple">✓</span>
                                <span>Instant JavaScript execution in browser</span>
                            </div>
                            <div className="flex items-center gap-2 text-secondary text-sm">
                                <span className="text-vs-purple">✓</span>
                                <span>Real-time console output display</span>
                            </div>
                            <div className="flex items-center gap-2 text-secondary text-sm">
                                <span className="text-vs-purple">✓</span>
                                <span>Syntax highlighting for better readability</span>
                            </div>
                            <div className="flex items-center gap-2 text-secondary text-sm">
                                <span className="text-vs-purple">✓</span>
                                <span>Fullscreen coding mode (ESC to exit)</span>
                            </div>
                            <div className="flex items-center gap-2 text-secondary text-sm">
                                <span className="text-vs-purple">✓</span>
                                <span>100% free - no registration required</span>
                            </div>
                            <div className="flex items-center gap-2 text-secondary text-sm">
                                <span className="text-vs-purple">✓</span>
                                <span>Perfect for algorithm testing & learning</span>
                            </div>
                        </div>
                    </div>

                    <Playground />

                    {/* Additional SEO content */}
                    <div className="mt-8 max-w-3xl">
                        <h2 className="text-white-100 font-bold text-2xl mb-3">
                            Why Use This JavaScript Online Compiler?
                        </h2>
                        <p className="text-secondary text-[15px] leading-[28px]">
                            This free online JavaScript compiler lets you run JavaScript code directly in your browser without any setup.
                            Whether you're learning JavaScript, testing code snippets, practicing for coding interviews, or debugging algorithms,
                            this tool provides instant feedback with a clean, distraction-free interface. The built-in console captures all
                            <code className="text-vs-purple mx-1">console.log()</code> outputs, making it perfect for quick experiments and
                            educational purposes.
                        </p>
                    </div>
                </Section>
            </div>
        </>
    );
}
