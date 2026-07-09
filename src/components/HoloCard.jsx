import { useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';

/**
 * HoloCard — wraps any content in a React Spring 3D perspective tilt
 * with a moving holographic rainbow iridescent sheen overlay.
 */
const HoloCard = ({ children, className, style, intensity = 1 }) => {
    const ref = useRef(null);
    const [springs, api] = useSpring(() => ({
        rotateX: 0, rotateY: 0, scale: 1,
        glareX: 50, glareY: 50, glareOpacity: 0,
        config: { mass: 1, tension: 180, friction: 20 }
    }));

    const handleMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        api.start({
            rotateX: (y - 0.5) * -18 * intensity,
            rotateY: (x - 0.5) * 18 * intensity,
            scale: 1.02,
            glareX: x * 100,
            glareY: y * 100,
            glareOpacity: 0.25,
        });
    };

    const handleLeave = () => api.start({
        rotateX: 0, rotateY: 0, scale: 1, glareOpacity: 0
    });

    return (
        <animated.div
            ref={ref}
            className={className}
            style={{
                ...style,
                transformStyle: 'preserve-3d',
                rotateX: springs.rotateX,
                rotateY: springs.rotateY,
                scale: springs.scale,
                position: 'relative',
                overflow: 'hidden',
                cursor: 'default',
            }}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
        >
            {/* Holographic rainbow sheen */}
            <animated.div style={{
                position: 'absolute',
                inset: 0,
                pointerEvents: 'none',
                zIndex: 10,
                borderRadius: 'inherit',
                opacity: springs.glareOpacity,
                background: springs.glareX.to(gx =>
                    `radial-gradient(circle at ${gx}% ${50}%, 
                        rgba(204,255,0,0.15) 0%, 
                        rgba(249,115,22,0.08) 30%, 
                        rgba(139,92,246,0.08) 60%,
                        transparent 80%)`
                ),
                mixBlendMode: 'screen',
            }} />
            {/* Static rainbow border shimmer */}
            <div style={{
                position: 'absolute',
                inset: 0,
                borderRadius: 'inherit',
                pointerEvents: 'none',
                zIndex: 9,
                background: 'linear-gradient(135deg, rgba(204,255,0,0.05) 0%, rgba(249,115,22,0.04) 50%, rgba(139,92,246,0.04) 100%)',
            }} />
            <div style={{ position: 'relative', zIndex: 2, height: '100%' }}>
                {children}
            </div>
        </animated.div>
    );
};

export default HoloCard;
