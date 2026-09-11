'use client'

import React, { useState } from 'react';
import { Mail, Phone, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function ContactSection({ lang, content }) {
  const isRtl = lang === 'fa';
  const c = content.contact;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: '',
    message: ''
  });

  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert(isRtl ? 'لطفاً فیلدهای ضروری را بکمیل نمایید.' : 'Please fill in required fields.');
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      // Reset form after 4 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', product: '', message: '' });
        setStatus('idle');
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-white text-slate-900 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>{c.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            {c.title}{' '}
            <span className="text-primary relative inline-block">
              {c.titleHighlight}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {c.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email Card */}
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl flex items-start gap-4 shadow-xs hover:border-primary transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 shadow-sm">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-500 mb-1">
                  {c.emailLabel}
                </div>
                <a
                  href="mailto:info@shimiasadaf.com"
                  className="text-base sm:text-lg font-bold text-primary hover:underline"
                >
                  info@shimiasadaf.com
                </a>
                <p className="text-xs text-slate-500 mt-1">
                  {isRtl ? 'پاسخگویی به درخواست‌های خرید سازمانی و استعلام قیمت' : 'Inquiries for enterprise orders & price quotes'}
                </p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl flex items-start gap-4 shadow-xs hover:border-primary transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 shadow-sm">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-500 mb-1">
                  {c.phoneLabel}
                </div>
                <p
                  className="text-base sm:text-lg font-bold text-primary hover:underline font-mono"
                  dir="ltr"
                >
                  +031 31234567
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  {isRtl ? 'پشتیبانی فنی و هماهنگی خط تولید بین‌المللی' : 'Technical support & international line coordination'}
                </p>
              </div>
            </div>

            {/* Hours Card */}
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl flex items-start gap-4 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-slate-200 text-primary flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-500 mb-1">
                  {c.hoursLabel}
                </div>
                <div className="text-sm font-bold text-slate-900">
                  {c.hoursVal}
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  {isRtl ? 'پشتیبانی آنلاین و سیستم تیکتینگ ۲۴/۷ فعال است.' : 'Ticketing and emergency support available 24/7.'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-lg">
              {status === 'success' ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">
                    {isRtl ? 'پیام شما ثبت شد' : 'Message Sent Successfully'}
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    {c.form.success}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        {c.form.name} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={isRtl ? 'مثال: علی مرادی' : 'e.g., John Doe'}
                        className="w-full py-2.5 px-3.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        {c.form.phone}
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={isRtl ? '۰۹۱۲۳۴۵۶۷۸۹' : '+98 912...'}
                        className="w-full py-2.5 px-3.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        {c.form.email} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="info@example.com"
                        className="w-full py-2.5 px-3.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        {c.form.productInterest}
                      </label>
                      <select
                        value={formData.product}
                        onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                        className="w-full py-2.5 px-3.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      >
                        <option value="">{c.form.selectProduct}</option>
                        {c.form.options.map((opt, idx) => (
                          <option key={idx} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      {c.form.message} *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={isRtl ? 'توضیحات مورد نظر، تعداد درخواست یا نوع همکاری...' : 'Please specify your requirements or questions...'}
                      className="w-full py-2.5 px-3.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-3.5 px-6 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold text-sm shadow-md transition-all active:scale-98 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{status === 'submitting' ? c.form.submitting : c.form.submit}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
