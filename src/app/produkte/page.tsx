import Link from 'next/link';

export default function ProduktePage() {
    const products = [
        {
            id: 'starter-kit',
            title: 'Das KI-Starter-Kit',
            subtitle: 'PDF + Prompts',
            description: 'Die besten Prompts für Cursor & ChatGPT, um sofort Code zu generieren.',
            price: 19.99,
            href: '/produkte/starter-kit',
            gradient: 'from-brand-primary to-purple-600',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
        },
        {
            id: 'masterkurs',
            title: 'Der App-Builder Masterkurs',
            subtitle: 'Video-Kurs',
            description: 'Schritt-für-Schritt: Wir bauen gemeinsam einen Netflix-Klon mit KI.',
            price: 49.99,
            originalPrice: 99.99,
            tag: 'Bestseller',
            href: '/produkte/masterkurs',
            gradient: 'from-brand-neon to-cyan-500',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
            ),
        },
    ];

    return (
        <div className="min-h-screen bg-brand-void pt-32 pb-24">
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent"></div>
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-brand-primary/15 to-purple-600/5 blur-[120px]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-brand-neon/10 to-cyan-500/5 blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-brand-neon transition-colors mb-8 group"
                    >
                        <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Zurück zur Startseite
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Unsere{' '}
                        <span className="bg-gradient-to-r from-brand-neon to-cyan-400 bg-clip-text text-transparent">
                            Produkte
                        </span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Wähle das passende Paket für deinen Einstieg ins KI-Coding.
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {products.map((product) => (
                        <Link
                            key={product.id}
                            href={product.href}
                            className="group relative block"
                        >
                            {/* Tag */}
                            {product.tag && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                                    <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold uppercase tracking-wider shadow-lg">
                                        {product.tag}
                                    </div>
                                </div>
                            )}

                            <div className="h-full rounded-3xl bg-brand-surface/50 border border-white/10 backdrop-blur-sm p-8 transition-all duration-300 hover:border-white/20 hover:-translate-y-2 hover:shadow-xl">
                                {/* Icon */}
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} p-0.5 mb-6`}>
                                    <div className="w-full h-full rounded-2xl bg-brand-dark flex items-center justify-center text-white">
                                        {product.icon}
                                    </div>
                                </div>

                                {/* Content */}
                                <p className="text-brand-primaryLight font-medium text-sm mb-2">{product.subtitle}</p>
                                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-neon transition-colors">
                                    {product.title}
                                </h2>
                                <p className="text-slate-400 mb-6">{product.description}</p>

                                {/* Price */}
                                <div className="flex items-baseline gap-3">
                                    {product.originalPrice && (
                                        <span className="text-lg text-slate-500 line-through">€{product.originalPrice}</span>
                                    )}
                                    <span className="text-3xl font-bold text-white">€{product.price}</span>
                                </div>

                                {/* Arrow */}
                                <div className="mt-6 flex items-center text-brand-neon font-medium">
                                    Mehr erfahren
                                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
