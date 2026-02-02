import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-brand-void flex items-center justify-center px-4">
            {/* Background effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-brand-primary/20 to-purple-600/10 blur-[120px]"></div>
            </div>

            <div className="relative z-10 text-center max-w-xl">
                {/* 404 Number */}
                <div className="mb-8">
                    <span className="text-8xl sm:text-9xl font-bold bg-gradient-to-r from-brand-primary via-purple-400 to-brand-neon bg-clip-text text-transparent">
                        404
                    </span>
                </div>

                {/* Message */}
                <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    Seite nicht gefunden
                </h1>
                <p className="text-slate-400 mb-8 leading-relaxed">
                    Die Seite, die du suchst, existiert nicht oder wurde verschoben.
                    Kein Problem — wir bringen dich zurück auf Kurs.
                </p>

                {/* CTA */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-neon to-cyan-400 text-brand-dark font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-brand-neon/25 hover:scale-105"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Zurück zur Startseite
                </Link>
            </div>
        </div>
    );
}
