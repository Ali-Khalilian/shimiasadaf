'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState('fa');
  const [isInitialized, setIsInitialized] = useState(false);

  // بارگذاری زبان از localStorage در ابتدا
  useEffect(() => {
    const savedLang = localStorage.getItem('siteLanguage');
    if (savedLang && (savedLang === 'fa' || savedLang === 'en')) {
      setLangState(savedLang);
    }
    setIsInitialized(true);
  }, []);

  // ذخیره زبان در localStorage هنگام تغییر
  const setLang = (newLang) => {
    setLangState(newLang);
    localStorage.setItem('siteLanguage', newLang);
    
    // تنظیم direction و lang در document
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === 'fa' ? 'rtl' : 'ltr';
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, isInitialized }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
