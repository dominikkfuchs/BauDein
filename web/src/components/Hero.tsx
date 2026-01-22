import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-brand-navy min-h-[80vh] flex items-center">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.png"
                    alt="Abstract coding background"
                    fill
                    className="object-cover opacity-30"
                    priority
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight mb-6 animate-fade-in-up">
                    Dein <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-blue-400">Aha-Moment</span><br className="hidden sm:block" /> beim Programmieren.
                </h1>
                <p className="mt-6 text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
                    Lerne Coden ohne Frust. Kurze, praxisnahe Kurse für absolute Anfänger. Schritt für Schritt zum eigenen Projekt.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link href="#courses" className="w-full sm:w-auto px-8 py-4 bg-brand-teal hover:bg-brand-tealDark text-white text-lg font-bold rounded-xl shadow-lg shadow-teal-500/30 transition-all transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center gap-2">
                        Kurse ansehen
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                    </Link>
                    <Link href="#" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 text-lg font-semibold rounded-xl transition-all flex items-center justify-center">
                        Kostenlose Vorschau
                    </Link>
                </div>

                <div className="mt-12 flex items-center justify-center gap-2 text-sm text-slate-400">
                    <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full bg-slate-700 ring-2 ring-brand-navy flex items-center justify-center font-bold text-xs text-white">TM</div>
                        <div className="w-8 h-8 rounded-full bg-slate-600 ring-2 ring-brand-navy flex items-center justify-center font-bold text-xs text-white">AK</div>
                        <div className="w-8 h-8 rounded-full bg-slate-500 ring-2 ring-brand-navy flex items-center justify-center font-bold text-xs text-white">JL</div>
                    </div>
                    <span>Über <strong className="text-white">1.000+ zufriedene Schüler</strong> haben bereits gestartet.</span>
                </div>
            </div>
        </section>
    );
}
