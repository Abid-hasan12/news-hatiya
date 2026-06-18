import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MegaMenu from './components/MegaMenu';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

import { navCategories, breakingNewsData, footerLinks, megaMenuData } from './newsData';

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    //  পেজ ট্র্যাকিং স্টেট: 'home' অথবা 'category'
    const [currentView, setCurrentView] = useState('home');
    const [selectedCategory, setSelectedCategory] = useState('');

    const navigateHome = () => {
        setSelectedCategory('');
        setCurrentView('home');
    };

    //  ক্যাটাগরি পরিবর্তনের ফাংশন যা আমরা নেভবারে পাঠাবো
    const handleCategorySelect = (category, force = false) => {
        if (category === 'সর্বশেষ' && !force) {
            navigateHome();
        } else {
            setSelectedCategory(category);
            setCurrentView('category'); // force true হলে সরাসরি ক্যাটাগরি পেজে নিয়ে যাবে
        }
    };

    return (
        <div className="min-h-screen bg-white flex flex-col justify-between">
            <ScrollToTop dependencies={[currentView, selectedCategory]} />

            <div>
                {/*  Navbar-এ লোগো ক্লিক ও ক্যাটাগরি ক্লিকের ফাংশন পাস করা হলো */}
                <Navbar
                    categories={navCategories}
                    breakingNews={breakingNewsData}
                    onMenuOpen={() => setIsMenuOpen(true)}
                    onCategoryClick={handleCategorySelect}
                    onLogoClick={navigateHome}
                />

                {/* Main Content Area - Conditional Rendering */}
                <main>
                    {currentView === 'home' ? (
                        <Home onCategoryClick={handleCategorySelect} />
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