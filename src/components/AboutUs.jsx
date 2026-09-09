import React from 'react';
import { CheckCircle2, Award, Shield, Cpu, RefreshCw } from 'lucide-react';

export default function AboutUs({ lang, content, onOpenProduct }) {
  const isRtl = lang === 'fa';
  const about = content.about;

  return (
    <section id="about" className="py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase & Specs Graphic (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Decorative background shape */}
              <div className="absolute -inset-4 bg-linear-to-tr from-primary/10 to-transparent rounded-3xl -rotate-2"></div>

              {/* Main Card */}
              <div className="relative bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-xl overflow-hidden">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      {isRtl ? 'مهندسی پیشرفته پرداخت' : 'Advanced Payment Engineering'}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-primary bg-sky-100 px-2.5 py-1 rounded-md font-semibold">
                    PCI PTS 7.x
                  </span>
                </div>

                {/* Device Visual Frame */}
                <div className="relative h-64 sm:h-72 rounded-xl bg-linear-to-b from-primary/5 to-slate-100 flex items-center justify-center p-4 mb-6">
                  <img
                    src="/images/m600-linux-new-2.jpg"
                    alt="POS Terminal Engineering"
                    className="max-h-full max-w-full object-contain filter drop-shadow-lg"
                  />
                  <div className="absolute bottom-3 inset-s-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200 text-[11px] font-semibold text-slate-700 shadow-sm flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-primary" />
                    <span>EMV L1 & L2 Certified</span>
                  </div>
                </div>

                {/* Stats 2x2 Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {about.stats.map((st, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs"
                    >
                      <div className="text-xl sm:text-2xl font-black text-primary tracking-tight">
                        {st.num}
                      </div>
                      <div className="text-xs text-secondary font-medium mt-0.5">
                        {st.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Text & Key Advantages (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-primary text-xs font-bold tracking-wide uppercase mb-4">
              <Shield className="w-3.5 h-3.5" />
              <span>{about.badge}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-snug tracking-tight mb-5">
              {about.title}{' '}
              <span className="text-primary relative inline-block">
                {about.titleHighlight}
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              {about.desc}
            </p>

            {/* Key Advantages List */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 mb-8">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-primary" />
                <span>{about.keyAdvantagesTitle}</span>
              </h3>

              <div className="space-y-3.5">
                {about.advantages.map((adv, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-sm sm:text-base text-slate-700 font-medium leading-normal">
                      {adv}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenProduct('m300')}
                className="px-5 py-2.5 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary transition-all shadow-md active:scale-95"
              >
                {isRtl ? 'بررسی پایانه M300' : 'Explore M300'}
              </button>
              <button
                onClick={() => onOpenProduct('m600')}
                className="px-5 py-2.5 rounded-xl bg-slate-100 border border-slate-300 text-slate-800 font-bold text-sm hover:bg-slate-200 transition-all active:scale-95"
              >
                {isRtl ? 'بررسی پایانه M600' : 'Explore M600'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
