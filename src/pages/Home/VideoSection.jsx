import React from 'react';

export default function VideoSection() {
  // মাঝখানের কলামের ৩টি ছোট ভিডিওর ডাটা অ্যারে
  const listVideos = [
    {
      id: 1,
      title: "শুরুর সেঞ্চুরি, মাঠে হৈ-চৈ",
      time: "২ ঘণ্টা আগে",
      imgUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 2,
      title: "সেরা সাকসেস স্টোরি এখন অনলাইন",
      time: "৩ ঘণ্টা আগে",
      imgUrl: "https://images.unsplash.com/photo-1520583457224-ebb3d1c5d74a?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 3,
      title: "শৈত্যপ্রবাহে শহরের রাস্তায় ভিড়",
      time: "৫ ঘণ্টা আগে",
      imgUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 border-b border-gray-200">
      {/* Section Title */}
      <h2 className="text-xl font-bold text-teal-800 text-center mb-6">ভিডিও</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* ================= COLUMN 1: Featured Big Video (Left) ================= */}
        <article className="lg:col-span-2 bg-white rounded-3xl shadow-sm overflow-hidden group cursor-pointer">
          <div className="relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80" 
              alt="Featured video" 
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300" 
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/80 text-gray-900 shadow-lg transform group-hover:scale-110 transition-transform">
                <i className="fas fa-play text-2xl pl-1"></i>
              </div>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-900 leading-tight group-hover:text-red-600 transition-colors">
              নগুলোর মাঠে দারুণ খেলা, দর্শকদের মন কাড়ল
            </h3>
            <p className="mt-3 text-gray-600">মাঠের প্রতিটি মুহূর্তে ছিল উত্তেজনার গান।</p>
            <div className="mt-4 text-gray-500 text-sm">৪ ঘণ্টা আগে</div>
          </div>
        </article>

        {/* ================= COLUMN 2: Video List (Middle) ================= */}
        <div className="lg:col-span-1 space-y-4">
          {listVideos.map((video) => (
            <article key={video.id} className="flex gap-3 pb-3 border-b border-gray-100 last:border-b-0 group cursor-pointer">
              <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl">
                <img 
                  src={video.imgUrl} 
                  alt={video.title} 
                  className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-200" 
                />
                {/* Small Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <i className="fas fa-play text-white text-xs"></i>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2">
                  {video.title}
                </h4>
                <p className="mt-2 text-xs text-gray-500">{video.time}</p>
              </div>
            </article>
          ))}
        </div>

        {/* ================= COLUMN 3: Analysis Card (Right) ================= */}
        <article className="lg:col-span-1 bg-white rounded-3xl shadow-sm overflow-hidden group cursor-pointer flex flex-col justify-between">
          <div>
            <div className="overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=800&q=80" 
                alt="Video news" 
                className="w-full h-44 object-cover transform group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <div className="p-6">
              <h3 className="text-base font-bold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2">
                ব্রাজিল না আর্জেন্টিনা, কার দিকে ঝুঁকছে সমর্থকরা
              </h3>
            </div>
          </div>
          <div className="px-6 pb-6">
            <p className="text-sm font-semibold text-orange-600 bg-orange-50 inline-block px-3 py-1 rounded-full">
              বিশেষ বিশ্লেষণ
            </p>
          </div>
        </article>

      </div>
    </section>
  );
}