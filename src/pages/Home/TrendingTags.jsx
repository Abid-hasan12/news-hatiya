import React from 'react';

export default function TrendingTags() {
  // ট্রেন্ডিং বা গুরুত্বপূর্ণ টপিকগুলোর ডাটা অ্যারে
  const tags = [
    { id: 1, name: "নামাজের সময়সূচি", link: "#" },
    { id: 2, name: "আজকের আবহাওয়া", link: "#" },
    { id: 3, name: "টিভিতে আজকের খেলা", link: "#" },
    { id: 4, name: "আদালত", link: "#" },
    { id: 5, name: "রক্তাক্ত জুলাই", link: "#" },
    { id: 6, name: "লাইভ", link: "#" },
    { id: 7, name: "ইরান ইসরায়েল যুদ্ধ", link: "#" },
    { id: 8, name: "ফুটবল বিশ্বকাপ ২০২৬", link: "#" },
    { id: 9, name: "বাজেট ২৬-২০২৭", link: "#" },
    { id: 10, name: "সরকারি ছুটির তালিকা", link: "#" }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-6 border-t border-b border-gray-200 my-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-4 gap-x-6 py-2">
        {tags.map((tag) => (
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