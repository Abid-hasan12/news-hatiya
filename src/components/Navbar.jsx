import React, { useState, useEffect } from 'react';

export default function Navbar({ onMenuOpen }) {
    const [currentDate, setCurrentDate] = useState('');

    // লাইভ বাংলা/ইংলিশ ফরম্যাটে আজকের তারিখ দেখানোর জন্য
    useEffect(() => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const today = new Date().toLocaleDateString('en-US', options);
        setCurrentDate(today);
    }, []);

    const categories = [
        "সর্বশেষ", "বাংলাদেশ", "রাজনীতি", "বিশ্ব", "বাণিজ্য",
        "مতামত", "খেলা", "বিনোদন", "চাকরি", "জীবনযাপন", "ভিডিও"
    ];

    return (
        <>
            {/* Top Bar: Date & Social Links */}
            <header className="bg-gray-900 text-white text-sm">
                <div className="mx-auto flex justify-between gap-3 px-4 py-2 md:flex-row md:items-center md:px-6">
                    <div className="top-bar__date">
                        {currentDate || "Tuesday, June 9, 2026"}
                    </div>
                    <div className="top-bar__social flex items-center gap-3 justify-start md:justify-end">
                        <a href="#" className="social-link hover:text-gray-300" aria-label="Facebook">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="social-link hover:text-gray-300" aria-label="Twitter">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="social-link hover:text-gray-300" aria-label="YouTube">
                            <i className="fab fa-youtube"></i>
                        </a>
                        <a href="#" className="social-link hover:text-gray-300" aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </header>

            {/* Breaking News Section */}
            <section className="breaking-news bg-white border-t border-gray-200 text-sm">
                <div className="mx-auto flex items-center gap-2 px-4 py-3 md:flex-row md:px-6">
                    <div className="breaking-news__label inline-flex items-center rounded px-3 py-1 bg-red-600 text-white font-bold whitespace-nowrap">
                        ব্রেকিং নিউজ:
                    </div>
                    <div className="breaking-news__ticker flex-1 flex justify-center items-center text-center overflow-hidden text-gray-800">
                        <marquee className="breaking-news__marquee" behavior="scroll" direction="left" scrollamount="5">
                            ব্রেকিং নিউজ: রাজধানীতে নতুন ট্রাফিক আইন কার্যকর হচ্ছে | প্রধানমন্ত্রী আজ নতুন হাসপাতালে উদ্বোধন করবেন | দেশের বাণিজ্যে নতুন উন্নয়নের তথ্য প্রকাশিত
                        </marquee>
                    </div>
                </div>
            </section>

            {/* Main Sticky Navigation Bar */}
            <nav className="bg-white sticky top-0 shadow-sm z-40">
                {/* Logo & Main Actions */}
                <div className="border-b border-gray-100 py-3">
                    <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
                        <a href="#" className="flex items-center gap-1 shrink-0">
                            <span className="text-black font-extrabold text-2xl md:text-3xl tracking-tight">News</span>
                            <span className="text-red-600 font-extrabold text-2xl md:text-3xl tracking-tight">Hatiya</span>
                        </a>
                        <div className="flex items-center gap-3 md:gap-4 text-gray-700 shrink-0">
                            <button
                                className=" text-gray-700 hover:text-red-600 p-1.5 transition-colors"
                                aria-label="Search News"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                            <button className="hidden md:block hover:text-red-600 transition-colors text-base p-1" aria-label="Search">
                                <i className="fas fa-search"></i>
                            </button>

                            <span className="hidden md:block text-gray-200">|</span>
                            <button className="hover:text-red-600 transition-colors text-xs md:text-sm font-bold flex items-center gap-1.5 p-1">
                                <i className="fas fa-user text-sm md:text-base"></i> Login
                            </button>
                        </div>

                    </div>
                </div>

                {/* Categories Horizontal Scroll Layout */}
                <div className="w-full bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between relative">

                        {/* Custom scroll class applied */}
                        <div className="flex-1 overflow-x-auto pr-2 md:pr-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden" style={{ WebkitOverflowScrolling: 'touch' }}>
                            <ul className="flex items-center gap-5 md:gap-6 text-gray-800 font-bold text-sm py-3 whitespace-nowrap md:whitespace-normal md:justify-center">
                                {categories.map((category, index) => (
                                    <li key={index} className="hover:text-red-600 cursor-pointer transition-colors">
                                        {category}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* ================= FIXED & UPDATED HAMBURGER BUTTON ================= */}
                        <button
                            onClick={onMenuOpen}
                            id="menu-btn"
                            className="text-gray-800 hover:text-red-600 flex items-center pl-3 bg-white h-full py-3 shrink-0 md:hidden sticky right-0 z-10 shadow-[-10px_0_15px_rgba(255,255,255,0.9)]"
                            aria-label="Toggle Menu"
                        >
                            {/* Pure SVG 3-Line Hamburger Icon */}
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                    </div>
                </div>
            </nav>
        </>
    );
}