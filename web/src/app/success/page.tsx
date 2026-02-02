'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function SuccessContent() {
    const searchParams = useSearchParams();
    const product = searchParams.get('product') || 'Dein Produkt';
    const method = searchParams.get('method');

    const getMethodText = () => {
        switch (method) {
            case 'invoice': return 'Wir haben dir die Rechnung per E-Mail gesendet.';
            case 'paypal': return 'Deine PayPal-Zahlung war erfolgreich.';
            case 'klarna': return 'Deine Klarna-Zahlung wird verarbeitet.';
            case 'card': return 'Deine Kreditkarte wurde belastet.';
            default: return 'Wir haben dir eine Bestätigungs-E-Mail gesendet.';
        }
    };

    return (
        <div className="min-h-screen bg-brand-void flex flex-col items-center justify-center p-4 relative">
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/10 blur-[120px]"></div>
            </div>

            <div className="relative z-10 text-center">
                {/* Success Icon */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mx-auto mb-8 animate-bounce">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Vielen Dank!</h1>
                <p className="text-xl text-brand-neon font-semibold mb-6">{product}</p>

                <div className="bg-brand-surface/50 border border-white/10 backdrop-blur-sm p-6 rounded-2xl max-w-lg mb-8">
                    <p className="text-slate-300 text-lg mb-2">
                        {getMethodText()}
                    </p>
                    <p className="text-slate-500 text-sm">
                        Deine Zugangsdaten erhältst du in wenigen Minuten per E-Mail.
                    </p>
                </div>

                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-neon to-cyan-400 text-brand-dark font-bold rounded-xl transition-all hover:shadow-lg hover:shadow-brand-neon/25 hover:scale-105"
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

function LoadingFallback() {
    return (
        <div className="min-h-screen bg-brand-void flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-brand-neon border-t-transparent rounded-full animate-spin"></div>
        </div>
    );
}

export default function SuccessPage() {
    return (
        <Suspense fallback={<LoadingFallback />}>
            <SuccessContent />
        </Suspense>
    )
}
