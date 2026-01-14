"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    // Avoid hydration mismatch by only rendering after mount
    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="w-10 h-10 flex items-center justify-center p-2 rounded-lg bg-tertiary">
                <div className="w-5 h-5" />
            </div>
        );
    }

    return (
        <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="relative w-10 h-10 flex items-center justify-center p-2 rounded-lg bg-tertiary hover:bg-tertiary/80 transition-all duration-300 border border-glass-border shadow-sm group overflow-hidden"
            aria-label="Toggle theme"
        >
            <div className="relative w-6 h-6 flex items-center justify-center">
                <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-amber-500" />
                <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-vs-blue" />
            </div>

            {/* Subtle hover effect */}
            <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
    );
}
