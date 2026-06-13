import React from 'react';

export default function HeroSection() {
    const latestNewsItems = [
        {
            id: 1,
            title: "ঢাকায় নতুন ট্রাফিক আইন নিয়ে নতুন নির্দেশনা জারি",
            time: "১০ মিনিট আগে",
            imgSrc: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=200&q=80"
        },
        {
            id: 2,
            title: "প্রধানমন্ত্রী আজ নতুন হাসপাতাল উদ্বোধন করবেন",
            time: "২৫ মিনিট আগে",
            imgSrc: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=200&q=80"
        },
        {
            id: 3,
            title: "দেশের বাণিজ্যে নতুন উন্নয়নের তথ্য প্রকাশিত",
            time: "৪০ মিনিট আগে",
            imgSrc: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=200&q=80"
        }
    ];

    return (
        <section className="hero-section bg-gray-50">
            <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl px-4 py-6">

                {/* Featured Big News */}
                <article className="lg:col-span-2 bg-white rounded-3xl shadow-sm overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1400&q=80"
                        alt="Featured news"
                        className="w-full h-[400px] object-cover rounded-b-none rounded-t-3xl"
                    />
                    <div className="p-6">
                        <span className="inline-flex items-center rounded-full bg-red-600 px-3 py-1 text-sm font-semibold text-white">জাতীয়</span>
                        <h1 className="mt-4 text-3xl font-bold text-gray-900 leading-tight hover:text-red-600 cursor-pointer transition-colors">
                            পদ্মা সেতুতে রেকর্ড পরিমাণ টোল আদায়, খুশি যাত্রী ও চালকেরা
                        </h1>
                        <p className="mt-4 text-gray-600 text-base leading-relaxed">
                            বিভিন্ন প্রান্ত থেকে আগত গাড়ির চাপ সত্ত্বেও কর্তৃপক্ষের প্রস্তুতি ছিল চমৎকার, ফলে যাত্রীরা নিরাপদে গন্তব্যে পৌঁছাতে পারলেন।
                        </p>
                        <div className="mt-6 text-gray-500 text-sm">৫ মিনিট আগে</div>
                    </div>
                </article>

                {/* Latest News Sidebar */}
                <aside className="latest-news bg-white rounded-3xl shadow-sm p-6">
                    <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-3">সর্বশেষ সংবাদ</h2>
                    <div className="mt-6 space-y-5">
                        {latestNewsItems.map((item) => (
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