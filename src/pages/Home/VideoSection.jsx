import React from 'react';

// প্রপ্স হিসেবে featuredVideo, listVideos, এবং analysisVideo রিসিভ করা হচ্ছে
export default function VideoSection({ featuredVideo, listVideos, analysisVideo, onSeeAllClick }) {

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 border-b border-gray-200">
      {/* Section Title */}
      <h2 className="text-xl font-bold text-teal-800 text-center mb-6">ভিডিও</h2>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* ================= COLUMN 1: Featured Big Video (Left) ================= */}
        {featuredVideo && (
          <article className="lg:col-span-2 bg-white rounded-3xl shadow-sm overflow-hidden group cursor-pointer">
            <div className="relative overflow-hidden">
              <img
                src={featuredVideo.imgSrc}
                alt={featuredVideo.title}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/80 text-gray-900 shadow-lg transform group-hover:scale-110 transition-transform">
                  <i className="fas fa-play text-2xl pl-1"></i>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 leading-tight group-hover:text-red-600 transition-colors">
                {featuredVideo.title}
              </h3>
              <p className="mt-3 text-gray-600">{featuredVideo.desc}</p>
              <div className="mt-4 text-gray-500 text-sm">{featuredVideo.time}</div>
            </div>
          </article>
        )}

        {/* ================= COLUMN 2: Video List (Middle) ================= */}
        <div className="lg:col-span-1 space-y-4">
          {listVideos?.map((video) => (
            <article key={video.id} className="flex gap-3 pb-3 border-b border-gray-100 last:border-b-0 group cursor-pointer">
              <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl">
                <img
                  src={video.imgSrc}
                  alt={video.title}
                  className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-200"
                />
                {/* Small Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <i className="fas fa-play text-white text-xs"></i>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2">
                  {video.title}
                </h4>
                <p className="mt-2 text-xs text-gray-500">{video.time}</p>
              </div>
            </article>
          ))}
        </div>

        {/* ================= COLUMN 3: Analysis Card (Right) ================= */}
        {analysisVideo && (
          <article className="lg:col-span-1 bg-white rounded-3xl shadow-sm overflow-hidden group cursor-pointer flex flex-col justify-between">
            <div>
              <div className="overflow-hidden">
                <img
                  src={analysisVideo.imgSrc}
                  alt={analysisVideo.title}
                  className="w-full h-44 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-base font-bold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2">
                  {analysisVideo.title}
                </h3>
              </div>
            </div>
            <div className="px-6 pb-6">
              <p className="text-sm font-semibold text-orange-600 bg-orange-50 inline-block px-3 py-1 rounded-full">
                {analysisVideo.analysisTag}
              </p>
            </div>
          </article>
        )}

      </div>
       <div className="w-full flex justify-end mt-2  px-6">
        <button
          type="button"
          onClick={onSeeAllClick}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-teal-700 bg-teal-50 hover:bg-teal-100 border border-teal-200/60 rounded-xl transition-all duration-300 shadow-sm hover:shadow active:scale-98"
        >
          সব খবর
          <span className="transform group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>
    </section>
  );
}