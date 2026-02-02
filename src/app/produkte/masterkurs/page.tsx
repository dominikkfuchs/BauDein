'use client';

import Link from 'next/link';
import { useState } from 'react';
import PaymentModal from '@/components/ui/PaymentModal';

export default function MasterkursPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const modules = [
        {
            number: '01',
            title: 'Einführung in Vibe Coding',
            duration: '45 Min',
            lessons: ['Was ist Vibe Coding?', 'Setup: Cursor & Claude einrichten', 'Dein erstes Prompt-to-Code Projekt']
        },
        {
            number: '02',
            title: 'Projekt-Setup & Architektur',
            duration: '1.5 Std',
            lessons: ['Next.js App erstellen mit KI', 'Ordnerstruktur & Best Practices', 'Tailwind CSS Integration']
        },
        {
            number: '03',
            title: 'UI Komponenten bauen',
            duration: '2 Std',
            lessons: ['Hero Section & Navigation', 'Film-Cards & Grid Layouts', 'Responsive Design mit KI']
        },
        {
            number: '04',
            title: 'Backend & Datenbank',
            duration: '2 Std',
            lessons: ['API Routes erstellen', 'Supabase Integration', 'User Authentication']
        },
        {
            number: '05',
            title: 'Netflix Features',
            duration: '2.5 Std',
            lessons: ['Video Player Integration', 'Watchlist & Favorites', 'Suchfunktion implementieren']
        },
        {
            number: '06',
            title: 'Deployment & Launch',
            duration: '1 Std',
            lessons: ['Vercel Deployment', 'Domain Setup', 'Performance Optimierung']
        },
    ];

    const bonuses = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            title: 'Alle AI-Prompts inklusive',
            description: 'Jeder Prompt aus dem Kurs — kopierfertig für deine Projekte.'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: 'Discord Community',
            description: 'Zugang zur privaten Community für Fragen und Austausch.'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            ),
            title: 'Lebenslange Updates',
            description: 'Alle zukünftigen Updates und neuen Module kostenlos.'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
            ),
            title: 'Zertifikat bei Abschluss',
            description: 'Offizielles BauDein Zertifikat nach Kursabschluss.'
        },
    ];

    return (
        <div className="min-h-screen bg-brand-void">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-neon/30 to-transparent"></div>
                    <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-brand-neon/20 to-cyan-500/10 blur-[120px]"></div>
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
                            <div className="flex items-center gap-3 mb-6">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-neon/10 border border-brand-neon/20">
                                    <svg className="w-4 h-4 text-brand-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-sm font-medium text-brand-neon">Video-Kurs</span>
                                </div>
                                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold uppercase">
                                    Bestseller
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                                Der App-Builder Masterkurs
                            </h1>

                            <p className="text-xl text-slate-400 leading-relaxed mb-8">
                                Schritt-für-Schritt: Wir bauen gemeinsam einen Netflix-Klon mit KI.
                                Von Null zur fertigen App in einem Wochenende.
                            </p>

                            {/* Price */}
                            <div className="flex items-baseline gap-4 mb-8">
                                <span className="text-xl text-slate-500 line-through">€99.99</span>
                                <span className="text-5xl font-bold text-white">€49.99</span>
                                <span className="text-slate-500">einmalig</span>
                                <span className="ml-2 px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full">
                                    50% Rabatt
                                </span>
                            </div>

                            {/* CTA */}
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-neon to-cyan-400 text-brand-dark font-bold text-lg rounded-xl transition-all hover:shadow-lg hover:shadow-brand-neon/25 hover:scale-[1.02]"
                            >
                                Jetzt kaufen
                            </button>

                            {/* Trust badges */}
                            <div className="flex flex-wrap gap-6 mt-8 text-sm text-slate-500">
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    8+ Stunden Video
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Lebenslanger Zugang
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
                            <div className="aspect-video rounded-3xl bg-gradient-to-br from-brand-neon via-cyan-400 to-brand-neonDark p-0.5 shadow-2xl shadow-brand-neon/20">
                                <div className="w-full h-full rounded-3xl bg-brand-dark flex flex-col items-center justify-center p-8">
                                    <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-6 group cursor-pointer hover:bg-white/20 transition-colors">
                                        <svg className="w-10 h-10 text-brand-neon ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                    <span className="text-xl font-bold text-white">Netflix-Klon bauen</span>
                                    <span className="text-slate-400 mt-2">8+ Stunden Videocontent</span>
                                </div>
                            </div>
                            {/* Floating badge */}
                            <div className="absolute -bottom-4 -left-4 bg-brand-surface border border-white/10 rounded-2xl px-6 py-4 backdrop-blur-sm">
                                <div className="text-3xl font-bold text-white">6</div>
                                <div className="text-slate-400 text-sm">Module</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Curriculum Section */}
            <section className="py-24 relative">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Kurs-Curriculum
                        </h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                            6 Module, 8+ Stunden Video-Content. Von der Idee zur fertigen App.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {modules.map((module, idx) => (
                            <div
                                key={idx}
                                className="p-6 rounded-2xl bg-brand-surface/50 border border-white/10 backdrop-blur-sm hover:border-brand-neon/30 transition-all duration-300"
                            >
                                <div className="flex flex-col md:flex-row md:items-center gap-4">
                                    <div className="flex items-center gap-4 flex-1">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-neon/20 to-cyan-500/10 flex items-center justify-center">
                                            <span className="text-brand-neon font-bold">{module.number}</span>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white">{module.title}</h3>
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {module.lessons.map((lesson, lessonIdx) => (
                                                    <span key={lessonIdx} className="text-xs text-slate-500 bg-white/5 px-2 py-1 rounded">
                                                        {lesson}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-slate-500 text-sm font-medium">
                                        {module.duration}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bonuses Section */}
            <section className="py-24 relative">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                <div className="absolute inset-0">
                    <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-brand-neon/10 to-cyan-500/5 blur-[100px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Plus: Bonus-Material
                        </h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                            Extras, die den Unterschied machen.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {bonuses.map((bonus, idx) => (
                            <div
                                key={idx}
                                className="p-6 rounded-2xl bg-brand-surface/30 border border-brand-neon/10 flex items-start gap-4"
                            >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-neon to-cyan-500 flex items-center justify-center flex-shrink-0 text-brand-dark">
                                    {bonus.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-white mb-1">{bonus.title}</h3>
                                    <p className="text-slate-400 text-sm">{bonus.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Bereit, deine erste App zu bauen?
                    </h2>
                    <p className="text-lg text-slate-400 mb-8">
                        Starte jetzt mit dem App-Builder Masterkurs und baue deinen eigenen Netflix-Klon.
                    </p>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-10 py-5 bg-gradient-to-r from-brand-neon to-cyan-400 text-brand-dark font-bold text-lg rounded-xl transition-all hover:shadow-lg hover:shadow-brand-neon/25 hover:scale-[1.02]"
                    >
                        Für €49.99 kaufen (50% Rabatt)
                    </button>
                    <p className="mt-4 text-slate-500 text-sm">
                        14 Tage Geld-zurück-Garantie • Lebenslanger Zugang
                    </p>
                </div>
            </section>

            {/* Payment Modal */}
            <PaymentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                courseTitle="Der App-Builder Masterkurs"
                price={49.99}
            />
        </div>
    );
}
