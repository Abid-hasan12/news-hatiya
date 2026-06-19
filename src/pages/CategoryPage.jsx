import React from 'react';
import { allNews } from '../newsData'; // তোমার মেইন ডাটা সোর্স
// 🎯 তৈরি করা timeAgo ফাংশনটি ইমপোর্ট করা হলো
import { timeAgo } from '../utils/timeAgo';

export default function CategoryPage({ categoryName, onNewsClick }) {
    const normalize = (str) => str ? str.replace('য়া', 'যা').replace('য়া', 'যা').trim() : '';

    // 🎯 ১. ফিল্টার এবং ২. রিভার্স (যাতে নতুন ইনপুট দেওয়া নিউজ সবার উপরে থাকে)
    const filteredNews = allNews
        ? allNews.filter(news => normalize(news.category) === normalize(categoryName)).reverse()
        : [];

    // প্রথম প্রধান খবর (Hero News) এবং বাকি খবরগুলোকে আলাদা করা হলো
    const heroNews = filteredNews[0];
    const remainingNews = filteredNews.slice(1);

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 min-h-[70vh] bg-gray-50/50">
            {/* 🏷️ প্রফেশনাল হেডার সেকশন */}
            <div className="flex items-center gap-4 border-b-2 border-red-600 pb-4 mb-10">
                <span className="bg-red-600 text-white text-xs uppercase font-black px-3 py-1.5 rounded-sm tracking-wider">📍 ক্যাটাগরি</span>
                <h1 className="text-2xl md:text-4xl font-black text-gray-950 tracking-tight">
                    {categoryName}
                </h1>
                <span className="text-xs md:text-sm font-bold text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full ml-auto">
                    {filteredNews.length}টি খবর
                </span>
            </div>

            {/* 🚫 ডাটা চেক */}
            {filteredNews.length === 0 ? (
                <div className="text-center py-24 bg-white border border-gray-100 rounded-3xl shadow-sm text-gray-400 text-lg font-medium">
                    ✨ এই ক্যাটাগরিতে বর্তমানে কোনো খবর নেই!
                </div>
            ) : (
                <div className="space-y-12">

                    {/* 🌟 প্রথম নিউজ: প্রফেশনাল হিরো লেআউট */}
                    {heroNews && (
                        <div
                            onClick={() => onNewsClick && onNewsClick(heroNews)} // 🎯 ক্লিকেবল
                            className="group cursor-pointer bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-6"
                        >
                            <div className="lg:col-span-7 overflow-hidden aspect-video bg-gray-100">
                                <img
                                    src={heroNews.imgSrc || "https://via.placeholder.com/800x450"}
                                    alt={heroNews.title}
                                    className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-700"
                                />
                            </div>
                            <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between space-y-4">
                                <div className="space-y-3">
                                    <span className="inline-block text-xs font-bold text-red-600 bg-red-50 px-2.5 py-1 rounded-md">
                                        সর্বশেষ খবর
                                    </span>
                                    <h2 className="text-xl md:text-3xl font-black text-gray-950 group-hover:text-red-600 transition-colors duration-300 leading-snug md:leading-tight">
                                        {heroNews.title}
                                    </h2>
                                    <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed">
                                        {heroNews.description || "বিস্তারিত জানতে খবরের ওপর ক্লিক করুন। সর্বশেষ ও তাজা খবর সবার আগে পড়তে আমাদের সাথেই থাকুন।"}
                                    </p>
                                </div>
                                {/* 🎯 হিরো নিউজের পাবলিশ টাইম ডাইনামিক করা হলো */}
                                <div className="flex items-center gap-2 text-xs font-bold text-gray-400 pt-4 border-t border-gray-100">
                                    <span>🕒 {timeAgo(heroNews.createdAt) || heroNews.time}</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* 📰 🎯 বাকি নিউজগুলো: প্রথম আলো স্টাইল লেআউট (বাম পাশে টেক্সট, ডান পাশে ইমেজ) */}
                    {remainingNews.length > 0 && (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6">
                            {remainingNews.map((news) => (
                                <article
                                    key={news.id}
                                    onClick={() => onNewsClick && onNewsClick(news)} // 🎯 ক্লিকেবল
                                    className="group cursor-pointer bg-white p-4 border-b border-gray-200 lg:border lg:border-gray-100 lg:rounded-2xl lg:shadow-sm hover:shadow-md transition-all duration-300 flex justify-between gap-4 items-start"
                                >
                                    {/* বাম দিক: হেডিং, ডেসক্রিপশন ও টাইম */}
                                    <div className="flex-1 flex flex-col justify-between h-full min-h-[90px] md:min-h-[110px]">
                                        <div className="space-y-1.5">
                                            <h3 className="text-base md:text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2 leading-snug md:leading-normal">
                                                {news.title}
                                            </h3>
                                            {/* ডেসক্রিপশন (ল্যাপটপে দেখাবে, মোবাইলে সুন্দর দেখানোর জন্য হিডেন) */}
                                            <p className="hidden md:line-clamp-2 text-xs text-gray-500 leading-relaxed">
                                                {news.description || "বিস্তারিত জানতে খবরের ওপর ক্লিক করুন।"}
                                            </p>
                                        </div>

                                        {/* মেটা ডাটা */}
                                        <div className="flex items-center gap-3 text-[11px] font-semibold text-gray-400 pt-1">
                                            <span>📍 {news.category}</span>
                                            <span>•</span>
                                            {/* 🎯 লিস্টেড নিউজের পাবলিশ টাইম ডাইনামিক করা হলো */}
                                            <span>🕒 {timeAgo(news.createdAt) || news.time}</span>
                                        </div>
                                    </div>

                                    {/* ডান দিক: প্রফেশনাল স্কয়ার থাম্বনেইল ইমেজ */}
                                    <div className="w-24 h-24 md:w-32 md:h-24 shrink-0 overflow-hidden rounded-xl bg-gray-100 border border-gray-50">
                                        <img
                                            src={news.imgSrc || "https://via.placeholder.com/150"}
                                            alt={news.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}

                </div>
            )}
        </div>
    );
}