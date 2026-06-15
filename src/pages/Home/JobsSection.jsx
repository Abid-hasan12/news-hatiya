import React from 'react';

// প্রপ্স হিসেবে leadJob, circularJobs, এবং guideJob রিসিভ করা হচ্ছে
export default function JobsSection({ leadJob, circularJobs, guideJob }) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8 border-b border-gray-200">
      {/* Section Heading */}
      <h2 className="text-xl font-bold text-teal-800 text-center mb-6">চাকরি</h2>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* ================= COLUMN 1 & 2: Main Career Lead News (Left) ================= */}
        {leadJob && (
          <article className="lg:col-span-2 bg-white rounded-3xl shadow-sm overflow-hidden group cursor-pointer">
            <div className="overflow-hidden rounded-lg">
              <img
                src={leadJob.imgSrc}
                alt={leadJob.title}
                className="w-full h-auto transform group-hover:scale-103 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-teal-800 transition-colors duration-200">
                {leadJob.title}
              </h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {leadJob.desc}
              </p>
              <div className="mt-4 text-gray-500 text-sm">{leadJob.time}</div>
            </div>
          </article>
        )}

        {/* ================= COLUMN 3: Job Circulars List (Middle) ================= */}
        <div className="lg:col-span-1 space-y-4">
          {circularJobs?.map((job) => (
            <article
              key={job.id}
              className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-b-0 group cursor-pointer"
            >
              <img
                src={job.imgSrc}
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
        {guideJob && (
          <aside className="lg:col-span-1">
            <div className="bg-teal-50 border border-teal-100 p-4 rounded-xl shadow-sm">
              <div className="inline-flex items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-800 mb-3">
                ক্যারিয়ার গাইড
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3 leading-snug">
                {guideJob.title}
              </h4>
              <ul className="space-y-2 text-sm">
                {guideJob.careerGuides?.map((guide) => (
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
        )}

      </div>
    </section>
  );
}