'use client'

import React, { useState } from 'react';
import { useLanguage } from '../../../src/contexts/LanguageContext';
import Link from 'next/link';
import Navbar from '../../../src/components/Navbar';
import Footer from '../../../src/components/Footer';
import { siteContent } from '../../../src/data/content';
import { ChevronRight, ChevronLeft, ShieldCheck, Cpu, Battery, Wifi, CreditCard, Printer, CheckCircle2 } from 'lucide-react';

export default function M300Page() {
  const { lang, setLang } = useLanguage();
  const [activeTab, setActiveTab] = useState('specs');

  const content = siteContent[lang];
  const isRtl = lang === 'fa';
  const product = content.products.items.find((p) => p.id === 'm300');

  if (!product) return null;

  // Convert specs object to array
  const specsArray = Object.entries(product.specs).map(([key, value]) => ({
    label: key.charAt(0).toUpperCase() + key.slice(1),
    value: value
  }));

  const handleOpenContact = () => {
    window.location.href = '/contact';
  };

  return (
    <div
      dir={content.dir}
      className={`min-h-screen flex flex-col font-vazir w-full overflow-x-hidden bg-slate-50 ${lang === 'en' ? 'font-en' : ''}`}
    >
      <Navbar
        lang={lang}
        setLang={setLang}
        content={content}
        activeSection="products"
      />

      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-600 mb-6">
            <Link href="/" className="hover:text-sky-600">{content.nav.home}</Link>
            {isRtl ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            <Link href="/products" className="hover:text-sky-600">{content.nav.products}</Link>
            {isRtl ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            <span className="text-slate-900 font-semibold">{product.title}</span>
          </div>

          {/* Product Header */}
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden mb-8">
            <div className="bg-primary text-white p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono font-bold bg-white/20 text-white px-2.5 py-1 rounded-full uppercase">
                  M300
                </span>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black">{product.title}</h1>
              </div>
              <p className="text-slate-200 text-base sm:text-lg">{product.summary}</p>
            </div>

            {/* Product Image & Quick Info */}
            <div className="p-6 sm:p-8 bg-gradient-to-br from-slate-50 to-white">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="w-full lg:w-1/2 bg-white rounded-2xl p-8 shadow-inner flex items-center justify-center border border-slate-200">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-w-full h-auto max-h-96 object-contain filter drop-shadow-xl"
                  />
                </div>
                <div className="w-full lg:w-1/2 space-y-4">
                  <div className="inline-block text-sm font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
                    <ShieldCheck className="w-4 h-4 inline me-1" />
                    PCI PTS 7.x & EMV L1/L2 Certified
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">
                    {isRtl ? 'خلاصه مشخصات' : 'Quick Specifications'}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {specsArray.slice(0, 6).map((spec, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs font-semibold text-slate-500">{spec.label}</div>
                          <div className="text-sm font-bold text-slate-900">{spec.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={handleOpenContact}
                    className="w-full sm:w-auto px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-all shadow-lg"
                  >
                    {isRtl ? 'درخواست قیمت و مشاوره' : 'Request Quote & Consultation'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Navigation */}
          <div className="flex border-b border-slate-200 bg-white rounded-t-2xl shadow-sm overflow-x-auto">
            <button
              onClick={() => setActiveTab('specs')}
              className={`py-4 px-6 text-sm font-bold border-b-2 transition-all whitespace-nowrap ${
                activeTab === 'specs'
                  ? 'border-primary text-primary bg-sky-50'
                  : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50'
              }`}
            >
              {isRtl ? 'مشخصات فنی کامل' : 'Full Specifications'}
            </button>
            <button
              onClick={() => setActiveTab('features')}
              className={`py-4 px-6 text-sm font-bold border-b-2 transition-all whitespace-nowrap ${
                activeTab === 'features'
                  ? 'border-primary text-primary bg-sky-50'
                  : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50'
              }`}
            >
              {isRtl ? 'قابلیت‌ها و ویژگی‌ها' : 'Features & Capabilities'}
            </button>
            <button
              onClick={() => setActiveTab('security')}
              className={`py-4 px-6 text-sm font-bold border-b-2 transition-all whitespace-nowrap ${
                activeTab === 'security'
                  ? 'border-primary text-primary bg-sky-50'
                  : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50'
              }`}
            >
              {isRtl ? 'امنیت و گواهینامه‌ها' : 'Security & Certifications'}
            </button>
          </div>

          {/* Tabs Content */}
          <div className="bg-white rounded-b-2xl shadow-sm p-6 sm:p-8 mb-8">
            {activeTab === 'specs' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {isRtl ? 'مشخصات فنی کامل M300' : 'M300 Complete Technical Specifications'}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {specsArray.map((spec, idx) => (
                    <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                      <div className="text-xs font-semibold text-slate-500 mb-1">{spec.label}</div>
                      <div className="text-base font-bold text-slate-900">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {isRtl ? 'قابلیت‌ها و ویژگی‌های M300' : 'M300 Features & Capabilities'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-sky-50 rounded-xl border border-sky-200">
                      <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-800">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {isRtl ? 'امنیت و گواهینامه‌های M300' : 'M300 Security & Certifications'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-5 bg-emerald-50 rounded-xl border border-emerald-200">
                    <ShieldCheck className="w-8 h-8 text-emerald-600 mb-3" />
                    <div className="text-sm font-bold text-slate-900">PCI PTS 7.x Certified</div>
                  </div>
                  <div className="p-5 bg-emerald-50 rounded-xl border border-emerald-200">
                    <ShieldCheck className="w-8 h-8 text-emerald-600 mb-3" />
                    <div className="text-sm font-bold text-slate-900">EMV L1 & L2 Compliant</div>
                  </div>
                  <div className="p-5 bg-emerald-50 rounded-xl border border-emerald-200">
                    <ShieldCheck className="w-8 h-8 text-emerald-600 mb-3" />
                    <div className="text-sm font-bold text-slate-900">PayPass & payWave</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-3xl p-8 text-center shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-3">
              {isRtl ? 'آماده سفارش M300 هستید؟' : 'Ready to Order M300?'}
            </h3>
            <p className="text-slate-200 mb-6 max-w-2xl mx-auto">
              {isRtl
                ? 'با تیم فروش ما تماس بگیرید تا بهترین پیشنهاد قیمت و مشاوره تخصصی را دریافت کنید.'
                : 'Contact our sales team to receive the best price offer and professional consultation.'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleOpenContact}
                className="px-8 py-3 bg-white text-primary rounded-xl font-bold hover:bg-slate-100 transition-all shadow-lg"
              >
                {isRtl ? 'تماس با ما' : 'Contact Us'}
              </button>
              <Link
                href="/products/m600"
                className="px-8 py-3 bg-white/10 border border-white/20 text-white rounded-xl font-bold hover:bg-white/20 transition-all"
              >
                {isRtl ? 'مشاهده M600' : 'View M600'}
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer lang={lang} content={content} />
    </div>
  );
}
