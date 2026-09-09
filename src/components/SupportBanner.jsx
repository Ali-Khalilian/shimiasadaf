import React from 'react';
import { PhoneCall, Mail, Headphones, Clock, ArrowRight, ArrowLeft } from 'lucide-react';

export default function SupportBanner({ lang, content, onOpenContact }) {
  const isRtl = lang === 'fa';
  const support = content.support;

  return (
    <section className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Images Presentation (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4 relative">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-[4/3]">
                  <img
                    src="/images/callcenter-2.jpg"
                    alt="Customer Support 1"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <div className="p-4 bg-[#004563] text-white rounded-2xl shadow-md flex items-center gap-3">
                  <Clock className="w-8 h-8 text-sky-300 shrink-0" />
                  <div>
                    <div className="text-xs text-sky-200">{isRtl ? 'زمان پاسخگویی' : 'Response Time'}</div>
                    <div className="text-sm font-bold">{isRtl ? 'کمتر از ۲ ساعت' : '< 2 Hours'}</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-md flex items-center gap-3">
                  <Headphones className="w-8 h-8 text-[#004563] shrink-0" />
                  <div>
                    <div className="text-xs text-slate-500">{isRtl ? 'پشتیبانی تخصصی' : 'Dedicated Care'}</div>
                    <div className="text-sm font-bold text-slate-900">{isRtl ? 'تیم مهندسی مستقر' : 'In-House Engineers'}</div>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-[4/3]">
                  <img
                    src="/images/callcenter-4.jpg"
                    alt="Customer Support 2"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text Info (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-[#004563] text-xs font-bold uppercase tracking-wider mb-4">
              <Headphones className="w-3.5 h-3.5" />
              <span>{support.badge}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-4">
              {support.title}{' '}
              <span className="text-[#004563] relative inline-block">
                {support.titleHighlight}
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              {support.desc}
            </p>

            {/* Direct Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <a
                href="mailto:info@shimiasadaf.com"
                className="p-4 bg-white border border-slate-200 rounded-2xl flex items-center gap-3.5 hover:border-[#004563] hover:shadow-md transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#004563] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">{isRtl ? 'ارسال ایمیل مستقیم' : 'Direct Email'}</div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-[#004563]">
                    info@shimiasadaf.com
                  </div>
                </div>
              </a>

              <a
                href="tel:+8613522300616"
                className="p-4 bg-white border border-slate-200 rounded-2xl flex items-center gap-3.5 hover:border-[#004563] hover:shadow-md transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#004563] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">{isRtl ? 'تماس با کارشناس' : 'Technical Hotline'}</div>
                  <div className="text-sm font-bold text-slate-900 font-mono" dir="ltr">
                    +86 13522300616
                  </div>
                </div>
              </a>
            </div>

            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#004563] hover:bg-[#003147] text-white font-bold text-sm sm:text-base shadow-md transition-all active:scale-95"
            >
              <span>{support.btn}</span>
              {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
