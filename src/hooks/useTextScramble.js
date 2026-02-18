import { useEffect, useState, useRef } from 'react';

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

const useTextScramble = (text, trigger = true, speed = 30) => {
    const [display, setDisplay] = useState('');
    const [isComplete, setIsComplete] = useState(false);
    const iteration = useRef(0);

    useEffect(() => {
        if (!trigger) return;
        iteration.current = 0;
        setIsComplete(false);

        const interval = setInterval(() => {
            setDisplay(
                text.split('').map((char, idx) => {
                    if (char === ' ') return ' ';
                    if (idx < iteration.current) return text[idx];
                    return chars[Math.floor(Math.random() * chars.length)];
                }).join('')
            );

            if (iteration.current >= text.length) {
                clearInterval(interval);
                setIsComplete(true);
            }

            iteration.current += 0.5;
        }, speed);

        return () => clearInterval(interval);
    }, [text, trigger, speed]);

    return { display: trigger ? display : '', isComplete };
};

export default useTextScramble;
