import { motion } from 'framer-motion';
import aboutImg from '../assets/images/hero-4.png';

const focusPoints = [
    // ... same content
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

const About = () => {
    return (
        <section id="about" className="w-full bg-light-bg py-10 md:py-14 lg:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left — Text Content */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        {/* Section label */}
                        <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                            <span className="block w-8 h-0.5 bg-primary" />
                            <span className="text-primary text-xs font-semibold tracking-[0.25em] uppercase">
                                Who We Are
                            </span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-bg leading-tight mb-6">
                            About{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-light-green">
                                Caades Energies
                            </span>
                        </motion.h2>

                        {/* Description */}
                        <motion.p variants={fadeInUp} className="text-dark-bg/70 text-base sm:text-lg leading-relaxed mb-8">
                            Caades Energies limited is a 100% indigenous Nigerian servicing company that provides onshore and offshore technical support services to the Oil & Gas industry in Nigeria.
                            We offer offshore engineering services, procurement and installation of a wide range of essential well drilling and completion equipment such as Wellhead, Tubular, Casings, production tubings, Smart completion instruments, Control valves and many others.
                            Through our strategic partnership with some of the leading and most innovative OEMs across Singapore, USA, China, Netherlands and Australia we provide our clients with the latest most efficient equipment for optimum performance.
                            We pride ourselves in providing outstanding EPCI support services equal to none in the Nigerian Petroleum Industry.
                            Caades Energies Limited is dedicated to powering the future with dependable fuel solutions, ensuring that Nigeria's industries and infrastructures thrive with a consistent energy supply. We are Nigeria's most reliable supplier of diesel and other refined petroleum products.
                        </motion.p>

                        {/* Focus Points */}
                        <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {focusPoints.map(({ icon, text }, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-3 p-3 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                                >
                                    <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                                        {icon}
                                    </div>
                                    <span className="text-sm font-medium text-dark-bg/80 leading-snug pt-2">
                                        {text}
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right — Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="relative group px-4 lg:px-0"
                    >
                        {/* Decorative border */}
                        <div className="absolute -inset-3 rounded-2xl border-2 border-primary/20 -z-10 transition-all duration-500 group-hover:border-primary/40 group-hover:-inset-4" />

                        <div className="overflow-hidden rounded-2xl shadow-2xl">
                            <motion.img
                                src={aboutImg}
                                alt="Energy infrastructure and pipeline construction"
                                className="w-full h-[400px] sm:h-[480px] lg:h-[540px] object-cover"
                                initial={{ scale: 1.1 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 1.5 }}
                            />
                        </div>

                        {/* Floating accent card */}
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="absolute -bottom-6 -left-0 lg:-left-6 bg-dark-bg text-white px-5 py-4 rounded-xl shadow-xl z-10"
                        >
                            <p className="text-2xl sm:text-3xl font-bold text-light-green">10+</p>
                            <p className="text-xs sm:text-sm text-white/70">Years of Excellence</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
