'use client'

import React, { useState } from 'react';
import { useLanguage } from '../../src/contexts/LanguageContext';
import Navbar from '../../src/components/Navbar';
import AboutUs from '../../src/components/AboutUs';
import Footer from '../../src/components/Footer';
import { siteContent } from '../../src/data/content';

export default function AboutPage() {
  const { lang, setLang } = useLanguage();
  const [selectedProductId, setSelectedProductId] = useState(null);

  const content = siteContent[lang];

  return (
    <div
      dir={content.dir}
      className={`min-h-screen flex flex-col font-vazir w-full overflow-x-hidden ${lang === 'en' ? 'font-en' : ''}`}
    >
      <Navbar
        lang={lang}
        setLang={setLang}
        content={content}
        activeSection="about"
      />

      <main className="flex-grow pt-24">
        <AboutUs
          lang={lang}
          content={content}
        />
      </main>

      <Footer
        lang={lang}
        content={content}
      />
    </div>
  );
}
