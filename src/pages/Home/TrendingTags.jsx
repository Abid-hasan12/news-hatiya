import React from 'react';

// প্রপ্স হিসেবে tags অ্যারে রিসিভ করা হচ্ছে
export default function TrendingTags({ tags }) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6 border-t border-b border-gray-200 my-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-4 gap-x-6 py-2">
        {tags?.map((tag) => (
          <a
            key={tag.id}
            href={tag.link}
            className="flex items-center gap-2 text-gray-800 font-medium text-sm hover:text-teal-800 cursor-pointer transition-colors duration-200 group"
          >
            <span className="text-teal-600 font-bold text-base group-hover:text-teal-800 transition-colors">
              »
            </span>{" "}
            {tag.name}
          </a>
        ))}
      </div>
    </section>
  );
}