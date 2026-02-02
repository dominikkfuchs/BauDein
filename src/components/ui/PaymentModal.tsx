'use client';

import { useState } from 'react';
import Image from 'next/image';

interface PaymentModalProps {
    isOpen: boolean;
    onClose: () => void;
    courseTitle: string;
    price: number;
}

export default function PaymentModal({ isOpen, onClose, courseTitle, price }: PaymentModalProps) {
    const [selectedMethod, setSelectedMethod] = useState<string>('invoice');
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    if (!isOpen) return null;

    const handlePayment = async () => {
        setError('');
        if (!name || !email) {
            setError('Bitte fülle alle Pflichtfelder aus.');
            return;
        }

        setLoading(true);

        try {
            const res = await fetch('/api/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    courseTitle,
                    price,
                    paymentMethod: selectedMethod,
                    name,
                    email,
                }),
            });

            const data = await res.json();

            if (data.url) {
                window.location.href = data.url;
            } else if (data.error) {
                setError(data.error);
                setLoading(false);
            }
        } catch (err) {
            setError('Ein Fehler ist aufgetreten. Bitte versuche es später erneut.');
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[60] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                {/* Backdrop */}
                <div className="fixed inset-0 bg-slate-900 bg-opacity-75 transition-opacity backdrop-blur-sm" aria-hidden="true" onClick={onClose}></div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                <div className="relative inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">

                    {/* Header */}
                    <div className="bg-slate-50 px-4 py-5 sm:px-6 flex justify-between items-center border-b border-slate-100">
                        <h3 className="text-lg leading-6 font-bold text-brand-navy flex items-center gap-2" id="modal-title">
                            <svg className="w-5 h-5 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                            Sichere Bezahlung
                        </h3>
                        <button onClick={onClose} className="text-slate-400 hover:text-slate-500 transition-colors">
                            <span className="sr-only">Schließen</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>

                    <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        {/* Order Summary */}
                        <div className="bg-blue-50 rounded-xl p-4 mb-6 flex justify-between items-start">
                            <div>
                                <p className="text-sm text-blue-600 font-medium mb-1">Gewählter Kurs</p>
                                <h4 className="font-bold text-brand-navy">{courseTitle}</h4>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-blue-600 font-medium mb-1">Betrag</p>
                                <span className="text-xl font-bold text-brand-navy">€{price},00</span>
                            </div>
                        </div>

                        {/* User Info Fields */}
                        <div className="space-y-4 mb-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Vollständiger Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full rounded-lg border-slate-300 shadow-sm focus:border-brand-teal focus:ring focus:ring-brand-teal/20"
                                    placeholder="Max Mustermann"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">E-Mail-Adresse</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full rounded-lg border-slate-300 shadow-sm focus:border-brand-teal focus:ring focus:ring-brand-teal/20"
                                    placeholder="max@beispiel.de"
                                />
                            </div>
                        </div>

                        <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">Zahlungsmethode wählen</h4>

                        <div className="space-y-3">
                            {/* Invoice (Rechnung) */}
                            <label className={`relative border rounded-xl p-4 flex cursor-pointer transition-all ${selectedMethod === 'invoice' ? 'border-brand-teal ring-1 ring-brand-teal bg-teal-50/10' : 'border-slate-200 hover:border-slate-300'}`}>
                                <input type="radio" name="payment-method" className="sr-only" value="invoice" checked={selectedMethod === 'invoice'} onChange={() => setSelectedMethod('invoice')} />
                                <div className="flex items-center w-full">
                                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${selectedMethod === 'invoice' ? 'border-brand-teal' : 'border-slate-300'}`}>
                                        {selectedMethod === 'invoice' && <div className="w-2.5 h-2.5 rounded-full bg-brand-teal"></div>}
                                    </div>
                                    <div className="flex-1">
                                        <span className="block font-medium text-brand-navy">Kauf auf Rechnung</span>
                                        <span className="block text-xs text-slate-500">Erst lernen, in 14 Tagen zahlen. Beliebt!</span>
                                    </div>
                                    <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                </div>
                            </label>

                            {/* PayPal */}
                            <label className={`relative border rounded-xl p-4 flex cursor-pointer transition-all ${selectedMethod === 'paypal' ? 'border-brand-teal ring-1 ring-brand-teal bg-teal-50/10' : 'border-slate-200 hover:border-slate-300'}`}>
                                <input type="radio" name="payment-method" className="sr-only" value="paypal" checked={selectedMethod === 'paypal'} onChange={() => setSelectedMethod('paypal')} />
                                <div className="flex items-center w-full">
                                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${selectedMethod === 'paypal' ? 'border-brand-teal' : 'border-slate-300'}`}>
                                        {selectedMethod === 'paypal' && <div className="w-2.5 h-2.5 rounded-full bg-brand-teal"></div>}
                                    </div>
                                    <span className="block font-medium text-brand-navy flex-1">PayPal</span>
                                    <div className="w-8 opacity-75">
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="text-blue-700 w-6 h-6"><path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.946 5.05-4.336 6.7-8.316 6.7h-1.4l-.24 1.517c-.018.106-.118.188-.228.188h-2.593a.24.24 0 0 1-.236-.277l.764-4.783H12.6c3.116 0 5.617-1.42 6.27-5.592.57-3.626-2.185-4.725-6.07-4.725H7.788c-.28 0-.522.204-.565.48L4.095 20.66a.64.64 0 0 0 .633.74h4.16c.304 0 .564-.226.608-.528l.84-5.326h1.614l-.947 5.992a.641.641 0 0 1-.627.52z" /></svg>
                                    </div>
                                </div>
                            </label>

                            {/* Klarna */}
                            <label className={`relative border rounded-xl p-4 flex cursor-pointer transition-all ${selectedMethod === 'klarna' ? 'border-brand-teal ring-1 ring-brand-teal bg-teal-50/10' : 'border-slate-200 hover:border-slate-300'}`}>
                                <input type="radio" name="payment-method" className="sr-only" value="klarna" checked={selectedMethod === 'klarna'} onChange={() => setSelectedMethod('klarna')} />
                                <div className="flex items-center w-full">
                                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${selectedMethod === 'klarna' ? 'border-brand-teal' : 'border-slate-300'}`}>
                                        {selectedMethod === 'klarna' && <div className="w-2.5 h-2.5 rounded-full bg-brand-teal"></div>}
                                    </div>
                                    <span className="block font-medium text-brand-navy flex-1">Klarna / Sofort</span>
                                    <div className="bg-pink-100 text-pink-600 text-xs font-bold px-1 rounded">Klarna.</div>
                                </div>
                            </label>

                            {/* Credit Card */}
                            <label className={`relative border rounded-xl p-4 flex cursor-pointer transition-all ${selectedMethod === 'card' ? 'border-brand-teal ring-1 ring-brand-teal bg-teal-50/10' : 'border-slate-200 hover:border-slate-300'}`}>
                                <input type="radio" name="payment-method" className="sr-only" value="card" checked={selectedMethod === 'card'} onChange={() => setSelectedMethod('card')} />
                                <div className="flex items-center w-full">
                                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${selectedMethod === 'card' ? 'border-brand-teal' : 'border-slate-300'}`}>
                                        {selectedMethod === 'card' && <div className="w-2.5 h-2.5 rounded-full bg-brand-teal"></div>}
                                    </div>
                                    <span className="block font-medium text-brand-navy flex-1">Kreditkarte</span>
                                    <div className="flex gap-2 text-slate-400">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M2.212 7.75l.836 2.038.563-1.666h.74l-1.05 3.513-.91-3.885H2.212zm3.326.002H4.49l2.872 6.848 1.127-1.39-2.02-4.945-2.006 5.864h1.06l.512-1.57h1.948l.192.894h1.056l-3.692-5.698zm1.066 3.56l.666-2.056.402 2.056H6.604zm13.12-3.562h-1.604l-1.492 5.698H18.2l1.524-5.698zm-3.858 0l-1.688 5.698h1.082l1.686-5.698H15.866z" /></svg>
                                    </div>
                                </div>
                            </label>
                        </div>

                        {error && (
                            <div className="mt-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg">
                                {error}
                            </div>
                        )}

                        <div className="mt-6 flex items-start gap-2 text-xs text-slate-500 bg-slate-50 p-3 rounded-lg">
                            <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                            <p>Deine Daten werden durch 256-Bit SSL-Verschlüsselung sicher übertragen. 30 Tage Geld-zurück-Garantie.</p>
                        </div>
                    </div>

                    <div className="bg-slate-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button
                            type="button"
                            onClick={handlePayment}
                            disabled={loading}
                            className="w-full inline-flex justify-center rounded-xl border border-transparent shadow-sm px-4 py-3 bg-brand-navy text-base font-medium text-white hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-teal sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-75 disabled:cursor-not-allowed transition-all"
                        >
                            {loading ? (
                                <span className="flex items-center gap-2">
                                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                    Wird verarbeitet...
                                </span>
                            ) : (
                                'Zahlungspflichtig bestellen'
                            )}
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            disabled={loading}
                            className="mt-3 w-full inline-flex justify-center rounded-xl border border-slate-300 shadow-sm px-4 py-3 bg-white text-base font-medium text-slate-700 hover:bg-slate-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        >
                            Abbrechen
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

