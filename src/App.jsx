import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MegaMenu from './components/MegaMenu';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import SingleNews from './pages/SingleNews'; // 🎯 সিঙ্গেল নিউজ পেজটি ইমপোর্ট করা হলো
import SearchResults from './pages/SearchResults';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

import { allNews, navCategories, breakingNewsData, footerLinks, megaMenuData } from './newsData';

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // 🎯 পেজ ট্র্যাকিং স্টেট: 'home', 'category', অথবা 'details'
    const [currentView, setCurrentView] = useState('home');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedNews, setSelectedNews] = useState(null); // 🎯 ক্লিক করা নিউজ সেভ রাখার স্টেট
    const [searchQuery, setSearchQuery] = useState('');

    const navigateHome = () => {
        setSelectedCategory('');
        setSelectedNews(null);
        setSearchQuery('');
        setCurrentView('home');
    };

    // ক্যাটাগরি পরিবর্তনের ফাংশন
    const handleCategorySelect = (category, force = false) => {
        if (category === 'সর্বশেষ' && !force) {
            navigateHome();
        } else {
            setSelectedCategory(category);
            setSelectedNews(null); // ক্যাটাগরি চেঞ্জ হলে আগের নিউজ স্টেট ক্লিয়ার করছি
            setCurrentView('category');
        }
    };

    // 🎯 যেকোনো নিউজ কার্ডে ক্লিক করলে ডিটেইলস পেজে যাওয়ার ফাংশন
    const handleNewsSelect = (newsItem) => {
        setSelectedNews(newsItem);
        setCurrentView('details');
    };

    const handleSearchSubmit = (query) => {
        setSelectedCategory('');
        setSelectedNews(null);
        setSearchQuery(query);
        setCurrentView('search');
    };

    return (
        <div className="min-h-screen bg-white flex flex-col justify-between">
            {/* 🎯 ডিপেনডেন্সি লিস্টে currentView এবং selectedNews যোগ করা হলো যাতে পেজ চেঞ্জ হলেই স্ক্রল উপরে চলে যায় */}
            <ScrollToTop dependencies={[currentView, selectedCategory, selectedNews, searchQuery]} />

            <div>
                {/* Navbar-এ লোগো ক্লিক ও ক্যাটাগরি ক্লিকের ফাংশন পাস করা হলো */}
                <Navbar
                    categories={navCategories}
                    breakingNews={breakingNewsData}
                    onMenuOpen={() => setIsMenuOpen(true)}
                    onCategoryClick={handleCategorySelect}
                    onLogoClick={navigateHome}
                    onSearchSubmit={handleSearchSubmit}
                />

                {/* Main Content Area - Conditional Rendering */}
                <main>
                    {currentView === 'home' && (
                        <Home
                            onCategoryClick={handleCategorySelect}
                            onNewsClick={handleNewsSelect} // হোম পেজে পাস করা হলো
                        />
                    )}

                    {currentView === 'category' && (
                        <CategoryPage
                            categoryName={selectedCategory}
                            onNewsClick={handleNewsSelect} // ক্যাটাগরি পেজে পাস করা হলো
                        />
                    )}

                    {currentView === 'search' && (
                        <SearchResults
                            query={searchQuery}
                            newsItems={allNews}
                            onNewsClick={handleNewsSelect}
                            onClearSearch={navigateHome}
                        />
                    )}

                    {/* ৩ নম্বর ভিউ: বিস্তারিত নিউজ পেজ রেন্ডারিং */}
                    {currentView === 'details' && selectedNews && (
                        <SingleNews
                            news={selectedNews}
                            onCategoryClick={handleCategorySelect}
                            onNewsClick={handleNewsSelect} // 🎯 এই লাইনটি প্রপ হিসেবে দিয়ে দাও ভাই!
                        />
                    )}
                </main>
            </div>

            {/* Footer */}
            <Footer links={footerLinks} />

            {/* Mega Menu Overlay Layer */}
            <MegaMenu
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
                menuData={megaMenuData}
                onCategoryClick={handleCategorySelect}
            />
        </div>
    );
}