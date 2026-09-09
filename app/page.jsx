'use client'

import React, { useState, useEffect } from 'react';
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import Ticker from '../src/components/Ticker';
import AboutUs from '../src/components/AboutUs';
import Standards from '../src/components/Standards';
import Products from '../src/components/Products';
import OemOdm from '../src/components/OemOdm';
import Strengths from '../src/components/Strengths';
import Faqs from '../src/components/Faqs';
import SupportBanner from '../src/components/SupportBanner';
import ContactSection from '../src/components/ContactSection';
import Footer from '../src/components/Footer';
import ProductModal from '../src/components/ProductModal';
import Preloader from '../src/components/Preloader';
import { siteContent } from '../src/data/content';

export default function Home() {
  const [lang, setLang] = useState('fa');
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

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenProduct = (productId) => {
    setSelectedProductId(productId);
  };

  const handleCloseProduct = () => {
    setSelectedProductId(null);
  };

  const handleOpenContact = () => {
    handleNavigate('contact');
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
          activeSection={activeSection}
          onNavigate={handleNavigate}
          onOpenProduct={handleOpenProduct}
        />

        <main className="flex-grow">
          <Hero
            lang={lang}
            content={content}
            onSelectProduct={handleOpenProduct}
            onOpenContact={handleOpenContact}
          />

          <Ticker lang={lang} content={content} />

          <AboutUs
            lang={lang}
            content={content}
            onOpenProduct={handleOpenProduct}
          />

          <Standards lang={lang} content={content} />

          <Products
            lang={lang}
            content={content}
            onSelectProduct={handleOpenProduct}
            onOpenContact={handleOpenContact}
          />

          <OemOdm
            lang={lang}
            content={content}
            onOpenContact={handleOpenContact}
          />

          <Strengths lang={lang} content={content} />

          <Faqs
            lang={lang}
            content={content}
            onOpenContact={handleOpenContact}
          />

          <SupportBanner
            lang={lang}
            content={content}
            onOpenContact={handleOpenContact}
          />

          <ContactSection lang={lang} content={content} />
        </main>

        <Footer
          lang={lang}
          content={content}
          onNavigate={handleNavigate}
          onOpenProduct={handleOpenProduct}
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
