import { useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';

// Smooth easeOutExpo counter via rAF
const StatItem = ({ value, suffix, label, delay, bentoClass }) => {
    const ref = useRef(null);
    const numRef = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (!isInView || hasAnimated.current || !numRef.current) return;
        hasAnimated.current = true;

        const isDecimal = suffix === '.5';
        const end = value;
        const duration = 1800;
        const delayMs = delay * 1000;
        let startTime = null;

        const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

        const step = (timestamp) => {
            if (!startTime) startTime = timestamp + delayMs;
            if (timestamp < startTime) { requestAnimationFrame(step); return; }
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const current = (end) * easeOutExpo(progress);

            if (numRef.current) {
                numRef.current.textContent = isDecimal
                    ? current.toFixed(1)
                    : Math.floor(current).toString();
            }
            if (progress < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
    }, [isInView, value, suffix, delay]);

    return (
        <motion.div
            ref={ref}
            className={`bento-item ${bentoClass} stat-item`}
            initial={{ opacity: 0, y: 30, scale: 0.94 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
        >
            <span style={{ fontSize: '3.5rem', fontWeight: 900, color: 'var(--text-color)', lineHeight: 1, marginBottom: '8px', display: 'block' }}>
                <span ref={numRef}>{suffix === '.5' ? '0.0' : '0'}</span>
                <span style={{ color: 'var(--accent)' }}>{suffix}</span>
            </span>
            <span style={{ color: 'var(--text-light)', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {label}
            </span>
        </motion.div>
    );
};

const Stats = () => {
    const stats = [
        { value: 20, suffix: '+', label: 'Projects Delivered', bentoClass: 'bento-wide' },
        { value: 5, suffix: '+', label: 'Automation Pipelines', bentoClass: '' },
        { value: 30, suffix: '%', label: 'Efficiency Gained', bentoClass: '' },
        { value: 3, suffix: '.5', label: 'GPA at PAF-KIET', bentoClass: 'bento-wide' },
    ];

    return (
        <div className="bento-grid" style={{ maxWidth: '1000px', margin: '3rem auto' }}>
            {stats.map((stat, i) => (
                <StatItem key={i} {...stat} delay={i * 0.12} />
            ))}
        </div>
    );
};

export default Stats;
