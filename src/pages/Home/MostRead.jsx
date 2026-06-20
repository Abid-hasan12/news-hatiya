import React from 'react';
// 🎯 তৈরি করা timeAgo ফাংশনটি ইমপোর্ট করা হলো
import { timeAgo } from '../../utils/timeAgo';

// প্রপ্স হিসেবে mostReadData, mainFactCheck এবং factCheckList রিসিভ করা হচ্ছে
export default function MostRead({ mostReadData, mainFactCheck, factCheckList, onSeeAllClick, onNewsClick }) {
  const handleNewsClick = (newsItem) => {
    if (onNewsClick) onNewsClick(newsItem);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8 border-b border-gray-200">

      {/* ================= MOST READ SECTION ================= */}
      <article className="bg-white rounded-3xl shadow-sm p-6">
        <div className="border-b border-gray-200 pb-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900">সর্বাধিক পঠিত</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {mostReadData?.map((item) => (
            <button type="button" key={item.id} onClick={() => handleNewsClick(item)} className="flex w-full items-start gap-3 group cursor-pointer py-1 text-left">
              <div className="text-4xl font-bold text-gray-300 group-hover:text-red-600 transition-colors duration-200">
                {item.serialId}
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-200 line-clamp-2">
                  {item.title}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </article>

      {/* ================= FACT CHECK SECTION ================= */}
      <article className="bg-white rounded-3xl shadow-sm p-6">
        <div className="border-b border-gray-200 pb-4">
          <h2 className="text-2xl font-bold text-gray-900">ফ্যাক্টচেক</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">

          {/* Main Big Fact Check News */}
          {mainFactCheck && (
            <div onClick={() => handleNewsClick(mainFactCheck)} className="md:col-span-2 bg-gray-50 rounded-3xl overflow-hidden shadow-sm group cursor-pointer">
              <div className="relative overflow-hidden">
                <img
                  src={mainFactCheck.imgSrc}
                  alt={mainFactCheck.title}
                  className="w-full h-52 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute left-4 top-4 inline-flex items-center rounded-full bg-red-600 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-white">
                  Fact Check
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-200">
                  {mainFactCheck.title}
                </h3>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {mainFactCheck.desc}
                </p>
                {/* 🎯 মেইন ফ্যাক্টচেক নিউজের পাবলিশ টাইম ডাইনামিক করা হলো */}
                <div className="mt-4 text-gray-500 text-sm">
                  {timeAgo(mainFactCheck.createdAt) || mainFactCheck.time}
                </div>
              </div>
            </div>
          )}

          {/* Fact Check Side List */}
          <div className="space-y-4">
            {factCheckList?.map((item) => (
              <button type="button" key={item.id} onClick={() => handleNewsClick(item)} className="flex w-full items-start gap-3 border border-gray-100 rounded-3xl p-3 hover:border-red-100 transition-colors duration-200 group cursor-pointer text-left">
                <img
                  src={item.imgSrc || item.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(item.title || 'News')}&background=random&size=80`}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-xl shrink-0"
                />
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-200 line-clamp-2">
                    {item.title}
                  </h4>
                  {/* 🎯 সাইডবার ফ্যাক্টচেক লিস্টের খবরের টাইম ডাইনামিক করা হলো */}
                  <p className="mt-2 text-xs text-gray-500">
                    {timeAgo(item.createdAt) || item.time}
                  </p>
                </div>
              </button>
            ))}
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
      </article>
    </section>
  );
}