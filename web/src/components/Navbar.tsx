'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 sm:h-20">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-bold tracking-tight text-brand-navy flex items-center gap-2">
                            <svg className="w-8 h-8 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                            AhaKurs
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/#courses" className="text-slate-600 hover:text-brand-teal font-medium transition-colors">Kurse</Link>
                        <Link href="/#features" className="text-slate-600 hover:text-brand-teal font-medium transition-colors">So funktioniert's</Link>
                        <Link href="/#about" className="text-slate-600 hover:text-brand-teal font-medium transition-colors">Über uns</Link>
                        <Link href="/#courses" className="bg-brand-navy hover:bg-brand-dark text-white px-5 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5">
                            Jetzt starten
                        </Link>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-brand-navy focus:outline-none p-2" aria-label="Menü öffnen">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        <Link href="/#courses" className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-brand-teal hover:bg-slate-50 transition-colors" onClick={() => setIsOpen(false)}>Kurse</Link>
                        <Link href="/#features" className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-brand-teal hover:bg-slate-50 transition-colors" onClick={() => setIsOpen(false)}>So funktioniert's</Link>
                        <Link href="/#about" className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-brand-teal hover:bg-slate-50 transition-colors" onClick={() => setIsOpen(false)}>Über uns</Link>
                        <div className="pt-4 px-3">
                            <Link href="/#courses" className="block w-full text-center bg-brand-navy text-white px-5 py-3 rounded-xl font-semibold shadow-md" onClick={() => setIsOpen(false)}>
                                Jetzt starten
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
