import { useState } from 'react';

const products = [
    { name: 'EPS Systems', desc: 'Electric Power Supply systems for reliable downhole operations and monitoring.' },
    { name: 'Control Valves', desc: 'High-precision flow control valves engineered for demanding oil & gas environments.' },
    { name: 'Tubulars', desc: 'Premium quality tubular goods for drilling, completion, and production operations.' },
    { name: 'Casings', desc: 'Heavy-duty well casings designed for structural integrity and pressure containment.' },
    { name: 'Production Tubings', desc: 'Corrosion-resistant production tubings for efficient hydrocarbon flow.' },
    { name: 'Smart Instruments', desc: 'Advanced downhole monitoring and control instruments with real-time data.' },
    { name: 'Subsurface Safety Valves', desc: 'Fail-safe subsurface valves for well control and environmental protection.' },
    { name: 'Flow Control Equipment', desc: 'Integrated flow regulation and management equipment for optimized production.' },
    { name: 'Packers', desc: 'Reliable zonal isolation packers for completion and workover applications.' },
    { name: 'Expandable Liner Hangers', desc: 'Next-gen expandable systems for superior wellbore sealing and support.' },
    { name: 'Swellable Technology', desc: 'Innovative swellable elastomer solutions for zonal isolation challenges.' },
    { name: 'Sand Control Systems', desc: 'Premium screens and filtration systems for sand management and prevention.' },
    { name: 'Downhole Gauges', desc: 'Permanent downhole pressure and temperature gauges for reservoir monitoring.' },
    { name: 'Gas Lift Mandrels', desc: 'Gas lift mandrels and valves for artificial lift and production optimization.' },
];

const Products = () => {
    const [hoveredIdx, setHoveredIdx] = useState(null);
    const [isPaused, setIsPaused] = useState(false);

    return (
        <section id="products" className="w-full bg-dark-bg py-20 md:py-28 lg:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="block w-8 h-0.5 bg-light-green" />
                        <span className="text-light-green text-xs font-semibold tracking-[0.25em] uppercase">
                            Equipment & Supply
                        </span>
                        <span className="block w-8 h-0.5 bg-light-green" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                        Product{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-light-green to-accent">
                            Offering
                        </span>
                    </h2>
                    <p className="text-white/50 text-base sm:text-lg leading-relaxed">
                        World-class drilling, completion, and production equipment sourced from leading global OEMs.
                    </p>
                </div>

                {/* Circular Orbit — Desktop */}
                <div
                    className="hidden lg:flex items-center justify-center"
                >
                    <div className="relative w-[700px] h-[700px]">
                        {/* Orbit rings */}
                        <div className="absolute inset-8 rounded-full border border-white/[0.12]" />
                        <div className="absolute inset-20 rounded-full border border-white/[0.12]" />
                        <div className="absolute inset-[140px] rounded-full border border-dashed border-light-green/25" />

                        {/* Pulsing decorative dots on orbit */}
                        {[0, 90, 180, 270].map((deg) => (
                            <div
                                key={deg}
                                className="absolute w-1.5 h-1.5 rounded-full bg-light-green/30"
                                style={{
                                    top: `${50 + 46 * Math.sin((deg * Math.PI) / 180)}%`,
                                    left: `${50 + 46 * Math.cos((deg * Math.PI) / 180)}%`,
                                    animation: `pulse 2s ease-in-out ${deg / 360}s infinite`,
                                }}
                            />
                        ))}

                        {/* Central Hub */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-44 h-44 rounded-full bg-gradient-to-br from-primary to-light-green flex items-center justify-center shadow-[0_0_60px_rgba(57,181,74,0.3)] z-20">
                                {/* Inner glow ring */}
                                <div className="absolute inset-2 rounded-full border border-white/20" />
                                <div className="text-center">
                                    <p className="text-white font-bold text-xl leading-tight">Product</p>
                                    <p className="text-white font-bold text-xl leading-tight">Offering</p>
                                </div>
                                {/* Spinning outer ring */}
                                <div
                                    className="absolute -inset-3 rounded-full border-2 border-transparent border-t-light-green/40 border-r-light-green/20"
                                    style={{ animation: 'spin 6s linear infinite' }}
                                />
                            </div>
                        </div>

                        {/* Orbiting Products */}
                        <div
                            className="absolute inset-0"
                            style={{
                                animation: isPaused ? 'none' : 'spin 40s linear infinite',
                            }}
                        >
                            {products.map((product, i) => {
                                const angle = (i * 360) / products.length - 90;
                                const rad = (angle * Math.PI) / 180;
                                const radius = 44;
                                const x = 50 + radius * Math.cos(rad);
                                const y = 50 + radius * Math.sin(rad);
                                const isHovered = hoveredIdx === i;

                                return (
                                    <div
                                        key={i}
                                        className="absolute -translate-x-1/2 -translate-y-1/2"
                                        style={{
                                            left: `${x}%`,
                                            top: `${y}%`,
                                            zIndex: isHovered ? 50 : 10,
                                        }}
                                        onMouseEnter={() => {
                                            setHoveredIdx(i);
                                            setIsPaused(true);
                                        }}
                                        onMouseLeave={() => {
                                            setHoveredIdx(null);
                                            setIsPaused(false);
                                        }}
                                    >
                                        {/* Counter-rotate so text stays upright */}
                                        <div
                                            style={{
                                                animation: isPaused ? 'none' : 'counter-spin 40s linear infinite',
                                            }}
                                        >
                                            <div
                                                className={`relative cursor-pointer transition-all duration-500 ${isHovered ? 'scale-125' : 'scale-100'
                                                    }`}
                                            >
                                                {/* Product bubble */}
                                                <div
                                                    className={`w-20 h-20 rounded-full flex items-center justify-center text-center transition-all duration-500 ${isHovered
                                                        ? 'bg-gradient-to-br from-light-green to-primary shadow-[0_0_35px_rgba(57,181,74,0.5)]'
                                                        : 'bg-gradient-to-br from-dark-green/80 to-primary/80 shadow-lg'
                                                        }`}
                                                >
                                                    <span className="text-white text-[10px] font-semibold leading-tight px-1.5">
                                                        {product.name}
                                                    </span>
                                                </div>

                                                {/* Hover tooltip */}
                                                <div
                                                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-dark-bg/95 backdrop-blur-md border border-light-green/20 rounded-xl p-4 shadow-2xl transition-all duration-300 ${isHovered
                                                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                                                        : 'opacity-0 translate-y-2 pointer-events-none'
                                                        }`}
                                                >
                                                    <p className="text-light-green text-xs font-bold mb-1">{product.name}</p>
                                                    <p className="text-white/60 text-[11px] leading-relaxed">{product.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Mobile / Tablet Grid Fallback */}
                <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {products.map((product, i) => (
                        <div
                            key={i}
                            className="group relative bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:bg-primary/20 hover:border-light-green/30 hover:shadow-[0_0_25px_rgba(57,181,74,0.15)] transition-all duration-400 hover:-translate-y-1"
                        >
                            {/* Icon dot */}
                            <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-gradient-to-br from-dark-green to-primary flex items-center justify-center group-hover:from-light-green group-hover:to-primary transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(57,181,74,0.4)]">
                                <div className="w-2 h-2 bg-white rounded-full" />
                            </div>
                            <h3 className="text-white text-xs sm:text-sm font-semibold leading-snug mb-2">
                                {product.name}
                            </h3>
                            <p className="text-white/40 text-[10px] sm:text-xs leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-400 overflow-hidden">
                                {product.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
