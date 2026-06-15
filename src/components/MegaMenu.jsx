import React, { useState } from 'react';

// প্রপ্স হিসেবে menuData রিসিভ করা হচ্ছে
export default function MegaMenu({ isOpen, onClose, menuData }) {
    const [openAccordion, setOpenAccordion] = useState(null);

    return (
        <div className={`fixed inset-0 bg-black/60 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className={`absolute right-0 top-0 h-full w-full max-w-2xl bg-white shadow-2xl flex flex-col transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>

                {/* Header */}
                <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                    <div className="flex items-center gap-1">
                        <span className="text-teal-800 font-extrabold text-xl tracking-tight uppercase">News Hatiya</span>
                    </div>
                    <button onClick={onClose} className="text-gray-500 hover:text-red-600 p-2 rounded-full hover:bg-gray-100 transition-all" aria-label="Close Menu">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Body */}
                <div className="flex-1 overflow-y-auto p-5">

                    {/* DESKTOP VIEW */}
                    <div className="hidden md:grid grid-cols-1 gap-1 divide-y divide-gray-50">
                        {menuData?.map((item, idx) => (
                            <div key={idx} className="flex gap-4 py-3.5 items-start">
                                <span className="font-bold text-gray-900 w-28 hover:text-teal-800 cursor-pointer flex items-center justify-between shrink-0 transition-colors">
                                    {item.title}
                                    <svg className="w-3 h-3 text-teal-700 mr-2" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                                <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-600">
                                    {item.subs.map((sub, sIdx) => (
                                        <span key={sIdx} className="hover:text-teal-800 cursor-pointer transition-colors">{sub}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* MOBILE VIEW */}
                    <div className="block md:hidden space-y-1">
                        {menuData?.map((item, idx) => (
                            <div key={idx} className="border-b border-gray-50 pb-1">
                                <button
                                    onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)}
                                    className="w-full flex justify-between items-center py-3 text-gray-800 font-bold text-sm"
                                >
                                    <span className={openAccordion === idx ? 'text-teal-800' : 'text-gray-800'}>{item.title}</span>
                                    <svg className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${openAccordion === idx ? 'rotate-180 text-teal-800' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div className={`${openAccordion === idx ? 'block bg-gray-50/50 rounded-2xl p-3 mb-2' : 'hidden'} pl-4 space-y-2 text-xs text-gray-600`}>
                                    {item.subs.map((sub, sIdx) => (
                                        <p key={sIdx} className="hover:text-teal-800 cursor-pointer py-1.5 border-b border-gray-100/50 last:border-b-0 transition-colors">{sub}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}