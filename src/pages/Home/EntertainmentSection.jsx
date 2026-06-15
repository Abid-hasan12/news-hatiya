import React from 'react';

// প্রপ্স হিসেবে leadEnt, subCardsEnt, listEnt, এবং featureEnt রিসিভ করা হচ্ছে
export default function EntertainmentSection({ leadEnt, subCardsEnt, listEnt, featureEnt }) {
  
  return (
    <section className="max-w-7xl mx-auto px-4 py-8 border-b border-gray-200">
      {/* Section Heading */}
      <h2 className="text-xl font-bold text-teal-800 text-center mb-6">বিনোদন</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* ================= COLUMN 1 & 2: Main Lead & Sub Cards (Left) ================= */}
        <div className="lg:col-span-2 space-y-4">
          {/* Main Big Lead Card */}
          {leadEnt && (
            <article className="bg-white rounded-3xl shadow-sm overflow-hidden group cursor-pointer">
              <div className="overflow-hidden">
                <img 
                  src={leadEnt.imgSrc} 
                  alt={leadEnt.title} 
                  className="w-full h-64 object-cover transform group-hover:scale-103 transition-transform duration-300" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-teal-800 transition-colors duration-200">
                  {leadEnt.title}
                </h3>
                <p className="mt-3 text-gray-600">
                  {leadEnt.desc}
                </p>
                <div className="mt-4 text-gray-500 text-sm">{leadEnt.time}</div>
              </div>
            </article>
          )}

          {/* Sub Grid Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-100">
            {subCardsEnt?.map((card) => (
              <article key={card.id} className="bg-white rounded-3xl shadow-sm overflow-hidden flex flex-col group cursor-pointer">
                <div className="overflow-hidden">
                  <img 
                    src={card.imgSrc} 
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
            {listEnt?.map((item) => (
              <article key={item.id} className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0 group cursor-pointer">
                <img 
                  src={item.imgSrc} 
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
        {featureEnt && (
          <aside className="lg:col-span-1 bg-white rounded-3xl shadow-sm p-6 flex flex-col justify-between group">
            <div>
              <span className="text-sm font-semibold text-teal-800 uppercase tracking-[0.2em]">ফিচার</span>
              <h3 className="mt-4 text-xl font-bold text-gray-900 group-hover:text-teal-800 transition-colors duration-200">
                {featureEnt.title}
              </h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {featureEnt.desc}
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
        )}

      </div>
    </section>
  );
}