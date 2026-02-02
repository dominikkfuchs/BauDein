import { ReactNode } from 'react';
import Link from 'next/link';

interface LegalPageLayoutProps {
    title: string;
    children: ReactNode;
}

export default function LegalPageLayout({ title, children }: LegalPageLayoutProps) {
    return (
        <div className="min-h-screen py-24 md:py-32 bg-brand-void relative">
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent"></div>
                <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-brand-primary/10 to-purple-600/5 blur-[100px]"></div>
            </div>

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Back link */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-brand-neon transition-colors mb-8 group"
                >
                    <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Zurück zur Startseite
                </Link>

                {/* Title */}
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-12 tracking-tight">
                    {title}
                </h1>

                {/* Content */}
                <div className="prose prose-lg prose-invert prose-slate prose-headings:text-white prose-headings:font-semibold prose-p:text-slate-300 prose-a:text-brand-neon prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-li:text-slate-300 max-w-none">
                    {children}
                </div>
            </div>
        </div>
    );
}
