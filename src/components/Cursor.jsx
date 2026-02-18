import { useEffect, useState } from 'react';
import './Cursor.css';
import { motion } from 'framer-motion';

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 20, // center offset for outline (width 40/2)
            y: mousePosition.y - 20,
        }
    };

    const dotVariants = {
        default: {
            x: mousePosition.x - 4, // center offset for dot (width 8/2)
            y: mousePosition.y - 4
        }
    }

    return (
        <>
            <motion.div
                className="cursor-dot"
                animate={dotVariants.default}
                transition={{ type: "tween", ease: "backOut", duration: 0 }}
            />
            <motion.div
                className="cursor-outline"
                animate={variants.default}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
            />
        </>
    );
};

export default Cursor;
