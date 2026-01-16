"use client";

import React, { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Home, User, Briefcase, FileText, Mail, Github, Linkedin, Moon, Sun, Laptop } from "lucide-react";
import { useTheme } from "next-themes";

interface CommandItemProps {
    id?: string;
    icon: any;
    label: string;
    shortcut?: string;
    action: () => void;
    active: boolean;
    onMouseEnter: () => void;
}

const CommandItem = ({ id, icon: Icon, label, shortcut, action, active, onMouseEnter }: CommandItemProps) => {
    return (
        <button
            id={id}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-colors ${active ? "bg-vs-blue/20 text-vs-blue" : "text-secondary hover:bg-white/5"
                }`}
            onClick={action}
            onMouseEnter={onMouseEnter}
        >
            <div className="flex items-center gap-3">
                <Icon size={18} />
                <span className={active ? "font-medium" : ""}>{label}</span>
            </div>
            {shortcut && (
                <span className="text-xs opacity-50 bg-white/10 px-1.5 py-0.5 rounded border border-white/5">
                    {shortcut}
                </span>
            )}
        </button>
    );
};

interface CommandPaletteProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const CommandPalette = ({ isOpen, setIsOpen }: CommandPaletteProps) => {
    const [query, setQuery] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(0);
    const router = useRouter();
    const { setTheme } = useTheme();

    // Reset state when opened
    useEffect(() => {
        if (isOpen) {
            setQuery("");
            setSelectedIndex(0);
        }
    }, [isOpen]);

    // Handle internal navigation (Tab, etc)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;

            if (e.key === "Tab") {
                e.preventDefault();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen]);

    // Scroll active item into view
    useEffect(() => {
        if (!isOpen) return;
        const activeItem = document.getElementById(`command-item-${selectedIndex}`);
        if (activeItem) {
            activeItem.scrollIntoView({ block: "nearest", behavior: "smooth" });
        }
    }, [selectedIndex, isOpen]);

    // Navigation and Actions
    const navigateTo = (path: string) => {
        setIsOpen(false);
        if (path.startsWith("/#")) {
            // Force browser native jump for anchors, ensuring it works even if already on the page
            window.location.href = path;
        } else {
            router.push(path);
        }
    };

    const openExternal = (url: string) => {
        setIsOpen(false);
        window.open(url, "_blank");
    };

    const changeTheme = (theme: string) => {
        setTheme(theme);
        setIsOpen(false);
    };

    // Actions List
    const actions = [
        {
            category: "Navigation",
            items: [
                { icon: Home, label: "Home", action: () => navigateTo("/") },
                { icon: User, label: "About", action: () => navigateTo("/#about") },
                { icon: Briefcase, label: "Work", action: () => navigateTo("/#work") },
                { icon: FileText, label: "Blog", action: () => navigateTo("/blog") },
                { icon: Mail, label: "Contact", action: () => navigateTo("/#contact") },
            ],
        },
        {
            category: "Social",
            items: [
                { icon: Github, label: "GitHub", action: () => openExternal("https://github.com/sohanpaliyal") },
                { icon: Linkedin, label: "LinkedIn", action: () => openExternal("https://linkedin.com/in/sohanpaliyal") },
            ],
        },
        {
            category: "Theme",
            items: [
                { icon: Sun, label: "Light Mode", action: () => changeTheme("light") },
                { icon: Moon, label: "Dark Mode", action: () => changeTheme("dark") },
                { icon: Laptop, label: "System", action: () => changeTheme("system") },
            ],
        },
    ];

    // Filtered Items
    const getFilteredItems = () => {
        let flattened: any[] = [];
        actions.forEach((group) => {
            const filteredGroup = group.items.filter((item) =>
                item.label.toLowerCase().includes(query.toLowerCase())
            );
            if (filteredGroup.length > 0) {
                flattened.push({ isHeader: true, label: group.category });
                flattened = [...flattened, ...filteredGroup];
            }
        });
        return flattened;
    };

    const filteredItems = getFilteredItems();
    // Helper to map flat index to actual interactive item
    const interactiveItems = filteredItems.filter(i => !i.isHeader);

    // Keyboard navigation
    useEffect(() => {
        const handleNavigation = (e: KeyboardEvent) => {
            if (!isOpen) return;

            if (e.key === "ArrowDown") {
                e.preventDefault();
                setSelectedIndex((prev) => (prev + 1) % interactiveItems.length);
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setSelectedIndex((prev) => (prev - 1 + interactiveItems.length) % interactiveItems.length);
            } else if (e.key === "Enter") {
                e.preventDefault();
                if (interactiveItems[selectedIndex]) {
                    interactiveItems[selectedIndex].action();
                }
            }
        };

        window.addEventListener("keydown", handleNavigation);
        return () => window.removeEventListener("keydown", handleNavigation);
    }, [isOpen, selectedIndex, interactiveItems]);


    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999]"
                    />

                    {/* Modal Wrapper for Centering */}
                    <div className="fixed inset-0 z-[10000] flex items-start justify-center pt-[15vh] sm:pt-[20vh] px-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="w-full max-w-lg pointer-events-auto bg-tertiary border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[60vh]"
                        >
                            {/* Input */}
                            <div className="flex items-center border-b border-white/10 px-4 py-4">
                                <Search className="text-secondary w-5 h-5 mr-3" />
                                <input
                                    autoFocus
                                    type="text"
                                    placeholder="Type a command or search..."
                                    className="bg-transparent border-none outline-none text-white-100 flex-1 text-lg placeholder:text-secondary/50"
                                    value={query}
                                    onChange={(e) => {
                                        setQuery(e.target.value);
                                        setSelectedIndex(0);
                                    }}
                                />
                                <div className="text-xs text-secondary border border-white/10 px-1.5 py-0.5 rounded hidden sm:block">
                                    ESC
                                </div>
                            </div>

                            {/* Results */}
                            <div className="overflow-y-auto p-2 scrollbar-hide">
                                {actions.map((group, groupIdx) => {
                                    // Local filter for rendering structure
                                    const filteredGroupItems = group.items.filter((item) =>
                                        item.label.toLowerCase().includes(query.toLowerCase())
                                    );

                                    if (filteredGroupItems.length === 0) return null;

                                    return (
                                        <div key={group.category} className="mb-2">
                                            <div className="text-xs font-semibold text-secondary uppercase tracking-wider px-4 py-2">
                                                {group.category}
                                            </div>
                                            {filteredGroupItems.map((item) => {
                                                // Find global index for this item
                                                const globalIndex = interactiveItems.findIndex(i => i === item);
                                                const isActive = globalIndex === selectedIndex;

                                                return (
                                                    <CommandItem
                                                        key={item.label}
                                                        id={`command-item-${globalIndex}`}
                                                        icon={item.icon}
                                                        label={item.label}
                                                        action={item.action}
                                                        active={isActive}
                                                        onMouseEnter={() => setSelectedIndex(globalIndex)}
                                                    />
                                                );
                                            })}
                                        </div>
                                    );
                                })}

                                {interactiveItems.length === 0 && (
                                    <div className="p-8 text-center text-secondary">
                                        No results found for "{query}"
                                    </div>
                                )}
                            </div>

                            {/* Footer */}
                            <div className="p-2 border-t border-white/10 bg-black-200/30 flex justify-between items-center text-[10px] text-secondary px-4">
                                <div>
                                    <span className="font-bold">Cmd K</span> to open
                                </div>
                                <div className="flex gap-3">
                                    <span>↑↓ to navigate</span>
                                    <span>↵ to select</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence >
    );
};

export default CommandPalette;
