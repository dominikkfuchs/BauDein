'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled
                ? 'bg-brand-dark/95 backdrop-blur-xl border-b border-brand-primary/20 shadow-lg shadow-brand-primary/5'
                : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 sm:h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-bold tracking-tight text-white flex items-center gap-3 group">
                            {/* AI-themed logo */}
                            <div className="relative">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary to-purple-600 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div className="absolute -inset-1 bg-gradient-to-br from-brand-primary to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                            </div>
                            <span className="bg-gradient-to-r from-white via-white to-slate-300 bg-clip-text text-transparent">
                                BauDein
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/#products" className="text-slate-300 hover:text-brand-neon font-medium transition-colors duration-300 relative group">
                            Produkte
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-primary to-brand-neon group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link href="/#benefits" className="text-slate-300 hover:text-brand-neon font-medium transition-colors duration-300 relative group">
                            Vorteile
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-primary to-brand-neon group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link href="/#about" className="text-slate-300 hover:text-brand-neon font-medium transition-colors duration-300 relative group">
                            Über uns
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-primary to-brand-neon group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link
                            href="/#products"
                            className="relative px-6 py-2.5 bg-gradient-to-r from-brand-neon to-cyan-400 text-brand-dark font-bold rounded-full shadow-lg shadow-brand-neon/25 transition-all duration-300 hover:shadow-brand-neon/40 hover:scale-105 hover:-translate-y-0.5"
                        >
                            <span className="relative z-10">Jetzt loslegen</span>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-300 hover:text-white focus:outline-none p-2 rounded-lg hover:bg-white/10 transition-colors"
                            aria-label="Menü öffnen"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="bg-brand-dark/98 backdrop-blur-xl border-t border-brand-primary/20 px-4 pt-2 pb-6 space-y-1">
                    <Link
                        href="/#products"
                        className="block px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:text-brand-neon hover:bg-white/5 transition-all duration-300"
                        onClick={() => setIsOpen(false)}
                    >
                        Produkte
                    </Link>
                    <Link
                        href="/#benefits"
                        className="block px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:text-brand-neon hover:bg-white/5 transition-all duration-300"
                        onClick={() => setIsOpen(false)}
                    >
                        Vorteile
                    </Link>
                    <Link
                        href="/#about"
                        className="block px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:text-brand-neon hover:bg-white/5 transition-all duration-300"
                        onClick={() => setIsOpen(false)}
                    >
                        Über uns
                    </Link>
                    <div className="pt-4 px-1">
                        <Link
                            href="/#products"
                            className="block w-full text-center bg-gradient-to-r from-brand-neon to-cyan-400 text-brand-dark px-5 py-3.5 rounded-xl font-bold shadow-lg"
                            onClick={() => setIsOpen(false)}
                        >
                            Jetzt loslegen
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
