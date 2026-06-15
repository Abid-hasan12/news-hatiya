import React from 'react';

// প্রপ্স হিসেবে featuredNews (বড় খবর) এবং sidebarNews (সাইডবারের খবরের অ্যারে) রিসিভ করা হচ্ছে
export default function HeroSection({ featuredNews, sidebarNews }) {

    // কোনো কারণে ডাটা লোড হতে দেরি হলে ক্র্যাশ এড়ানোর জন্য সেফটি চেক
    if (!featuredNews || !sidebarNews) return null;

    return (
        <section className="hero-section bg-gray-50">
            <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl px-4 py-6">

                {/* Featured Big News (ডায়নামিক বড় খবর) */}
                <article className="lg:col-span-2 bg-white rounded-3xl shadow-sm overflow-hidden">
                    <img
                        src={featuredNews.imgSrc}
                        alt={featuredNews.title}
                        className="w-full h-[400px] object-cover rounded-b-none rounded-t-3xl"
                    />
                    <div className="p-6">
                        <span className="inline-flex items-center rounded-full bg-red-600 px-3 py-1 text-sm font-semibold text-white">
                            {featuredNews.category}
                        </span>
                        <h1 className="mt-4 text-3xl font-bold text-gray-900 leading-tight hover:text-red-600 cursor-pointer transition-colors">
                            {featuredNews.title}
                        </h1>
                        <p className="mt-4 text-gray-600 text-base leading-relaxed">
                            {featuredNews.desc}
                        </p>
                        <div className="mt-6 text-gray-500 text-sm">{featuredNews.time}</div>
                    </div>
                </article>

                {/* Latest News Sidebar (ডায়নামিক সাইডবার) */}
                <aside className="latest-news bg-white rounded-3xl shadow-sm p-6">
                    <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-3">সর্বশেষ সংবাদ</h2>
                    <div className="mt-6 space-y-5">
                        {sidebarNews.map((item) => (
                            <div key={item.id} className="flex items-start gap-4 group cursor-pointer">
                                <img
                                    src={item.imgSrc}
                                    alt={item.title}
                                    className="w-24 h-20 object-cover rounded transform group-hover:scale-105 transition-transform duration-200"
                                />
                                <div>
                                    <h3 className="text-base font-semibold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-gray-500">{item.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </aside>

            </div>
        </section>
    );
}