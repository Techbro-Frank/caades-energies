import { motion } from 'framer-motion';
import projects from '../data/projects';

/* ── Category icon map ── */
const categoryIcons = {
    height: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5-6L16.5 15m0 0L12 10.5M16.5 15V1.5" />
        </svg>
    ),
    facility: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
    ),
    rescue: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m0 0a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m0 0a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.027 9.027 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288m0 0l4.138 3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976l-4.138 3.448m0 0a9.027 9.027 0 001.306 1.652c.51.51 1.064.944 1.652 1.306m0 0l3.448-4.138" />
        </svg>
    ),
    offshore: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 003 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
    ),
    gas: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 003.75-3.75c0-2.485-3.75-5.25-3.75-5.25s-3.75 2.765-3.75 5.25A3.75 3.75 0 0012 18z" />
        </svg>
    ),
};

/* ── Category color accents ── */
const categoryColors = {
    height: { bg: 'bg-amber-500/10', text: 'text-amber-600', border: 'border-amber-500/20', tag: 'bg-amber-500/10 text-amber-700' },
    facility: { bg: 'bg-red-500/10', text: 'text-red-600', border: 'border-red-500/20', tag: 'bg-red-500/10 text-red-700' },
    rescue: { bg: 'bg-blue-500/10', text: 'text-blue-600', border: 'border-blue-500/20', tag: 'bg-blue-500/10 text-blue-700' },
    offshore: { bg: 'bg-cyan-500/10', text: 'text-cyan-600', border: 'border-cyan-500/20', tag: 'bg-cyan-500/10 text-cyan-700' },
    gas: { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary/20', tag: 'bg-primary/10 text-dark-green' },
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

const Projects = () => {
    return (
        <section id="projects" className="w-full bg-light-bg py-10 md:py-14 lg:py-16 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                            Our Portfolio
                        </span>
                        <span className="block w-8 h-0.5 bg-primary" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-bg leading-tight mb-4">
                        Key{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-light-green">
                            Projects
                        </span>
                    </h2>
                    <p className="text-dark-bg/60 text-base sm:text-lg leading-relaxed">
                        A selection of our successful engagements and technical support projects across the Nigerian energy landscape.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, i) => {
                        const colors = categoryColors[project.icon] || categoryColors.gas;
                        return (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(15, 143, 58, 0.1)" }}
                                className="group bg-white rounded-2xl overflow-hidden shadow-[0_2px_15px_rgba(0,0,0,0.06)] border border-gray-100 hover:border-primary/30 transition-all duration-400"
                            >
                                <div className={`h-2 bg-gradient-to-r ${project.icon === 'height' ? 'from-amber-400 to-amber-500' : 'from-primary to-light-green'}`} />
                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-6">
                                        <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full ${colors.tag}`}>
                                            {project.category}
                                        </span>
                                        <div className={`w-10 h-10 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
                                            {categoryIcons[project.icon]}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-dark-bg mb-4 group-hover:text-primary transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <div className="space-y-4 mb-6">
                                        <div>
                                            <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">Client</p>
                                            <p className="text-dark-bg/80 text-sm font-semibold">{project.client}</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">Scope</p>
                                            <p className="text-dark-bg/60 text-sm leading-relaxed line-clamp-3">{project.scope}</p>
                                        </div>
                                    </div>
                                    <div className="pt-4 border-t border-gray-50 flex items-center gap-2 text-primary text-xs font-bold group-hover:gap-3 transition-all duration-300">
                                        Project Details
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
