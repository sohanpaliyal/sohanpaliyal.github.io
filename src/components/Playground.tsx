"use client";

import React, { useState, useCallback } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css"; // Dark theme
import { Play, Trash2, Terminal, Maximize2, Minimize2 } from "lucide-react";
import { motion } from "framer-motion";
import { slideIn } from "@/lib/motion";

const defaultCode = `// 🚀 Welcome to the JS Playground!
// Try running some JavaScript code here.

const greet = (name) => {
  return \`Hello, \${name}! Welcome to my portfolio.\`;
};

console.log(greet("Recruiter"));

// Array filters
const skills = ["React", "System Design", "Typing"];
const coolSkills = skills.filter(s => s.length > 5);

console.log("Cool Skills:", coolSkills);
`;

const Playground = () => {
    const [code, setCode] = useState(defaultCode);
    const [output, setOutput] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isFullScreen, setIsFullScreen] = useState(false);

    const runCode = useCallback(() => {
        setOutput([]);
        setError(null);

        const logs: any[] = [];

        // Mock console.log to capture output
        const mockConsole = {
            log: (...args: any[]) => {
                logs.push(args.map(arg =>
                    typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
                ).join(' '));
            },
            error: (...args: any[]) => {
                logs.push(`Error: ${args.join(' ')}`);
            },
            warn: (...args: any[]) => {
                logs.push(`Warning: ${args.join(' ')}`);
            }
        };

        try {
            // Create a safe wrapper function
            // We pass the mocked console as 'console' to the function scope
            const safeFunction = new Function("console", code);
            safeFunction(mockConsole);
            setOutput(logs);
        } catch (err: any) {
            setError(err.toString());
        }
    }, [code]);

    const clearConsole = () => {
        setOutput([]);
        setError(null);
    };

    // Handle Escape key to exit full screen
    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isFullScreen) {
                setIsFullScreen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isFullScreen]);

    return (
        <div className={`flex flex-col xl:flex-row gap-6 w-full transition-all duration-300 ${isFullScreen ? "fixed inset-0 z-[9999] bg-primary p-6 h-screen" : "h-[80vh]"}`}>
            {/* Left Panel: Editor */}
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                initial="hidden"
                animate="show"
                className={`flex flex-col gap-2 relative bg-[#1e1e1e] rounded-xl overflow-hidden border border-white/10 shadow-2xl ${isFullScreen ? "flex-[1]" : "flex-[1.5]"}`}
            >
                <div className="flex items-center justify-between px-4 py-3 bg-[#252526] border-b border-white/5">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <span className="ml-2 text-sm text-gray-400 font-mono">script.js</span>
                    </div>
                    <button
                        onClick={() => setIsFullScreen(!isFullScreen)}
                        className="text-gray-400 hover:text-white transition-colors"
                        title={isFullScreen ? "Exit Full Screen" : "Enter Full Screen"}
                    >
                        {isFullScreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
                    </button>
                </div>

                <div className="flex-1 overflow-auto font-mono text-[14px]">
                    <Editor
                        value={code}
                        onValueChange={code => setCode(code)}
                        highlight={code => highlight(code, languages.javascript, 'javascript')}
                        padding={20}
                        style={{
                            fontFamily: '"Fira Code", "Fira Mono", monospace',
                            fontSize: 14,
                            minHeight: '100%'
                        }}
                        textareaClassName="focus:outline-none"
                    />
                </div>
            </motion.div>

            {/* Right Panel: Console */}
            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                initial="hidden"
                animate="show"
                className="flex-[1] flex flex-col gap-4"
            >
                {/* Action Bar */}
                <div className="flex gap-4">
                    <button
                        onClick={runCode}
                        className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold py-3 px-6 rounded-xl transition-all active:scale-95 shadow-lg shadow-purple-500/20"
                    >
                        <Play size={18} fill="currentColor" />
                        Run Code
                    </button>
                    <button
                        onClick={clearConsole}
                        className="flex items-center justify-center gap-2 bg-[#2d2d2d] hover:bg-[#3d3d3d] text-gray-300 font-semibold py-3 px-6 rounded-xl transition-all active:scale-95 border border-white/5"
                        title="Clear Console"
                    >
                        <Trash2 size={18} />
                    </button>
                </div>

                {/* Output Display */}
                <div className="flex-1 bg-black-100 rounded-xl border border-white/10 overflow-hidden flex flex-col shadow-2xl bg-opacity-95 backdrop-blur-sm">
                    <div className="flex items-center px-4 py-3 border-b border-white/10 bg-white/5">
                        <Terminal size={16} className="text-secondary mr-2" />
                        <span className="text-sm font-semibold text-secondary">Console Output</span>
                    </div>

                    <div className="flex-1 p-4 font-mono text-sm overflow-auto space-y-2">
                        {output.length === 0 && !error && (
                            <div className="text-gray-600 italic">Ready to execute...</div>
                        )}

                        {output.map((log, i) => (
                            <div key={i} className="text-green-400 border-b border-white/5 pb-1 last:border-0 animation-fade-inBreak break-all whitespace-pre-wrap">
                                <span className="text-gray-500 mr-2 select-none">&gt;</span>
                                {log}
                            </div>
                        ))}

                        {error && (
                            <div className="text-red-400 bg-red-500/10 p-2 rounded border border-red-500/20 animation-shake">
                                <span className="font-bold">Error:</span> {error}
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Playground;
