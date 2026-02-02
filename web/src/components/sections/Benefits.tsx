export default function Benefits() {
    const benefits = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "Vibe Coding statt Syntax-Pauken",
            description: "Vergiss trockene Theorie und endlose Tutorials. Du beschreibst was du willst, die KI schreibt den Code. Du fokussierst dich aufs Bauen.",
            gradient: "from-brand-primary to-purple-600",
            glow: "brand-primary",
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Von der Idee zum Produkt in Stunden",
            description: "Was früher Monate dauerte, schaffst du jetzt an einem Wochenende. Schnelle Iteration, sofortige Ergebnisse, echte Apps.",
            gradient: "from-brand-neon to-cyan-500",
            glow: "brand-neon",
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            title: "Perfekt für Gründer & Macher",
            description: "Du hast die Vision, wir zeigen dir die Tools. Baue MVPs, Prototypen und echte Produkte — ohne Developer-Team.",
            gradient: "from-purple-500 to-pink-500",
            glow: "purple-500",
        },
    ];

    return (
        <section id="benefits" className="relative py-24 lg:py-32 bg-brand-void overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-neon/30 to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-6">
                        <span className="text-sm font-medium text-brand-primaryLight">Warum BauDein?</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Die Zukunft gehört den{' '}
                        <span className="bg-gradient-to-r from-brand-primary to-brand-neon bg-clip-text text-transparent">
                            Machern
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Während andere noch Tutorials schauen, baust du bereits echte Produkte.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="group relative"
                        >
                            {/* Glow effect */}
                            <div className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>

                            {/* Card */}
                            <div className="relative h-full p-8 rounded-3xl bg-brand-surface/50 border border-white/5 hover:border-white/10 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-[-4px]">
                                {/* Icon */}
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} p-0.5 mb-8`}>
                                    <div className="w-full h-full rounded-2xl bg-brand-surface flex items-center justify-center text-white">
                                        {benefit.icon}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand-neon transition-colors duration-300">
                                    {benefit.title}
                                </h3>
                                <p className="text-slate-400 leading-relaxed">
                                    {benefit.description}
                                </p>

                                {/* Bottom accent line */}
                                <div className={`absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full`}></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tech Stack Showcase */}
                <div className="mt-20 text-center">
                    <p className="text-sm text-slate-500 mb-6 uppercase tracking-wider">Tools die du meistern wirst</p>
                    <div className="flex flex-wrap justify-center items-center gap-8">
                        {['Cursor', 'Claude', 'ChatGPT', 'Windsurf', 'v0.dev'].map((tool) => (
                            <div
                                key={tool}
                                className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-mono text-sm hover:border-brand-primary/50 hover:text-brand-neon transition-all duration-300 cursor-default"
                            >
                                {tool}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
