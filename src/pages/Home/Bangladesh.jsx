import React, { useState } from 'react';
import { timeAgo } from '../../utils/timeAgo';
import { bdLocationHierarchy } from '../../data/bdLocations';

// প্রপ্স হিসেবে leadNews এবং sideNews রিসিভ 
export default function Bangladesh({ leadNews, sideNews, onSeeAllClick, onNewsClick, onLocationSearch }) {
  const handleNewsClick = (newsItem) => {
    if (onNewsClick) onNewsClick(newsItem);
  };

  const divisions = Object.keys(bdLocationHierarchy);
  const initialDivision = divisions[0] || '';
  const initialDistricts = Object.keys(bdLocationHierarchy[initialDivision] || {});
  const initialDistrict = initialDistricts[0] || '';
  const initialUpazilas = bdLocationHierarchy[initialDivision]?.[initialDistrict] || [];
  const initialUpazila = initialUpazilas[0] || '';

  // ফিল্টার স্টেট ম্যানেজমেন্ট 
  const [filters, setFilters] = useState({
    division: initialDivision,
    district: initialDistrict,
    upazila: initialUpazila
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;

    if (name === 'division') {
      const nextDistricts = Object.keys(bdLocationHierarchy[value] || {});
      const nextDistrict = nextDistricts[0] || '';
      const nextUpazilas = bdLocationHierarchy[value]?.[nextDistrict] || [];
      const nextUpazila = nextUpazilas[0] || '';

      setFilters({
        division: value,
        district: nextDistrict,
        upazila: nextUpazila,
      });
      return;
    }

    if (name === 'district') {
      const nextUpazilas = bdLocationHierarchy[filters.division]?.[value] || [];
      const nextUpazila = nextUpazilas[0] || '';

      setFilters((prev) => ({
        ...prev,
        district: value,
        upazila: nextUpazila,
      }));
      return;
    }

    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (onLocationSearch) {
      onLocationSearch(filters);
    }
  };

  const districts = Object.keys(bdLocationHierarchy[filters.division] || {});
  const upazilas = bdLocationHierarchy[filters.division]?.[filters.district] || [];

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 border-b border-gray-200">
      {/* Section Title */}
      <h2 className="text-xl font-bold text-teal-800 text-center mb-6">বাংলাদেশ</h2>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* News Grid (Left 3 Columns) */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Main Big Lead News */}
          {leadNews && (
            <article onClick={() => handleNewsClick(leadNews)} className="md:col-span-2 bg-white rounded-3xl shadow-sm overflow-hidden group cursor-pointer">
              <div className="overflow-hidden">
                <img
                  src={leadNews.imgSrc}
                  alt={leadNews.title}
                  className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-200 leading-tight">
                  {leadNews.title}
                </h3>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  {leadNews.desc}
                </p>
                <div className="mt-5 text-gray-500 text-sm">
                  {timeAgo(leadNews.createdAt) || leadNews.time}
                </div>
              </div>
            </article>
          )}

          {/* Side Mini News Cards */}
          <div className="md:col-span-1 space-y-4">
            {sideNews?.map((news) => (
              <article key={news.id} onClick={() => handleNewsClick(news)} className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100 group cursor-pointer">
                <div className="overflow-hidden">
                  <img
                    src={news.imgSrc}
                    alt={news.title}
                    className="w-full h-36 object-cover transform group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-base font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-200 line-clamp-2">
                    {news.title}
                  </h4>
                  <p className="mt-3 text-gray-500 text-sm">
                    {timeAgo(news.createdAt) || news.time}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Local News Filter Widget (Right 1 Column) */}
        <aside className="lg:col-span-1">
          <div className="rounded-3xl overflow-hidden shadow-sm">
            <div className="bg-teal-800 text-white font-bold p-3 text-center rounded-t-lg">
              এলাকার খবর
            </div>

            <form onSubmit={handleSearch} className="bg-gray-50 p-4 border border-t-0 border-gray-200 rounded-b-lg flex flex-col gap-3">
              {/* Division Select */}
              <label className="block text-sm font-semibold text-gray-700">
                বিভাগ
                <select
                  name="division"
                  value={filters.division}
                  onChange={handleFilterChange}
                  className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:border-teal-800 focus:outline-none cursor-pointer"
                >
                  {divisions.map((division) => (
                    <option key={division} value={division}>{division}</option>
                  ))}
                </select>
              </label>

              {/* District Select */}
              <label className="block text-sm font-semibold text-gray-700">
                জেলা
                <select
                  name="district"
                  value={filters.district}
                  onChange={handleFilterChange}
                  className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:border-teal-800 focus:outline-none cursor-pointer"
                >
                  {districts.map((district) => (
                    <option key={district} value={district}>{district}</option>
                  ))}
                </select>
              </label>

              {/* Upazila Select */}
              <label className="block text-sm font-semibold text-gray-700">
                উপজেলা
                <select
                  name="upazila"
                  value={filters.upazila}
                  onChange={handleFilterChange}
                  className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:border-teal-800 focus:outline-none cursor-pointer"
                >
                  {upazilas.map((upazila) => (
                    <option key={upazila} value={upazila}>{upazila}</option>
                  ))}
                </select>
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-2 w-full rounded-lg bg-amber-500 py-2 text-sm font-bold text-white transition-colors hover:bg-amber-600 shadow-sm"
              >
                খুঁজুন
              </button>
            </form>
          </div>
        </aside>

      </div>
      <div className="w-full flex justify-end mt-0 py-2 px-6">
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