'use client'

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Search, MessageSquare } from 'lucide-react';

export default function Faqs({ lang, content, onOpenContact }) {
  const isRtl = lang === 'fa';
  const faqs = content.faqs;
  const [openId, setOpenId] = useState('q1');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaqs = faqs.items.filter((item) => {
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase();
    return item.q.toLowerCase().includes(term) || item.a.toLowerCase().includes(term);
  });

  const toggleItem = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-20 bg-white text-slate-900 border-b border-slate-200 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left / Accordion (7 cols) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-primary text-xs font-bold uppercase tracking-wider mb-4">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{faqs.badge}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-4">
              {faqs.title}{' '}
              <span className="text-primary relative inline-block">
                {faqs.titleHighlight}
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
              {faqs.subtitle}
            </p>

            {/* Quick Search */}
            <div className="relative mb-8">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={isRtl ? 'جستجو در سوالات و پاسخ‌ها...' : 'Search questions & answers...'}
                className="w-full py-3 px-4 ps-11 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary text-sm text-slate-900 transition-all shadow-xs"
              />
              <Search className={`w-4 h-4 text-slate-400 absolute top-3.5 ${isRtl ? 'right-4' : 'left-4'}`} />
            </div>

            {/* Accordion List */}
            <div className="space-y-3">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? 'border-primary/30 bg-sky-50/40 shadow-sm'
                        : 'border-slate-200 bg-slate-50/60 hover:bg-slate-50'
                    }`}
                  >
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="w-full text-start p-4 sm:p-5 flex items-center justify-between gap-4 focus:outline-none"
                    >
                      <span className="font-bold text-sm sm:text-base text-slate-900 flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-slate-200 text-primary flex items-center justify-center text-xs font-mono shrink-0">
                          {idx + 1}
                        </span>
                        <span>{faq.q}</span>
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-primary' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-200/50">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}

              {filteredFaqs.length === 0 && (
                <div className="text-center py-8 text-slate-500 text-sm">
                  {isRtl ? 'هیچ سوالی با این عبارت یافت نشد.' : 'No matching questions found.'}
                </div>
              )}
            </div>
          </div>

          {/* Right / Visual Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-lg overflow-hidden">
              <div className="rounded-2xl overflow-hidden mb-6 h-64 bg-slate-200">
                <img
                  src="/images/miracle-faqs.jpg"
                  alt="Customer Support"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>

              <h4 className="text-xl font-black text-slate-900 mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                <span>{isRtl ? 'سوال دیگری دارید؟' : 'Have a Specific Question?'}</span>
              </h4>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {isRtl
                  ? 'کارشناسان فنی و مهندسی شیمیا صدف آماده پاسخگویی به هرگونه ابهام درباره انطباق شاپرک، استانداردها و خرید عمده هستند.'
                  : 'Our technical support engineers are available to clarify regulatory compliance, hardware adaptations, and bulk quotations.'}
              </p>

              <button
                onClick={onOpenContact}
                className="w-full py-3 px-4 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary-dark transition-all shadow-md active:scale-98"
              >
                {isRtl ? 'ارسال سوال یا پیام به تیم پشتیبانی' : 'Contact Support Directly'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
