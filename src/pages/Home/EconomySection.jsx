import React from 'react';

// প্রপ্স হিসেবে leadEconomy, middleEconomy, এবং textEconomy রিসিভ করা হচ্ছে
export default function EconomySection({ leadEconomy, middleEconomy, textEconomy }) {

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 border-b border-gray-200">
      {/* Section Heading */}
      <h2 className="text-xl font-bold text-teal-800 text-center mb-6">অর্থনীতি</h2>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* ================= COLUMN 1 & 2: Featured Lead News (Left) ================= */}
        {leadEconomy && (
          <article className="lg:col-span-2 bg-white rounded-3xl shadow-sm overflow-hidden group cursor-pointer">
            <div className="overflow-hidden rounded-lg">
              <img
                src={leadEconomy.imgSrc}
                alt={leadEconomy.title}
                className="w-full h-auto transform group-hover:scale-103 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-200">
                {leadEconomy.title}
              </h3>
              <p className="mt-4 text-gray-600">
                {leadEconomy.desc}
              </p>
              <div className="mt-5 text-gray-500 text-sm">{leadEconomy.time}</div>
            </div>
          </article>
        )}

        {/* ================= COLUMN 3: Middle Image Cards ================= */}
        <div className="lg:col-span-1 space-y-4">
          {middleEconomy?.map((item) => (
            <article key={item.id} className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-50 group cursor-pointer">
              <div className="overflow-hidden">
                <img
                  src={item.imgSrc}
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
          {textEconomy?.map((item) => (
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