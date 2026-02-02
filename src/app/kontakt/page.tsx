'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Kontakt() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen py-24 lg:py-32 bg-brand-void relative">
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent"></div>
                <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-brand-primary/10 to-purple-600/5 blur-[120px]"></div>
                <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-brand-neon/10 to-cyan-500/5 blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-brand-neon transition-colors mb-8 group"
                    >
                        <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Zurück zur Startseite
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Schreib uns eine Nachricht</h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Du hast Fragen zu einem Produkt oder brauchst Unterstützung? Unser Team ist für dich da.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Contact Info Sidebar */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Email Card */}
                        <div className="p-6 rounded-2xl bg-brand-surface/50 border border-white/10 backdrop-blur-sm flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-neon/20 to-cyan-500/10 flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-brand-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-bold text-white">E-Mail</h3>
                                <p className="text-slate-500 text-sm mb-1">Für allgemeine Anfragen</p>
                                <a href="mailto:info@baudein.de" className="text-brand-neon font-medium hover:underline">info@baudein.de</a>
                            </div>
                        </div>

                        {/* Support Card */}
                        <div className="p-6 rounded-2xl bg-brand-surface/50 border border-white/10 backdrop-blur-sm flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-primary/20 to-purple-500/10 flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-bold text-white">Support</h3>
                                <p className="text-slate-500 text-sm mb-1">Technische Hilfe</p>
                                <a href="mailto:support@baudein.de" className="text-brand-neon font-medium hover:underline">support@baudein.de</a>
                            </div>
                        </div>

                        {/* Discord Card */}
                        <div className="p-6 rounded-2xl bg-brand-surface/50 border border-white/10 backdrop-blur-sm flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/10 flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-bold text-white">Discord</h3>
                                <p className="text-slate-500 text-sm mb-1">Community & schnelle Hilfe</p>
                                <span className="text-slate-400 text-sm">Bald verfügbar</span>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="rounded-2xl bg-brand-surface/50 border border-white/10 backdrop-blur-sm p-8">
                            {submitted ? (
                                <div className="text-center py-12">
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-neon to-cyan-500 flex items-center justify-center mx-auto mb-6">
                                        <svg className="w-10 h-10 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Nachricht gesendet!</h3>
                                    <p className="text-slate-400 mb-6">Wir haben deine Nachricht erhalten und melden uns in Kürze bei dir.</p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="text-brand-neon font-semibold hover:underline"
                                    >
                                        Neue Nachricht schreiben
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Dein Name</label>
                                            <input
                                                required
                                                type="text"
                                                id="name"
                                                className="w-full rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 p-4 focus:border-brand-neon focus:ring-1 focus:ring-brand-neon/50 transition-all"
                                                placeholder="Max Mustermann"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Deine E-Mail</label>
                                            <input
                                                required
                                                type="email"
                                                id="email"
                                                className="w-full rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 p-4 focus:border-brand-neon focus:ring-1 focus:ring-brand-neon/50 transition-all"
                                                placeholder="max@beispiel.de"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">Betreff</label>
                                        <select
                                            id="subject"
                                            className="w-full rounded-xl bg-white/5 border border-white/10 text-white p-4 focus:border-brand-neon focus:ring-1 focus:ring-brand-neon/50 transition-all"
                                        >
                                            <option className="bg-brand-dark">Allgemeine Anfrage</option>
                                            <option className="bg-brand-dark">Support / Technische Hilfe</option>
                                            <option className="bg-brand-dark">Rechnung & Zahlung</option>
                                            <option className="bg-brand-dark">Partnerschaft</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Nachricht</label>
                                        <textarea
                                            required
                                            id="message"
                                            rows={6}
                                            className="w-full rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 p-4 focus:border-brand-neon focus:ring-1 focus:ring-brand-neon/50 transition-all resize-none"
                                            placeholder="Wie können wir dir helfen?"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-brand-neon to-cyan-400 text-brand-dark px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-lg hover:shadow-brand-neon/25 hover:scale-[1.02]"
                                    >
                                        Nachricht absenden
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
