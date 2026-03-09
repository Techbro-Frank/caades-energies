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
        <section id="management" className="w-full bg-light-bg py-20 md:py-28 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
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
                </div>

                {/* Team Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
                    {team.map((person, i) => (
                        <div
                            key={i}
                            className="group bg-white rounded-2xl p-6 text-center shadow-[0_2px_15px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_40px_rgba(15,143,58,0.15)] transition-all duration-400 hover:-translate-y-2 border border-gray-100 hover:border-primary/30"
                        >
                            {/* Avatar */}
                            <div className="relative w-24 h-24 mx-auto mb-5">
                                <div
                                    className={`w-24 h-24 rounded-full bg-gradient-to-br ${gradients[i]} flex items-center justify-center shadow-lg group-hover:shadow-[0_0_25px_rgba(15,143,58,0.3)] transition-all duration-500 group-hover:scale-105`}
                                >
                                    <span className="text-white text-2xl font-bold">{person.initials}</span>
                                </div>
                                {/* Status dot */}
                                <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-light-green border-2 border-white" />
                            </div>

                            {/* Name */}
                            <h3 className="text-dark-bg font-bold text-base leading-snug mb-1 group-hover:text-primary transition-colors duration-300">
                                {person.name}
                            </h3>

                            {/* Role */}
                            <p className="text-primary text-xs font-semibold tracking-wide uppercase mb-3">
                                {person.role}
                            </p>

                            {/* Short Bio */}
                            <p className="text-dark-bg/50 text-xs leading-relaxed mb-5 line-clamp-3">
                                {person.shortBio}
                            </p>

                            {/* View Profile Button */}
                            <button
                                onClick={() => setSelectedMember(i)}
                                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary/10 text-primary text-xs font-semibold hover:bg-primary hover:text-white transition-all duration-300 group-hover:bg-primary group-hover:text-white cursor-pointer"
                            >
                                View Profile
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* ─── Profile Modal ─── */}
            {selectedMember !== null && member && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                    onClick={() => setSelectedMember(null)}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-[fadeInUp_0.3s_ease-out]" />

                    {/* Modal Content */}
                    <div
                        className="relative w-full max-w-2xl max-h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden animate-[fadeInUp_0.4s_ease-out]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header with gradient */}
                        <div className={`relative px-6 sm:px-8 pt-8 pb-16 bg-gradient-to-br ${gradients[selectedMember]}`}>
                            {/* Close button */}
                            <button
                                onClick={() => setSelectedMember(null)}
                                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-colors duration-200 cursor-pointer"
                                aria-label="Close profile"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Avatar overlapping header */}
                        <div className="relative -mt-12 px-6 sm:px-8">
                            <div
                                className={`w-24 h-24 rounded-full bg-gradient-to-br ${gradients[selectedMember]} flex items-center justify-center border-4 border-white shadow-xl`}
                            >
                                <span className="text-white text-3xl font-bold">{member.initials}</span>
                            </div>
                        </div>

                        {/* Body */}
                        <div className="px-6 sm:px-8 pt-4 pb-8 overflow-y-auto max-h-[calc(85vh-200px)]">
                            <h3 className="text-dark-bg text-xl sm:text-2xl font-bold mb-1">{member.name}</h3>
                            <p className="text-primary text-sm font-semibold tracking-wide uppercase mb-6">
                                {member.role}
                            </p>

                            {/* Divider */}
                            <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-light-green rounded-full mb-6" />

                            {/* Full bio */}
                            <div className="text-dark-bg/70 text-sm sm:text-base leading-relaxed space-y-4">
                                {member.fullBio.split('\n\n').map((paragraph, pIdx) => (
                                    <p key={pIdx}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Management;
