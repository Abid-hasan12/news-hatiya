import React from 'react';
// 🎯 তৈরি করা timeAgo ফাংশনটি ইমপোর্ট করা হলো
import { timeAgo } from '../../utils/timeAgo';

// প্রপ্স হিসেবে storiesData রিসিভ করা হচ্ছে
export default function WebStories({ storiesData, onSeeAllClick }) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8 border-b border-gray-200">
      {/* Section Title */}
      <h2 className="text-xl font-bold text-teal-800 text-center mb-6">ওয়েব স্টোরি</h2>

      {/* Scrollable Wrapper */}
      <div
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {storiesData?.map((story) => (
          <a
            key={story.id}
            href="#"
            className="min-w-[150px] sm:min-w-[180px] md:min-w-[200px] aspect-[3/4] relative overflow-hidden rounded-xl shadow-md snap-start group cursor-pointer"
          >
            {/* Background Image */}
            <img
              src={story.imgSrc}
              alt={story.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>

            {/* Layer Icon Top Right */}
            <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm group-hover:bg-teal-800 transition-colors duration-200">
              <i className="fas fa-layer-group text-sm"></i>
            </div>

            {/* Story Title & Optional Time */}
            <div className="absolute bottom-3 left-3 right-3 text-white flex flex-col gap-1">
              <div className="font-bold text-xs sm:text-sm leading-snug">
                {story.title}
              </div>
              {/* 🎯 ফিউচার ব্যাকআপ: এপিআই থেকে ডেটা আসলে স্টোরির নিচে খুব হালকা করে টাইম দেখাবে */}
              {story.createdAt && (
                <span className="text-[10px] text-gray-300/80 font-normal">
                  {timeAgo(story.createdAt)}
                </span>
              )}
            </div>
          </a>
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