'use client'

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../src/contexts/LanguageContext';
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import Ticker from '../src/components/Ticker';
import Strengths from '../src/components/Strengths';
import Standards from '../src/components/Standards';
import SupportBanner from '../src/components/SupportBanner';
import Footer from '../src/components/Footer';
import ProductModal from '../src/components/ProductModal';
import Preloader from '../src/components/Preloader';
import { siteContent } from '../src/data/content';

export default function Home() {
  const { lang, setLang, isInitialized } = useLanguage();
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showPreloader, setShowPreloader] = useState(true); 

  const content = siteContent[lang];

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      const fallbackTimeout = setTimeout(() => {
        setIsLoading(false);
      }, 3000);

      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(fallbackTimeout);
      };
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = content.dir;
    document.title = lang === 'fa' 
      ? 'شیمیا صدف | Shimia Sadaf - پایانه‌های پرداخت هوشمند' 
      : 'Shimia Sadaf - Smart POS Payment Terminals';
  }, [lang, content.dir]);

  // const handleNavigate = (sectionId) => {
  //   setActiveSection(sectionId);
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  // const handleOpenProduct = (productId) => {
  //   window.location.href = `/products?product=${productId}`;
  // };

  const handleCloseProduct = () => {
    setSelectedProductId(null);
  };

  const handleOpenContact = () => {
    window.location.href = '/contact';
  };

  const handlePreloaderFinish = () => {
    setShowPreloader(false);
  };

  useEffect(() => {
    if (showPreloader) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showPreloader]);

  return (
    <>
      {showPreloader && (
        <Preloader isLoading={isLoading} onFinish={handlePreloaderFinish} />
      )}

      {/* Main App */}
      <div
        dir={content.dir}
        className={`min-h-screen flex flex-col font-vazir w-full overflow-x-hidden ${lang === 'en' ? 'font-en' : ''}`}
      >
        <Navbar
          lang={lang}
          setLang={setLang}
          content={content}
          activeSection="hero"
        />

        <main className="flex-grow">
          <Hero
            lang={lang}
            content={content}
            onOpenContact={handleOpenContact}
          />

          <Ticker lang={lang} content={content} />

          <Strengths lang={lang} content={content} />

          <Standards lang={lang} content={content} />

          <SupportBanner
            lang={lang}
            content={content}
            onOpenContact={handleOpenContact}
          />
        </main>

        <Footer
          lang={lang}
          content={content}
        />

        {selectedProductId && (
          <ProductModal
            productId={selectedProductId}
            onClose={handleCloseProduct}
            lang={lang}
            content={content}
            onOpenContact={handleOpenContact}
          />
        )}
      </div>
    </>
  );
}
