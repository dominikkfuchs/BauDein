import Link from 'next/link';

export default function UeberUns() {
    return (
        <div className="bg-brand-void min-h-screen">
            {/* Hero Section */}
            <div className="relative py-32 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent"></div>
                    <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-brand-primary/15 to-purple-600/5 blur-[120px]"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-brand-neon transition-colors mb-8 group"
                    >
                        <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Zurück zur Startseite
                    </Link>

                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                            Unsere Mission:{' '}
                            <span className="bg-gradient-to-r from-brand-primary via-purple-400 to-brand-neon bg-clip-text text-transparent">
                                Build, don&apos;t learn.
                            </span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
                            Wir glauben, dass die Zukunft des Programmierens nicht im Auswendiglernen von Syntax liegt —
                            sondern im intelligenten Einsatz von KI-Tools, um echte Produkte zu bauen.
                        </p>
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="py-24 relative">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Value 1 */}
                        <div className="p-8 rounded-3xl bg-brand-surface/50 border border-white/10 backdrop-blur-sm hover:border-brand-primary/30 transition-all duration-300 group">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-neon to-cyan-500 p-0.5 mb-6">
                                <div className="w-full h-full rounded-2xl bg-brand-surface flex items-center justify-center">
                                    <svg className="w-7 h-7 text-brand-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-neon transition-colors">Speed over Perfection</h3>
                            <p className="text-slate-400">Von der Idee zum MVP in Stunden, nicht Monaten. Wir zeigen dir, wie du mit KI schneller baust als je zuvor.</p>
                        </div>

                        {/* Value 2 */}
                        <div className="p-8 rounded-3xl bg-brand-surface/50 border border-white/10 backdrop-blur-sm hover:border-brand-primary/30 transition-all duration-300 group">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-primary to-purple-600 p-0.5 mb-6">
                                <div className="w-full h-full rounded-2xl bg-brand-surface flex items-center justify-center">
                                    <svg className="w-7 h-7 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-neon transition-colors">Praxis statt Theorie</h3>
                            <p className="text-slate-400">Keine trockenen Tutorials. Wir bauen echte Apps zusammen — Schritt für Schritt, mit echtem Output.</p>
                        </div>

                        {/* Value 3 */}
                        <div className="p-8 rounded-3xl bg-brand-surface/50 border border-white/10 backdrop-blur-sm hover:border-brand-primary/30 transition-all duration-300 group">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 mb-6">
                                <div className="w-full h-full rounded-2xl bg-brand-surface flex items-center justify-center">
                                    <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-neon transition-colors">Für Macher</h3>
                            <p className="text-slate-400">Gründer, Side-Hustler, Kreative — wir helfen Menschen, die bauen wollen, nicht denen die nur lernen wollen.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Story Section */}
            <div className="py-24 relative">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-brand-neon/10 to-cyan-500/5 blur-[100px]"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="w-full md:w-1/2">
                            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-brand-primary via-purple-500 to-brand-neon p-0.5">
                                <div className="w-full h-full rounded-3xl bg-brand-dark flex flex-col items-center justify-center text-center p-12">
                                    <svg className="w-24 h-24 mb-6 text-brand-neon opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                    <span className="text-3xl font-bold text-white tracking-tight">Vibe Coding.</span>
                                    <span className="text-slate-400 mt-2">Die Zukunft ist jetzt.</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-6">
                                <span className="text-sm font-medium text-brand-primaryLight">Über uns</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Die Zukunft gehört den Bauern
                            </h2>
                            <div className="space-y-4 text-slate-400 leading-relaxed">
                                <p>
                                    BauDein wurde 2024 gegründet, weil wir frustriert waren von der Art, wie Programmieren gelehrt wird.
                                    Stundenlange Tutorials, die niemand braucht. Syntax-Wissen, das veraltet ist, bevor du es anwenden kannst.
                                </p>
                                <p>
                                    Wir haben erkannt: <strong className="text-white">Die Zukunft gehört denen, die mit KI bauen können.</strong>{' '}
                                    Nicht denen, die Code auswendig lernen.
                                </p>
                                <p>
                                    Heute helfen wir Gründern, Kreativen und Machern dabei, ihre Ideen in echte Software zu verwandeln —
                                    ohne jahrelange Coding-Erfahrung, ohne CS-Degree, ohne Bullshit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
