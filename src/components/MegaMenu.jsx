import React, { useEffect, useMemo, useState } from 'react';
import { createCategorySlug } from '../utils/categoryRouting';

// প্রপ্স হিসেবে menuData রিসিভ করা হচ্ছে
export default function MegaMenu({ isOpen, onClose, menuData, onCategoryClick, activeCategory }) {
    const [openAccordion, setOpenAccordion] = useState(null);
    const menuItems = useMemo(() => (Array.isArray(menuData) ? menuData : []), [menuData]);

    useEffect(() => {
        if (!isOpen) {
            setOpenAccordion(null);
            return;
        }

        const matchedIndex = menuItems.findIndex((item) => {
            const itemSlug = createCategorySlug(item?.title);
            const activeSlug = createCategorySlug(activeCategory);
            const subMatched = item?.subs?.some((sub) => createCategorySlug(sub) === activeSlug);

            return itemSlug === activeSlug || subMatched;
        });

        if (matchedIndex >= 0) {
            setOpenAccordion(matchedIndex);
        }
    }, [activeCategory, isOpen, menuItems]);

    const handleNavigate = (category) => {
        if (onCategoryClick) {
            onCategoryClick(category);
        }

        if (onClose) {
            onClose();
        }
    };

    const isCategoryActive = (category) => createCategorySlug(activeCategory) === createCategorySlug(category);

    return (
        <div className={`fixed inset-0 bg-black/60 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className={`absolute right-0 top-0 h-full w-full max-w-2xl bg-white shadow-2xl flex flex-col transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>

                {/* Header */}
                <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                    <div className="flex items-center gap-1">
                        <span className="text-teal-800 font-extrabold text-xl tracking-tight uppercase">News Hatiya</span>
                    </div>
                    <button onClick={onClose} className="text-gray-500 hover:text-red-600 p-2 rounded-full hover:bg-gray-100 transition-all" aria-label="Close Menu">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Body */}
                <div className="flex-1 overflow-y-auto p-5">

                    {/* DESKTOP VIEW */}
                    <div className="hidden lg:grid grid-cols-1 gap-1 divide-y divide-gray-50">
                        {menuItems.map((item, idx) => (
                            <div key={item.title || idx} className="flex gap-4 py-3.5 items-start">
                                <button
                                    type="button"
                                    onClick={() => handleNavigate(item.title)}
                                    className={`font-bold text-left w-28 flex items-center justify-between shrink-0 transition-colors ${isCategoryActive(item.title) ? 'text-teal-800' : 'text-gray-900 hover:text-teal-800'}`}
                                    aria-current={isCategoryActive(item.title) ? 'page' : undefined}
                                >
                                    <span>{item.title}</span>
                                    <svg className="w-3 h-3 text-teal-700 mr-2" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                                <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-600">
                                    {item.subs?.map((sub, sIdx) => {
                                        const active = isCategoryActive(sub);

                                        return (
                                            <button
                                                key={sub || sIdx}
                                                type="button"
                                                onClick={() => handleNavigate(sub)}
                                                className={`text-left transition-colors hover:text-teal-800 ${active ? 'text-teal-800 font-semibold' : ''}`}
                                                aria-current={active ? 'page' : undefined}
                                            >
                                                {sub}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* MOBILE VIEW */}
                    <div className="block lg:hidden space-y-1">
                        {menuItems.map((item, idx) => {
                            const categoryActive = isCategoryActive(item.title) || item.subs?.some((sub) => isCategoryActive(sub));
                            const isOpenItem = openAccordion === idx;

                            return (
                                <div key={item.title || idx} className="border-b border-gray-50 pb-1">
                                    <button
                                        type="button"
                                        onClick={() => setOpenAccordion(isOpenItem ? null : idx)}
                                        className={`w-full flex justify-between items-center py-3 text-sm font-bold rounded-xl px-2 transition-colors ${categoryActive ? 'text-teal-800 bg-teal-50/60' : 'text-gray-800 hover:bg-gray-50'}`}
                                    >
                                        <span>{item.title}</span>
                                        <svg className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpenItem ? 'rotate-180 text-teal-800' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    <div className={`${isOpenItem ? 'block bg-gray-50/50 rounded-2xl p-3 mb-2' : 'hidden'} pl-2 space-y-2 text-xs text-gray-600`}>
                                        <button
                                            type="button"
                                            onClick={() => handleNavigate(item.title)}
                                            className="w-full text-left rounded-xl px-3 py-2 text-teal-800 bg-teal-50 font-semibold hover:bg-teal-100 transition-colors"
                                        >
                                            {item.title} দেখুন
                                        </button>
                                        <div className="space-y-1.5">
                                            {item.subs?.map((sub, sIdx) => {
                                                const active = isCategoryActive(sub);

                                                return (
                                                    <button
                                                        key={sub || sIdx}
                                                        type="button"
                                                        onClick={() => handleNavigate(sub)}
                                                        className={`w-full text-left rounded-xl px-3 py-2 transition-colors border border-transparent hover:bg-white hover:text-teal-800 ${active ? 'bg-white text-teal-800 border-teal-100 font-semibold' : 'text-gray-600'}`}
                                                    >
                                                        {sub}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </div>
    );
}