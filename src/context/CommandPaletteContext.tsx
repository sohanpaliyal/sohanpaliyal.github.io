"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import CommandPalette from "@/components/ui/command-palette";

interface CommandPaletteContextType {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
}

const CommandPaletteContext = createContext<CommandPaletteContextType | undefined>(undefined);

export const CommandPaletteProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);
    const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

    // Keyboard shortcut listener
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                toggle();
            }
            if (e.key === "Escape" && isOpen) {
                close();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, toggle, close]);

    return (
        <CommandPaletteContext.Provider value={{ isOpen, open, close, toggle }}>
            {children}
            <CommandPalette isOpen={isOpen} setIsOpen={setIsOpen} />
        </CommandPaletteContext.Provider>
    );
};

export const useCommandPalette = () => {
    const context = useContext(CommandPaletteContext);
    if (!context) {
        throw new Error("useCommandPalette must be used within a CommandPaletteProvider");
    }
    return context;
};
