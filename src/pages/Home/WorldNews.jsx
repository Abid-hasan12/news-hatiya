import React from 'react';

export default function WorldNews() {
  // মাঝখানের কলামের ২টি ইমেজ সহ নিউজের ডাটা
  const middleNewsData = [
    {
      id: 1,
      title: "এবার ট্রাম্পের অনুরোধে ইরানে হামলা স্থগিত করল ইসরায়েল",
      time: "৫৮ মিনিট আগে",
      imgUrl: "https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "ইউরোপীয় ইউনিয়নের বৈঠকে নতুন নিরাপত্তা সিদ্ধান্ত নেওয়া হয়েছে",
      time: "১ ঘণ্টা আগে",
      imgUrl: "https://images.unsplash.com/photo-1518110836750-0f8109f1262c?auto=format&fit=crop&w=800&q=80"
    }
  ];

  // ডানদিকের কলামের বুলেটিন বা ট্যাগ নিউজের ডাটা
  const bulletNewsData = [
    {
      id: 1,
      label: "ট্যাগ",
      title: "চীনের বন্দরগুলিতে সামরিক উপস্থিতি বাড়ছে"
    },
    {
      id: 2,
      label: "বিশেষ",
      title: "জাপান ও দক্ষিণ কোরিয়া নতুন সমঝোতা নিয়ে আলোচনা শুরু করছে"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 border-b border-gray-200">
      {/* Section Heading */}
      <h2 className="text-xl font-bold text-teal-800 text-center mb-6">বিশ্ব</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* ================= COLUMN 1 & 2: Main World Lead News (Left) ================= */}
        <article className="lg:col-span-2 bg-white rounded-3xl shadow-sm overflow-hidden group cursor-pointer">
          <div className="overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80" 
              alt="World news highlight" 
              className="w-full h-64 object-cover transform group-hover:scale-103 transition-transform duration-300" 
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-teal-800 transition-colors duration-200">
              ইরানগামী পালাউয়ের তেল ট্যাঙ্কারে মার্কিন হামলা
            </h3>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              মাঝবর্তী অঞ্চলে চলমান উত্তেজনা নতুন মাত্রা পেয়েছে যখন কূটনৈতিক প্রচেষ্টা ব্যর্থ হওয়ার পর এই হামলা অনুষ্ঠিত হয়েছে।
            </p>
            <div className="mt-4 text-gray-500 text-sm">৩২ মিনিট আগে</div>
          </div>
        </article>

        {/* ================= COLUMN 3: Middle Image Cards ================= */}
        <div className="lg:col-span-1 space-y-4">
          {middleNewsData.map((item) => (
            <article key={item.id} className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-50 group cursor-pointer">
              <div className="overflow-hidden">
                <img 
                  src={item.imgUrl} 
                  alt={item.title} 
                  className="w-full h-44 object-cover transform group-hover:scale-105 transition-transform duration-200" 
                />
              </div>
              <div className="p-5">
                <h4 className="font-bold text-gray-900 group-hover:text-teal-800 transition-colors duration-200 line-clamp-2 text-base">
                  {item.title}
                </h4>
                <div className="mt-3 text-gray-500 text-sm">{item.time}</div>
              </div>
            </article>
          ))}
        </div>

        {/* ================= COLUMN 4: Right Side Bullet News ================= */}
        <aside className="lg:col-span-1 bg-white rounded-3xl shadow-sm p-6 space-y-6">
          {bulletNewsData.map((item, idx) => (
            <div 
              key={item.id} 
              className={`group cursor-pointer ${idx !== bulletNewsData.length - 1 ? 'pb-5 border-b border-gray-100' : ''}`}
            >
              <div className="text-amber-600 font-bold mb-1 text-sm">{item.label}</div>
              <h4 className="font-bold text-gray-900 group-hover:text-teal-800 transition-colors duration-200 text-base leading-snug">
                {item.title}
              </h4>
            </div>
          ))}
        </aside>

      </div>
    </section>
  );
}