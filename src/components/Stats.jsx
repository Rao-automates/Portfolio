import { useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';

const StatItem = ({ value, suffix, label, delay, bentoClass, decimals = 0 }) => {
    const ref = useRef(null);
    const numRef = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (!isInView || hasAnimated.current || !numRef.current) return;
        hasAnimated.current = true;

        const duration = 1800;
        const delayMs = delay * 1000;
        let startTime = null;
        const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

        const step = (timestamp) => {
            if (!startTime) startTime = timestamp + delayMs;
            if (timestamp < startTime) { requestAnimationFrame(step); return; }
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const current = value * easeOutExpo(progress);
            if (numRef.current) {
                numRef.current.textContent = decimals > 0
                    ? current.toFixed(decimals)
                    : Math.floor(current).toString();
            }
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [isInView, value, suffix, delay, decimals]);

    return (
        <motion.div
            ref={ref}
            className={`bento-item ${bentoClass} stat-item`}
            initial={{ opacity: 0, y: 30, scale: 0.94 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
        >
            <span style={{ fontSize: '3.5rem', fontWeight: 900, color: 'var(--text-color)', lineHeight: 1, marginBottom: '8px', display: 'block' }}>
                <span ref={numRef}>{decimals > 0 ? (0).toFixed(decimals) : '0'}</span>
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
        { value: 20, suffix: '+',  label: 'Projects Delivered',   bentoClass: 'bento-wide', decimals: 0 },
        { value: 5,  suffix: '+',  label: 'Automation Pipelines',  bentoClass: '',           decimals: 0 },
        { value: 30, suffix: '%',  label: 'Efficiency Gained',     bentoClass: '',           decimals: 0 },
        { value: 3.5,suffix: '',   label: 'GPA at PAF-KIET',       bentoClass: 'bento-wide', decimals: 1 },
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
