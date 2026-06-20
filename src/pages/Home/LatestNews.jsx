import React from 'react';
// 🎯 তৈরি করা timeAgo ফাংশনটি ইমপোর্ট করা হলো
import { timeAgo } from '../../utils/timeAgo';

//  এখানে প্রপ্স হিসেবে onSeeAllClick যোগ করা হলো (সব খবর বাটনের জন্য)
export default function LatestNews({ featuredNews, sidebarNews, onSeeAllClick, onNewsClick }) {

    if (!featuredNews) return null;
    const safeSidebarNews = Array.isArray(sidebarNews) ? sidebarNews : [];
    const handleNewsClick = (newsItem) => {
        if (onNewsClick) onNewsClick(newsItem);
    };

    return (
        <section className="hero-section bg-gray-50/50 py-6 md:py-10">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* 🌟 বাম পাশ: আগে যেখানে 'জাতীয়' বা অন্য কিছু ছিল, এখন সেটা "সর্বশেষ সংবাদ" */}
                <article
                    onClick={() => handleNewsClick(featuredNews)}
                    className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden group cursor-pointer"
                >
                    <div className="overflow-hidden aspect-video bg-gray-100">
                        <img
                            src={featuredNews.imgSrc}
                            alt={featuredNews.title}
                            className="w-full h-full object-cover transform group-hover:scale-101 transition-transform duration-700"
                        />
                    </div>
                    <div className="p-6 md:p-8 space-y-4">
                        {/* 🎯 এখানে ট্যাগটা ডাইনামিক বা ফিক্সড "সর্বশেষ সংবাদ" করে দেওয়া হলো */}
                        <span className="inline-block text-xs font-black bg-red-600 text-white px-3 py-1.5 rounded-md uppercase tracking-wider">
                            ✨ Latest News
                        </span>

                        <h1 className="text-xl md:text-3xl font-black text-gray-950 group-hover:text-red-600 transition-colors leading-snug tracking-tight">
                            {featuredNews.title}
                        </h1>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed line-clamp-3">
                            {featuredNews.desc}
                        </p>
                        {/* 🎯 মেইন ফিচারেড নিউজের পাবলিশ টাইম ডাইনামিক করা হলো */}
                        <div className="text-xs font-bold text-gray-400 pt-2">
                            🕒 {timeAgo(featuredNews.createdAt) || featuredNews.time}
                        </div>
                    </div>
                </article>

                {/* 📋 ডান পাশ: 'সর্বশেষ সংবাদ' সাইডবার */}
                <aside className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between h-full">
                    <div>
                        <div className="border-b-2 border-gray-900 pb-3 mb-5">
                            <h2 className="text-lg font-black text-gray-950 flex items-center gap-2">
                                <span className="text-red-600 rounded-full animate-pulse">●</span>
                                সর্বশেষ
                            </h2>
                        </div>

                        <div className="space-y-5 divide-y divide-gray-100">
                            {safeSidebarNews.length > 0 ? safeSidebarNews.map((item, index) => (
                                <button
                                    type="button"
                                    key={item.id || index}
                                    onClick={() => handleNewsClick(item)}
                                    className={`flex items-start gap-4 group cursor-pointer ${index > 0 ? 'pt-4' : ''}`}
                                >
                                    {/* সাইডবার ইমেজ */}
                                    <div className="w-24 h-16 shrink-0 overflow-hidden rounded-xl bg-gray-100 border border-gray-100">
                                        <img
                                            src={item.imgSrc || 'https://via.placeholder.com/96x64'}
                                            alt={item.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    {/* সাইডবার টেক্সট */}
                                    <div className="space-y-1">
                                        <h3 className="text-sm font-bold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2 leading-snug">
                                            {item.title}
                                        </h3>
                                        {/* 🎯 সাইডবার লিস্টের খবরের টাইম ডাইনামিক করা হলো */}
                                        <span className="block text-[11px] font-semibold text-gray-400">
                                            🕒 {timeAgo(item.createdAt) || item.time}
                                        </span>
                                    </div>
                                </button>
                            )) : (
                                <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50 px-4 py-6 text-sm text-gray-500">
                                    এই মুহূর্তে আরও খবর নেই।
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="w-full flex justify-end mt-6">
                        <button
                            onClick={onSeeAllClick}
                            type="button"
                            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-teal-700 bg-teal-50 hover:bg-teal-100 border border-teal-200/60 rounded-xl transition-all duration-300 shadow-sm hover:shadow active:scale-98 cursor-pointer group"
                        >
                            সব খবর
                            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                    </div>
                </aside>

            </div>
        </section>
    );
}