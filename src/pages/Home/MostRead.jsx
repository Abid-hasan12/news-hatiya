import React from 'react';

// প্রপ্স হিসেবে mostReadData, mainFactCheck এবং factCheckList রিসিভ করা হচ্ছে
export default function MostRead({ mostReadData, mainFactCheck, factCheckList }) {

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8 border-b border-gray-200">

      {/* ================= MOST READ SECTION ================= */}
      <article className="bg-white rounded-3xl shadow-sm p-6">
        <div className="border-b border-gray-200 pb-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900">সর্বাধিক পঠিত</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {mostReadData?.map((item) => (
            <div key={item.id} className="flex items-start gap-3 group cursor-pointer py-1">
              <div className="text-4xl font-bold text-gray-300 group-hover:text-red-600 transition-colors duration-200">
                {item.serialId}
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
          {mainFactCheck && (
            <div className="md:col-span-2 bg-gray-50 rounded-3xl overflow-hidden shadow-sm group cursor-pointer">
              <div className="relative overflow-hidden">
                <img
                  src={mainFactCheck.imgSrc}
                  alt={mainFactCheck.title}
                  className="w-full h-52 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute left-4 top-4 inline-flex items-center rounded-full bg-red-600 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-white">
                  Fact Check
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-200">
                  {mainFactCheck.title}
                </h3>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {mainFactCheck.desc}
                </p>
                <div className="mt-4 text-gray-500 text-sm">{mainFactCheck.time}</div>
              </div>
            </div>
          )}

          {/* Fact Check Side List */}
          <div className="space-y-4">
            {factCheckList?.map((item) => (
              <div key={item.id} className="flex items-start gap-3 border border-gray-100 rounded-3xl p-3 hover:border-red-100 transition-colors duration-200 group cursor-pointer">
                <img
                  src={`https://via.placeholder.com/80x80?text=${item.placeholderText || 'FC'}`}
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
         <div className="w-full flex justify-end mt-0 py-2 px-6">
        <a
          href="#"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-teal-700 bg-teal-50 hover:bg-teal-100 border border-teal-200/60 rounded-xl transition-all duration-300 shadow-sm hover:shadow active:scale-98"
        >
          সব খবর
          <span className="transform group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
      </article>
    </section>
  );
}