import { useState, useEffect } from "react";

interface UseTypewriterProps {
    text: string;
    speed?: number;
    pause?: number;
}

export const useTypewriter = ({ text, speed = 150, pause = 1500 }: UseTypewriterProps) => {
    const [displayedText, setDisplayedText] = useState("");
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!isMounted) return;

        let isCancelled = false;

        const loop = async () => {
            while (!isCancelled) {
                // Typing
                for (let i = 0; i <= text.length; i++) {
                    if (isCancelled) return;
                    setDisplayedText(text.slice(0, i));
                    await new Promise((r) => setTimeout(r, speed));
                }

                // Pause at the end
                await new Promise((r) => setTimeout(r, pause));

                // Deleting
                for (let i = text.length; i >= 0; i--) {
                    if (isCancelled) return;
                    setDisplayedText(text.slice(0, i));
                    await new Promise((r) => setTimeout(r, speed / 2));
                }

                // Pause before restarting
                await new Promise((r) => setTimeout(r, 500));
            }
        };

        loop();

        return () => {
            isCancelled = true;
        };
    }, [text, speed, pause, isMounted]);

    return displayedText;
};
