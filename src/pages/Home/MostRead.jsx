import React from 'react';

export default function MostRead() {
  // সর্বাধিক পঠিত নিউজের ডাটা অ্যারে
  const mostReadData = [
    { id: "১", title: "রাজধানীর ভাড়া নীতিতে নতুন পরিবর্তন" },
    { id: "২", title: "বিদ্যুৎ বিল কমানোর সুপারিশ" },
    { id: "৩", title: "নতুন কর নীতির বিস্তারিত ঘোষণা" },
    { id: "৪", title: "শিক্ষা খাতে বাজেট বৃদ্ধির आश्वासन" },
    { id: "৫", title: "করোনা আপডেটে নতুন নির্দেশনা" },
    { id: "৬", title: "সড়ক নিরাপত্তায় এক সপ্তাহের অভিযান" }
  ];

  // ফ্যাক্টচেকের সাইড লিস্টের ডাটা অ্যারে
  const factCheckListData = [
    { id: 1, title: "৬০% political দাবি ভিত্তিহীন", time: "৪৫ মিনিট আগে", placeholder: "F1" },
    { id: 2, title: "স্বাস্থ্য রিপোর্টের পুরাতন ছবি চালান", time: "২ ঘণ্টা আগে", placeholder: "F2" },
    { id: 3, title: "অর্থনৈতিক ঘোষণা সম্পূর্ণ ভুল তথ্য", time: "৩ ঘণ্টা আগে", placeholder: "F3" }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8 border-b border-gray-200">
      
      {/* ================= MOST READ SECTION ================= */}
      <article className="bg-white rounded-3xl shadow-sm p-6">
        <div className="border-b border-gray-200 pb-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900">সর্বাধিক পঠিত</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {mostReadData.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 group cursor-pointer py-1">
              <div className="text-4xl font-bold text-gray-300 group-hover:text-red-600 transition-colors duration-200">
                {item.id}
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-200 line-clamp-2">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </article>

      {/* ================= FACT CHECK SECTION ================= */}
      <article className="bg-white rounded-3xl shadow-sm p-6">
        <div className="border-b border-gray-200 pb-4">
          <h2 className="text-2xl font-bold text-gray-900">ফ্যাক্টচেক</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          
          {/* Main Big Fact Check News */}
          <div className="md:col-span-2 bg-gray-50 rounded-3xl overflow-hidden shadow-sm group cursor-pointer">
            <div className="relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1523958203904-cdcb402031fd?auto=format&fit=crop&w=1200&q=80" 
                alt="Fact check thumbnail" 
                className="w-full h-52 object-cover transform group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="absolute left-4 top-4 inline-flex items-center rounded-full bg-red-600 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-white">
                Fact Check
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-200">
                সীমান্তে মাইন পুঁততে গিয়ে ভারতীয় গুন্ডা আটকের দাবিটি ভুয়া
              </h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed line-clamp-3">
                স্থানীয় সূত্র এবং অফিসিয়াল বিবৃতিতে প্রমাণ পাওয়া গেছে যে সংবাদটি ভিত্তিহীন এবং সোশ্যাল মিডিয়ায় ভুলভাবে ছড়িয়ে পড়েছে।
              </p>
              <div className="mt-4 text-gray-500 text-sm">১ ঘণ্টা আগে</div>
            </div>
          </div>

          {/* Fact Check Side List */}
          <div className="space-y-4">
            {factCheckListData.map((item) => (
              <div key={item.id} className="flex items-start gap-3 border border-gray-100 rounded-3xl p-3 hover:border-red-100 transition-colors duration-200 group cursor-pointer">
                <img 
                  src={`https://via.placeholder.com/80x80?text=${item.placeholder}`} 
                  alt={item.title} 
                  className="w-20 h-20 object-cover rounded-xl shrink-0" 
                />
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-200 line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-xs text-gray-500">{item.time}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </article>

    </section>
  );
}