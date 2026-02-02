import Link from 'next/link';

export default function Karriere() {
    return (
        <div className="bg-brand-void min-h-screen">
            {/* Hero */}
            <div className="relative py-32 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent"></div>
                    <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-brand-primary/15 to-purple-600/5 blur-[120px]"></div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-brand-neon transition-colors mb-8 group"
                    >
                        <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Zurück zur Startseite
                    </Link>

                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-neon/10 border border-brand-neon/20 mb-6">
                            <span className="text-sm font-medium text-brand-neon">Wir wachsen</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Gestalte die Zukunft des{' '}
                            <span className="bg-gradient-to-r from-brand-neon to-cyan-400 bg-clip-text text-transparent">
                                KI-Codings
                            </span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                            Wir bauen die beste Plattform für Vibe Coding in Deutschland.
                            Schließ dich unserer Mission an.
                        </p>
                    </div>
                </div>
            </div>

            {/* Benefits */}
            <div className="py-20 relative">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Warum BauDein?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-3xl bg-brand-surface/50 border border-white/10 backdrop-blur-sm">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-neon/20 to-cyan-500/10 flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-brand-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Remote First</h3>
                            <p className="text-slate-400">Arbeite von wo du willst. Wir vertrauen auf Ergebnisse, nicht auf Anwesenheit.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-brand-surface/50 border border-white/10 backdrop-blur-sm">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-primary/20 to-purple-500/10 flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Bildungsbudget</h3>
                            <p className="text-slate-400">2.000€ jährlich für deine persönliche Weiterbildung. Bücher, Konferenzen, Kurse.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-brand-surface/50 border border-white/10 backdrop-blur-sm">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/10 flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Echter Impact</h3>
                            <p className="text-slate-400">Hilf Menschen, ihre Ideen in echte Produkte zu verwandeln. Das ist mehr als nur ein Job.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Open Positions / Empty State */}
            <div className="py-24 relative">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-brand-neon/10 to-cyan-500/5 blur-[100px]"></div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Offene Stellen</h2>

                    <div className="rounded-3xl bg-brand-surface/50 border border-white/10 backdrop-blur-sm p-12 text-center">
                        <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Aktuell sind wir vollzählig</h3>
                        <p className="text-slate-400 mb-8 max-w-lg mx-auto">
                            Im Moment sind alle Positionen besetzt. Aber wir wachsen schnell!
                            Sende uns gerne eine Initiativbewerbung und wir melden uns, wenn eine passende Stelle frei wird.
                        </p>
                        <Link
                            href="/kontakt"
                            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-brand-neon to-cyan-400 text-brand-dark font-bold rounded-xl transition-all hover:shadow-lg hover:shadow-brand-neon/25 hover:scale-[1.02]"
                        >
                            Initiativbewerbung senden
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
