import { motion } from 'framer-motion';
import clients from '../data/clients';

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05
        }
    }
};

const Clients = () => {
    return (
        <section id="clients" className="w-full bg-white py-10 md:py-14 lg:py-16">
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
                            Trusted Partners
                        </span>
                        <span className="block w-8 h-0.5 bg-primary" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-bg leading-tight mb-4">
                        Our{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-light-green">
                            Clients
                        </span>
                    </h2>
                    <p className="text-dark-bg/60 text-base sm:text-lg leading-relaxed">
                        Partnering with leading international and indigenous energy companies across Nigeria&apos;s oil and gas sector.
                    </p>
                </motion.div>

                {/* Logo Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-6"
                >
                    {clients.map((client, i) => (
                        <motion.div
                            key={i}
                            variants={fadeInUp}
                            whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(15, 143, 58, 0.1)" }}
                            className="group bg-gray-50 rounded-2xl p-6 sm:p-8 flex items-center justify-center border border-gray-100 hover:border-primary/20 transition-all duration-500"
                        >
                            <img
                                src={client.logo}
                                alt={`${client.name} logo`}
                                className="w-full h-14 sm:h-16 lg:h-18 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom tagline */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-14 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10">
                        <div className="w-2 h-2 rounded-full bg-light-green animate-pulse" />
                        <span className="text-dark-bg/60 text-sm font-medium">
                            {clients.length}+ trusted partners across the energy value chain
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Clients;
