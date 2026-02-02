'use client';

import { useState } from 'react';
import PaymentModal from '@/components/ui/PaymentModal';

interface Product {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    price: number;
    originalPrice?: number;
    tag?: string;
    tagColor?: string;
    features: string[];
    icon: React.ReactNode;
    gradient: string;
    popular?: boolean;
}

export default function Products() {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const products: Product[] = [
        {
            id: 'starter-kit',
            title: 'Das KI-Starter-Kit',
            subtitle: 'PDF + Prompts',
            description: 'Die besten Prompts für Cursor & ChatGPT, um sofort Code zu generieren.',
            price: 19.99,
            features: [
                '50+ optimierte Prompts für Entwicklung',
                'Prompt-Vorlagen für jede Situation',
                'PDF-Guide: KI-Coding Grundlagen',
                'Sofortiger Download',
            ],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            gradient: 'from-brand-primary to-purple-600',
        },
        {
            id: 'masterkurs',
            title: 'Der App-Builder Masterkurs',
            subtitle: 'Video-Kurs',
            description: 'Schritt-für-Schritt: Wir bauen gemeinsam einen Netflix-Klon mit KI.',
            price: 49.99,
            originalPrice: 99.99,
            tag: 'Bestseller',
            tagColor: 'bg-gradient-to-r from-yellow-400 to-orange-400 text-black',
            popular: true,
            features: [
                '8+ Stunden Video-Content',
                'Komplett-Projekt: Netflix-Klon',
                'Alle AI-Prompts inklusive',
                'Zugang zur Discord-Community',
                'Lebenslange Updates',
                'Zertifikat bei Abschluss',
            ],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
            ),
            gradient: 'from-brand-neon to-cyan-500',
        },
    ];

    const handleBuyClick = (product: Product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    return (
        <section id="products" className="relative py-24 lg:py-32 bg-brand-dark overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.1),transparent_70%)]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-neon/10 border border-brand-neon/20 mb-6">
                        <span className="text-sm font-medium text-brand-neon">Starte jetzt</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Wähle dein{' '}
                        <span className="bg-gradient-to-r from-brand-neon to-cyan-400 bg-clip-text text-transparent">
                            Level
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Egal ob Einsteiger oder bereits erfahren — wir haben das richtige Paket für dich.
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className={`group relative ${product.popular ? 'md:-mt-4 md:mb-4' : ''}`}
                        >
                            {/* Popular badge */}
                            {product.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                                    <div className={`px-4 py-1.5 rounded-full ${product.tagColor} text-xs font-bold uppercase tracking-wider shadow-lg`}>
                                        {product.tag}
                                    </div>
                                </div>
                            )}

                            {/* Glow effect for popular */}
                            {product.popular && (
                                <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-brand-neon/50 to-cyan-500/50 blur-xl opacity-30"></div>
                            )}

                            {/* Card */}
                            <div className={`relative h-full rounded-3xl backdrop-blur-sm transition-all duration-500 group-hover:translate-y-[-4px] overflow-hidden ${product.popular
                                ? 'bg-white/5 border-2 border-brand-neon/30'
                                : 'bg-brand-surface/50 border border-white/10 hover:border-white/20'
                                }`}>
                                {/* Header */}
                                <div className="p-8 pb-0">
                                    {/* Icon */}
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} p-0.5 mb-6`}>
                                        <div className="w-full h-full rounded-2xl bg-brand-dark flex items-center justify-center text-white">
                                            {product.icon}
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-white mb-1">
                                        {product.title}
                                    </h3>
                                    <p className="text-brand-primaryLight font-medium text-sm mb-4">
                                        {product.subtitle}
                                    </p>
                                    <p className="text-slate-400 leading-relaxed mb-6">
                                        {product.description}
                                    </p>

                                    {/* Price */}
                                    <div className="flex items-baseline gap-3 mb-8">
                                        {product.originalPrice && (
                                            <span className="text-xl text-slate-500 line-through">
                                                €{product.originalPrice}
                                            </span>
                                        )}
                                        <span className="text-4xl font-bold text-white">
                                            €{product.price}
                                        </span>
                                        <span className="text-slate-500 text-sm">einmalig</span>
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="px-8 pb-8">
                                    <ul className="space-y-4 mb-8">
                                        {product.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${product.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <span className="text-slate-300 text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA Button */}
                                    <button
                                        onClick={() => handleBuyClick(product)}
                                        className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${product.popular
                                            ? 'bg-gradient-to-r from-brand-neon to-cyan-400 text-brand-dark hover:shadow-lg hover:shadow-brand-neon/25 hover:scale-[1.02]'
                                            : 'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/30'
                                            }`}
                                    >
                                        Jetzt kaufen
                                    </button>

                                    {/* Detail Link */}
                                    <a
                                        href={`/produkte/${product.id}`}
                                        className="block text-center mt-4 text-slate-400 hover:text-brand-neon transition-colors text-sm"
                                    >
                                        Mehr erfahren →
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust Badges */}
                <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span>Sichere Zahlung</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-brand-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        <span>14 Tage Geld-zurück</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Lebenslanger Zugriff</span>
                    </div>
                </div>
            </div>

            {/* Payment Modal */}
            {selectedProduct && (
                <PaymentModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    courseTitle={selectedProduct.title}
                    price={selectedProduct.price}
                />
            )}
        </section>
    );
}
