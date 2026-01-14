"use client";

import dynamic from "next/dynamic";

const StarsCanvas = dynamic(() => import("./stars"), { ssr: false });

export default function StarsWrapper() {
    return <StarsCanvas />;
}
