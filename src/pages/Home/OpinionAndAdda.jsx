import React from 'react';

export default function OpinionAndAdda() {
    // মতামত সেকশনের লিডカード ডাটা
    const leadOpinion = {
        title: "সহজ সমাধান তবু উপেক্ষিতই থাকবে",
        excerpt: "দেশের উপশমের পথ সহজ থাকলেও সামাজিক ও প্রশাসনিক বাধা সমাধানকে বিলম্বিত করছে।",
        author: "আজাদুর রহমান চন্দন",
        imgUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80"
    };

    // মতামত সেকশনের পাশের ৬টি ছোট আইটেমের ডাটা
    const smallOpinions = [
        { id: 1, title: "তব ঘৃণা যেন তারে তৃণসম দহে", author: "অজয় দাশগুপ্ত", imgUrl: "https://images.unsplash.com/photo-1545996124-1b0f2a4f0c8a?auto=format&fit=crop&w=80&q=80" },
        { id: 2, title: "পর্যটনের সম্ভাবনা", author: "সম্পাদকীয়", imgUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80" },
        { id: 3, title: "শিক্ষার গুণগত মান উন্নয়ন জরুরি", author: "ড. ফরহাদ", imgUrl: "https://images.unsplash.com/photo-1545996124-1b0f2a4f0c8a?auto=format&fit=crop&w=80&q=80" },
        { id: 4, title: "স্থানীয় ব্যবসায়ে নতুন উদ্যোগ", author: "সাহানা রহমান", imgUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80" },
        { id: 5, title: "পরিবেশ ও নগর পরিকল্পনা", author: "তন্ময় কর", imgUrl: "https://images.unsplash.com/photo-1545996124-1b0f2a4f0c8a?auto=format&fit=crop&w=80&q=80" },
        { id: 6, title: "মহাব্যাপী স্বাস্থ্য পরিদর্শন", author: "রফিকুল ইসলাম", imgUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80" }
    ];

    // ডানদিকের আড্ডা সেকশনের ডাটা
    const addaItems = [
        { id: 1, title: "পদ্মা ব্যারাজ প্রকল্প", desc: "প্রকল্পের সম্ভাব্যতা ও প্রভাব নিয়ে আলোচনা।", imgUrl: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=200&q=80" },
        { id: 2, title: "গরবা", desc: "ঐতিহ্য ও সাংস্কৃতিক গুরুত্ব সংক্ষেপে।", imgUrl: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=200&q=80" },
        { id: 3, title: "নারী", desc: "নারী বিষয়ক সাম্প্রতিক সামাজিক উদ্যোগের অংশ।", imgUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80" }
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 py-8 border-b border-gray-200 grid grid-cols-1 lg:grid-cols-4 gap-8">

            {/* ================= LEFT: মতামত (Opinion) ================= */}
            <div className="lg:col-span-3 lg:border-r lg:border-gray-100 lg:pr-6">
                <h2 className="text-xl font-bold text-teal-800 text-center mb-6 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-[2px] after:bg-teal-800 pb-2">
                    মতামত
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Big Opinion Card */}
                    <article className="md:col-span-1 bg-white rounded-3xl shadow-sm p-6 text-center border border-gray-50 group cursor-pointer">
                        <div className="w-40 h-40 rounded-full border border-gray-200 mx-auto overflow-hidden">
                            <img
                                src={leadOpinion.imgUrl}
                                alt={leadOpinion.author}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <h3 className="mt-4 text-base font-bold text-gray-900 group-hover:text-teal-800 transition-colors duration-200">
                            {leadOpinion.title}
                        </h3>
                        <p className="mt-3 text-gray-600 text-xs leading-relaxed">
                            {leadOpinion.excerpt}
                        </p>
                        <div className="mt-4 flex items-center justify-center text-xs text-gray-500 gap-1.5">
                            {/* Custom SVG User Icon */}
                            <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <span className="font-medium text-gray-700">{leadOpinion.author}</span>
                        </div>
                    </article>

                    {/* Small Opinion Items Grid (2 Columns) */}
                    <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {smallOpinions.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-start gap-3 p-3 bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-50 group cursor-pointer transition-all duration-200"
                            >
                                <img src={item.imgUrl} alt={item.author} className="w-10 h-10 rounded-full object-cover border border-gray-100" />
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm group-hover:text-teal-800 transition-colors duration-200 leading-snug">
                                        {item.title}
                                    </h4>
                                    <div className="text-xs text-gray-500 mt-1">{item.author}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ================= RIGHT: আড্ডা ================= */}
            <aside className="lg:col-span-1">
                <h2 className="text-xl font-bold text-teal-800 text-center mb-6 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-[2px] after:bg-teal-800 pb-2">
                    আড্ডা
                </h2>

                <div className="flex flex-col gap-4">
                    {addaItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex gap-3 pb-3 border-b border-gray-100 last:border-b-0 group cursor-pointer"
                        >
                            <img src={item.imgUrl} alt={item.title} className="w-16 h-16 object-cover rounded-lg flex-shrink-0" />
                            <div className="min-w-0">
                                <h4 className="font-bold text-gray-900 text-sm group-hover:text-teal-800 transition-colors duration-200">
                                    {item.title}
                                </h4>
                                <p className="mt-1 text-xs text-gray-500 truncate">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </aside>

        </section>
    );
}