import React from 'react';

// প্রপ্স হিসেবে gridData রিসিভ করা হচ্ছে
export default function CategoryGrid({ gridData }) {

    if (!gridData) return null;

    return (
        <section className="category-grid max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border-b border-gray-200">
            {gridData.map((item, index) => {
                // নিরাপত্তা চেক: ওই ক্যাটাগরিতে যদি কোনো নিউজই না থাকে
                if (item.newsList.length === 0) return null;

                // প্রথম নিউজটিকে মেইন নিউজ হিসেবে আলাদা করা হলো
                const mainNews = item.newsList[0];
                // বাকি নিউজগুলোকে সাব-লিংক বা রিলেটেড লিংক হিসেবে আলাদা করা হলো
                const relatedNews = item.newsList.slice(1);

                return (
                    <article key={index} className="bg-white rounded-3xl shadow-sm overflow-hidden group">

                        {/* Card Header (ক্যাটাগরির নাম) */}
                        <header className="px-5 py-4 border-b border-gray-200">
                            <h2 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors cursor-pointer inline-block">
                                {item.categoryName}
                            </h2>
                        </header>

                        {/* Card Body */}
                        <div className="p-5 space-y-4">
                            {/* Main News Image */}
                            <a href="#" className="block overflow-hidden rounded-3xl">
                                <img
                                    src={mainNews.imgSrc || "https://via.placeholder.com/800x400"}
                                    alt={mainNews.title}
                                    className="w-full h-36 object-cover transform group-hover:scale-105 transition-transform duration-300"
                                />
                            </a>

                            {/* Main News Title */}
                            <div>
                                <h3 className="text-base font-bold text-gray-900 hover:text-red-600 transition-colors cursor-pointer line-clamp-2">
                                    {mainNews.title}
                                </h3>
                                <p className="mt-2 text-sm text-gray-500">{mainNews.time}</p>
                            </div>

                            {/* Related Sub-links (বাকি নিউজগুলো লুপ হবে) */}
                            <div className="space-y-3 text-sm text-gray-700">
                                {relatedNews.map((news, lIndex) => (
                                    <a
                                        key={news.id || lIndex}
                                        href="#"
                                        className="block border-t border-gray-100 pt-2 hover:text-red-600 transition-colors line-clamp-1"
                                    >
                                        {news.title}
                                    </a>
                                ))}
                            </div>
                        </div>

                    </article>
                );
            })}
        </section>
    );
}