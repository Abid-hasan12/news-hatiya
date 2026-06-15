import React from 'react';

// প্রপ্স হিসেবে mainLifestyle এবং sidebarLifestyle রিসিভ করা হচ্ছে
export default function LifestyleSection({ mainLifestyle, sidebarLifestyle }) {

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 border-b border-gray-200">
      <h2 className="text-xl font-bold text-teal-800 text-center mb-6">জীবনধারা</h2>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* Left & Center: 3-column grid */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
          {mainLifestyle?.map((item) => (
            <article key={item.id} className="bg-white rounded-3xl shadow-sm overflow-hidden group cursor-pointer border border-gray-50">
              <img src={item.imgSrc} alt={item.title} className="w-full h-44 object-cover rounded-lg mb-2" />
              <div className="px-5 pb-5">
                <h3 className="text-gray-900 font-bold text-sm leading-snug line-clamp-2 group-hover:text-teal-800 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-500 text-xs">{item.time}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Right Column: 2x2 Grid */}
        <aside className="lg:col-span-1">
          <div className="grid grid-cols-2 gap-2">
            {sidebarLifestyle?.map((item) => (
              <article key={item.id} className="flex flex-col group cursor-pointer">
                <img src={item.imgSrc} alt={item.title} className="w-full aspect-square object-cover rounded-md" />
                <h4 className="mt-2 font-bold text-gray-900 text-xs line-clamp-2 group-hover:text-teal-800 transition-colors">
                  {item.title}
                </h4>
                <p className="mt-1 text-gray-500 text-xs">{item.time}</p>
              </article>
            ))}
          </div>
        </aside>

      </div>
    </section>
  );
}