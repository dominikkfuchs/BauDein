export default function Testimonials() {
    return (
        <section className="relative py-24 lg:py-32 bg-brand-void overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.08),transparent_50%)]"></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                {/* Quote icon */}
                <div className="mb-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-primary to-purple-600 mx-auto flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.01691 21L5.01691 18C5.01691 16.8954 5.91234 16 7.01691 16H10.0169C10.5692 16 11.0169 15.5523 11.0169 15V9C11.0169 8.44772 10.5692 8 10.0169 8H6.01691C5.46462 8 5.01691 8.44772 5.01691 9V11C5.01691 11.5523 4.56919 12 4.01691 12H3.01691V5H13.0169V15C13.0169 18.3137 10.3306 21 7.01691 21H5.01691Z" />
                        </svg>
                    </div>
                </div>

                {/* Quote */}
                <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white leading-relaxed mb-10">
                    &quot;Ich hatte null Programmiererfahrung. Nach dem Wochenend-Kurs hatte ich meine erste App deployed. Das hätte ich{' '}
                    <span className="bg-gradient-to-r from-brand-primary to-brand-neon bg-clip-text text-transparent font-bold">
                        niemals für möglich gehalten
                    </span>.&quot;
                </blockquote>

                {/* Author */}
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-neon to-cyan-500 p-0.5 mb-4">
                        <div className="w-full h-full rounded-full bg-brand-dark flex items-center justify-center">
                            <span className="text-xl font-bold text-white">MK</span>
                        </div>
                    </div>
                    <div className="text-white font-bold text-lg">Markus K.</div>
                    <div className="text-brand-neon text-sm font-medium">München • Gründer</div>
                    <div className="mt-3 flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                </div>

                {/* Trust numbers */}
                <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                    <div className="text-center">
                        <div className="text-3xl sm:text-4xl font-bold text-white mb-2">50+</div>
                        <div className="text-sm text-slate-500">Erfolgreiche Schüler</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl sm:text-4xl font-bold text-white mb-2">4.9</div>
                        <div className="text-sm text-slate-500">Sterne Bewertung</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl sm:text-4xl font-bold text-white mb-2">12+</div>
                        <div className="text-sm text-slate-500">Apps deployed</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
