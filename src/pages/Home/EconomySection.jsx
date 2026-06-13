import React from 'react';

export default function EconomySection() {
  // মাঝখানের কলামের ২টি ইমেজ সহ নিউজের ডাটা
  const middleNewsData = [
    {
      id: 1,
      title: "আপত্তি সত্ত্বেও চীনা শিল্পাঞ্চল প্রকল্প উঠছে একনেকে",
      time: "৪৫ মিনিট আগে",
      imgUrl: "https://images.unsplash.com/photo-1519659528534-c5c0a485f0f3?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "বাজারে চালের দাম সামান্য কমেছে, ক্রেতাদের উচ্ছ্বাস",
      time: "১ ঘণ্টা আগে",
      imgUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80"
    }
  ];

  // ডানদিকের কলামের টেক্সট-বেসড অ্যানালাইসিস কার্ডের ডাটা
  const textAsideData = [
    {
      id: 1,
      badgeText: "বিশেষ",
      badgeColor: "bg-teal-100 text-teal-800",
      title: "বিগত সরকারের ভুল নীতির কারণে বাণিজ্য ঘাটতি বেড়েছে: সংসদে মন্ত্রী",
      desc: "এই বছরের প্রথম ত্রৈমাসিকে মুদ্রানীতির পরিবর্তন এবং আমদানিতে অতিরিক্ত নির্ভরতা ঘাটতি বাড়ানোর মূল কারণ বলে মনে করা হচ্ছে।"
    },
    {
      id: 2,
      badgeText: "হাইলাইট",
      badgeColor: "bg-amber-100 text-amber-800",
      title: "বিনিয়োগকারীরা আশা করছেন নতুন বাজেট সেক্টরকে শক্তিশালী করবে",
      desc: "শেয়ারবাজার ও বাণিজ্য বিশ্লেষকরা বলছেন, কর ছাড় ও প্রণোদনা নীতির লক্ষণ নতুন বিনিয়োগ আকৃষ্ট করবে।"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 border-b border-gray-200">
      {/* Section Heading */}
      <h2 className="text-xl font-bold text-teal-800 text-center mb-6">অর্থনীতি</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* ================= COLUMN 1 & 2: Featured Lead News (Left) ================= */}
        <article className="lg:col-span-2 bg-white rounded-3xl shadow-sm overflow-hidden group cursor-pointer">
          <div className="overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=1200&q=80" 
              alt="Finance news" 
              className="w-full h-auto transform group-hover:scale-103 transition-transform duration-300" 
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-200">
              পরোক্ষ করনির্ভরতাই রাজস্বের ভরসা
            </h3>
            <p className="mt-4 text-gray-600">
              সরকার বাজেট আলোচনা চলছে, যেখানে কর নীতির পরিবর্তন আর পরোক্ষ করের ওপর নির্ভরতা অর্থনীতিকে নতুন একটি গতিশীলতা দিতে পারে।
            </p>
            <div className="mt-5 text-gray-500 text-sm">৩ ঘণ্টা আগে</div>
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
                <h4 className="font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-200 line-clamp-2">
                  {item.title}
                </h4>
                <div className="mt-3 text-gray-500 text-sm">{item.time}</div>
              </div>
            </article>
          ))}
        </div>

        {/* ================= COLUMN 4: Right Side Text Cards ================= */}
        <aside className="lg:col-span-1 space-y-4">
          {textAsideData.map((item) => (
            <article key={item.id} className="bg-white rounded-3xl shadow-sm border border-gray-100 p-5 group cursor-pointer hover:border-teal-100 transition-colors duration-200">
              <div className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${item.badgeColor}`}>
                {item.badgeText}
              </div>
              <h4 className="mt-4 text-base font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-200 leading-snug">
                {item.title}
              </h4>
              <p className="mt-3 text-sm text-gray-500 line-clamp-4">
                {item.desc}
              </p>
            </article>
          ))}
        </aside>

      </div>
    </section>
  );
}