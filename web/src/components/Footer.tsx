import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="text-xl font-bold tracking-tight text-brand-navy flex items-center gap-2 mb-4">
                            <svg className="w-6 h-6 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                            AhaKurs
                        </Link>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Programmieren lernen leicht gemacht. <br />
                            Made with ❤️ in Germany.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-brand-navy mb-4">Kurse</h4>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li><Link href="/kurse/html-css" className="hover:text-brand-teal transition-colors">HTML & CSS</Link></li>
                            <li><Link href="/kurse/python" className="hover:text-brand-teal transition-colors">Python</Link></li>
                            <li><Link href="/kurse/javascript" className="hover:text-brand-teal transition-colors">JavaScript</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-brand-navy mb-4">Unternehmen</h4>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li><Link href="/ueber-uns" className="hover:text-brand-teal transition-colors">Über uns</Link></li>
                            <li><Link href="/kontakt" className="hover:text-brand-teal transition-colors">Kontakt</Link></li>
                            <li><Link href="/karriere" className="hover:text-brand-teal transition-colors">Karriere</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-brand-navy mb-4">Rechtliches</h4>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li><Link href="/impressum" className="hover:text-brand-teal transition-colors">Impressum</Link></li>
                            <li><Link href="/datenschutz" className="hover:text-brand-teal transition-colors">Datenschutz</Link></li>
                            <li><Link href="/agb" className="hover:text-brand-teal transition-colors">AGB</Link></li>
                            <li><Link href="/widerruf" className="hover:text-brand-teal transition-colors">Widerrufsrecht</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
                    <p>&copy; 2026 AhaKurs.de - Alle Rechte vorbehalten.</p>
                    <div className="flex space-x-6">
                        <Link href="#" className="hover:text-brand-navy transition-colors">Instagram</Link>
                        <Link href="#" className="hover:text-brand-navy transition-colors">LinkedIn</Link>
                        <Link href="#" className="hover:text-brand-navy transition-colors">Twitter</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
