import clients from '../data/clients';

const Clients = () => {
    return (
        <section id="clients" className="w-full bg-white py-20 md:py-28 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
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
                </div>

                {/* Logo Grid — 5 columns × 3 rows */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-6">
                    {clients.map((client, i) => (
                        <div
                            key={i}
                            className="group bg-gray-50 rounded-2xl p-6 sm:p-8 flex items-center justify-center border border-gray-100 hover:border-primary/20 hover:shadow-[0_10px_40px_rgba(15,143,58,0.1)] transition-all duration-500 hover:-translate-y-1"
                        >
                            <img
                                src={client.logo}
                                alt={`${client.name} logo`}
                                className="w-full h-14 sm:h-16 lg:h-18 object-contain"
                            />
                        </div>
                    ))}
                </div>

                {/* Bottom tagline */}
                <div className="mt-14 text-center">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10">
                        <div className="w-2 h-2 rounded-full bg-light-green animate-pulse" />
                        <span className="text-dark-bg/60 text-sm font-medium">
                            {clients.length}+ trusted partners across the energy value chain
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;
