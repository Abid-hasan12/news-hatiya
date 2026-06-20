import React from 'react';
// 🎯 তৈরি করা timeAgo ফাংশনটি ইমপোর্ট করা হলো
import { timeAgo } from '../../utils/timeAgo';

// 🎯 এখন সরাসরি ফিল্টার করা ডাটা প্রপ্স হিসেবে আসবে
export default function Politics({ leadNews, relatedNews, onSeeAllClick, onNewsClick }) {
    const handleNewsClick = (newsItem) => {
        if (onNewsClick) onNewsClick(newsItem);
    };

    // নিরাপত্তা চেক: যদি মেইন নিউজটাই না থাকে, তাহলে সেকশন হাইড থাকবে
    if (!leadNews) return null;

    return (
        <section className="politics-section max-w-7xl mx-auto px-4 py-8 border-b border-gray-200">

            {/* সেকশন হেডার বা শিরোনাম */}
            <div className="flex items-center justify-center mb-6 border-b-2 border-red-600 pb-2">
                <h2 className="text-2xl font-bold text-gray-900 cursor-pointer hover:text-red-600 transition-colors">
                    রাজনীতি
                </h2>
            </div>

            {/* রাজনীতি গ্রিড লেআউট */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* বামপাশের বড় মেইন নিউজ (২ কলাম জুড়ে থাকবে) */}
                <article className="lg:col-span-2 group space-y-4">
                    <button
                        type="button"
                        onClick={() => handleNewsClick(leadNews)}
                        className="block overflow-hidden rounded-3xl bg-gray-100 aspect-video max-h-[380px] w-full text-left"
                    >
                        <img
                            src={leadNews.imgSrc || "https://via.placeholder.com/800x450"}
                            alt={leadNews.title}
                            className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-500"
                        />
                    </button>
                    <div className="space-y-2">
                        <span className="text-xs font-bold text-red-600 tracking-wider uppercase">🔔 শীর্ষ সংবাদ</span>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors cursor-pointer line-clamp-2 leading-snug">
                            {leadNews.title}
                        </h3>
                        {/* 🎯 মেইন খবরের পাবলিশ টাইম ডাইনামিক করা হলো */}
                        <p className="text-sm text-gray-500">
                            {timeAgo(leadNews.createdAt) || leadNews.time}
                        </p>
                    </div>
                </article>

                {/* ডানপাশের সাব-নিউজ বা রিলেটেড নিউজ এরিয়া (১ কলাম নেবে) */}
                <div className="space-y-5 bg-gray-50 p-6 rounded-3xl h-full flex flex-col justify-between">
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider border-b border-gray-200 pb-2">
                        এই সপ্তাহের রাজনীতি
                    </h4>

                    {/* ডানপাশের সাব-নিউজ এরিয়া */}
                    <div className="divide-y divide-gray-200 space-y-4 flex-1 mt-3">
                        {relatedNews && relatedNews.map((news, index) => (
                            <div key={news.id || index} className="pt-4 first:pt-0 group/item">
                                <button type="button" onClick={() => handleNewsClick(news)} className="block w-full text-left">
                                    <h5 className="text-base font-bold text-gray-900 group-hover/item:text-red-600 transition-colors line-clamp-2 mb-1">
                                        {news.title}
                                    </h5>
                                    {/* 🎯 রিলেটেড খবরের পাবলিশ টাইম ডাইনামিক করা হলো */}
                                    <span className="text-xs text-gray-500">
                                        {timeAgo(news.createdAt) || news.time}
                                    </span>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <div className="w-full flex justify-end mt-0 py-2 px-6">
                <button
                    type="button"
                    onClick={onSeeAllClick}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-teal-700 bg-teal-50 hover:bg-teal-100 border border-teal-200/60 rounded-xl transition-all duration-300 shadow-sm hover:shadow active:scale-98"
                >
                    সব খবর
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </button>
            </div>
        </section>
    );
}