'use client'

import React from 'react';
import { useLanguage } from '../../src/contexts/LanguageContext';
import Navbar from '../../src/components/Navbar';
import Standards from '../../src/components/Standards';
import Footer from '../../src/components/Footer';
import { siteContent } from '../../src/data/content';

export default function StandardsPage() {
  const { lang, setLang } = useLanguage();

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
        activeSection="standards"
      />

      <main className="flex-grow pt-24">
        <Standards lang={lang} content={content} />
      </main>

      <Footer
        lang={lang}
        content={content}
      />
    </div>
  );
}
