"use client";

import React from "react";
import dynamic from "next/dynamic";
import { technologies } from "@/constants";
import Section from "@/components/ui/section";

const BallCanvas = dynamic(() => import("@/components/canvas/ball"), { ssr: false });

const Tech = () => {
    return (
        <Section idName='tech' className="flex flex-row flex-wrap justify-center gap-10">
            {technologies.map((technology) => (
                <div className='w-28 h-28' key={technology.name}>
                    <BallCanvas icon={technology.icon} />
                </div>
            ))}
        </Section>
    );
};

export default Tech;
