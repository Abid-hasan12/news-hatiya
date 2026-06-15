import React from 'react';

// প্রপ্স হিসেবে topics অ্যারে রিসিভ করা হচ্ছে
export default function TrendingBar({ topics }) {
    return (
        <section className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-3 overflow-x-auto whitespace-nowrap border-b border-gray-200 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden" style={{ WebkitOverflowScrolling: 'touch' }}>

            {/* Label */}
            <div className="inline-flex items-center rounded px-3 py-2 bg-teal-800 text-white font-bold text-sm flex-shrink-0">
                ট্রেন্ডিং:
            </div>

            {/* Dynamic Trending Tags */}
            {topics?.map((topic, index) => (
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