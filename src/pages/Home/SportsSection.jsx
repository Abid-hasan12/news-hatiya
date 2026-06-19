import React from 'react';
// 🎯 তৈরি করা timeAgo ফাংশনটি ইমপোর্ট করা হলো
import { timeAgo } from '../../utils/timeAgo';

// প্রপ্স হিসেবে leadSports, subGridSports, sidebarSports এবং featureSports রিসিভ করা হচ্ছে
export default function SportsSection({ leadSports, subGridSports, sidebarSports, featureSports, onSeeAllClick }) {

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 border-b border-gray-200">
      {/* Section Heading */}
      <h2 className="text-xl font-bold text-teal-800 text-center mb-6">খেলাধুলা</h2>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* ================= COLUMN 1 & 2: Main Lead & Bottom Grid (Left) ================= */}
        <div className="lg:col-span-2 space-y-4">

          {/* Main Big Lead Sports News */}
          {leadSports && (
            <article className="bg-white rounded-3xl shadow-sm overflow-hidden group cursor-pointer">
              <div className="overflow-hidden">
                <img
                  src={leadSports.imgSrc}
                  alt={leadSports.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-200">
                  {leadSports.title}
                </h3>
                <p className="mt-3 text-gray-600">
                  {leadSports.desc}
                </p>
                {/* 🎯 মেইন স্পোর্টস লিড নিউজের পাবলিশ টাইম ডাইনামিক করা হলো */}
                <div className="mt-4 text-gray-500 text-sm">
                  🕒 {timeAgo(leadSports.createdAt) || leadSports.time}
                </div>
              </div>
            </article>
          )}

          {/* Bottom 2-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-100">
            {subGridSports?.map((item) => (
              <article key={item.id} className="bg-white rounded-3xl shadow-sm overflow-hidden flex flex-col justify-between group cursor-pointer">
                <div>
                  <div className="overflow-hidden">
                    <img
                      src={item.imgSrc}
                      alt={item.title}
                      className="w-full h-40 object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-200">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm text-gray-500 line-clamp-2">{item.desc}</p>
                  </div>
                </div>
                {/* 🎯 ফিউচার ব্যাকআপ: সাব-গ্রিড কার্ডে যদি টাইমস্ট্যাম্প দেখাতে চাও */}
                {item.createdAt && (
                  <div className="px-4 pb-4 text-[11px] text-gray-400">
                    🕒 {timeAgo(item.createdAt)}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>

        {/* ================= COLUMN 3: Headline Sidebar (Middle) ================= */}
        <aside className="bg-white rounded-3xl shadow-sm p-5">
          <div className="space-y-4">
            {sidebarSports?.map((item) => (
              <article key={item.id} className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0 group cursor-pointer">
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="h-16 w-16 object-cover rounded-lg shrink-0 transform group-hover:scale-105 transition-transform duration-200"
                />
                <div className="space-y-1">
                  <h4 className="font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-200 line-clamp-2 text-sm leading-snug">
                    {item.title}
                  </h4>
                  {/* 🎯 ফিউচার ব্যাকআপ: সাইডবার স্পোর্টস লিস্টে টাইমস্ট্যাম্প */}
                  {item.createdAt && (
                    <span className="block text-[10px] text-gray-400">
                      {timeAgo(item.createdAt)}
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </aside>

        {/* ================= COLUMN 4: Feature Highlight (Right) ================= */}
        {featureSports && (
          <aside className="lg:col-span-1 bg-white rounded-3xl shadow-sm p-6 flex flex-col justify-between group">
            <div>
              <span className="text-sm font-semibold text-teal-800 uppercase tracking-[0.2em] bg-teal-50 px-3 py-1 rounded-full">
                {featureSports.featureTag}
              </span>
              <h3 className="mt-4 text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-200">
                {featureSports.title}
              </h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {featureSports.desc}
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-2">
              {/* 🎯 ফিউচার ব্যাকআপ: ফিচার হাইলাইটে টাইমস্ট্যাম্প */}
              {featureSports.createdAt && (
                <span className="text-[11px] text-gray-400 block mb-2">
                  🕒 {timeAgo(featureSports.createdAt)}
                </span>
              )}
              <div>
                <a
                  href="#"
                  className="inline-flex items-center rounded-full bg-teal-800 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-900 transition-colors duration-200 shadow-sm"
                >
                  আরও পড়ুন
                </a>
              </div>
            </div>
          </aside>
        )}

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