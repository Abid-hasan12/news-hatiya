import React from 'react';

// প্রপ্স হিসেবে leadWorld, middleWorld, এবং bulletWorld রিসিভ করা হচ্ছে
export default function WorldNews({ leadWorld, middleWorld, bulletWorld, onSeeAllClick }) {

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 border-b border-gray-200">
      {/* Section Heading */}
      <h2 className="text-xl font-bold text-teal-800 text-center mb-6">বিশ্ব</h2>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* ================= COLUMN 1 & 2: Main World Lead News (Left) ================= */}
        {leadWorld && (
          <article className="lg:col-span-2 bg-white rounded-3xl shadow-sm overflow-hidden group cursor-pointer">
            <div className="overflow-hidden rounded-lg">
              <img
                src={leadWorld.imgSrc}
                alt={leadWorld.title}
                className="w-full h-64 object-cover transform group-hover:scale-103 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-teal-800 transition-colors duration-200">
                {leadWorld.title}
              </h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {leadWorld.desc}
              </p>
              <div className="mt-4 text-gray-500 text-sm">{leadWorld.time}</div>
            </div>
          </article>
        )}

        {/* ================= COLUMN 3: Middle Image Cards ================= */}
        <div className="lg:col-span-1 space-y-4">
          {middleWorld?.map((item) => (
            <article key={item.id} className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-50 group cursor-pointer">
              <div className="overflow-hidden">
                <img
                  src={item.imgSrc}
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
          {bulletWorld?.map((item, idx) => (
            <div
              key={item.id}
              className={`group cursor-pointer ${idx !== bulletWorld.length - 1 ? 'pb-5 border-b border-gray-100' : ''}`}
            >
              <div className="text-amber-600 font-bold mb-1 text-sm">{item.label}</div>
              <h4 className="font-bold text-gray-900 group-hover:text-teal-800 transition-colors duration-200 text-base leading-snug">
                {item.title}
              </h4>
            </div>
          ))}
        </aside>

      </div>
      <div className="w-full flex justify-end mt-0 py-2 px-6">
        <button
          type="button"
          onClick={onSeeAllClick}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-teal-700 bg-teal-50 hover:bg-teal-100 border border-teal-200/60 rounded-xl transition-all duration-300 shadow-sm hover:shadow active:scale-98"
        >
          সব খবর
          <span className="transform group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>
    </section>
  );
}