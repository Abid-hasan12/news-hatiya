import React from 'react';

export default function PrintEdition() {
  // ছাপা সংস্করণের ডাইনামিক ডাটা অ্যারে
  const printStories = [
    {
      id: 1,
      title: "টিকা না নেওয়া শিশুরা হামে বেশি আক্রান্ত হচ্ছে",
      time: "৩ ঘণ্টা আগে",
      imgUrl: "https://images.unsplash.com/photo-1581093448792-1d7b4688f570?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "ছাড়পত্রের জটিলতায় আটকা হামের জিনোম সিকোয়েন্সিং",
      time: "৩ ঘণ্টা আগে",
      imgUrl: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "নতুন উদ্যোগে অ্যান্টি-ভ্যাকসিনCampaign কমানোর লক্ষ্যে",
      time: "৩ ঘণ্টা আগে",
      imgUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "চিকিৎসা সরঞ্জামের সংকটে নতুন প্রার্থী হাসপাতালের উদ্বোধন",
      time: "৩ ঘণ্টা আগে",
      imgUrl: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 border-b border-gray-200">
      {/* Section Title */}
      <h2 className="text-xl font-bold text-teal-800 text-center mb-6">ছাপা সংস্করণ</h2>
      
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {printStories.map((story) => (
          <article key={story.id} className="bg-white rounded-3xl shadow-sm overflow-hidden group cursor-pointer">
            {/* Image Wrap */}
            <div className="overflow-hidden rounded-lg shadow-sm mb-3">
              <img 
                src={story.imgUrl} 
                alt={`Print story ${story.id}`} 
                className="w-full h-44 object-cover transform group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            
            {/* Content Wrap */}
            <div className="px-5 pb-5">
              <h3 className="text-base font-bold text-gray-900 leading-snug group-hover:text-teal-800 transition-colors duration-200 line-clamp-2">
                {story.title}
              </h3>
              <div className="mt-2 text-gray-500 text-xs flex items-center gap-1">
                <i className="far fa-clock"></i> {story.time}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}