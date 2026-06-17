import React from 'react';

// প্রপ্স হিসেবে cardsIslam এবং textIslam রিসিভ করা হচ্ছে
export default function IslamicNews({ cardsIslam, textIslam }) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6 border-b border-gray-200">
      {/* Section Heading with Underline style */}
      <h2 className="text-xl font-bold text-teal-800 text-center mb-6 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-[2px] after:bg-teal-800 pb-2">
        ইসলাম
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* ================= LEFT & CENTER: 3-Column Grid (Image Cards) ================= */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
          {cardsIslam?.map((item) => (
            <article key={item.id} className="bg-white rounded-3xl shadow-sm overflow-hidden group cursor-pointer border border-gray-50 flex flex-col justify-between">
              <div>
                <div className="overflow-hidden p-2">
                  <img
                    src={item.imgSrc}
                    alt={item.altText || item.title}
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
          {textIslam?.map((item, idx) => (
            <article
              key={item.id}
              className={`group cursor-pointer ${idx !== textIslam.length - 1 ? 'pb-4 border-b border-gray-100' : ''}`}
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
      <div className="w-full flex justify-end mt-0 py-2 px-6">
        <a
          href="#"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-teal-700 bg-teal-50 hover:bg-teal-100 border border-teal-200/60 rounded-xl transition-all duration-300 shadow-sm hover:shadow active:scale-98"
        >
          সব খবর
          <span className="transform group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </section>
  );
}