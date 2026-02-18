import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Square } from 'lucide-react';
import './Terminal.css';

const Terminal = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState([
        { type: 'info', content: 'Initializing Neural Link...' },
        { type: 'success', content: 'Connected to MOHYUDDIN_MAIN_FRAME' },
        { type: 'info', content: 'Type "help" for available commands.' },
    ]);
    const [isOpen, setIsOpen] = useState(false);
    const bottomRef = useRef(null);

    const commands = {
        help: "Available commands: bio, skills, contact, clear, exit, whoami",
        bio: "Mohyuddin Rao | Backend Engineer | Automation Expert. Building the future with Python & AI.",
        skills: "Python, FastAPI, n8n, RAG, React, .NET, Docker, AWS.",
        contact: "Email: mohyuddinrao.dev@gmail.com | LinkedIn: /in/mohyuddin-rao",
        whoami: "You are the visitor. Welcome to my digital realm.",
        clear: "clear",
        exit: "exit"
    };

    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            const cmd = input.trim().toLowerCase();
            let response = { type: 'success', content: '' };

            if (commands[cmd]) {
                if (cmd === 'clear') {
                    setOutput([]);
                    setInput('');
                    return;
                }
                if (cmd === 'exit') {
                    setIsOpen(false);
                    setInput('');
                    return;
                }
                response.content = commands[cmd];
            } else {
                response.type = 'error';
                response.content = `Command not found: ${cmd}`;
            }

            setOutput([...output, { type: 'command', content: `> ${input}` }, response]);
            setInput('');
        }
    };

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [output, isOpen]);

    // Toggle terminal with Ctrl+` or simple button
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.ctrlKey && e.key === '`') {
                setIsOpen(prev => !prev);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <>
            <button
                className="terminal-toggle"
                onClick={() => setIsOpen(true)}
                style={{ display: isOpen ? 'none' : 'flex' }}
            >
        >_ TERMINAL
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="terminal-window"
                        initial={{ opacity: 0, scale: 0.8, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 50 }}
                        drag
                        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} // Simple constraints
                        dragElastic={0.1}
                    >
                        <div className="terminal-header">
                            <span className="terminal-title">user@mohyuddin-portfolio:~</span>
                            <div className="terminal-controls">
                                <Minus size={14} className="control-icon" />
                                <Square size={12} className="control-icon" />
                                <X size={14} className="control-icon close" onClick={() => setIsOpen(false)} />
                            </div>
                        </div>

                        <div className="terminal-body">
                            {output.map((line, i) => (
                                <div key={i} className={`terminal-line ${line.type}`}>
                                    {line.content}
                                </div>
                            ))}
                            <div className="input-line">
                                <span className="prompt">root@system:~$</span>
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleCommand}
                                    autoFocus
                                    spellCheck="false"
                                />
                            </div>
                            <div ref={bottomRef} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Terminal;
