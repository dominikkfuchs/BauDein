import Link from 'next/link';

export default function CancelPage() {
    return (
        <div className="min-h-screen bg-brand-void flex flex-col items-center justify-center p-4 relative">
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-red-500/15 to-orange-500/5 blur-[100px]"></div>
            </div>

            <div className="relative z-10 text-center">
                {/* Cancel Icon */}
                <div className="w-24 h-24 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center mx-auto mb-8">
                    <svg className="w-12 h-12 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Zahlung abgebrochen</h1>
                <p className="text-slate-400 text-lg mb-8 max-w-lg">
                    Der Vorgang wurde abgebrochen. Es wurde keine Zahlung vorgenommen.
                    Du kannst es jederzeit erneut versuchen.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/#products"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-neon to-cyan-400 text-brand-dark font-bold rounded-xl transition-all hover:shadow-lg hover:shadow-brand-neon/25 hover:scale-105"
                    >
                        Zu den Produkten
                    </Link>
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-medium rounded-xl border border-white/20 transition-all hover:bg-white/20"
                    >
                        Zurück zur Startseite
                    </Link>
                </div>
            </div>
        </div>
    );
}
