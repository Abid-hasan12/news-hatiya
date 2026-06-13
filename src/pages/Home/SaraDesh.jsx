import React, { useState } from 'react';

export default function SaraDesh() {
  // সাইডের ছোট কার্ডগুলোর জন্য ডাটা অ্যারে
  const sideNewsData = [
    {
      id: 1,
      title: "রাজধানীতে নতুন ভ্যাকসিন ক্যাম্পেইন শুরু",
      time: "আপডেট ৩০ মিনিট আগে",
      imgUrl: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "দুর্গম অঞ্চলে স্বাস্থ্য সেবা সম্প্রসারণের ঘোষণা",
      time: "আপডেট ১ ঘণ্টা আগে",
      imgUrl: "https://images.unsplash.com/photo-1508082221977-6cb2b0f93f2b?auto=format&fit=crop&w=800&q=80"
    }
  ];

  // ফিল্টার স্টেট ম্যানেজমেন্ট (ভবিষ্যতে API এর সাথে ইন্টিগ্রেট করতে সুবিধা হবে)
  const [filters, setFilters] = useState({
    division: 'ঢাকা',
    district: 'রংপুর',
    upazila: 'মিরসরাই'
  });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", filters);
    // এখানে ফিল্টার অনুযায়ী নিউজ সার্চ লজিক বসবে
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 border-b border-gray-200">
      {/* Section Title */}
      <h2 className="text-xl font-bold text-teal-800 text-center mb-6">সারা দেশ</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* News Grid (Left 3 Columns) */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Main Big Lead News */}
          <article className="md:col-span-2 bg-white rounded-3xl shadow-sm overflow-hidden group cursor-pointer">
            <div className="overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1584036561584-b03c19da874c?auto=format&fit=crop&w=1200&q=80" 
                alt="Lead news" 
                className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-200 leading-tight">
                টিকা না নেওয়া শিশুরা হামে বেশি আক্রান্ত হচ্ছে
              </h3>
              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                স্বাস্থ্য অধিদপ্তরের রিপোর্টে দেখা গেছে, টিকা না নেওয়া শিশুরা হামের ঝুঁকিতে বেশি পড়ছে এবং দ্রুত পদক্ষেপের আহ্বান জানানো হয়েছে।
              </p>
              <div className="mt-5 text-gray-500 text-sm">২ ঘণ্টা আগে</div>
            </div>
          </article>

          {/* Side Mini News Cards */}
          <div className="md:col-span-1 space-y-4">
            {sideNewsData.map((news) => (
              <article key={news.id} className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100 group cursor-pointer">
                <div className="overflow-hidden">
                  <img 
                    src={news.imgUrl} 
                    alt={news.title} 
                    className="w-full h-36 object-cover transform group-hover:scale-105 transition-transform duration-200" 
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-base font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-200 line-clamp-2">
                    {news.title}
                  </h4>
                  <p className="mt-3 text-gray-500 text-sm">{news.time}</p>
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
                  <option value="ঢাকা">ঢাকা</option>
                  <option value="চট্টগ্রাম">চট্টগ্রাম</option>
                  <option value="রাজশাহী">রাজশাহী</option>
                  <option value="খুলনা">খুলনা</option>
                  <option value="বরিশাল">বরিশাল</option>
                  <option value="সিলেট">সিলেট</option>
                  <option value="রংপুর">রংপুর</option>
                  <option value="ময়মনসিংহ">ময়মনসিংহ</option>
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
                  <option value="ঢাকা">ঢাকা</option>
                  <option value="রংপুর">রংপুর</option>
                  <option value="বরিশাল">বরিশাল</option>
                  <option value="খুলনা">খুলনা</option>
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
                  <option value="মিরসরাই">মিরসরাই</option>
                  <option value="হাতিয়া">হাতিয়া</option>
                  <option value="উত্তরা">উত্তরা</option>
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
    </section>
  );
}