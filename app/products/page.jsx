'use client'

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '../../src/components/Navbar';
import Products from '../../src/components/Products';
import ProductModal from '../../src/components/ProductModal';
import Footer from '../../src/components/Footer';
import { siteContent } from '../../src/data/content';

function ProductsContent() {
  const [lang, setLang] = useState('fa');
  const [selectedProductId, setSelectedProductId] = useState(null);
  const searchParams = useSearchParams();

  const content = siteContent[lang];

  useEffect(() => {
    const product = searchParams.get('product');
    if (product && (product === 'm300' || product === 'm600')) {
      setSelectedProductId(product);
    }
  }, [searchParams]);

  const handleOpenProduct = (productId) => {
    setSelectedProductId(productId);
  };

  const handleCloseProduct = () => {
    setSelectedProductId(null);
  };

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
        activeSection="products"
      />

      <main className="flex-grow pt-24">
        <Products
          lang={lang}
          content={content}
          onSelectProduct={handleOpenProduct}
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
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="text-white">Loading...</div>
    </div>}>
      <ProductsContent />
    </Suspense>
  );
}
