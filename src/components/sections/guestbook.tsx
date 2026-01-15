"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "@/styles/styles";
import { slideIn, textVariant, fadeIn } from "@/lib/motion";
import Section from "@/components/ui/section";
import { Send, User, MessageCircle, Clock, Loader2, Sparkles } from "lucide-react";

interface GuestbookEntry {
    id: string;
    name: string;
    message: string;
    timestamp: Date;
    isNew?: boolean;
}

const INITIAL_ENTRIES: GuestbookEntry[] = [
    {
        id: "1",
        name: "Sarah Chen",
        message: "The 3D animations on this portfolio are incredible! Love the attention to detail.",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    },
    {
        id: "2",
        name: "Mike Ross",
        message: "That architecture toggle feature is such a cool way to show system design skills. Hired!",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5), // 5 hours ago
    },
    {
        id: "3",
        name: "Alex Design",
        message: "Clean aesthetics and smooth transitions. The dark mode implementation is spot on.",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    },
];

const Guestbook = () => {
    const [entries, setEntries] = useState<GuestbookEntry[]>(INITIAL_ENTRIES);
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSimulating, setIsSimulating] = useState(false); // To prevent multiple simulations

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !message.trim()) return;

        setIsSubmitting(true);

        // Simulate network latency
        await new Promise((resolve) => setTimeout(resolve, 800));

        const newEntry: GuestbookEntry = {
            id: Date.now().toString(),
            name: name,
            message: message,
            timestamp: new Date(),
            isNew: true,
        };

        // Optimistic update
        setEntries((prev) => [newEntry, ...prev]);
        setName("");
        setMessage("");
        setIsSubmitting(false);

        // Simulate a "real-time" response from another user shortly after
        if (!isSimulating) {
            setIsSimulating(true);
            setTimeout(() => {
                const botEntry: GuestbookEntry = {
                    id: (Date.now() + 1).toString(),
                    name: "Recruiter Bot 🤖",
                    message: "Wow, seeing these real-time updates happen live is impressive!",
                    timestamp: new Date(),
                    isNew: true,
                };
                setEntries((prev) => [botEntry, ...prev]);
                setIsSimulating(false);
            }, 3000);
        }
    };

    return (
        <Section idName="guestbook">
            <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">

                {/* LEFT: MESSAGE LIST */}
                <motion.div
                    variants={slideIn("left", "tween", 0.2, 1)}
                    className="flex-[0.75] bg-black-100 p-8 rounded-2xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <MessageCircle size={120} />
                    </div>

                    <p className={styles.sectionSubText}>Community</p>
                    <h3 className={styles.sectionHeadText}>Guestbook.</h3>
                    <p className="mb-6 text-secondary text-[14px]">
                        Leave a message! This section demonstrates optimistic UI updates and state management.
                        (Mocked for demo purposes)
                    </p>

                    <div className="mt-8 flex flex-col gap-6 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-vs-purple/20 scrollbar-track-transparent">
                        <AnimatePresence initial={false} mode="popLayout">
                            {entries.map((entry) => (
                                <motion.div
                                    key={entry.id}
                                    layout
                                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    className={`p-4 rounded-xl border ${entry.isNew
                                        ? "bg-vs-purple/10 border-vs-purple/30"
                                        : "bg-tertiary border-white/5"}`}
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="flex items-center gap-2">
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${entry.isNew ? 'bg-vs-purple' : 'bg-gradient-to-br from-indigo-500 to-purple-500'}`}>
                                                <User size={14} className="text-white" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold text-[16px]">{entry.name}</h4>
                                                <div className="flex items-center gap-1 text-[10px] text-secondary">
                                                    <Clock size={10} />
                                                    <span>{entry.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                                </div>
                                            </div>
                                        </div>
                                        {entry.isNew && (
                                            <span className="bg-vs-purple/20 text-vs-glow text-[10px] px-2 py-0.5 rounded-full border border-vs-purple/30 flex items-center gap-1">
                                                <Sparkles size={10} />
                                                New
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-secondary text-[14px] leading-relaxed pl-10">
                                        {entry.message}
                                    </p>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </motion.div>

                {/* RIGHT: FORM */}
                <motion.div
                    variants={slideIn("right", "tween", 0.2, 1)}
                    className="flex-[0.5] bg-tertiary p-8 rounded-2xl border border-white/5"
                >
                    <h3 className="text-white font-bold text-[24px] mb-8">Sign the Guestbook</h3>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <label className="flex flex-col">
                            <span className="text-white font-medium mb-4">Your Name</span>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="What's your name?"
                                className="bg-black-100 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-vs-purple/50 transition-all"
                            />
                        </label>
                        <label className="flex flex-col">
                            <span className="text-white font-medium mb-4">Your Message</span>
                            <textarea
                                rows={5}
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Share your thoughts..."
                                className="bg-black-100 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none focus:ring-2 focus:ring-vs-purple/50 transition-all"
                            />
                        </label>

                        <button
                            type="submit"
                            disabled={isSubmitting || !name || !message}
                            className="bg-vs-purple py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-opacity-80 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 group"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 size={20} className="animate-spin" />
                                    Posting...
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        </Section>
    );
};

export default Guestbook;
