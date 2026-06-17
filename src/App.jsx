import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MegaMenu from './components/MegaMenu';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage'; // 🎯 নতুন ক্যাটাগরি পেজ ইম্পোর্ট
import Footer from './components/Footer';

import { navCategories, breakingNewsData, footerLinks, megaMenuData } from './newsData';

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // 🎯 পেজ ট্র্যাকিং স্টেট: 'home' অথবা 'category'
    const [currentView, setCurrentView] = useState('home');
    const [selectedCategory, setSelectedCategory] = useState('');

    // 🎯 ক্যাটাগরি পরিবর্তনের ফাংশন যা আমরা নেভবারে পাঠাবো
    const handleCategorySelect = (category) => {
        if (category === 'সর্বশেষ') {
            setCurrentView('home'); // 'সর্বশেষ' এ ক্লিক করলে হোম পেজে ব্যাক করবে
        } else {
            setSelectedCategory(category);
            setCurrentView('category'); // অন্য ক্যাটাগরিতে ক্লিক করলে ক্যাটাগরি পেজ দেখাবে
        }
    };

    return (
        <div className="min-h-screen bg-white flex flex-col justify-between">
            <div>
                {/* 🛠️ Navbar-এ লোগো ক্লিক ও ক্যাটাগরি ক্লিকের ফাংশন পাস করা হলো */}
                <Navbar
                    categories={navCategories}
                    breakingNews={breakingNewsData}
                    onMenuOpen={() => setIsMenuOpen(true)}
                    onCategoryClick={handleCategorySelect}
                    onLogoClick={() => setCurrentView('home')}
                />

                {/* Main Content Area - Conditional Rendering */}
                <main>
                    {currentView === 'home' ? (
                        <Home />
                    ) : (
                        <CategoryPage categoryName={selectedCategory} />
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
                onCategoryClick={handleCategorySelect} // মেগা মেনুর জন্যও সেম লজিক
            />
        </div>
    );
}