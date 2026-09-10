'use client'

import React from 'react';
import { useLanguage } from '../../src/contexts/LanguageContext';
import Navbar from '../../src/components/Navbar';
import Faqs from '../../src/components/Faqs';
import Footer from '../../src/components/Footer';
import { siteContent } from '../../src/data/content';

export default function FaqsPage() {
  const { lang, setLang } = useLanguage();

  const content = siteContent[lang];

  const handleOpenContact = () => {
    window.location.href = '/contact';
  };

  return (
    <div
      dir={content.dir}
      className={`min-h-screen flex flex-col font-vazir w-full overflow-x-hidden ${lang === 'en' ? 'font-en' : ''}`}
    >
      <Navbar
        lang={lang}
        setLang={setLang}
        content={content}
        activeSection="faqs"
      />

      <main className="flex-grow pt-24">
        <Faqs
          lang={lang}
          content={content}
          onOpenContact={handleOpenContact}
        />
      </main>

      <Footer
        lang={lang}
        content={content}
      />
    </div>
  );
}
