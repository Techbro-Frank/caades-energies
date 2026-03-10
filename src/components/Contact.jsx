import { motion } from 'framer-motion';
import { useState } from 'react';

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

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const errs = {};
        if (!form.name.trim()) errs.name = 'This field is required.';
        if (!form.email.trim()) errs.email = 'This field is required.';
        else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Please enter a valid email.';
        if (!form.phone.trim()) errs.phone = 'This field is required.';
        if (!form.message.trim()) errs.message = 'This field is required.';
        return errs;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        setErrors(errs);
        if (Object.keys(errs).length === 0) {
            setSubmitted(true);
            setForm({ name: '', email: '', phone: '', message: '' });
            setTimeout(() => setSubmitted(false), 4000);
        }
    };

    const handleChange = (field) => (e) => {
        setForm((prev) => ({ ...prev, [field]: e.target.value }));
        if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

    const inputBase =
        'w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder-white/30 outline-none transition-all duration-300 focus:border-primary/60 focus:bg-white/[0.08] focus:ring-1 focus:ring-primary/30';

    return (
        <section id="contact" className="w-full bg-dark-bg relative overflow-hidden">
            {/* Subtle grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />
            {/* Gradient blobs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />

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
                            <span className="block w-8 h-0.5 bg-primary/60" />
                            <span className="text-primary text-xs font-semibold tracking-[0.25em] uppercase">
                                Get In Touch
                            </span>
                            <span className="block w-8 h-0.5 bg-primary/60" />
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                            We Would Love To{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-light-green">
                                Hear From You
                            </span>
                        </h2>
                        <p className="text-white/50 text-base sm:text-lg leading-relaxed">
                            Have a question or want to work with us? Reach out and let&apos;s start a conversation.
                        </p>
                    </motion.div>

                    {/* Two-Column Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
                        {/* ── Left: Contact Info ── */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={staggerContainer}
                            className="lg:col-span-2 space-y-8"
                        >
                            <h3 className="text-white text-xl font-bold mb-6">Contact Information</h3>

                            {/* Info Items */}
                            {[
                                {
                                    icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></>,
                                    label: 'Address',
                                    content: '18A Niyi Okunubi Street, Lekki Phase 1, Lagos, Nigeria'
                                },
                                {
                                    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />,
                                    label: 'Phone',
                                    content: '+234 818 855 5552'
                                },
                                {
                                    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />,
                                    label: 'Email',
                                    content: 'info@caadesenergies.com'
                                }
                            ].map((item, i) => (
                                <motion.div key={i} variants={fadeInUp} className="group flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            {item.icon}
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white/40 text-[11px] font-bold tracking-wider uppercase mb-1">{item.label}</p>
                                        <p className="text-white/80 text-sm leading-relaxed">{item.content}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* ── Right: Contact Form ── */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={fadeInUp}
                            className="lg:col-span-3"
                        >
                            <div className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-7 sm:p-10">
                                <h3 className="text-white text-xl font-bold mb-2">Send Us a Message</h3>
                                <p className="text-white/40 text-sm mb-8">Fill in the form below and we&apos;ll get back to you shortly.</p>

                                {submitted && (
                                    <div className="mb-6 p-4 rounded-xl bg-primary/15 border border-primary/25 text-primary text-sm font-medium flex items-center gap-2">
                                        <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Thank you! Your message has been sent successfully.
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                                    <div>
                                        <label className="block text-white/60 text-xs font-semibold tracking-wider uppercase mb-2">
                                            Name <span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Your full name"
                                            value={form.name}
                                            onChange={handleChange('name')}
                                            className={`${inputBase} ${errors.name ? 'border-red-400/50 focus:border-red-400' : ''}`}
                                        />
                                        {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-white/60 text-xs font-semibold tracking-wider uppercase mb-2">
                                            Email <span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="your@email.com"
                                            value={form.email}
                                            onChange={handleChange('email')}
                                            className={`${inputBase} ${errors.email ? 'border-red-400/50 focus:border-red-400' : ''}`}
                                        />
                                        {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-white/60 text-xs font-semibold tracking-wider uppercase mb-2">
                                            Contact Number <span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            placeholder="+234 800 000 0000"
                                            value={form.phone}
                                            onChange={handleChange('phone')}
                                            className={`${inputBase} ${errors.phone ? 'border-red-400/50 focus:border-red-400' : ''}`}
                                        />
                                        {errors.phone && <p className="text-red-400 text-xs mt-1.5">{errors.phone}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-white/60 text-xs font-semibold tracking-wider uppercase mb-2">
                                            Your Message <span className="text-red-400">*</span>
                                        </label>
                                        <textarea
                                            rows={5}
                                            placeholder="Tell us about your project or inquiry..."
                                            value={form.message}
                                            onChange={handleChange('message')}
                                            className={`${inputBase} resize-none ${errors.message ? 'border-red-400/50 focus:border-red-400' : ''}`}
                                        />
                                        {errors.message && <p className="text-red-400 text-xs mt-1.5">{errors.message}</p>}
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(15, 143, 58, 0.4)" }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-primary to-dark-green text-white font-semibold rounded-xl transition-all duration-300 cursor-pointer"
                                    >
                                        Send Request
                                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                        </svg>
                                    </motion.button>
                                </form>
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom Quick-info strip */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mt-16 pt-10 border-t border-white/[0.06]"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                            <div>
                                <p className="text-white/30 text-[11px] font-bold tracking-wider uppercase mb-2">Call Us</p>
                                <a href="tel:+2348188555552" className="block text-white/70 text-sm hover:text-primary transition-colors">+234 818 855 5552</a>
                                <a href="tel:+2348188555550" className="block text-white/70 text-sm hover:text-primary transition-colors">+234 818 855 5550</a>
                            </div>
                            <div>
                                <p className="text-white/30 text-[11px] font-bold tracking-wider uppercase mb-2">Email Us</p>
                                <a href="mailto:info@caadesenergies.com" className="text-white/70 text-sm hover:text-primary transition-colors">info@caadesenergies.com</a>
                            </div>
                            <div>
                                <p className="text-white/30 text-[11px] font-bold tracking-wider uppercase mb-2">Opening Hours</p>
                                <p className="text-white/70 text-sm">Mon – Fri: 9am – 6pm</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
