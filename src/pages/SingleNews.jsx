import React from 'react';
import { MdAccessTime } from 'react-icons/md';
import { FaFacebook, FaTwitter, FaWhatsapp, FaLink } from 'react-icons/fa';
// 🎯 সেন্ট্রাল ডাটা সোর্স এবং timeAgo ইমপোর্ট করা হলো
import { allNews } from '../newsData';
import { timeAgo } from '../utils/timeAgo';

export default function SingleNews({ news, onCategoryClick, onNewsClick }) {

  const handleNewsClick = (newsItem) => {
    if (onNewsClick) onNewsClick(newsItem);
  };

  // যদি কোনো কারণে নিউজ ডেটা না আসে, তাহলে এমারজেন্সি ফলব্যাক
  if (!news) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-700">খবরটি পাওয়া যায়নি!</h2>
        <button
          onClick={() => onCategoryClick && onCategoryClick('সর্বশেষ')}
          className="mt-4 px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 font-bold transition-all"
        >
          হোম পেজে ফিরে যান
        </button>
      </div>
    );
  }

  // 🎯 ডাইনামিক সাইডবার ডাটা: একই ক্যাটাগরির অন্য ৪টি খবর (বর্তমান খবরটি বাদে)
  const normalize = (str) => str ? str.replace('য়া', 'যা').trim() : '';
  const relatedCategoryNews = allNews
    ? allNews.filter(item => normalize(item.category) === normalize(news.category) && item.id !== news.id).slice(0, 4)
    : [];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-white">
      {/* 🗺️ প্রফেশনাল ব্রেডক্রাম্ব */}
      <div className="text-sm text-gray-500 mb-6 font-semibold flex items-center gap-2">
        <span className="cursor-pointer hover:text-red-600 transition-colors" onClick={() => onCategoryClick && onCategoryClick('সর্বশেষ')}>হোম</span>
        <span className="text-gray-300">»</span>
        <span className="cursor-pointer hover:text-red-600 transition-colors text-red-600" onClick={() => onCategoryClick && onCategoryClick(news.category)}>{news.category}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* 📝 মেইন কলাম: খবরের বিস্তারিত (৮ কলাম) */}
        <div className="lg:col-span-8 space-y-6">

          {/* শিরোনাম */}
          <h1 className="text-2xl md:text-4xl font-black text-gray-950 leading-tight tracking-tight">
            {news.title}
          </h1>

          {/* মেটা ডেটা: সময় এবং সোশ্যাল শেয়ার */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-y border-gray-100 py-4 gap-4">
            <div className="flex items-center text-gray-500 text-xs md:text-sm font-bold gap-1.5">
              <MdAccessTime className="text-lg text-gray-400" />
              {/* 🎯 টাইমস্ট্যাম্প ডাইনামিক করা হলো */}
              <span>প্রকাশিত: {timeAgo(news.createdAt) || news.time || 'কিছুক্ষণ আগে'}</span>
            </div>

            {/* সোশ্যাল শেয়ার বাটন */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">শেয়ার:</span>
              <button className="text-blue-600 hover:scale-110 transition-transform bg-blue-50 p-2 rounded-full"><FaFacebook size={18} /></button>
              <button className="text-green-500 hover:scale-110 transition-transform bg-green-50 p-2 rounded-full"><FaWhatsapp size={18} /></button>
              <button className="text-blue-400 hover:scale-110 transition-transform bg-blue-50 p-2 rounded-full"><FaTwitter size={18} /></button>
              <button className="text-gray-600 hover:scale-110 transition-transform bg-gray-50 p-2 rounded-full"><FaLink size={16} /></button>
            </div>
          </div>

          {/* মূল ছবি */}
          {(news.imgSrc || news.image) && (
            <div className="overflow-hidden rounded-2xl shadow-sm border border-gray-100">
              <img
                src={news.imgSrc || news.image}
                alt={news.title}
                className="w-full h-auto max-h-[480px] object-cover"
              />
              <p className="text-xs text-gray-400 py-2.5 bg-gray-50 text-center italic font-medium border-t border-gray-100">
                {news.caption || "ছবি: সংগৃহীত"}
              </p>
            </div>
          )}

          {/* মূল বিস্তারিত খবর (সম্পূর্ণ newsData.js থেকে আসবে) */}
          <div className="prose max-w-none text-gray-800 text-base md:text-lg leading-relaxed md:leading-loose font-normal space-y-6">
            {news.desc || news.description ? (
              <p className="text-gray-900 whitespace-pre-line">
                {news.desc || news.description}
              </p>
            ) : (
              <p className="italic text-gray-400">বিস্তারিত খবরটি পাওয়া যায়নি।</p>
            )}
          </div>
        </div>

        {/* 👉 সাইডবার: আরও খবর বা বিজ্ঞাপন (৪ কলাম) */}
        <div className="lg:col-span-4 space-y-8">
          <div className="sticky top-24 space-y-6">
            {/* সেকশন টাইটেল */}
            <div className="flex items-center gap-2 border-b-2 border-red-600 pb-3">
              <span className="w-2 h-4 bg-red-600 block rounded-sm"></span>
              <h2 className="text-lg font-black text-gray-950">আরও খবর</h2>
            </div>

            {/* 🎯 সাইডবার রিয়েল ডাইনামিক লিস্ট */}
            <div className="flex flex-col gap-4">
              {relatedCategoryNews.length > 0 ? (
                relatedCategoryNews.map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => handleNewsClick(item)}
                    className="flex w-full gap-4 group cursor-pointer border-b border-gray-100 pb-4 items-start text-left"
                  >
                    <div className="w-24 h-16 shrink-0 overflow-hidden rounded-xl bg-gray-50 border border-gray-100">
                      <img
                        src={item.imgSrc || item.image || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500"}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                    </div>
                    <div className="flex flex-col justify-between min-h-[64px]">
                      <h3 className="text-sm font-bold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-[11px] font-semibold text-gray-400 mt-1 flex items-center gap-1">
                        <span>🕒 {timeAgo(item.createdAt) || item.time || 'কিছুক্ষণ আগে'}</span>
                      </p>
                    </div>
                  </button>
                ))
              ) : (
                <p className="text-sm text-gray-400 italic">এই মুহূর্তে অন্য কোনো খবর নেই।</p>
              )}
            </div>

            {/* বিজ্ঞাপনের জন্য একটি স্পেস */}
            <div className="bg-gray-50 h-64 flex flex-col items-center justify-center text-gray-400 border border-dashed border-gray-200 rounded-2xl text-xs font-bold tracking-wider uppercase">
              <span>Advertisement</span>
              <span className="text-[10px] text-gray-300 mt-1">৩০০ x ২৫০</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}