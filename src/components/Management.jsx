import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import team from '../data/team';

// Avatar gradient pairs for each member
const gradients = [
    'from-primary to-dark-green',
    'from-light-green to-primary',
    'from-dark-green to-accent',
    'from-accent to-primary',
    'from-primary to-light-green',
];

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const Management = () => {
    const [selectedMember, setSelectedMember] = useState(null);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedMember !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [selectedMember]);

    // Close modal on Escape key
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'Escape') setSelectedMember(null);
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, []);

    const member = selectedMember !== null ? team[selectedMember] : null;

    return (
        <section id="management" className="w-full bg-light-bg py-10 md:py-14 lg:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="block w-8 h-0.5 bg-primary" />
                        <span className="text-primary text-xs font-semibold tracking-[0.25em] uppercase">
                            Leadership
                        </span>
                        <span className="block w-8 h-0.5 bg-primary" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-bg leading-tight mb-4">
                        Management{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-light-green">
                            Team
                        </span>
                    </h2>
                    <p className="text-dark-bg/60 text-base sm:text-lg leading-relaxed">
                        Experienced leadership driving innovation and excellence across Nigeria&apos;s energy sector.
                    </p>
                </motion.div>

                {/* Team Cards */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8"
                >
                    {team.map((person, i) => (
                        <motion.div
                            key={i}
                            variants={fadeInUp}
                            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(15, 143, 58, 0.1)" }}
                            className="group bg-white rounded-2xl p-6 text-center shadow-[0_2px_15px_rgba(0,0,0,0.06)] transition-all duration-400 border border-gray-100 hover:border-primary/30"
                        >
                            {/* Avatar */}
                            <div className="relative w-24 h-24 mx-auto mb-5">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className={`w-24 h-24 rounded-full bg-gradient-to-br ${gradients[i % gradients.length]} flex items-center justify-center shadow-lg transition-all duration-500`}
                                >
                                    <span className="text-white text-2xl font-bold">{person.initials}</span>
                                </motion.div>
                                <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-light-green border-2 border-white" />
                            </div>

                            <h3 className="text-dark-bg font-bold text-base leading-snug mb-1 group-hover:text-primary transition-colors duration-300">
                                {person.name}
                            </h3>
                            <p className="text-primary text-xs font-semibold tracking-wide uppercase mb-3">
                                {person.role}
                            </p>
                            <p className="text-dark-bg/50 text-xs leading-relaxed mb-5 line-clamp-3">
                                {person.shortBio}
                            </p>

                            <button
                                onClick={() => setSelectedMember(i)}
                                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary/10 text-primary text-xs font-semibold hover:bg-primary hover:text-white transition-all duration-300 group-hover:bg-primary group-hover:text-white cursor-pointer"
                            >
                                View Profile
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Profile Modal */}
            <AnimatePresence>
                {selectedMember !== null && member && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                        onClick={() => setSelectedMember(null)}
                    >
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 10 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-2xl max-h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className={`relative px-6 sm:px-8 pt-8 pb-16 bg-gradient-to-br ${gradients[selectedMember % gradients.length]}`}>
                                <button
                                    onClick={() => setSelectedMember(null)}
                                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-colors duration-200 cursor-pointer"
                                >
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="relative -mt-12 px-6 sm:px-8">
                                <div
                                    className={`w-24 h-24 rounded-full bg-gradient-to-br ${gradients[selectedMember % gradients.length]} flex items-center justify-center border-4 border-white shadow-xl`}
                                >
                                    <span className="text-white text-3xl font-bold">{member.initials}</span>
                                </div>
                            </div>

                            <div className="px-6 sm:px-8 pt-4 pb-8 overflow-y-auto max-h-[calc(85vh-200px)]">
                                <h3 className="text-dark-bg text-xl sm:text-2xl font-bold mb-1">{member.name}</h3>
                                <p className="text-primary text-sm font-semibold tracking-wide uppercase mb-6">
                                    {member.role}
                                </p>
                                <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-light-green rounded-full mb-6" />
                                <div className="text-dark-bg/70 text-sm sm:text-base leading-relaxed space-y-4">
                                    {member.fullBio.split('\n\n').map((paragraph, pIdx) => (
                                        <p key={pIdx}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Management;
