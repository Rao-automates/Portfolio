import { motion } from 'framer-motion';
import './Reviews.css';

const reviews = [
    {
        project: "N8n Workflow: Web Article to LinkedIn Auto-Posting",
        rating: 5,
        text: "Good work and reliable communication",
        tags: ["Reliable"],
        date: "Aug – Sep 2025",
        type: "Fixed Price",
        earned: "$105.00",
    },
    {
        project: "AI/Automation Developer – Python, LLMs (ChatGPT, Gemini), Workflow Optimization",
        rating: 4,
        text: null,
        tags: [],
        date: "Oct 2025",
        type: "Hourly",
        earned: "$57.50",
    },
];

const StarIcon = ({ filled }) => (
    <svg
        className={`review-star ${filled ? '' : 'empty'}`}
        viewBox="0 0 20 20"
        fill="currentColor"
    >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const UpworkLogo = () => (
    <svg viewBox="0 0 56.7 56.7" fill="currentColor">
        <path d="M42.4 17.7c-5.3 0-9.3 3.5-10.9 9-2.5-3.8-4.4-8.3-5.5-12.1h-5.6v15.8c0 2.9-2.4 5.3-5.3 5.3s-5.3-2.4-5.3-5.3V14.6H4.2v15.8c0 6 4.9 10.9 10.9 10.9s10.9-4.9 10.9-10.9v-2.6c1.1 2.3 2.5 4.6 4.2 6.7l-3.6 16.8h5.7l2.6-12.4c2.3 1.5 4.9 2.4 7.6 2.4 6.1 0 11.1-5 11.1-11.3-.1-6.2-5.1-11.3-11.2-11.3zm0 17c-2.3 0-4.6-1-6.5-2.7l.8-3.4v-.2c.6-3.5 2.4-5.8 5.7-5.8 3.1 0 5.6 2.5 5.6 5.6.1 3-2.5 5.5-5.6 5.5z" />
    </svg>
);

const Reviews = () => {
    const totalReviews = reviews.length;
    const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews).toFixed(1);

    return (
        <section id="reviews" className="reviews-section">
            <motion.div
                className="reviews-header"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <div className="upwork-badge">
                    <UpworkLogo />
                    Upwork Verified
                </div>
                <h2 className="section-title">Client Reviews</h2>
                <p className="section-subtitle">
                    Real feedback from clients I've worked with on Upwork
                </p>
            </motion.div>

            <motion.div
                className="reviews-stats"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
            >
                <div className="review-stat">
                    <div className="review-stat-value">{avgRating}</div>
                    <div className="review-stat-label">Avg Rating</div>
                </div>
                <div className="review-stat">
                    <div className="review-stat-value">{totalReviews}</div>
                    <div className="review-stat-label">Projects</div>
                </div>
                <div className="review-stat">
                    <div className="review-stat-value">100%</div>
                    <div className="review-stat-label">Job Success</div>
                </div>
            </motion.div>

            <div className="reviews-grid">
                {reviews.map((review, index) => (
                    <motion.div
                        key={index}
                        className="review-card spotlight-card gradient-border"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        viewport={{ once: true }}
                    >
                        <svg className="review-quote-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
                        </svg>

                        <div className="review-card-header">
                            <h3 className="review-project-title">{review.project}</h3>
                            <div className="review-stars">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <StarIcon key={star} filled={star <= review.rating} />
                                ))}
                            </div>
                        </div>

                        {review.text ? (
                            <p className="review-text">{review.text}</p>
                        ) : (
                            <p className="review-no-text">★ {review.rating}.0 — No written feedback</p>
                        )}

                        <div className="review-meta">
                            <span className="review-date">{review.date} · {review.type}</span>
                            <div className="review-tags">
                                {review.tags.map((tag, i) => (
                                    <span key={i} className="review-tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="reviews-cta"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
            >
                <a
                    href="https://www.upwork.com/freelancers/~0126577e0d5102025d"
                    target="_blank"
                    rel="noreferrer"
                >
                    View Full Profile on Upwork
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </a>
            </motion.div>
        </section>
    );
};

export default Reviews;
