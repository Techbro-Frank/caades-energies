import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import policies from '../data/policies';

const highlights = [
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
        ),
        title: 'Health Policy',
        desc: 'Comprehensive health standards, drug and alcohol policies, and AIDS awareness programs protecting every team member.',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
        ),
        title: 'Safety Commitment',
        desc: 'Zero accident and injury goal driven from top management, cascaded through every level of operations.',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        ),
        title: 'HSE Objectives',
        desc: 'ISO 14001 compliant environmental management, emergency response plans, and continuous improvement targets.',
    },
];

// Simple icon mapping for the modal policy list
const policyIcons = {
    ban: '🚫', heart: '❤️', leaf: '🌿', shield: '🛡️', alert: '🚨',
    leadership: '👔', clipboard: '📋', hand: '✋', 'no-smoking': '🚭',
    lock: '🔒', transport: '🚛', water: '🌊', quality: '✅',
};

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

const HSE = () => {
    const [showPolicies, setShowPolicies] = useState(false);
    const [expandedPolicy, setExpandedPolicy] = useState(null);

    useEffect(() => {
        document.body.style.overflow = showPolicies ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [showPolicies]);

    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'Escape') setShowPolicies(false);
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, []);

    return (
        <section id="hse" className="w-full relative bg-dark-green bg-gradient-to-br from-dark-green via-primary/90 to-dark-green overflow-hidden">
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

            <div className="relative z-10 py-10 md:py-14 lg:py-16">
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
                            <span className="block w-8 h-0.5 bg-white/40" />
                            <span className="text-white/80 text-xs font-semibold tracking-[0.25em] uppercase">
                                Compliance & Safety
                            </span>
                            <span className="block w-8 h-0.5 bg-white/40" />
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                            HSE & <span className="text-light-green">Policy</span>
                        </h2>
                        <p className="text-white/70 text-base sm:text-lg leading-relaxed">
                            Our commitment to Health, Safety, and Environment is at the core of every operation we undertake.
                        </p>
                    </motion.div>

                    {/* Policy Highlights */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
                    >
                        {[
                            { title: 'Zero Harm', desc: 'Working towards zero accidents, injuries, and environmental impact across all sites.' },
                            { title: 'Full Compliance', desc: 'Strict adherence to local and international safety regulations and industry standards.' },
                            { title: 'Regular Audits', desc: 'Continuous monitoring and assessment of our safety systems and operational protocols.' },
                        ].map((policy, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300"
                            >
                                <h3 className="text-xl font-bold text-white mb-3">{policy.title}</h3>
                                <p className="text-white/60 text-sm leading-relaxed">{policy.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA — View All Policies */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center"
                    >
                        <motion.button
                            onClick={() => setShowPolicies(true)}
                            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255,255,255,0.2)" }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-xl shadow-xl hover:bg-light-green hover:text-white transition-all duration-300 cursor-pointer"
                        >
                            View All Policies
                            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </motion.button>
                        <p className="mt-4 text-white/40 text-xs italic">
                            13 policies covering all aspects of our operations
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* ─── Full Policies Modal ─── */}
            {showPolicies && (
                <div
                    className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto"
                    onClick={() => setShowPolicies(false)}
                >
                    {/* Backdrop */}
                    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />

                    {/* Modal */}
                    <div
                        className="relative w-full max-w-5xl mx-4 my-6 sm:my-10 bg-white rounded-2xl shadow-2xl overflow-hidden animate-[fadeInUp_0.3s_ease-out]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="sticky top-0 z-20 bg-gradient-to-r from-dark-green via-primary to-dark-green px-6 sm:px-10 py-6 flex items-center justify-between">
                            <div>
                                <h3 className="text-white text-xl sm:text-2xl font-bold">HSE & Policy Framework</h3>
                                <p className="text-white/60 text-sm mt-1">Caades Energies Limited — Complete Policy Documentation</p>
                            </div>
                            <button
                                onClick={() => setShowPolicies(false)}
                                className="shrink-0 w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200 cursor-pointer"
                                aria-label="Close policies"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="px-6 sm:px-10 py-8 space-y-4">
                            {policies.map((policy, i) => {
                                const isExpanded = expandedPolicy === i;
                                return (
                                    <div
                                        key={i}
                                        className={`border rounded-xl transition-all duration-300 ${isExpanded
                                            ? 'border-primary/30 shadow-lg bg-primary/[0.02]'
                                            : 'border-gray-200 hover:border-primary/20 hover:shadow-md'
                                            }`}
                                    >
                                        {/* Policy Header — clickable */}
                                        <button
                                            onClick={() => setExpandedPolicy(isExpanded ? null : i)}
                                            className="w-full flex items-center gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left cursor-pointer"
                                        >
                                            <span className="text-2xl shrink-0">{policyIcons[policy.icon] || '📄'}</span>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-dark-bg font-bold text-sm sm:text-base leading-snug">{policy.title}</h4>
                                                <p className="text-dark-bg/50 text-xs sm:text-sm mt-0.5 truncate">{policy.summary}</p>
                                            </div>
                                            <svg
                                                className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                                                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>

                                        {/* Policy Content — expandable */}
                                        <div
                                            className={`overflow-hidden transition-all duration-400 ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                                                }`}
                                        >
                                            <div className="px-5 sm:px-6 pb-5 sm:pb-6 border-t border-gray-100 pt-4">
                                                <div className="text-dark-bg/70 text-sm leading-relaxed space-y-3 whitespace-pre-line">
                                                    {policy.content.split('\n\n').map((para, pIdx) => (
                                                        <p key={pIdx}>{para}</p>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Modal Footer */}
                        <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 sm:px-10 py-4 flex items-center justify-between">
                            <p className="text-dark-bg/40 text-xs sm:text-sm">
                                {policies.length} policies • Caades Energies HSE Framework
                            </p>
                            <button
                                onClick={() => setShowPolicies(false)}
                                className="inline-flex items-center gap-1.5 px-5 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-dark-green transition-colors duration-200 cursor-pointer"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default HSE;
