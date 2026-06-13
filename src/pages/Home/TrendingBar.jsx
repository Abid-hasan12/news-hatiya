import React from 'react';

export default function TrendingBar() {
    // ট্রেন্ডিং কি-ওয়ার্ড বা টপিকস-এর ডাইনামিক ডাটা অ্যারে
    const trendingTopics = [
        "ইরান-যুক্তরাষ্ট্র যুদ্ধ",
        "জ্বালানি সংকট",
        "ঈদুল আজহা",
        "স্বরাষ্ট্র মন্ত্রণালয়",
        "ডোনাল্ড ট্রাম্প",
        "নতুন আইন",
        "অর্থনীতি সংবাদ"
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-3 overflow-x-auto whitespace-nowrap border-b border-gray-200 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden" style={{ WebkitOverflowScrolling: 'touch' }}>

            {/* Label */}
            <div className="inline-flex items-center rounded px-3 py-2 bg-teal-800 text-white font-bold text-sm flex-shrink-0">
                ট্রেন্ডিং:
            </div>

            {/* Dynamic Trending Tags */}
            {trendingTopics.map((topic, index) => (
                <a
                    key={index}
                    href="#"
                    className="inline-flex items-center rounded px-3 py-2 bg-gray-100 text-gray-700 hover:bg-teal-800 hover:text-white transition text-sm flex-shrink-0 duration-200"
                >
                    {topic}
                </a>
            ))}

        </section>
    );
}