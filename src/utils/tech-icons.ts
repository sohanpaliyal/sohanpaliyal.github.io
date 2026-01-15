import {
    html, css, javascript, typescript, reactjs, redux, tailwind, git, figma, angular,
    mui, firebase, framer, rxjs
} from "@/assets";
import { Laptop, Server, Database, Activity, Zap, Box, Lightbulb, Layers, HardDrive } from "lucide-react";

export const getTechIcon = (name: string) => {
    const lowerName = name.toLowerCase();

    // Mapping for assets
    if (lowerName.includes("react")) return { type: "image", icon: reactjs };
    if (lowerName.includes("html")) return { type: "image", icon: html };
    if (lowerName.includes("css")) return { type: "image", icon: css };
    if (lowerName.includes("javascript")) return { type: "image", icon: javascript };
    if (lowerName.includes("typescript")) return { type: "image", icon: typescript };
    if (lowerName.includes("angular")) return { type: "image", icon: angular };
    if (lowerName.includes("redux")) return { type: "image", icon: redux };
    if (lowerName.includes("tailwind")) return { type: "image", icon: tailwind };
    if (lowerName.includes("git")) return { type: "image", icon: git };
    if (lowerName.includes("figma")) return { type: "image", icon: figma };
    if (lowerName.includes("mui") || lowerName.includes("material")) return { type: "image", icon: mui };
    if (lowerName.includes("firebase")) return { type: "image", icon: firebase };
    if (lowerName.includes("framer")) return { type: "image", icon: framer };
    if (lowerName.includes("rxjs")) return { type: "image", icon: rxjs };

    // Fallbacks for abstract concepts using Lucide
    if (lowerName.includes("web-dev")) return { type: "lucide", icon: Laptop };
    if (lowerName.includes("backend")) return { type: "lucide", icon: Server };
    if (lowerName.includes("db") || lowerName.includes("database")) return { type: "lucide", icon: Database };
    if (lowerName.includes("performance")) return { type: "lucide", icon: Activity };
    if (lowerName.includes("optimization")) return { type: "lucide", icon: Zap };
    if (lowerName.includes("architecture") || lowerName.includes("system")) return { type: "lucide", icon: Box };
    if (lowerName.includes("concepts")) return { type: "lucide", icon: Lightbulb };
    if (lowerName.includes("layer") || lowerName.includes("stack")) return { type: "lucide", icon: Layers };
    if (lowerName.includes("storage")) return { type: "lucide", icon: HardDrive };

    // Default
    return { type: "lucide", icon: Laptop };
};
