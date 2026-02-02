'use client';

import Link from 'next/link';
import { useState } from 'react';
import PaymentModal from '@/components/ui/PaymentModal';

export default function StarterKitPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const features = [
        {
            title: '50+ optimierte Prompts',
            description: 'Die besten Prompts für Cursor, ChatGPT und Claude — getestet und perfektioniert für maximale Produktivität.'
        },
        {
            title: 'Prompt-Vorlagen für jede Situation',
            description: 'Von API-Integrationen bis Debugging — fertige Templates, die du sofort einsetzen kannst.'
        },
        {
            title: 'PDF-Guide: KI-Coding Grundlagen',
            description: 'Verstehe die Prinzipien hinter Vibe Coding und lerne, wie du KI effektiv für deine Projekte nutzt.'
        },
        {
            title: 'Sofortiger Download',
            description: 'Direkt nach dem Kauf erhältst du Zugang zu allen Materialien — ohne Wartezeit.'
        },
    ];

    return (
        <div className="min-h-screen bg-brand-void">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent"></div>
                    <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-brand-primary/20 to-purple-600/10 blur-[120px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Breadcrumb */}
                    <Link
                        href="/#products"
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-brand-neon transition-colors mb-8 group"
                    >
                        <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Zurück zu Produkten
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Content */}
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-6">
                                <svg className="w-4 h-4 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <span className="text-sm font-medium text-brand-primaryLight">PDF + Prompts</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                                Das KI-Starter-Kit
                            </h1>

                            <p className="text-xl text-slate-400 leading-relaxed mb-8">
                                Die besten Prompts für Cursor & ChatGPT, um sofort Code zu generieren.
                                Dein Shortcut zu produktivem KI-Coding.
                            </p>

                            {/* Price */}
                            <div className="flex items-baseline gap-4 mb-8">
                                <span className="text-5xl font-bold text-white">€19.99</span>
                                <span className="text-slate-500">einmalig</span>
                            </div>

                            {/* CTA */}
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-primary to-purple-600 text-white font-bold text-lg rounded-xl transition-all hover:shadow-lg hover:shadow-brand-primary/25 hover:scale-[1.02]"
                            >
                                Jetzt kaufen
                            </button>

                            {/* Trust badges */}
                            <div className="flex flex-wrap gap-6 mt-8 text-sm text-slate-500">
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Sofort-Download
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    14 Tage Geld-zurück
                                </div>
                            </div>
                        </div>

                        {/* Right: Visual */}
                        <div className="relative">
                            <div className="aspect-square rounded-3xl bg-gradient-to-br from-brand-primary via-purple-500 to-brand-primaryDark p-0.5">
                                <div className="w-full h-full rounded-3xl bg-brand-dark flex flex-col items-center justify-center p-12">
                                    <svg className="w-32 h-32 text-brand-primary mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <span className="text-2xl font-bold text-white">KI-Starter-Kit</span>
                                    <span className="text-slate-400 mt-2">50+ Premium Prompts</span>
                                </div>
                            </div>
                            {/* Floating badge */}
                            <div className="absolute -bottom-4 -right-4 bg-brand-surface border border-white/10 rounded-2xl px-6 py-4 backdrop-blur-sm">
                                <div className="text-3xl font-bold text-white">50+</div>
                                <div className="text-slate-400 text-sm">Prompts</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 relative">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Was du bekommst
                        </h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                            Alles, was du brauchst, um mit KI-Coding durchzustarten.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {features.map((feature, idx) => (
                            <div
                                key={idx}
                                className="p-8 rounded-3xl bg-brand-surface/50 border border-white/10 backdrop-blur-sm hover:border-brand-primary/30 transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-primary to-purple-600 flex items-center justify-center mb-6">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                <div className="absolute inset-0">
                    <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-brand-primary/10 to-purple-600/5 blur-[100px]"></div>
                </div>

                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Bereit für produktiveres Coding?
                    </h2>
                    <p className="text-lg text-slate-400 mb-8">
                        Hol dir jetzt das KI-Starter-Kit und starte sofort mit den besten Prompts für Vibe Coding.
                    </p>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-10 py-5 bg-gradient-to-r from-brand-primary to-purple-600 text-white font-bold text-lg rounded-xl transition-all hover:shadow-lg hover:shadow-brand-primary/25 hover:scale-[1.02]"
                    >
                        Für €19.99 kaufen
                    </button>
                </div>
            </section>

            {/* Payment Modal */}
            <PaymentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                courseTitle="Das KI-Starter-Kit"
                price={19.99}
            />
        </div>
    );
}
