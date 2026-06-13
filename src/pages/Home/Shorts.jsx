import React from 'react';

export default function Shorts() {
  // শর্টস ভিডিওর ডাইনামিক ডাটা অ্যারে
  const shortsData = [
    { id: 1, title: "পদ্মা সেতুতে টোল রেকর্ড", placeholderText: "Short 1" },
    { id: 2, title: "প্রধানমন্ত্রীর হাসপাতাল উদ্বোধন", placeholderText: "Short 2" },
    { id: 3, title: "দেশের বাণিজ্যে নতুন অগ্রগতি", placeholderText: "Short 3" },
    { id: 4, title: "নতুন সিনেমার পোস্টার প্রকাশ", placeholderText: "Short 4" },
    { id: 5, title: "ম্যাচে দুর্দান্ত জয়", placeholderText: "Short 5" },
    { id: 6, title: "স্বাস্থ্য শহরে দ্রুত ছুটে চলেছে", placeholderText: "Short 6" }
  ];

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
              src={`https://via.placeholder.com/360x640?text=${short.placeholderText}`} 
              alt={`শর্ট ${short.id}`} 
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