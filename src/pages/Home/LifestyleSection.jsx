import React from 'react';

export default function LifestyleSection() {
  // বাঁদিকের ৩টি বড় ইমেজ কার্ডের ডাটা
  const mainCards = [
    {
      id: 1,
      title: "হঠাৎ অতিথি এলে রান্না করুন ডিমের পোলাও",
      time: "২৫ মিনিট আগে",
      imgUrl: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "প্রযুক্তির যেসব জাদু ঢাকছে এবারের বিশ্বকাপ মঞ্চে",
      time: "৫০ মিনিট আগে",
      imgUrl: "https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "ফ্যাশনের দেশে ফুটবল",
      time: "১ ঘণ্টা আগে",
      imgUrl: "https://images.unsplash.com/photo-1489599849228-ed9c0f06701b?auto=format&fit=crop&w=800&q=80"
    }
  ];

  // ডানদিকের ৪টি ছোট কার্ডের ডাটা
  const sidebarCards = [
    { id: 1, title: "বিশ্বকাপ শুরুর আগেই বদলে ফেলুন চুলের ছাট", time: "২০ মিনিট আগে", imgUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=200&q=80" },
    { id: 2, title: "গরমে মেকআপ টেকানোর ১০ ট্রিকস", time: "৪৫ মিনিট আগে", imgUrl: "https://images.unsplash.com/photo-1515405295579-ba7b45bda5f3?auto=format&fit=crop&w=200&q=80" },
    { id: 3, title: "সেলিব্রিটিদের গ্রীষ্মকালীন ফ্যাশন", time: "১ ঘণ্টা আগে", imgUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=200&q=80" },
    { id: 4, title: "গরমে ত্বক রক্ষার সহজ উপায়", time: "১.৫ ঘণ্টা আগে", imgUrl: "https://images.unsplash.com/photo-1508700115892-45a347ae0e0d?auto=format&fit=crop&w=200&q=80" }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 border-b border-gray-200">
      <h2 className="text-xl font-bold text-teal-800 text-center mb-6">জীবনধারা</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Left & Center: 3-column grid */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
          {mainCards.map((item) => (
            <article key={item.id} className="bg-white rounded-3xl shadow-sm overflow-hidden group cursor-pointer border border-gray-50">
              <img src={item.imgUrl} alt={item.title} className="w-full h-44 object-cover rounded-lg mb-2" />
              <div className="px-5 pb-5">
                <h3 className="text-gray-900 font-bold text-sm leading-snug line-clamp-2 group-hover:text-teal-800 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-500 text-xs">{item.time}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Right Column: 2x2 Grid */}
        <aside className="lg:col-span-1">
          <div className="grid grid-cols-2 gap-2">
            {sidebarCards.map((item) => (
              <article key={item.id} className="flex flex-col group cursor-pointer">
                <img src={item.imgUrl} alt={item.title} className="w-full aspect-square object-cover rounded-md" />
                <h4 className="mt-2 font-bold text-gray-900 text-xs line-clamp-2 group-hover:text-teal-800 transition-colors">
                  {item.title}
                </h4>
                <p className="mt-1 text-gray-500 text-xs">{item.time}</p>
              </article>
            ))}
          </div>
        </aside>

      </div>
    </section>
  );
}