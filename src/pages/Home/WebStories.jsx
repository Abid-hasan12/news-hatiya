import React from 'react';

export default function WebStories() {
  // ওয়েব স্টোরিজের ডাইনামিক ডাটা অ্যারে
  const storiesData = [
    {
      id: 1,
      title: "শshort স্টোরিতে আজকের প্রধান ঘটনা",
      imgUrl: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "ইউরোপিয়ান মুক্ত বাজারে নতুন লিড",
      imgUrl: "https://images.unsplash.com/photo-1516910817561-73c1a1f0f84b?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "স্বাস্থ্য সেবা খাতে তাজা অগ্রগতি",
      imgUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "রাজধানীতে নতুন চলচ্চিত্র উৎসব",
      imgUrl: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "টেক নিউজ: নতুন উদ্ভাবন ফিচার",
      imgUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 border-b border-gray-200">
      {/* Section Title */}
      <h2 className="text-xl font-bold text-teal-800 text-center mb-6">ওয়েব স্টোরি</h2>
      
      {/* Scrollable Wrapper */}
      <div 
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {storiesData.map((story) => (
          <a 
            key={story.id}
            href="#"
            className="min-w-[150px] sm:min-w-[180px] md:min-w-[200px] aspect-[3/4] relative overflow-hidden rounded-xl shadow-md snap-start group cursor-pointer"
          >
            {/* Background Image */}
            <img 
              src={story.imgUrl} 
              alt={`ওয়েব স্টোরি ${story.id}`} 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
            
            {/* Layer Icon Top Right */}
            <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm group-hover:bg-teal-800 transition-colors duration-200">
              <i className="fas fa-layer-group text-sm"></i>
            </div>
            
            {/* Story Title */}
            <div className="absolute bottom-3 left-3 right-3 text-white font-bold text-xs sm:text-sm leading-snug">
              {story.title}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}