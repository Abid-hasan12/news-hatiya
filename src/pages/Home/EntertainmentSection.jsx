import React from 'react';

export default function EntertainmentSection() {
  // লিড নিউজের নিচের ২ কলামের সাব-কার্ড ডাটা
  const subCardsData = [
    {
      id: 1,
      title: "নতুন চলচ্চিত্র উৎসব আয়োজনের ঘোষণা",
      desc: "বিশ্বমানের চলচ্চিত্র প্রদর্শনী আসছে শীঘ্রই।",
      imgUrl: "https://images.unsplash.com/photo-1489599849228-ed9c0f06701b?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "তারকা শিল্পীর নতুন গান প্রকাশ পেল",
      desc: "সঙ্গীত শিল্পীর সবচেয়ে আবেগময় গান বেরিয়ে এসেছে।",
      imgUrl: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?auto=format&fit=crop&w=800&q=80"
    }
  ];

  // মাঝখানের কলামের লিস্ট থাম্বনেইল নিউজ ডাটা
  const listNewsData = [
    {
      id: 1,
      title: "জন্মদিনে প্রকাশ পেল লাকী আখন্দের দুই গান",
      imgUrl: "https://images.unsplash.com/photo-1515405295579-ba7b45bda5f3?auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 2,
      title: "নেত্রীর নতুন ছবির ট্রেইলার ভাইরাল",
      imgUrl: "https://images.unsplash.com/photo-1508700115892-45a347ae0e0d?auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 3,
      title: "টেলিভিশন ধারাবাহিকে দুর্দান্ত ট্যুইস্ট আসছে",
      imgUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 4,
      title: "বিখ্যাত চলচ্চিত্র নির্দেশকের নতুন প্রকল্প ঘোষিত",
      imgUrl: "https://images.unsplash.com/photo-1513395970669-90a1b58034cb?auto=format&fit=crop&w=100&q=80"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 border-b border-gray-200">
      {/* Section Heading */}
      <h2 className="text-xl font-bold text-teal-800 text-center mb-6">বিনোদন</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* ================= COLUMN 1 & 2: Main Lead & Sub Cards (Left) ================= */}
        <div className="lg:col-span-2 space-y-4">
          {/* Main Big Lead Card */}
          <article className="bg-white rounded-3xl shadow-sm overflow-hidden group cursor-pointer">
            <div className="overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1200&q=80" 
                alt="Entertainment highlight" 
                className="w-full h-64 object-cover transform group-hover:scale-103 transition-transform duration-300" 
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-teal-800 transition-colors duration-200">
                ফুটবল বিশ্বকাপের পর আসছে 'শেকড়'
              </h3>
              <p className="mt-3 text-gray-600">
                বহু প্রত্যাশিত নতুন ড্রামা সিরিজ এখন দর্শকদের সামনে আসতে চলেছে অভূতপূর্ব গল্প এবং চমৎকার অভিনয়ের মাধ্যমে।
              </p>
              <div className="mt-4 text-gray-500 text-sm">২ ঘন্টা আগে</div>
            </div>
          </article>

          {/* Sub Grid Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-100">
            {subCardsData.map((card) => (
              <article key={card.id} className="bg-white rounded-3xl shadow-sm overflow-hidden flex flex-col group cursor-pointer">
                <div className="overflow-hidden">
                  <img 
                    src={card.imgUrl} 
                    alt={card.title} 
                    className="w-full h-40 object-cover transform group-hover:scale-105 transition-transform duration-200" 
                  />
                </div>
                <div className="p-4 flex-grow">
                  <h4 className="font-bold text-gray-900 group-hover:text-teal-800 transition-colors duration-200 line-clamp-2">
                    {card.title}
                  </h4>
                  <p className="mt-2 text-sm text-gray-500 line-clamp-2">{card.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* ================= COLUMN 3: Middle Thumbnail List ================= */}
        <aside className="bg-white rounded-3xl shadow-sm p-5">
          <div className="space-y-4">
            {listNewsData.map((item) => (
              <article key={item.id} className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0 group cursor-pointer">
                <img 
                  src={item.imgUrl} 
                  alt={item.title} 
                  className="h-16 w-16 object-cover rounded-lg flex-shrink-0" 
                />
                <div>
                  <h4 className="font-bold text-gray-900 group-hover:text-teal-800 transition-colors duration-200 line-clamp-2 text-sm sm:text-base leading-snug">
                    {item.title}
                  </h4>
                </div>
              </article>
            ))}
          </div>
        </aside>

        {/* ================= COLUMN 4: Right Feature Widget ================= */}
        <aside className="lg:col-span-1 bg-white rounded-3xl shadow-sm p-6 flex flex-col justify-between group">
          <div>
            <span className="text-sm font-semibold text-teal-800 uppercase tracking-[0.2em]">ফিচার</span>
            <h3 className="mt-4 text-xl font-bold text-gray-900 group-hover:text-teal-800 transition-colors duration-200">
              বিনোদন বিশেষ সংবাদ
            </h3>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              চলচ্চিত্র, গান, টেলিভিশন এবং শিল্পের সর্বশেষ খবর এবং এক্সক্লুসিভ আপডেট পান এখানে।
            </p>
          </div>
          <div className="mt-6">
            <a 
              href="#"
              className="inline-flex items-center rounded-full bg-teal-800 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-900 transition-colors duration-200 shadow-sm"
            >
              আরও পড়ুন
            </a>
          </div>
        </aside>

      </div>
    </section>
  );
}