import { useState, useEffect, useCallback } from 'react';

import hero1 from '../assets/images/hero-1.png';
import hero2 from '../assets/images/hero-2.png';
import hero3 from '../assets/images/hero-3.png';
import hero4 from '../assets/images/hero-4.png';
import hero5 from '../assets/images/hero-5.png';
import hero6 from '../assets/images/hero-6.png';

const slides = [hero1, hero2, hero3, hero4, hero5, hero6];

const HeroSlider = () => {
    const [current, setCurrent] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const goToSlide = useCallback(
        (index) => {
            if (isAnimating) return;
            setIsAnimating(true);
            setCurrent(index);
            setTimeout(() => setIsAnimating(false), 1000);
        },
        [isAnimating]
    );

    // Auto-slide every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            goToSlide((current + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [current, goToSlide]);

    const handleSmooth = (e, href) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className="relative w-full h-[calc(100vh+4.5rem)] lg:h-[calc(100vh+5rem)] -mt-18 lg:-mt-20 overflow-hidden">
            {/* Background Images */}
            {slides.map((src, i) => (
                <div
                    key={i}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                >
                    <img
                        src={src}
                        alt={`Energy industry slide ${i + 1}`}
                        className="w-full h-full object-cover scale-105"
                    />
                </div>
            ))}

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

            {/* Content */}
            <div className="relative z-30 flex items-center justify-center h-full px-4">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Accent line */}
                    <div className="flex items-center justify-center gap-3 mb-6 animate-[fadeInDown_1s_ease-out]">
                        <span className="block w-10 h-px bg-light-green" />
                        <span className="text-light-green text-xs font-semibold tracking-[0.3em] uppercase">
                            Caades Energies
                        </span>
                        <span className="block w-10 h-px bg-light-green" />
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-[fadeInUp_1s_ease-out_0.2s_both]">
                        Powering Nigeria&apos;s{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-light-green to-accent">
                            Energy Future
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-[fadeInUp_1s_ease-out_0.4s_both]">
                        Integrated Gas Solutions, Infrastructure and Energy Services
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-[fadeInUp_1s_ease-out_0.6s_both]">
                        <a
                            href="#services"
                            onClick={(e) => handleSmooth(e, '#services')}
                            className="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(15,143,58,0.4)]"
                        >
                            <span className="relative z-10">Explore Services</span>
                            <svg
                                className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                            {/* Hover fill */}
                            <span className="absolute inset-0 bg-dark-green scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                        </a>

                        <a
                            href="#contact"
                            onClick={(e) => handleSmooth(e, '#contact')}
                            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-lg transition-all duration-300 hover:border-light-green hover:text-light-green hover:scale-105 backdrop-blur-sm"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goToSlide(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`rounded-full transition-all duration-500 ${i === current
                            ? 'w-8 h-2 bg-light-green'
                            : 'w-2 h-2 bg-white/40 hover:bg-white/60'
                            }`}
                    />
                ))}
            </div>

            {/* Scroll-down indicator */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-white/60 rounded-full" />
                </div>
            </div>
        </section>
    );
};

export default HeroSlider;
