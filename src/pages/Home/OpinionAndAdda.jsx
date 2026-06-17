import React from 'react';

// প্রপ্স হিসেবে opinionLead, opinionSmallList, এবং addaList রিসিভ করা হচ্ছে
export default function OpinionAndAdda({ opinionLead, opinionSmallList, addaList }) {
    return (
        <section className="max-w-7xl mx-auto px-4 py-6 border-b border-gray-200 grid grid-cols-1 lg:grid-cols-4 gap-8">

            {/* ================= LEFT: মতামত (Opinion) ================= */}
            <div className="lg:col-span-3 lg:border-r lg:border-gray-100 lg:pr-6">
                <h2 className="text-xl font-bold text-teal-800 text-center mb-6 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-[2px] after:bg-teal-800 pb-2">
                    মতামত
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Big Opinion Card */}
                    {opinionLead && (
                        <article className="md:col-span-1 bg-white rounded-3xl shadow-sm p-6 text-center border border-gray-50 group cursor-pointer">
                            <div className="w-40 h-40 rounded-full border border-gray-200 mx-auto overflow-hidden">
                                <img
                                    src={opinionLead.imgSrc}
                                    alt={opinionLead.author}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <h3 className="mt-4 text-base font-bold text-gray-900 group-hover:text-teal-800 transition-colors duration-200">
                                {opinionLead.title}
                            </h3>
                            <p className="mt-3 text-gray-600 text-xs leading-relaxed">
                                {opinionLead.desc}
                            </p>
                            <div className="mt-4 flex items-center justify-center text-xs text-gray-500 gap-1.5">
                                <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                <span className="font-medium text-gray-700">{opinionLead.author}</span>
                            </div>
                        </article>
                    )}

                    {/* Small Opinion Items Grid (2 Columns) */}
                    <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {opinionSmallList?.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-start gap-3 p-3 bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-50 group cursor-pointer transition-all duration-200"
                            >
                                <img src={item.imgSrc} alt={item.author} className="w-10 h-10 rounded-full object-cover border border-gray-100" />
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
                    {addaList?.map((item) => (
                        <div
                            key={item.id}
                            className="flex gap-3 pb-3 border-b border-gray-100 last:border-b-0 group cursor-pointer"
                        >
                            <img src={item.imgSrc} alt={item.title} className="w-16 h-16 object-cover rounded-lg flex-shrink-0" />
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