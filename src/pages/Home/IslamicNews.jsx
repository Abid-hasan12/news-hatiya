import React from 'react';

export default function IslamicNews() {
  // বাঁদিকের ৩টি ইমেজ কার্ডের ডাটা
  const islamicCardsData = [
    {
      id: 1,
      title: "আজকের নামাজের সময়সূচি: ১৯ জুন ২০২৬",
      time: "২০ মিনিট আগে",
      imgUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
      altText: "নামাজের সময়সূচি ১"
    },
    {
      id: 2,
      title: "মেহমানের জন্য যে দোয়া করতেন রাসুল (সা.)",
      time: "৪৫ মিনিট আগে",
      imgUrl: "https://images.unsplash.com/photo-1507842217343-583f20270319?auto=format&fit=crop&w=800&q=80",
      altText: "রাসুলের দোয়া"
    },
    {
      id: 3,
      title: "আজকের নামাজের সময়সূচি: ১৮ জুন ২০২৬",
      time: "১ ঘণ্টা আগে",
      imgUrl: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=800&q=80",
      altText: "নামাজের সময়সূচি ২"
    }
  ];

  // ডানদিকের টেক্সট-ওনলি খবরের ডাটা
  const islamicTextData = [
    {
      id: 1,
      title: "ঘুমের মধ্যে ভয় পেলে যে দোয়া পড়বেন",
      time: "৩০ মিনিট আগে"
    },
    {
      id: 2,
      title: "জান্নাত লাভের সহজ ২ দোয়া",
      time: "১.৫ ঘণ্টা আগে"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 border-b border-gray-200">
      {/* Section Heading with Underline style */}
      <h2 className="text-xl font-bold text-teal-800 text-center mb-6 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-[2px] after:bg-teal-800 pb-2">
        ইসলাম
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* ================= LEFT & CENTER: 3-Column Grid (Image Cards) ================= */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
          {islamicCardsData.map((item) => (
            <article key={item.id} className="bg-white rounded-3xl shadow-sm overflow-hidden group cursor-pointer border border-gray-50 flex flex-col justify-between">
              <div>
                <div className="overflow-hidden p-2">
                  <img
                    src={item.imgUrl}
                    alt={item.altText}
                    className="w-full h-40 object-cover rounded-2xl transform group-hover:scale-103 transition-transform duration-300"
                  />
                </div>
                <div className="px-5 pb-2">
                  <h3 className="text-gray-900 font-bold text-sm leading-snug line-clamp-2 group-hover:text-teal-800 transition-colors duration-200">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="px-5 pb-5">
                <div className="text-gray-500 text-xs flex items-center gap-1.5">
                  {/* Custom SVG Clock Icon */}
                  <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item.time}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ================= RIGHT COLUMN: Text-Only Articles ================= */}
        <aside className="lg:col-span-1 bg-gray-50/50 p-5 rounded-3xl border border-gray-100/50 flex flex-col justify-center gap-4">
          {islamicTextData.map((item, idx) => (
            <article
              key={item.id}
              className={`group cursor-pointer ${idx !== islamicTextData.length - 1 ? 'pb-4 border-b border-gray-100' : ''}`}
            >
              <h4 className="font-bold text-gray-900 group-hover:text-teal-800 transition-colors duration-200 text-sm leading-snug">
                {item.title}
              </h4>
              <p className="mt-2 text-gray-400 text-[11px] flex items-center gap-1">
                <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {item.time}
              </p>
            </article>
          ))}
        </aside>

      </div>
    </section>
  );
}