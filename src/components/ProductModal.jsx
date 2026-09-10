'use client'

import React, { useState } from 'react';
import { X, ShieldCheck, Cpu, Battery, Wifi, CreditCard, Printer, FileText, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';

export default function ProductModal({ productId, onClose, lang, content, onOpenContact }) {
  const isRtl = lang === 'fa';
  const product = content.products.items.find((p) => p.id === productId) || content.products.items[0];
  const [activeTab, setActiveTab] = useState('specs'); 

  if (!productId) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn overflow-hidden">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col border border-slate-200">
        {/* Modal Header */}
        <div className="bg-[#004563] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold bg-white/20 text-white px-2.5 py-1 rounded-full uppercase">
              {product.id.toUpperCase()}
            </span>
            <h3 className="text-xl sm:text-2xl font-black">{product.title}</h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 overflow-x-auto">
          <button
            onClick={() => setActiveTab('specs')}
            className={`py-3 px-3 sm:px-4 text-xs sm:text-sm font-bold border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'specs'
                ? 'border-[#004563] text-[#004563]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            {isRtl ? 'مشخصات فنی' : 'Specifications'}
          </button>
          <button
            onClick={() => setActiveTab('features')}
            className={`py-3 px-3 sm:px-4 text-xs sm:text-sm font-bold border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'features'
                ? 'border-[#004563] text-[#004563]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            {isRtl ? 'ویژگی‌ها' : 'Capabilities'}
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`py-3 px-3 sm:px-4 text-xs sm:text-sm font-bold border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'security'
                ? 'border-[#004563] text-[#004563]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            {isRtl ? 'امنیت' : 'Security'}
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Top Device Banner */}
          <div className="bg-gradient-to-r from-slate-100 to-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col sm:flex-row items-center gap-6">
            <div className="w-40 h-40 shrink-0 bg-white rounded-xl p-3 shadow-inner flex items-center justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-full max-w-full object-contain filter drop-shadow"
              />
            </div>
            <div>
              <div className="inline-block text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full mb-2">
                PCI PTS 7.x & EMV Certified
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                {product.title}
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {product.summary}
              </p>
            </div>
          </div>

          {/* TAB 1: Specifications Table */}
          {activeTab === 'specs' && (
            <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
              <div className="bg-slate-100 px-4 py-3 font-bold text-xs uppercase tracking-wider text-slate-700 border-b border-slate-200">
                {isRtl ? 'جدول مشخصات سخت‌افزاری' : 'Hardware Specifications Matrix'}
              </div>
              <div className="divide-y divide-slate-100 text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-3 p-3 bg-white">
                  <span className="font-semibold text-slate-500">{isRtl ? 'صفحه نمایش' : 'Display'}</span>
                  <span className="sm:col-span-2 text-slate-900 font-medium">{product.specs.display}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 p-3 bg-slate-50/50">
                  <span className="font-semibold text-slate-500">{isRtl ? 'سیستم‌عامل' : 'Operating System'}</span>
                  <span className="sm:col-span-2 text-slate-900 font-medium">{product.specs.os}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 p-3 bg-white">
                  <span className="font-semibold text-slate-500">{isRtl ? 'پردازنده' : 'Processor'}</span>
                  <span className="sm:col-span-2 text-slate-900 font-medium">{product.specs.processor}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 p-3 bg-slate-50/50">
                  <span className="font-semibold text-slate-500">{isRtl ? 'حافظه' : 'Memory'}</span>
                  <span className="sm:col-span-2 text-slate-900 font-medium">{product.specs.memory}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 p-3 bg-white">
                  <span className="font-semibold text-slate-500">{isRtl ? 'باتری' : 'Battery'}</span>
                  <span className="sm:col-span-2 text-slate-900 font-medium">{product.specs.battery}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 p-3 bg-slate-50/50">
                  <span className="font-semibold text-slate-500">{isRtl ? 'ارتباطات و شبکه' : 'Connectivity'}</span>
                  <span className="sm:col-span-2 text-slate-900 font-medium">{product.specs.connectivity}</span>
                </div>
                {product.specs.keyboard && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 p-3 bg-white">
                    <span className="font-semibold text-slate-500">{isRtl ? 'فناوری کیبورد' : 'Keypad'}</span>
                    <span className="sm:col-span-2 text-slate-900 font-medium">{product.specs.keyboard}</span>
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-3 p-3 bg-slate-50/50">
                  <span className="font-semibold text-slate-500">{isRtl ? 'اسلات سیم‌کارت و سام' : 'SIM / SAM'}</span>
                  <span className="sm:col-span-2 text-slate-900 font-medium">{product.specs.simSam}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 p-3 bg-white">
                  <span className="font-semibold text-slate-500">{isRtl ? 'ابعاد و وزن' : 'Dimensions & Weight'}</span>
                  <span className="sm:col-span-2 text-slate-900 font-medium">{product.specs.dimensions}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 p-3 bg-slate-50/50">
                  <span className="font-semibold text-slate-500">{isRtl ? 'چاپگر حرارتی' : 'Thermal Printer'}</span>
                  <span className="sm:col-span-2 text-slate-900 font-medium">{product.specs.printer}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 p-3 bg-white">
                  <span className="font-semibold text-slate-500">{isRtl ? 'کارت‌خوان‌ها' : 'Card Readers'}</span>
                  <span className="sm:col-span-2 text-slate-900 font-medium">{product.specs.cardReaders}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 p-3 bg-slate-50/50">
                  <span className="font-semibold text-slate-500">{isRtl ? 'گواهینامه‌ها' : 'Certifications'}</span>
                  <span className="sm:col-span-2 text-[#004563] font-bold">{product.specs.certifications}</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Features */}
          {activeTab === 'features' && (
            <div className="space-y-4">
              <h5 className="font-bold text-slate-800 text-sm">
                {isRtl ? 'مزیت‌ها و ویژگی‌های عملکردی:' : 'Functional Benefits:'}
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#004563] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700 leading-normal">{feat}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: Security */}
          {activeTab === 'security' && (
            <div className="space-y-4">
              <div className="p-4 bg-sky-50 border border-sky-200 rounded-xl">
                <h5 className="font-bold text-[#004563] text-sm mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5" />
                  <span>{isRtl ? 'امنیت تراکنش و انطباق سخت‌افزاری' : 'Hardware & Transactional Integrity'}</span>
                </h5>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {isRtl
                    ? 'دستگاه مجهز به چیپ‌ست اختصاصی ضد دستکاری (Active Tamper Proof) است که هرگونه تلاش برای نفوذ فیزیکی یا نرم‌افزاری را شناسایی کرده و حافظه کلیدهای رمزنگاری را به‌صورت آنی پاکسازی می‌نماید.'
                    : 'The terminal contains an active tamper-evident security core that triggers instantaneous cryptographic key erasure upon detecting any physical intrusion attempts.'}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="font-bold text-slate-800">Remote Key Injection (RKI):</span>
                  <p className="text-slate-600 mt-1">
                    {isRtl ? 'پشتیبانی از تزریق از راه دور کلیدهای پذیرنده' : 'Supported for secure remote fleet management.'}
                  </p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="font-bold text-slate-800">Key Loading Device (KLD):</span>
                  <p className="text-slate-600 mt-1">
                    {isRtl ? 'پشتیبانی از بارگذاری محلی تحت استانداردهای شاپرک' : 'Supported for high-security local lab provisioning.'}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500 flex items-center gap-1.5">
            <FileText className="w-4 h-4 text-[#004563]" />
            <span>
              {isRtl
                ? 'گارانتی ۱۸ ماهه رسمی و پشتیبانی سراسری قطعات'
                : '18 Months Official Warranty & Guaranteed Spare Parts'}
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-sm font-semibold hover:bg-slate-100 transition-colors"
            >
              {isRtl ? 'بستن' : 'Close'}
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="flex-1 sm:flex-initial px-6 py-2.5 rounded-xl bg-[#004563] hover:bg-[#003147] text-white text-sm font-bold shadow-md transition-all active:scale-95"
            >
              {isRtl ? 'ثبت سفارش / استعلام قیمت' : 'Inquire for Bulk Orders'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
