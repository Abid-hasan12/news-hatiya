import React from 'react';
// 🎯 তৈরি করা timeAgo ফাংশনটি ইমপোর্ট করা হলো
import { timeAgo } from '../../utils/timeAgo';

// প্রপ্স হিসেবে printStories রিসিভ করা হচ্ছে
export default function PrintEdition({ printStories, onSeeAllClick }) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6 border-b border-gray-200">
      {/* Section Title */}
      <h2 className="text-xl font-bold text-teal-800 text-center mb-6">ছাপা সংস্করণ</h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {printStories?.map((story) => (
          <article key={story.id} className="bg-white rounded-3xl shadow-sm overflow-hidden group cursor-pointer">
            {/* Image Wrap */}
            <div className="overflow-hidden rounded-lg shadow-sm mb-3">
              <img
                src={story.imgSrc}
                alt={story.title}
                className="w-full h-44 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content Wrap */}
            <div className="px-5 pb-5">
              <h3 className="text-base font-bold text-gray-900 leading-snug group-hover:text-teal-800 transition-colors duration-200 line-clamp-2">
                {story.title}
              </h3>
              {/* 🎯 ছাপা সংস্করণের পাবলিশ টাইম ডাইনামিক করা হলো */}
              <div className="mt-2 text-gray-500 text-xs flex items-center gap-1">
                <i className="far fa-clock"></i> {timeAgo(story.createdAt) || story.time}
              </div>
            </div>
          </article>
        ))}
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