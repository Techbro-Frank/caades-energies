import aboutImg from '../assets/images/hero-4.png';

const focusPoints = [
    {
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        text: 'Reliable energy solutions',
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        text: 'Strategic partnerships with global OEMs',
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        text: 'Commitment to safety and efficiency',
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
        text: 'Dependable supply infrastructure',
    },
];

const About = () => {
    return (
        <section id="about" className="w-full bg-light-bg py-20 md:py-28 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left — Text Content */}
                    <div>
                        {/* Section label */}
                        <div className="flex items-center gap-3 mb-4">
                            <span className="block w-8 h-0.5 bg-primary" />
                            <span className="text-primary text-xs font-semibold tracking-[0.25em] uppercase">
                                Who We Are
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-bg leading-tight mb-6">
                            About{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-light-green">
                                Caades Energies
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="text-dark-bg/70 text-base sm:text-lg leading-relaxed mb-8">
                            Caades Energies limited is a 100% indigenous Nigerian servicing company that provides onshore and offshore technical support services to the Oil & Gas industry in Nigeria.
                            We offer offshore engineering services, procurement and installation of a wide range of essential well drilling and completion equipment such as Wellhead, Tubular, Casings, production tubings, Smart completion instruments, Control valves and many others.
                            Through our strategic partnership with some of the leading and most innovative OEMs across Singapore, USA, China, Netherlands and Australia we provide our clients with the latest most efficient equipment for optimum performance.
                            We pride ourselves in providing outstanding EPCI support services equal to none in the Nigerian Petroleum Industry.
                            Caades Energies Limited is dedicated to powering the future with dependable fuel solutions, ensuring that Nigeria's industries and infrastructures thrive with a consistent energy supply. We are Nigeria's most reliable supplier of diesel and other refined petroleum products.

                        </p>

                        {/* Focus Points */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                        </div>
                    </div>

                    {/* Right — Image */}
                    <div className="relative group">
                        {/* Decorative border */}
                        <div className="absolute -inset-3 rounded-2xl border-2 border-primary/20 -z-10 transition-all duration-500 group-hover:border-primary/40 group-hover:-inset-4" />

                        <div className="overflow-hidden rounded-2xl shadow-2xl">
                            <img
                                src={aboutImg}
                                alt="Energy infrastructure and pipeline construction"
                                className="w-full h-[400px] sm:h-[480px] lg:h-[540px] object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        {/* Floating accent card */}
                        <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-dark-bg text-white px-5 py-4 rounded-xl shadow-xl z-10">
                            <p className="text-2xl sm:text-3xl font-bold text-light-green">10+</p>
                            <p className="text-xs sm:text-sm text-white/70">Years of Excellence</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
