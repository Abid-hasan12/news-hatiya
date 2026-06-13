import React, { useState } from 'react';

export default function MegaMenu({ isOpen, onClose }) {
    const [openAccordion, setOpenAccordion] = useState(null);

    const menuData = [
        { title: "বাংলাদেশ", subs: ["রাজধানী", "জেলা", "করোনাভাইরাস", "পরিবেশ", "অপরাধ"] },
        { title: "বিশ্ব", subs: ["ইরান যুদ্ধ", "ভারত", "پاکستان", "চীন", "মধ্যপ্রাচ্য", "যুক্তরাষ্ট্র", "এশিয়া", "ইউরোপ", "আফ্রিকা", "লাতিন আমেরিকা"] },
        { title: "মতামত", subs: ["সম্পাদকীয়", "কলাম", "সাক্ষাৎকার", "স্মরণ", "প্রতিক্রিয়া", "চিঠি"] },
        { title: "বাণিজ্য", subs: ["শেয়ারবাজার", "ব্যাংক", "শিল্প", "অর্থনীতি", "বিশ্ববাণিজ্য", "বিশ্লেষণ", "আপনার টাকা", "উদ্যোক্তা", "করপোরেট সংবাদ", "বাজেট ২০২৬-২৭"] },
        { title: "বিনোদন", subs: ["টেলিভিশন", "ওটিটি", "ঢালিউড", "টালিউড", "বলিউড", "হলিউড", "বিশ্ব চলচ্চিত্র", "গান", "নাটক", "আলাপন"] },
        { title: "জীবনযাপন", subs: ["ভ্রমণ", "সম্পর্ক", "সুস্থতা", "রাশি", "ফ্যাশন", "স্টাইল", "রূপচর্চা", "গৃহসজ্জা", "রসনা", "কেনাকাটা"] },
        { title: "চাকরি", subs: ["খবর", "নিয়োগ", "পরামর্শ", "সাক্ষাৎকার"] },
        { title: "খেলা", subs: ["ক্রিকেট", "فুটবল", "টেনিস", "অন্য খেলা", "সাক্ষাৎকার", "ফটো ফিচার", "কুইজ", "সাত রং", "ভিডিও", "আজকের খেলা"] },
        { title: "প্রযুক্তি", subs: ["গ্যাজেট", "টিপস", "বিজ্ঞান", "অটোমোবাইল", "সাইবার-জগৎ", "ফ্রিল্যান্সিং", "এআই", "কুইজ"] },
        { title: "শিক্ষা", subs: ["ভর্তি", "পরীক্ষা", "বৃত্তি", "পড়াশোনা", "উচ্চশিক্ষা", "ক্যাম্পাস"] },
        { title: "ধর্ম", subs: ["ইসলাম", "সনাতন", "বৌদ্ধ", "খ্রিস্টান"] },
        { title: "অন্য আলো", subs: ["কবিতা", "গল্প", "নিবন্ধ", "বইপত্র", "শিল্পকলা", "সাক্ষাৎকার", "ভ্রমণ", "অন্যান্য", "অনুবাদ", "মুক্তগদ্য", "শিশু-কিশোর"] },
        { title: "আরও", subs: ["গোলটেবিল", "বিশেষ সংখ্যা", "অনলাইন ভোট", "প্রতিষ্ঠাবার্ষিকী", "একটু থামুন"] }
    ];

    return (
        <div className={`fixed inset-0 bg-black/60 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className={`absolute right-0 top-0 h-full w-full max-w-2xl bg-white shadow-2xl flex flex-col transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>

                {/* Header */}
                <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                    <div className="flex items-center gap-1">
                        <span className="text-teal-800 font-extrabold text-xl tracking-tight uppercase">News Hatiya</span>
                    </div>
                    <button onClick={onClose} className="text-gray-500 hover:text-red-600 p-2 rounded-full hover:bg-gray-100 transition-all" aria-label="Close Menu">
                        {/* Clean SVG Close Icon */}
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Body */}
                <div className="flex-1 overflow-y-auto p-5">

                    {/* DESKTOP VIEW */}
                    <div className="hidden md:grid grid-cols-1 gap-1 divide-y divide-gray-50">
                        {menuData.map((item, idx) => (
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
                        {menuData.map((item, idx) => (
                            <div key={idx} className="border-b border-gray-50 pb-1">
                                <button
                                    onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)}
                                    className="w-full flex justify-between items-center py-3 text-gray-800 font-bold text-sm"
                                >
                                    <span className={openAccordion === idx ? 'text-teal-800' : 'text-gray-800'}>{item.title}</span>
                                    {/* Clean SVG Accordion Arrow */}
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