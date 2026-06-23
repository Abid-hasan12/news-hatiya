import React, { useEffect, useRef, useState } from 'react';

// 🎯 প্রপ্স হিসেবে নতুন করে onCategoryClick এবং onLogoClick রিসিভ করা হলো
export default function Navbar({ categories, breakingNews, onMenuOpen, onCategoryClick, onLogoClick, onSearchSubmit }) {
    const [currentDate, setCurrentDate] = useState('');
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const searchInputRef = useRef(null);
    const navbarRef = useRef(null);
    const normalizeCategory = (str) => (str ? str.replace('য়া', 'যা').replace('য়া', 'যা').trim() : '');
    const normalizeText = (value) => (value || '').toString().toLowerCase().trim();

    // লাইভ বাংলা/ইংলিশ ফরম্যাটে আজকের তারিখ দেখানোর জন্য
    useEffect(() => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const today = new Date().toLocaleDateString('en-US', options);
        setCurrentDate(today);
    }, []);

    useEffect(() => {
        if (isSearchOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isSearchOpen]);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setIsSearchOpen(false);
            }
        };

        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                setIsSearchOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        document.addEventListener('keydown', handleEscape);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            document.removeEventListener('keydown', handleEscape);
        };
    }, []);

    // 🎯 ২৪ ঘণ্টার ফিল্টারিং এবং লেটেস্ট ব্রেকিং নিউজ সবার সামনে নিয়ে আসার লজিক
    const getActiveBreakingNews = () => {
        if (!Array.isArray(breakingNews)) return [];

        const now = new Date();
        const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000); // ঠিক ২৪ ঘণ্টা আগের সময়

        return breakingNews
            .filter(news => {
                // যদি ডাটা অবজেক্ট ফরম্যাটে থাকে এবং createdAt প্রোপার্টি থাকে
                if (news && typeof news === 'object' && news.createdAt) {
                    const newsDate = new Date(news.createdAt);
                    return newsDate >= twentyFourHoursAgo;
                }
                // ব্যাকআপ: যদি শুধু স্ট্রিং অ্যারে হয়, তবে ফিল্টার স্কিপ করে ট্রু রিটার্ন করবে
                return true;
            })
            .map(news => (news && typeof news === 'object' ? news.title : news)) // শুধু টেক্সট/টাইটেল টুকু নেওয়া
            .reverse(); // 🎯 অ্যারে উল্টে দেওয়া হলো, যাতে সর্বশেষ পুশ করা নিউজটি লাইনের শুরুতে আসে
    };

    const activeBreakingList = getActiveBreakingNews();

    const handleSearchToggle = () => {
        setIsSearchOpen((prev) => !prev);
    };

    const handleSearchClose = () => {
        setIsSearchOpen(false);
        setSearchQuery('');
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();

        const query = searchQuery.trim();
        if (!query) {
            return;
        }

        if (onSearchSubmit) {
            onSearchSubmit(query);
        }

        handleSearchClose();
    };

    return (
        <div ref={navbarRef}>
            {/* Top Bar: Date & Social Links */}
            <header className="bg-gray-900 text-white text-sm">
                <div className="mx-auto flex justify-between gap-3 px-4 py-2 flex-row items-center md:px-6">
                    <div className="top-bar__date">
                        {currentDate || "Tuesday, June 16, 2026"}
                    </div>
                    <div className="top-bar__social flex items-center gap-3 justify-end text-gray-400">
                        {/* Facebook */}
                        <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                            </svg>
                        </a>

                        {/* Twitter / X */}
                        <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>

                        {/* YouTube */}
                        <a href="#" className="hover:text-white transition-colors" aria-label="YouTube">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                        </a>

                        {/* Instagram */}
                        <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 0.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0 3.259-.014 3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </header>

            {/* Breaking News Section */}
            <section className="breaking-news bg-white border-t border-gray-200 text-normal font-medium text-black">
                <div className="mx-auto flex items-center gap-2 px-4 py-3 md:flex-row md:px-6">
                    <div className="breaking-news__label inline-flex items-center rounded px-3 py-1 bg-red-600 text-white font-bold whitespace-nowrap">
                        ব্রেকিং নিউজ:
                    </div>
                    <div className="breaking-news__ticker flex-1 flex justify-center items-center text-center overflow-hidden text-black">
                        <marquee className="breaking-news__marquee" behavior="scroll" direction="left" scrollamount="5">
                            {activeBreakingList.length > 0
                                ? activeBreakingList.join(" | | ")
                                : "কোনো তাজা খবর নেই"}
                        </marquee>
                    </div>
                </div>
            </section>

            {/* Main Sticky Navigation Bar */}
            <nav className="bg-white sticky top-0 shadow-sm z-40">
                {/* Logo & Main Actions */}
                <div className="border-b border-gray-100 py-3">
                    <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">

                        {/* লোগোতে onClick বসানো হলো এবং href সরিয়ে বাটন বিহেভিয়ার দেওয়া হলো */}
                        <button onClick={onLogoClick} className="flex items-center gap-1 shrink-0 cursor-pointer focus:outline-none">
                            <span className="text-black font-extrabold text-2xl md:text-3xl tracking-tight">News</span>
                            <span className="text-red-600 font-extrabold text-2xl md:text-3xl tracking-tight">Hatiya</span>
                        </button>

                        <div className="flex items-center gap-3 md:gap-4 text-gray-700 shrink-0">
                            <button
                                type="button"
                                onClick={handleSearchToggle}
                                className=" text-gray-700 hover:text-red-600 p-1.5 transition-colors"
                                aria-label="Search News"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                            <button type="button" onClick={handleSearchToggle} className="hidden md:block hover:text-red-600 transition-colors text-base p-1" aria-label="Search">
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

                        <div className="flex-1 overflow-x-auto pr-2 md:pr-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden" style={{ WebkitOverflowScrolling: 'touch' }}>
                            <ul className="flex items-center gap-5 md:gap-6 text-gray-800 font-bold text-sm py-3 whitespace-nowrap md:whitespace-normal md:justify-center">
                                {categories?.map((category, index) => (
                                    /* এখানে onClick ইভেন্টটি যোগ করা হয়েছে যা App.jsx এর স্টেটকে চেঞ্জ করবে */
                                    <li
                                        key={index}
                                        onClick={() => onCategoryClick(normalizeCategory(category))}
                                        className="hover:text-red-600 cursor-pointer transition-colors"
                                    >
                                        {category}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Hamburger Button */}
                        <button
                            onClick={onMenuOpen}
                            id="menu-btn"
                            className="text-gray-800 hover:text-red-600 flex items-center pl-3 bg-white h-full py-3 shrink-0 md:hidden sticky right-0 z-10 shadow-[-10px_0_15px_rgba(255,255,255,0.9)]"
                            aria-label="Toggle Menu"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                    </div>
                </div>
            </nav>

            {isSearchOpen && (
                <section className="border-b border-gray-200 bg-white shadow-sm">
                    <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 space-y-4">
                        <form onSubmit={handleSearchSubmit} className="flex items-center gap-3">
                            <div className="flex-1 relative">
                                <input
                                    ref={searchInputRef}
                                    type="search"
                                    value={searchQuery}
                                    onChange={(event) => setSearchQuery(event.target.value)}
                                    placeholder="Search news by title or description..."
                                    aria-label="Search news"
                                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 pr-10 text-sm md:text-base text-gray-900 outline-none transition focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-100"
                                />
                                {searchQuery && (
                                    <button
                                        type="button"
                                        onClick={() => setSearchQuery('')}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                        aria-label="Clear search"
                                    >
                                        <i className="fas fa-times"></i>
                                    </button>
                                )}
                            </div>
                            <button
                                type="submit"
                                className="rounded-2xl bg-red-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-red-700"
                            >
                                Search
                            </button>
                            <button
                                type="button"
                                onClick={handleSearchClose}
                                className="rounded-2xl border border-gray-200 px-4 py-3 text-sm font-bold text-gray-600 hover:text-red-600 hover:border-red-200 transition-colors"
                            >
                                Close
                            </button>
                        </form>

                        <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50 px-4 py-8 text-center text-sm text-gray-500">
                            Type a title or description, then press Search.
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}