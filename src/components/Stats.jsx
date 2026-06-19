import { motion } from 'framer-motion';
import useAnimatedCounter from '../hooks/useAnimatedCounter';

const StatItem = ({ value, suffix, label, delay }) => {
    const { count, ref } = useAnimatedCounter(value, 2000);

    return (
        <motion.div
            ref={ref}
            className="neu-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            style={{ padding: '1.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '200px', flex: 1 }}
        >
            <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent)', textShadow: '2px 2px 4px rgba(163, 177, 198, 0.4)' }}>
                {count}{suffix}
            </span>
            <span style={{ color: 'var(--text-light)', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{label}</span>
        </motion.div>
    );
};

const Stats = () => {
    const stats = [
        { value: 20, suffix: '+', label: 'Projects Delivered' },
        { value: 5, suffix: '+', label: 'Automation Pipelines' },
        { value: 30, suffix: '%', label: 'Efficiency Gained' },
        { value: 3, suffix: '.53', label: 'GPA at PAF-KIET' },
    ];

    return (
        <div style={{ maxWidth: '1000px', margin: '3rem auto', display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {stats.map((stat, i) => (
                <StatItem key={i} {...stat} delay={i * 0.1} />
            ))}
        </div>
    );
};

export default Stats;
