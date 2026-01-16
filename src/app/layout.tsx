import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/navbar";
import ScrollToTop from "@/components/ui/scroll-to-top";
import { ThemeProvider } from "@/components/theme-provider";
import { CommandPaletteProvider } from "@/context/CommandPaletteContext";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://sohanpaliyal.github.io"),
    title: "Sohan Paliyal | Software Engineer Portfolio",
    description: "Senior Software Engineer specializing in React, TypeScript, and high-performance web applications.",
    keywords: ["Software Engineer", "React Developer", "TypeScript", "Performance Engineering", "Portfolio"],
    openGraph: {
        title: "Sohan Paliyal | Software Engineer Portfolio",
        description: "Senior Software Engineer specializing in React, TypeScript, and high-performance web applications.",
        type: "website",
        locale: "en_US",
        url: "https://sohanpaliyal.github.io",
    },
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
                    <CommandPaletteProvider>
                        <div className="relative z-0">
                            <div className="mesh-gradient" />
                            <Navbar />
                            {children}
                            <ScrollToTop />
                        </div>
                    </CommandPaletteProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
