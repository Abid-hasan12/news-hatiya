import React from 'react';

export default function Footer() {
    // অন্যান্য পাতার লিংক ডাটা
    const internalLinks = [
        { id: 1, text: "আমাদের সম্পর্কে", link: "#" },
        { id: 2, text: "বিজ্ঞাপনের মূল্যতালিকা", link: "#" },
        { id: 3, text: "শর্তাবলী", link: "#" },
        { id: 4, text: "গোপনীয়তা নীতি", link: "#" }
    ];

    return (
        <footer className="bg-gray-950 text-gray-400 pt-12 pb-6 mt-12 border-t-4 border-teal-800">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                {/* ================= COLUMN 1: Brand & Socials ================= */}
                <div>
                    <h2 className="text-white font-extrabold text-2xl mb-3">News Hatiya</h2>
                    <p className="text-xs text-gray-400 leading-relaxed mb-4">
                        আমাদের উদ্দেশ্য হলো দ্রুত, নির্ভরযোগ্য এবং স্থানীয় সংবাদ পাঠকদের কাছে পৌঁছে দেওয়া, যাতে তারা দেশের প্রতিটি কোণ থেকে আপডেট থাকতে পারে।
                    </p>

                    {/* Social Icons with Clean SVGs */}
                    <div className="flex items-center gap-3">
                        {/* Facebook */}
                        <a href="#" className="w-8 h-8 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-white hover:bg-teal-800 transition-colors" aria-label="Facebook">
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                            </svg>
                        </a>

                        {/* Twitter / X */}
                        <a href="#" className="w-8 h-8 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-white hover:bg-teal-800 transition-colors" aria-label="Twitter">
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>

                        {/* YouTube */}
                        <a href="#" className="w-8 h-8 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-white hover:bg-teal-800 transition-colors" aria-label="YouTube">
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                        </a>

                        {/* Instagram */}
                        <a href="#" className="w-8 h-8 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-white hover:bg-teal-800 transition-colors" aria-label="Instagram">
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* ================= COLUMN 2: Other Pages Links ================= */}
                <div>
                    <h3 className="text-white font-bold text-sm mb-4">অন্যান্য পাতা</h3>
                    <nav className="flex flex-col space-y-2 text-xs">
                        {internalLinks.map((item) => (
                            <a
                                key={item.id}
                                href={item.link}
                                className="hover:text-white transition-colors w-fit"
                            >
                                {item.text}
                            </a>
                        ))}
                    </nav>
                </div>

                {/* ================= COLUMN 3: Contact Info ================= */}
                <div>
                    <h3 className="text-white font-bold text-sm mb-4">যোগাযোগ</h3>
                    <div className="space-y-1.5 text-xs text-gray-400">
                        <p className="font-semibold text-gray-300">News Hatiya</p>
                        <p>অফিস: Hatiya, Noakhali</p>
                        <p>ইমেইল: info@news-hatiya.com</p>
                        <p>ফোন: +৮৮ ০১৭xxxxxxxx</p>
                    </div>
                </div>

                {/* ================= COLUMN 4: Mobile Apps ================= */}
                <div>
                    <h3 className="text-white font-bold text-sm mb-4">মোবাইল অ্যাপ</h3>
                    <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                        <a href="#" className="inline-flex items-center justify-center rounded-2xl border border-gray-800 bg-gray-900 px-4 py-2.5 text-xs text-white hover:bg-teal-800 transition-colors font-medium">
                            Google Play
                        </a>
                        <a href="#" className="inline-flex items-center justify-center rounded-2xl border border-gray-800 bg-gray-900 px-4 py-2.5 text-xs text-white hover:bg-teal-800 transition-colors font-medium">
                            App Store
                        </a>
                    </div>
                    <p className="mt-4 text-xs text-gray-500 leading-relaxed">
                        ২৪/৭ আপডেটের জন্য আমাদের mobile অ্যাপ ডাউনলোড করুন এবং নিউজ এলার্ট গ্রহণ করুন।
                    </p>
                </div>

            </div>

            {/* ================= BOTTOM BAR: Copyright & Developer Info ================= */}
            <div className="max-w-7xl mx-auto px-4 border-t border-gray-900 mt-10 pt-6 text-center text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center gap-2">
                <p>© ২০২৬ News Hatiya । সর্বস্বত্ব সংরক্ষিত।</p>
                <p>
                    Developed by{" "}
                    <span className="text-teal-500 font-semibold hover:underline cursor-pointer transition-all">
                        Abid Hasan
                    </span>
                </p>
            </div>
        </footer>
    );
}