import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-void pt-20">
            {/* Animated Background */}
            <div className="absolute inset-0 z-0">
                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

                {/* Gradient orbs */}
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-brand-primary/20 to-purple-600/10 blur-[120px] animate-pulse-glow"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-brand-neon/15 to-cyan-500/10 blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }}></div>

                {/* Floating code elements */}
                <div className="absolute top-32 left-[10%] opacity-20 animate-float font-mono text-brand-primary text-sm">
                    <span className="text-purple-400">const</span> app = <span className="text-brand-neon">buildWithAI</span>();
                </div>
                <div className="absolute bottom-40 right-[15%] opacity-20 animate-float font-mono text-brand-primary text-sm" style={{ animationDelay: '2s' }}>
                    <span className="text-purple-400">async</span> <span className="text-brand-neon">deploy</span>() =&gt; ✓
                </div>
            </div>

            {/* Slogan bar */}
            <div className="absolute top-24 left-0 right-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/30 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-brand-neon animate-pulse"></span>
                        <span className="text-sm font-medium text-slate-300">
                            Programmierst du noch oder baust du schon?
                        </span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                {/* Main Headline with gradient glow */}
                <div className="relative inline-block">
                    {/* Glow effect behind text */}
                    <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-brand-primary/30 via-purple-500/30 to-brand-neon/30 scale-150 opacity-50"></div>

                    <h1 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-8 animate-fade-in-up">
                        <span className="text-white">Baue deine eigene App.</span>
                        <br />
                        <span className="bg-gradient-to-r from-brand-primary via-purple-400 to-brand-neon bg-clip-text text-transparent">
                            In einem Wochenende.
                        </span>
                    </h1>
                </div>

                <p className="mt-6 text-lg sm:text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
                    Keine jahrelange Erfahrung nötig. Lerne, wie du mit{' '}
                    <span className="text-brand-neon font-semibold">KI-Tools</span> wie{' '}
                    <span className="code-snippet">Cursor</span> und{' '}
                    <span className="code-snippet">Claude</span>{' '}
                    echte Software erschaffst.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <Link
                        href="#products"
                        className="group relative w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-brand-neon via-cyan-400 to-brand-neon bg-[length:200%_100%] text-brand-dark text-lg font-bold rounded-2xl transition-all duration-500 hover:bg-right neon-glow hover:scale-105"
                    >
                        <span className="flex items-center justify-center gap-3">
                            Jetzt loslegen
                            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </span>
                    </Link>
                    <Link
                        href="#"
                        className="group w-full sm:w-auto px-10 py-5 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white border border-white/10 hover:border-brand-primary/50 text-lg font-semibold rounded-2xl transition-all duration-300 flex items-center justify-center gap-3"
                    >
                        <svg className="w-5 h-5 text-brand-primary" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                        Demo ansehen
                    </Link>
                </div>

                {/* Social Proof */}
                <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-500 animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
                    <div className="flex items-center gap-3">
                        <div className="flex -space-x-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-primary to-purple-600 ring-2 ring-brand-void flex items-center justify-center text-white font-bold text-xs">MK</div>
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 ring-2 ring-brand-void flex items-center justify-center text-white font-bold text-xs">JS</div>
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-neon to-cyan-500 ring-2 ring-brand-void flex items-center justify-center text-brand-dark font-bold text-xs">TL</div>
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-600 to-slate-700 ring-2 ring-brand-void flex items-center justify-center text-white font-bold text-xs">+50</div>
                        </div>
                        <span className="text-slate-400">
                            <strong className="text-white">50+ Entwickler</strong> bauen bereits mit KI
                        </span>
                    </div>

                    <div className="hidden sm:block w-px h-6 bg-slate-700"></div>

                    <div className="flex items-center gap-2">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <span className="text-slate-400">4.9 Bewertung</span>
                    </div>
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-void to-transparent z-10"></div>
        </section>
    );
}
