import React from 'react';

// প্রপ্স হিসেবে shortsData রিসিভ করা হচ্ছে
export default function Shorts({ shortsData }) {

  if (!shortsData || shortsData.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 py-6 border-b border-gray-200">
      {/* Title */}
      <h2 className="text-xl font-bold text-teal-800 text-center mb-6">শর্টস</h2>

      {/* Scrollable Container */}
      <div
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {shortsData.map((short) => (
          <a
            key={short.id}
            href="#"
            className="min-w-[180px] md:min-w-[220px] aspect-[9/16] relative overflow-hidden rounded-xl shadow-md snap-start group cursor-pointer"
          >
            {/* Thumbnail Image */}
            <img
              src={`https://via.placeholder.com/360x640?text=${short.placeholderText || 'Short'}`}
              alt={short.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Dark Gradient Overlay */}
            <div className="bg-gradient-to-t from-black/80 via-transparent to-transparent absolute inset-0"></div>

            {/* Play Button Icon Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <i className="fas fa-play-circle text-white text-5xl opacity-90 group-hover:scale-110 transition-transform duration-200"></i>
            </div>

            {/* Video Title */}
            <div className="absolute bottom-3 left-3 right-3 text-white font-bold text-sm leading-snug">
              {short.title}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}