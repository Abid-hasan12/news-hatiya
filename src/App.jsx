import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MegaMenu from './components/MegaMenu';
import Home from './pages/Home';
import Footer from './components/Footer';

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white flex flex-col justify-between">
            <div>
                {/* Navbar - passing menu opener handler */}
                <Navbar onMenuOpen={() => setIsMenuOpen(true)} />

                {/* Main Content Area */}
                <main>
                    <Home />
                </main>
            </div>

            {/* Footer */}
            <Footer />

            {/* Mega Menu Overlay Layer */}
            <MegaMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </div>
    );
}