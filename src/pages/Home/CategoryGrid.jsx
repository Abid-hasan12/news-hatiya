import React from 'react';

export default function CategoryGrid() {
    // ক্যাটাগরি ভিত্তিক নিউজের ডাইনামিক ডাটা অবজেক্ট
    const categoriesData = [
        {
            categoryName: "রাজনীতি",
            mainTitle: "সংসদীয় বাজেট আলোচনায় নতুন পূর্বাভাস প্রকাশ",
            time: "৪ ঘণ্টা আগে",
            imgUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
            relatedLinks: [
                "ঐক্যফ্রন্ট নতুন মঞ্চ নিয়ে প্রস্তাব দিচ্ছে",
                "মেয়র প্রার্থীর প্রচারণা শুরু হয়েছে শহরে"
            ]
        },
        {
            categoryName: "আন্তর্জাতিক",
            mainTitle: "আন্তর্জাতিক সম্মেলনে জলবায়ু চুক্তিতে নতুন অগ্রগতি",
            time: "৪ ঘণ্টা আগে",
            imgUrl: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
            relatedLinks: [
                "সীমান্তে শান্তি আলোচনায় মুখোমুখি বৈঠক",
                "বাণিজ্য চুক্তিতে আরও ছাড়ের ঘোষণা"
            ]
        },
        {
            categoryName: "বিনোদন",
            mainTitle: "নতুন সিনেমার পোস্টার প্রকাশ, ভক্তদের উচ্ছ্বাস",
            time: "৪ ঘণ্টা আগে",
            imgUrl: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=800&q=80",
            relatedLinks: [
                "প্রাক্তন তারকার ফেরার খবর ফ্যানদের মধ্যে আলোড়ন",
                "টেলিভিশন চ্যানেলে নতুন ধারাবাহিকের সূচনা"
            ]
        },
        {
            categoryName: "খেলাধুলা",
            mainTitle: "ম্যাচে দুর্দান্ত জয়, নড়েচড়ে বসেছে সমর্থকরা",
            time: "৪ ঘণ্টা আগে",
            imgUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80",
            relatedLinks: [
                "জাতীয় দলের কোচের পরিকল্পনায় নতুন ছক",
                "তাজা প্রিমিয়ার লিগ ম্যাচের আগে প্রস্তুতি"
            ]
        }
    ];

    return (
        <section className="category-grid max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border-b border-gray-200">
            {categoriesData.map((item, index) => (
                <article key={index} className="bg-white rounded-3xl shadow-sm overflow-hidden group">

                    {/* Card Header */}
                    <header className="px-5 py-4 border-b border-gray-200">
                        <h2 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors cursor-pointer inline-block">
                            {item.categoryName}
                        </h2>
                    </header>

                    {/* Card Body */}
                    <div className="p-5 space-y-4">
                        {/* Image Thumbnail with zoom effect */}
                        <a href="#" className="block overflow-hidden rounded-3xl">
                            <img
                                src={item.imgUrl}
                                alt={`${item.categoryName} সংবাদ`}
                                className="w-full h-36 object-cover transform group-hover:scale-105 transition-transform duration-300"
                            />
                        </a>

                        {/* Main Title */}
                        <div>
                            <h3 className="text-base font-bold text-gray-900 hover:text-red-600 transition-colors cursor-pointer line-clamp-2">
                                {item.mainTitle}
                            </h3>
                            <p className="mt-2 text-sm text-gray-500">{item.time}</p>
                        </div>

                        {/* Related Sub-links */}
                        <div className="space-y-3 text-sm text-gray-700">
                            {item.relatedLinks.map((link, lIndex) => (
                                <a
                                    key={lIndex}
                                    href="#"
                                    className="block border-t border-gray-100 pt-2 hover:text-red-600 transition-colors line-clamp-1"
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>

                </article>
            ))}
        </section>
    );
}