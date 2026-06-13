import React from 'react';

export default function JobsSection() {
  // মাঝখানের কলামের চাকরি সার্কুলার ডাটা অ্যারে
  const jobCirculars = [
    {
      id: 1,
      title: "বাংলাদেশ ব্যাংকে অফিসার পদে বড় নিয়োগ বিজ্ঞপ্তি",
      time: "৪ ঘণ্টা আগে",
      imgUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 2,
      title: "স্থানীয় স্কুলে প্রশাসনিক সহকারী নিয়োগ শুরু",
      time: "৮ ঘণ্টা আগে",
      imgUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 3,
      title: "শিক্ষা বোর্ডে সহকারী পরীক্ষার পরিচালক নিয়োগ",
      time: "১ দিন আগে",
      imgUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
    }
  ];

  // ডানদিকের ক্যারিয়ার গাইডের লিংক ডাটা অ্যারে
  const careerGuides = [
    { id: 1, text: "প্রশ্ন-উত্তর পর্যালোচনা প্র্যাকটিস", link: "#" },
    { id: 2, text: "দৃষ্টিভঙ্গি ও ভঙ্গিমা অনুশীলন", link: "#" },
    { id: 3, text: "প্রাসঙ্গিক কাগজপত্র প্রস্তুত রাখুন", link: "#" }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 border-b border-gray-200">
      {/* Section Heading */}
      <h2 className="text-xl font-bold text-teal-800 text-center mb-6">চাকরি</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* ================= COLUMN 1 & 2: Main Career Lead News (Left) ================= */}
        <article className="lg:col-span-2 bg-white rounded-3xl shadow-sm overflow-hidden group cursor-pointer">
          <div className="overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80" 
              alt="Top career news" 
              className="w-full h-auto transform group-hover:scale-103 transition-transform duration-300" 
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-teal-800 transition-colors duration-200">
              প্রাথমিক বিদ্যালয়ে সহকারী শিক্ষক নিয়োগের চূড়ান্ত ফল প্রকাশ
            </h3>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              शिक्षাপ্রতিষ্ঠানগুলোতে নিয়োগ প্রক্রিয়ার চূড়ান্ত তালিকা প্রকাশিত হয়েছে — আবেদনকারীরা তাদের নাম ও নির্দেশাবলী যাচাই করুন।
            </p>
            <div className="mt-4 text-gray-500 text-sm">১ ঘণ্টা আগে</div>
          </div>
        </article>

        {/* ================= COLUMN 3: Job Circulars List (Middle) ================= */}
        <div className="lg:col-span-1 space-y-4">
          {jobCirculars.map((job) => (
            <article 
              key={job.id} 
              className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-b-0 group cursor-pointer"
            >
              <img 
                src={job.imgUrl} 
                alt={job.title} 
                className="h-16 w-16 object-cover rounded-lg flex-shrink-0" 
              />
              <div>
                <h4 className="font-bold text-gray-900 group-hover:text-teal-800 transition-colors duration-200 text-sm sm:text-base leading-snug">
                  {job.title}
                </h4>
                <div className="mt-2 text-gray-500 text-xs">{job.time}</div>
              </div>
            </article>
          ))}
        </div>

        {/* ================= COLUMN 4: Career Guide Widget (Right) ================= */}
        <aside className="lg:col-span-1">
          <div className="bg-teal-50 border border-teal-100 p-4 rounded-xl shadow-sm">
            <div className="inline-flex items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-800 mb-3">
              ক্যারিয়ার গাইড
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-3 leading-snug">
              ভাইভা বোর্ডে আত্মবিশ্বাস বাড়ানোর ৫টি পরীক্ষিত উপায়
            </h4>
            <ul className="space-y-2 text-sm">
              {careerGuides.map((guide) => (
                <li key={guide.id}>
                  <a 
                    href={guide.link} 
                    className="text-teal-800 hover:text-teal-950 hover:underline transition-colors duration-150 block py-0.5"
                  >
                    {guide.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

      </div>
    </section>
  );
}