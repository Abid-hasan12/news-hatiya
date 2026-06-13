import React from 'react';

export default function SportsSection() {
  // লিড নিউজের ঠিক নিচের ২টি গ্রিড কার্ডের ডাটা
  const subGridSports = [
    {
      id: 1,
      title: "বাংলাদেশ ক্রিকেট দল নতুন পরিকল্পনায়",
      desc: "প্রস্তুতি শিবিরের নতুন সূচি ঘোষণা করা হয়েছে।",
      imgUrl: "https://images.unsplash.com/photo-1495562569060-2eec283d3391?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "ফুটবল লিগে নতুন দশকের শুরু",
      desc: "শীর্ষ দলগুলোর মধ্যে উত্তেজনাপূর্ণ টক্কর অপেক্ষা করছে।",
      imgUrl: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=800&q=80"
    }
  ];

  // মাঝখানের কলামের ৪টি হেডলাইন নিউজের ডাটা
  const sidebarSports = [
    { id: 1, title: "নির্বাচনের পরেই বিসিবি পরিচালকের পদত্যাগ", imgUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=100&q=80" },
    { id: 2, title: "নতুন কোচিং স্টাফ নিয়ে আলোচনায় দেশ", imgUrl: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=100&q=80" },
    { id: 3, title: "আন্তর্জাতিক টুর্নামেন্টে বাংলাদেশের দারুণ শুরু", imgUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=100&q=80" },
    { id: 4, title: "আইপিএল নিলামে বড় চমক অপেক্ষা করছে", imgUrl: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=100&q=80" }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 border-b border-gray-200">
      {/* Section Heading */}
      <h2 className="text-xl font-bold text-teal-800 text-center mb-6">খেলাধুলা</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* ================= COLUMN 1 & 2: Main Lead & Bottom Grid (Left) ================= */}
        <div className="lg:col-span-2 space-y-4">
          
          {/* Main Big Lead Sports News */}
          <article className="bg-white rounded-3xl shadow-sm overflow-hidden group cursor-pointer">
            <div className="overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80" 
                alt="Sports highlight" 
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-200">
                এবারও আফগানিস্তানকে দুমড়ে-মুচড়ে দিল ভারত
              </h3>
              <p className="mt-3 text-gray-600">
                ভারতের নির্ভরযোগ্য বোলিং আক্রমণ আর শান্ততম ব্যাটিং ধারণায় ম্যাচটি স্বচ্ছন্দে জয় করে নিল নিরাশ আফগান বোলারদের বিরুদ্ধে।
              </p>
              <div className="mt-4 text-gray-500 text-sm">১ ঘণ্টা আগে</div>
            </div>
          </article>

          {/* Bottom 2-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-100">
            {subGridSports.map((item) => (
              <article key={item.id} className="bg-white rounded-3xl shadow-sm overflow-hidden flex flex-col group cursor-pointer">
                <div className="overflow-hidden">
                  <img 
                    src={item.imgUrl} 
                    alt={item.title} 
                    className="w-full h-40 object-cover transform group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <h4 className="font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-200">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm text-gray-500 line-clamp-2">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* ================= COLUMN 3: Headline Sidebar (Middle) ================= */}
        <aside className="bg-white rounded-3xl shadow-sm p-5">
          <div className="space-y-4">
            {sidebarSports.map((item) => (
              <article key={item.id} className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0 group cursor-pointer">
                <img 
                  src={item.imgUrl} 
                  alt={item.title} 
                  className="h-16 w-16 object-cover rounded-lg shrink-0 transform group-hover:scale-105 transition-transform duration-200" 
                />
                <div>
                  <h4 className="font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-200 line-clamp-2">
                    {item.title}
                  </h4>
                </div>
              </article>
            ))}
          </div>
        </aside>

        {/* ================= COLUMN 4: Feature Highlight (Right) ================= */}
        <aside className="lg:col-span-1 bg-white rounded-3xl shadow-sm p-6 flex flex-col justify-between group">
          <div>
            <span className="text-sm font-semibold text-teal-800 uppercase tracking-[0.2em] bg-teal-50 px-3 py-1 rounded-full">
              ফিচার
            </span>
            <h3 className="mt-4 text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-200">
              খেলাধুলার বিশেষ প্রতিবেদন
            </h3>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              গেমের প্রতিটি মুহূর্ত, খেলোয়াড়ের প্রস্তুতি এবং পরবর্তী বড় ম্যাচের বিশ্লেষণ এখানে পাবেন।
            </p>
          </div>
          <div className="mt-6">
            <a 
              href="#" 
              className="inline-flex items-center rounded-full bg-teal-800 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-900 transition-colors duration-200 shadow-sm"
            >
              আরও পড়ুন
            </a>
          </div>
        </aside>

      </div>
    </section>
  );
}