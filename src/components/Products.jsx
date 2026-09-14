'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cpu, Battery, Wifi, CreditCard, Printer, Check, ArrowRight, ArrowLeft, Shield, SlidersHorizontal, Info, Loader2 } from 'lucide-react';
import { api, getImageURL } from '../lib/api';

export default function Products({ lang, content, onOpenContact }) {
  const isRtl = lang === 'fa';
  const products = content.products;
  const [selectedVariant, setSelectedVariant] = useState({
    m300: 'rtos',
    m600: 'android'
  });
  const [apiProducts, setApiProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // دریافت محصولات از API
  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const data = await api.getActiveProducts();
        setApiProducts(data);
        setError(null);
      } catch (err) {
        console.error('خطا در دریافت محصولات:', err);
        setError(err.message);
        // در صورت خطا، از داده‌های استاتیک استفاده می‌کنیم
        setApiProducts(products.items);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <section id="products" className="py-20 bg-slate-50 text-slate-900 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <Shield className="w-3.5 h-3.5" />
            <span>{products.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            {products.title}{' '}
            <span className="text-primary relative inline-block">
              {products.titleHighlight}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {products.subtitle}
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
            <span className="mr-3 text-slate-600">{isRtl ? 'در حال بارگذاری محصولات...' : 'Loading products...'}</span>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 text-center">
            <p className="text-amber-800 text-sm">
              {isRtl ? '⚠️ در حال نمایش محصولات از حافظه موقت' : '⚠️ Showing cached products'}
            </p>
          </div>
        )}

        {/* 2-Column Product Cards */}
        {!loading && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {apiProducts.map((prod) => {
              // استفاده از داده‌های API یا fallback به داده‌های استاتیک
              const staticProduct = products.items?.find(p => p.id === prod.id);
              const displayData = {
                id: prod.id,
                title: lang === 'fa' ? (prod.title_fa || prod.title) : (prod.title_en || prod.enTitle || prod.title),
                enTitle: prod.title_en || prod.enTitle,
                tag: prod.tag,
                // اگر API تصویر نداره، از استاتیک استفاده کن
                image: getImageURL(prod.image) || staticProduct?.image || `/images/${prod.id}-rtos-1.jpg`,
                summary: lang === 'fa' ? (prod.summary_fa || prod.summary) : (prod.summary_en || prod.summary),
                specs: {
                  display: prod.display || prod.specs?.display || '',
                  battery: prod.battery || prod.specs?.battery || '',
                  connectivity: prod.connectivity || prod.specs?.connectivity || '',
                  printer: prod.printer || prod.specs?.printer || '58mm',
                },
                features: prod.features?.map(f => lang === 'fa' ? f.feature_fa : f.feature_en) || prod.features || []
              };

              return (
                <div
                  key={displayData.id}
                  className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                      {displayData.tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
                      {displayData.title}
                    </h3>
                  </div>

                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                    PCI PTS 7.x
                  </span>
                </div>

                {/* Product Image Stage */}
                <div className="relative h-64 sm:h-72 rounded-2xl bg-gradient-to-b from-slate-100 to-slate-50 flex items-center justify-center p-6 mb-6 overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(theme(colors.primary.DEFAULT)_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
                  <img
                    src={displayData.image}
                    alt={displayData.title}
                    className="max-h-full max-w-full object-contain filter drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Summary */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  {displayData.summary}
                </p>

                {/* OS Variant Switcher */}
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 mb-6">
                  <div className="text-xs font-semibold text-slate-700 mb-2 flex items-center justify-between">
                    <span>{products.selectOs}</span>
                    <span className="text-primary font-bold uppercase">
                      {selectedVariant[displayData.id]}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {displayData.id === 'm300' ? (
                      <>
                        <button
                          onClick={() => setSelectedVariant({ ...selectedVariant, m300: 'rtos' })}
                          className={`py-1.5 px-3 rounded-lg text-xs font-bold transition-all ${
                            selectedVariant.m300 === 'rtos'
                              ? 'bg-primary text-white shadow-sm'
                              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          M300 (RTOS)
                        </button>
                        <button
                          onClick={() => setSelectedVariant({ ...selectedVariant, m300: 'linux' })}
                          className={`py-1.5 px-3 rounded-lg text-xs font-bold transition-all ${
                            selectedVariant.m300 === 'linux'
                              ? 'bg-primary text-white shadow-sm'
                              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          M300 (Linux)
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => setSelectedVariant({ ...selectedVariant, m600: 'android' })}
                          className={`py-1.5 px-3 rounded-lg text-xs font-bold transition-all ${
                            selectedVariant.m600 === 'android'
                              ? 'bg-primary text-white shadow-sm'
                              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          M600 (Android)
                        </button>
                        <button
                          onClick={() => setSelectedVariant({ ...selectedVariant, m600: 'linux' })}
                          className={`py-1.5 px-3 rounded-lg text-xs font-bold transition-all ${
                            selectedVariant.m600 === 'linux'
                              ? 'bg-primary text-white shadow-sm'
                              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          M600 (Linux)
                        </button>
                      </>
                    )}
                  </div>
                </div>

                {/* Key Spec Grid */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-6">
                  <div className="p-2 sm:p-3 bg-slate-50 rounded-xl border border-slate-200/70 min-w-0">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                      <SlidersHorizontal className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span className="truncate">{isRtl ? 'نمایشگر' : 'Display'}</span>
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-800 truncate">
                      {displayData.specs.display}
                    </div>
                  </div>

                  <div className="p-2 sm:p-3 bg-slate-50 rounded-xl border border-slate-200/70 min-w-0">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                      <Battery className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span className="truncate">{isRtl ? 'باتری' : 'Battery'}</span>
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-800 truncate">
                      {displayData.specs.battery}
                    </div>
                  </div>

                  <div className="p-2 sm:p-3 bg-slate-50 rounded-xl border border-slate-200/70 min-w-0">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                      <Wifi className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span className="truncate">{isRtl ? 'ارتباطات' : 'Connectivity'}</span>
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-800 truncate">
                      {displayData.specs.connectivity}
                    </div>
                  </div>

                  <div className="p-2 sm:p-3 bg-slate-50 rounded-xl border border-slate-200/70 min-w-0">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                      <Printer className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span className="truncate">{isRtl ? 'چاپگر' : 'Printer'}</span>
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-800 truncate">
                      58mm
                    </div>
                  </div>
                </div>

                {/* Features Bullets */}
                <div className="space-y-2 mb-8">
                  {displayData.features.slice(0, 4).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-sky-100 text-primary flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <Link
                  href={`/products/${displayData.id}`}
                  id={`btn-details-${displayData.id}`}
                  className="flex-1 py-3 px-4 rounded-xl bg-primary text-white font-bold text-xs sm:text-sm hover:bg-primary-dark transition-all shadow-md active:scale-98 flex items-center justify-center gap-2"
                >
                  <span>{products.viewDetails}</span>
                  {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </Link>

                <button
                  onClick={onOpenContact}
                  className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm transition-all active:scale-98"
                >
                  {isRtl ? 'درخواست دمو' : 'Inquire'}
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )}
      </div>
    </section>
  );
}
