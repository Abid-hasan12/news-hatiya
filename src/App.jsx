import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MegaMenu from './components/MegaMenu';
import Home from './pages/Home';
import Footer from './components/Footer';

// 🎯 সেন্ট্রাল ডাটা ফাইল থেকে ক্যাটাগরি ও ব্রেকিং নিউজের ডাটা ইম্পোর্ট করা হলো
import { navCategories, breakingNewsData, footerLinks, megaMenuData } from './newsData';

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white flex flex-col justify-between">
            <div>
                {/* 🛠️ Navbar-এর ভেতর ডায়নামিক প্রপ্স পাস করা হলো */}
                <Navbar
                    categories={navCategories}
                    breakingNews={breakingNewsData}
                    onMenuOpen={() => setIsMenuOpen(true)}
                />

                {/* Main Content Area */}
                <main>
                    <Home />
                </main>
            </div>

            {/* Footer */}
            <Footer links={footerLinks} />

            {/* Mega Menu Overlay Layer */}
            <MegaMenu
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
                menuData={megaMenuData}
            />
        </div>
    );
}