'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { Cpu, Battery, Wifi, CreditCard, Printer, Check, ArrowRight, ArrowLeft, Shield, SlidersHorizontal, Info } from 'lucide-react';

export default function Products({ lang, content, onOpenContact }) {
  const isRtl = lang === 'fa';
  const products = content.products;
  const [selectedVariant, setSelectedVariant] = useState({
    m300: 'rtos',
    m600: 'android'
  });

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

        {/* 2-Column Product Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {products.items.map((prod) => (
            <div
              key={prod.id}
              className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                      {prod.tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
                      {prod.title}
                    </h3>
                  </div>

                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                    PCI PTS 7.x
                  </span>
                </div>

                {/* Product Image Stage */}
                <div className="relative h-64 sm:h-72 rounded-2xl bg-gradient-to-b from-slate-100 to-slate-50 flex items-center justify-center p-6 mb-6 overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(#004563_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
                  <img
                    src={prod.image}
                    alt={prod.title}
                    className="max-h-full max-w-full object-contain filter drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Summary */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  {prod.summary}
                </p>

                {/* OS Variant Switcher */}
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 mb-6">
                  <div className="text-xs font-semibold text-slate-700 mb-2 flex items-center justify-between">
                    <span>{products.selectOs}</span>
                    <span className="text-primary font-bold uppercase">
                      {selectedVariant[prod.id]}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {prod.id === 'm300' ? (
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
                      {prod.specs.display}
                    </div>
                  </div>

                  <div className="p-2 sm:p-3 bg-slate-50 rounded-xl border border-slate-200/70 min-w-0">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                      <Battery className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span className="truncate">{isRtl ? 'باتری' : 'Battery'}</span>
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-800 truncate">
                      {prod.specs.battery}
                    </div>
                  </div>

                  <div className="p-2 sm:p-3 bg-slate-50 rounded-xl border border-slate-200/70 min-w-0">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                      <Wifi className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span className="truncate">{isRtl ? 'ارتباطات' : 'Connectivity'}</span>
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-800 truncate">
                      {prod.specs.connectivity}
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
                  {prod.features.map((feat, idx) => (
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
                  href={`/products/${prod.id}`}
                  id={`btn-details-${prod.id}`}
                  className="flex-1 py-3 px-4 rounded-xl bg-primary text-white font-bold text-xs sm:text-sm hover:bg-[#003147] transition-all shadow-md active:scale-98 flex items-center justify-center gap-2"
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
          ))}
        </div>
      </div>
    </section>
  );
}
