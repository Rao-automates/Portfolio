import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import useAnimatedCounter from '../hooks/useAnimatedCounter';
import './Stats.css';

const StatItem = ({ value, suffix, label, delay }) => {
    const { count, ref } = useAnimatedCounter(value, 2000);

    return (
        <motion.div
            ref={ref}
            className="stat-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
        >
            <span className="stat-value">
                {count}{suffix}
            </span>
            <span className="stat-label">{label}</span>
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
        <section className="stats-container">
            <div className="stats-grid">
                {stats.map((stat, i) => (
                    <StatItem key={i} {...stat} delay={i * 0.1} />
                ))}
            </div>
        </section>
    );
};

export default Stats;
