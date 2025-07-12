'use client';

import React from 'react';

const LanguageSwitcher = ({ currentLang }) => {
    const switchLanguage = (lang) => {
        const url = new URL(window.location);
        url.searchParams.set('lang', lang);
        window.location.href = url.toString();
    };

    return (
        <div className="flex items-center space-x-2">
            <button
                onClick={() => switchLanguage('en')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${
                    currentLang === 'en' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
            >
                EN
            </button>
            <button
                onClick={() => switchLanguage('fr')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${
                    currentLang === 'fr' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
            >
                FR
            </button>
        </div>
    );
};

export default LanguageSwitcher;
