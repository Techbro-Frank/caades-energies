import { useState, useEffect } from 'react';

const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Products', href: '#products' },
    { label: 'Management', href: '#management' },
    { label: 'HSE & Policy', href: '#hse' },
    { label: 'Clients', href: '#clients' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('#hero');

    // Track scroll position for background transition
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Track active section via IntersectionObserver
    useEffect(() => {
        const sectionIds = navLinks.map((l) => l.href.replace('#', ''));
        const observers = [];

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(`#${id}`);
                    }
                },
                { rootMargin: '-40% 0px -55% 0px' }
            );

            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    // Close mobile menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setMobileOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        setMobileOpen(false);
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${scrolled || mobileOpen
                ? 'bg-dark-bg/95 backdrop-blur-md shadow-lg shadow-black/20'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-18 lg:h-20">
                    {/* Logo */}
                    <a
                        href="#hero"
                        onClick={(e) => handleLinkClick(e, '#hero')}
                        className="flex items-center gap-2 group shrink-0"
                    >
                        <img
                            src="/caades-logo.png"
                            alt="Caades Energies Logo"
                            className="h-12 md:h-16 w-auto transition-transform duration-300 group-hover:scale-105"
                        />
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map(({ label, href }) => (
                            <a
                                key={href}
                                href={href}
                                onClick={(e) => handleLinkClick(e, href)}
                                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 rounded-md group ${activeSection === href
                                    ? 'text-light-green'
                                    : 'text-white/80 hover:text-light-green'
                                    }`}
                            >
                                {label}
                                {/* Underline indicator */}
                                <span
                                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-light-green rounded-full transition-all duration-300 ${activeSection === href
                                        ? 'w-5'
                                        : 'w-0 group-hover:w-5'
                                        }`}
                                />
                            </a>
                        ))}
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button
                        onClick={() => setMobileOpen((prev) => !prev)}
                        className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-white focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`block w-6 h-0.5 bg-current rounded-full transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''
                                }`}
                        />
                        <span
                            className={`block w-6 h-0.5 bg-current rounded-full transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-x-0' : ''
                                }`}
                        />
                        <span
                            className={`block w-6 h-0.5 bg-current rounded-full transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''
                                }`}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-4 pb-6 pt-2 space-y-1 border-t border-white/10">
                    {navLinks.map(({ label, href }) => (
                        <a
                            key={href}
                            href={href}
                            onClick={(e) => handleLinkClick(e, href)}
                            className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${activeSection === href
                                ? 'text-light-green bg-white/5'
                                : 'text-white/70 hover:text-light-green hover:bg-white/5'
                                }`}
                        >
                            {label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
