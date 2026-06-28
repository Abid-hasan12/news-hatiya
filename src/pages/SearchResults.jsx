import React from 'react';
import { timeAgo } from '../utils/timeAgo';

const normalizeText = (value) => (value || '').toString().toLowerCase().trim();

export default function SearchResults({ query, newsItems = [], locationFilter = null, onNewsClick, onClearSearch }) {
    const trimmedQuery = query.trim();
    const normalizedQuery = normalizeText(trimmedQuery);

    const hasLocationFilter = Boolean(locationFilter?.division && locationFilter?.district && locationFilter?.upazila);

    const filteredNews = Array.isArray(newsItems)
        ? newsItems.filter((news) => {
            if (hasLocationFilter) {
                const division = normalizeText(news?.location?.division);
                const district = normalizeText(news?.location?.district);
                const upazila = normalizeText(news?.location?.upazila);

                return (
                    division === normalizeText(locationFilter.division)
                    && district === normalizeText(locationFilter.district)
                    && upazila === normalizeText(locationFilter.upazila)
                );
            }

            const title = normalizeText(news?.title);
            const description = normalizeText(news?.desc || news?.description);

            return title.includes(normalizedQuery) || description.includes(normalizedQuery);
        })
        : [];

    const searchTitle = hasLocationFilter
        ? `${locationFilter.division} > ${locationFilter.district} > ${locationFilter.upazila}`
        : query;

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 min-h-[70vh] bg-gray-50/50">
            <div className="flex flex-wrap items-center gap-4 border-b-2 border-red-600 pb-4 mb-10">
                <span className="bg-red-600 text-white text-xs uppercase font-black px-3 py-1.5 rounded-sm tracking-wider">Search</span>
                <h1 className="text-2xl md:text-4xl font-black text-gray-950 tracking-tight">
                    Results for “{searchTitle}”
                </h1>
                <span className="text-xs md:text-sm font-bold text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full ml-auto">
                    {filteredNews.length}টি খবর
                </span>
            </div>

            {filteredNews.length === 0 ? (
                <div className="text-center py-24 bg-white border border-gray-100 rounded-3xl shadow-sm text-gray-400 text-lg font-medium">
                    No news found for “{searchTitle}”.
                    {onClearSearch && (
                        <button
                            type="button"
                            onClick={onClearSearch}
                            className="block mx-auto mt-6 rounded-2xl bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700"
                        >
                            Back to Home
                        </button>
                    )}
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6">
                    {filteredNews.map((news) => (
                        <button
                            key={news.id}
                            type="button"
                            onClick={() => onNewsClick && onNewsClick(news)}
                            className="group cursor-pointer bg-white p-4 border-b border-gray-200 lg:border lg:border-gray-100 lg:rounded-2xl lg:shadow-sm hover:shadow-md transition-all duration-300 flex justify-between gap-4 items-start text-left"
                        >
                            <div className="flex-1 flex flex-col justify-between h-full min-h-[90px] md:min-h-[110px]">
                                <div className="space-y-1.5">
                                    <h2 className="text-base md:text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2 leading-snug md:leading-normal">
                                        {news.title}
                                    </h2>
                                    <p className="hidden md:line-clamp-2 text-xs text-gray-500 leading-relaxed">
                                        {news.desc || news.description || 'বিস্তারিত জানতে খবরের ওপর ক্লিক করুন।'}
                                    </p>
                                </div>

                                <div className="flex items-center gap-3 text-[11px] font-semibold text-gray-400 pt-1">
                                    <span>📍 {news.category}</span>
                                    <span>•</span>
                                    <span>🕒 {timeAgo(news.createdAt) || news.time}</span>
                                </div>
                            </div>

                            <div className="w-24 h-24 md:w-32 md:h-24 shrink-0 overflow-hidden rounded-xl bg-gray-100 border border-gray-50">
                                <img
                                    src={news.imgSrc || news.image || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500'}
                                    alt={news.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}