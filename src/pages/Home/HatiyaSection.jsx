import React from 'react';
import { timeAgo } from '../../utils/timeAgo';

export default function HatiyaSection({ leadNews, relatedNews, onSeeAllClick, onNewsClick }) {
    const handleNewsClick = (newsItem) => {
        if (onNewsClick) onNewsClick(newsItem);
    };

    if (!leadNews) return null;
    const safeRelatedNews = Array.isArray(relatedNews) ? relatedNews : [];

    return (
        <section className="hatiya-special-section max-w-7xl mx-auto px-4 py-6 my-6 bg-gradient-to-br from-teal-50 to-white rounded-3xl border border-teal-100 shadow-sm">

            {/* সেকশন হেডার */}
            <div className="flex items-center justify-between mb-8 border-b-2 border-teal-600 pb-3">
                <div className="flex items-center space-x-2">
                    <span className="flex h-3 h-3 w-3 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-600"></span>
                    </span>
                    <h2 className="text-2xl font-black text-teal-900 tracking-wide">
                        আমাদের হাতিয়া <span className="text-sm font-medium text-teal-600 bg-teal-100 px-2 py-0.5 rounded-full ml-1">উপজেলা ফোকাস</span>
                    </h2>
                </div>
            </div>

            {/* মেইন গ্রিড লেআউট */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* বামপাশের বড় ব্যানার নিউজ (৭ কলাম) */}
                <article onClick={() => handleNewsClick(leadNews)} className="lg:col-span-7 group flex flex-col justify-between space-y-4 cursor-pointer">
                    <div className="block overflow-hidden rounded-2xl bg-gray-200 aspect-[16/10] max-h-[380px] relative shadow-md">
                        <img
                            src={leadNews.imgSrc || leadNews.image || "https://images.unsplash.com/photo-1495020689067-958852a6565d?w=800&q=80"}
                            alt={leadNews.title}
                            className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            প্রধান সংবাদ
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 group-hover:text-teal-700 transition-colors cursor-pointer leading-tight">
                            {leadNews.title}
                        </h3>
                        <div className="flex items-center text-xs text-gray-500 space-x-2">
                            <span>📍 হাতিয়া, নোয়াখালী</span>
                            <span>•</span>
                            {/* 🎯 লিড নিউজের টাইমস্ট্যাম্প ডাইনামিক করা হলো */}
                            <span>{timeAgo(leadNews.createdAt) || leadNews.time}</span>
                        </div>
                    </div>
                </article>

                {/* ডানপাশের লিস্ট নিউজ (৫ কলাম) */}
                <div className="lg:col-span-5 flex flex-col justify-between bg-white p-6 rounded-2xl border border-teal-50 shadow-sm">
                    <div className="divide-y divide-gray-100 space-y-5">
                        {safeRelatedNews.map((news, index) => (
                            <div key={news.id || index} className="pt-4 first:pt-0 group/item">
                                <button type="button" onClick={() => handleNewsClick(news)} className="flex w-full space-x-4 items-start text-left">
                                    {/* ছোট থাম্বনেইল ইমেজ */}
                                    <div className="w-24 h-20 flex-shrink-0 bg-gray-100 rounded-xl overflow-hidden relative">
                                        <img
                                            src={news.imgSrc || 'https://via.placeholder.com/96x80'}
                                            alt={news.title}
                                            className="w-full h-full object-cover group-hover/item:scale-105 transition-transform"
                                        />
                                    </div>
                                    {/* টেক্সট */}
                                    <div className="space-y-1">
                                        <h4 className="text-sm font-bold text-gray-900 group-hover/item:text-teal-700 transition-colors line-clamp-2 leading-snug">
                                            {news.title}
                                        </h4>
                                        {/* 🎯 লিস্টের রিলেটেড নিউজের টাইমস্ট্যাম্প ডাইনামিক করা হলো */}
                                        <span className="block text-[11px] text-gray-400">
                                            {timeAgo(news.createdAt) || news.time}
                                        </span>
                                    </div>
                                </button>
                            </div>
                        ))}
                    </div>
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
        </section>
    );
}