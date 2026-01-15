import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/navbar";
import ScrollToTop from "@/components/ui/scroll-to-top";
import CommandPalette from "@/components/ui/command-palette";

import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
    title: "Sohan Paliyal | Software Engineer Portfolio",
    description: "Senior Software Engineer specializing in React, TypeScript, and high-performance web applications.",
    keywords: ["Software Engineer", "React Developer", "TypeScript", "Performance Engineering", "Portfolio"],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className} bg-primary text-white-100 overflow-x-hidden`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="relative z-0">
                        <div className="mesh-gradient" />
                        <Navbar />
                        {children}
                        <ScrollToTop />
                        <CommandPalette />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
