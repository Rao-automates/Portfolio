import { motion } from 'framer-motion';
import useAnimatedCounter from '../hooks/useAnimatedCounter';

const StatItem = ({ value, suffix, label, delay, bentoClass }) => {
    const { count, ref } = useAnimatedCounter(value, 2000);

    return (
        <motion.div
            ref={ref}
            className={`bento-item ${bentoClass}`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-50px" }}
        >
            <span style={{ fontSize: '3.5rem', fontWeight: 900, color: 'var(--text-color)', lineHeight: 1, marginBottom: '8px' }}>
                {count}<span style={{ color: 'var(--accent)' }}>{suffix}</span>
            </span>
            <span style={{ color: 'var(--text-light)', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{label}</span>
        </motion.div>
    );
};

const Stats = () => {
    const stats = [
        { value: 20, suffix: '+', label: 'Projects Delivered', bentoClass: 'bento-wide' },
        { value: 5, suffix: '+', label: 'Automation Pipelines', bentoClass: '' },
        { value: 30, suffix: '%', label: 'Efficiency Gained', bentoClass: '' },
        { value: 3, suffix: '.53', label: 'GPA at PAF-KIET', bentoClass: 'bento-wide' },
    ];

    return (
        <div className="bento-grid" style={{ maxWidth: '1000px', margin: '3rem auto' }}>
            {stats.map((stat, i) => (
                <StatItem key={i} {...stat} delay={i * 0.1} />
            ))}
        </div>
    );
};

export default Stats;
